import Hero from "@/components/Hero";
import DomainGrid from "@/components/DomainGrid";
import PageTransition from "@/components/PageTransition";
import { getDomains } from "@/lib/data";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hi" }];
}

export const dynamicParams = false;

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const currentLang = lang as "en" | "hi";
  const localizedDomains = getDomains(currentLang);

  return (
    <PageTransition>
      <Hero />
      <DomainGrid domains={localizedDomains} />
    </PageTransition>
  );
}
