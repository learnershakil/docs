import Link from "next/link";
import { GITHUB_CONTENT_BASE } from "@/lib/constants";

interface GithubEditLinkProps {
    domainSlug: string;
    noteSlug: string;
}

export default function GithubEditLink({
    domainSlug,
    noteSlug,
}: GithubEditLinkProps) {
    const editUrl = `${GITHUB_CONTENT_BASE}/${domainSlug}/${noteSlug}.mdx`;

    return (
        <div className="mt-16 pt-8 border-t border-border-secondary flex items-center justify-between">
            <p className="text-sm text-text-tertiary">
                Caught a mistake or want to improve this note?
            </p>
            <a
                href={editUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors bg-bg-secondary px-4 py-2 rounded-lg border border-border-secondary hover:border-border-primary"
            >
                <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Edit this page on GitHub
            </a>
        </div>
    );
}
