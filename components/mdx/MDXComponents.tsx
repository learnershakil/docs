import Link from "next/link";
import CodeBlock from "./CodeBlock";
import Callout from "./Callout";
import { slugify } from "@/lib/utils";

export const mdxComponents = {
    // Custom components
    Callout,

    // Override standard HTML elements
    h1: (props: any) => (
        <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4 tracking-tight" {...props} />
    ),
    h2: (props: any) => {
        const id = typeof props.children === "string" ? slugify(props.children) : undefined;
        return (
            <h2
                id={id}
                className="text-2xl font-semibold mt-10 mb-4 tracking-tight scroll-mt-24 group relative"
                {...props}
            >
                {props.children}
                <a
                    href={`#${id}`}
                    className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-text-tertiary hover:text-accent-primary transition-opacity"
                    aria-hidden="true"
                >
                    #
                </a>
            </h2>
        );
    },
    h3: (props: any) => {
        const id = typeof props.children === "string" ? slugify(props.children) : undefined;
        return (
            <h3
                id={id}
                className="text-xl font-medium mt-8 mb-3 scroll-mt-24"
                {...props}
            />
        );
    },
    p: (props: any) => (
        <p className="leading-relaxed text-text-secondary mb-5" {...props} />
    ),
    a: ({ href, ...props }: any) => {
        const isExternal = href?.startsWith("http");
        if (isExternal) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-primary underline underline-offset-4 decoration-accent-primary/30 hover:decoration-accent-primary transition-all"
                    {...props}
                />
            );
        }
        return (
            <Link
                href={href}
                className="text-accent-primary underline underline-offset-4 decoration-accent-primary/30 hover:decoration-accent-primary transition-all"
                {...props}
            />
        );
    },
    ul: (props: any) => (
        <ul className="list-disc leading-relaxed pl-5 mb-5 space-y-2 text-text-secondary marker:text-border-primary" {...props} />
    ),
    ol: (props: any) => (
        <ol className="list-decimal leading-relaxed pl-5 mb-5 space-y-2 text-text-secondary marker:text-text-tertiary" {...props} />
    ),
    li: (props: any) => <li {...props} />,
    hr: (props: any) => <hr className="my-10 border-border-secondary" {...props} />,
    blockquote: (props: any) => (
        <blockquote
            className="border-l-4 border-accent-primary/50 bg-accent-primary/5 pl-5 py-3 pr-4 rounded-r-lg italic text-text-secondary my-6"
            {...props}
        />
    ),
    // Code handling
    pre: (props: any) => {
        // next-mdx-remote passes the code string inside a <code> tag as children to <pre>
        const codeElement = props.children;
        const className = codeElement?.props?.className || "";
        const children = codeElement?.props?.children;

        return <CodeBlock className={className}>{children}</CodeBlock>;
    },
    code: (props: any) => {
        // Inline code blocks (not inside <pre>)
        return (
            <code
                className="bg-bg-tertiary/60 border border-border-secondary text-text-primary px-1.5 py-0.5 rounded-md text-[0.85em] font-mono"
                {...props}
            />
        );
    },
    img: (props: any) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            className="rounded-xl border border-border-secondary mx-auto block my-8"
            loading="lazy"
            {...props}
            alt={props.alt || ""}
        />
    ),
};
