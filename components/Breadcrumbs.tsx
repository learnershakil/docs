import Link from "next/link";
import type { Domain, NoteMetadata } from "@/types";

interface BreadcrumbsProps {
    domain: Domain;
    note: NoteMetadata;
    lang: string;
}

export default function Breadcrumbs({ domain, note, lang }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-text-tertiary">
                <li>
                    <Link
                        href={`/${lang}`}
                        className="hover:text-text-primary transition-colors"
                    >
                        {lang === "hi" ? "Mukhya (Home)" : "Home"}
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <Link
                        href={`/${lang}/${domain.slug}`}
                        className="hover:text-text-primary transition-colors"
                    >
                        {domain.title}
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="text-text-secondary" aria-current="page">
                        {note.title}
                    </span>
                </li>
            </ol>
        </nav>
    );
}
