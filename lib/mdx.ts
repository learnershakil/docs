import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getReadingTime, extractHeadings } from "./utils";

const contentDirectory = path.join(process.cwd(), "content");

export interface MDXNote {
    content: string;
    frontmatter: Record<string, string>;
    readingTime: number;
    headings: { id: string; title: string; level: number }[];
}

export async function getNoteContent(
    domainSlug: string,
    noteSlug: string
): Promise<MDXNote | null> {
    const fullPath = path.join(contentDirectory, domainSlug, `${noteSlug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        content,
        frontmatter: data,
        readingTime: getReadingTime(content),
        headings: extractHeadings(content),
    };
}
