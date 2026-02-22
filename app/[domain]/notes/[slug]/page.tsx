import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { getNoteContent } from "@/lib/mdx";
import {
    getDomainBySlug,
    getNotesByDomain,
    getTopicsByDomain,
    getNoteBySlug,
    getAllDomainSlugs,
} from "@/lib/data";
import NotesSidebar from "@/components/NotesSidebar";
import NotesTOC from "@/components/NotesTOC";
import Breadcrumbs from "@/components/Breadcrumbs";
import GithubEditLink from "@/components/GithubEditLink";
import PageTransition from "@/components/PageTransition";
import type { NoteSidebarItem } from "@/types";

interface PageProps {
    params: Promise<{
        domain: string;
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const params: { domain: string; slug: string }[] = [];
    const domainSlugs = getAllDomainSlugs();

    domainSlugs.forEach((domainSlug) => {
        const notes = getNotesByDomain(domainSlug);
        notes.forEach((note) => {
            params.push({
                domain: domainSlug,
                slug: note.slug,
            });
        });
    });

    return params;
}

export async function generateMetadata({ params }: PageProps) {
    const { domain, slug } = await params;
    const note = getNoteBySlug(domain, slug);

    if (!note) return { title: "Not Found" };

    return {
        title: `${note.title} | BrokenN Shell Docs`,
        description: note.description,
    };
}

export default async function NotePage({ params }: PageProps) {
    const { domain: domainSlug, slug: noteSlug } = await params;

    const domainData = getDomainBySlug(domainSlug);
    const noteMeta = getNoteBySlug(domainSlug, noteSlug);
    const mdxData = await getNoteContent(domainSlug, noteSlug);

    if (!domainData || !noteMeta || !mdxData) {
        notFound();
    }

    // Build sidebar tree
    const rawNotes = getNotesByDomain(domainSlug);
    const topics = getTopicsByDomain(domainSlug);
    const sidebarItems: NoteSidebarItem[] = topics.map((topic) => ({
        topic,
        notes: rawNotes
            .filter((n) => n.topicSlug === topic.slug)
            .sort((a, b) => a.order - b.order),
    }));

    return (
        <PageTransition>
            <div className="container-docs">
                <div className="flex flex-col lg:flex-row min-h-screen">
                    <NotesSidebar domainSlug={domainSlug} items={sidebarItems} />

                    <main className="flex-1 min-w-0 py-8 lg:px-8 bg-bg-primary">
                        <Breadcrumbs domain={domainData} note={noteMeta} />

                        <article className="prose-docs">
                            <MDXRemote source={mdxData.content} components={mdxComponents} />
                        </article>

                        <GithubEditLink domainSlug={domainSlug} noteSlug={noteSlug} />
                    </main>

                    <NotesTOC headings={mdxData.headings} />
                </div>
            </div>
        </PageTransition>
    );
}
