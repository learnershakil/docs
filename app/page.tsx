"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        // Simple client-side redirect to English by default
        const savedLang = localStorage.getItem("language") || "en";
        router.replace(`/${savedLang}`);
    }, [router]);

    return null;
}
