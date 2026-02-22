interface CalloutProps {
    children: React.ReactNode;
    type?: "info" | "warning" | "danger" | "success";
    title?: string;
}

export default function Callout({
    children,
    type = "info",
    title,
}: CalloutProps) {
    const styles = {
        info: "bg-blue-500/10 border-blue-500/20 text-blue-200",
        warning: "bg-amber-500/10 border-amber-500/20 text-amber-200",
        danger: "bg-rose-500/10 border-rose-500/20 text-rose-200",
        success: "bg-emerald-500/10 border-emerald-500/20 text-emerald-200",
    };

    const icons = {
        info: "💡",
        warning: "⚠️",
        danger: "🚨",
        success: "✅",
    };

    return (
        <div
            className={`my-6 px-5 py-4 rounded-xl border ${styles[type]} flex gap-4`}
        >
            <div className="text-xl shrink-0 select-none">{icons[type]}</div>
            <div className="flex-1 w-full min-w-0 prose-docs-callout">
                {title && <h5 className="font-semibold mb-1">{title}</h5>}
                <div className="text-sm leading-relaxed opacity-90">{children}</div>
            </div>
        </div>
    );
}
