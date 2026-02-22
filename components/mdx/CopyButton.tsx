"use client";

import { useState } from "react";

interface CopyButtonProps {
    code: string;
}

export default function CopyButton({ code }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy code: ", err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute right-3 top-3 p-1.5 rounded-md text-text-tertiary bg-bg-tertiary/50 border border-border-secondary hover:text-text-primary hover:bg-bg-tertiary transition-colors z-20"
            aria-label="Copy code"
            title="Copy code"
        >
            {copied ? (
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
            )}
        </button>
    );
}
