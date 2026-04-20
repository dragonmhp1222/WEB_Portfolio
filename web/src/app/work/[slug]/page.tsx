import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkCaseStudy } from "@/components/work-case-study";
import { getAllSlugs, getWorkDetail } from "@/data/works";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { slug } = params;
  const work = getWorkDetail(slug);
  if (!work) {
    return { title: "Not Found" };
  }
  return {
    title: `${work.title} — ${work.tagline}`,
    description: work.overview.slice(0, 120),
    openGraph: {
      title: `${work.title} | 制作実績`,
      description: work.overview.slice(0, 120),
    },
  };
}

export default function WorkPage({ params }: PageProps) {
  const { slug } = params;
  const work = getWorkDetail(slug);
  if (!work) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <WorkCaseStudy work={work} />
      <SiteFooter />
    </>
  );
}
