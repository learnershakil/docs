"use client";

import { useEffect, useState } from "react";

interface TOCHeading {
    id: string;
    title: string;
    level: number;
}

interface NotesTOCProps {
    headings: TOCHeading[];
}

export default function NotesTOC({ headings }: NotesTOCProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -80% 0px" }
        );

        headings.forEach((heading) => {
            const el = document.getElementById(heading.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <aside className="hidden xl:block w-64 shrink-0 py-8 pl-8">
            <div className="sticky top-28">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-4">
                    On this page
                </h4>
                <ul className="space-y-2.5 text-sm">
                    {headings.map((heading) => {
                        const isActive = activeId === heading.id;

                        return (
                            <li
                                key={heading.id}
                                style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
                            >
                                <a
                                    href={`#${heading.id}`}
                                    className={`block transition-colors ${isActive
                                            ? "text-accent-primary font-medium"
                                            : "text-text-tertiary hover:text-text-secondary"
                                        }`}
                                >
                                    {heading.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}
