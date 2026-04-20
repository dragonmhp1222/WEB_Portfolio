import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WorkSummary } from "@/data/works";

type WorkCardProps = {
  work: WorkSummary;
};

function cardShell(slug: WorkSummary["slug"]): string {
  switch (slug) {
    case "salon-haru":
      return "rounded-[2rem] border border-[#C9A96E]/35 bg-[#FFFCF8] shadow-[0_20px_50px_-24px_rgba(90,70,40,0.35)]";
    case "kanriboard":
      return "rounded-xl border-0 bg-white ring-1 ring-neutral-200/90 shadow-sm";
    case "moku-coffee":
      return "rounded-sm border border-white/10 bg-[#141210] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)]";
    default:
      return "rounded-2xl border border-neutral-200 bg-white";
  }
}

function thumbArea(slug: WorkSummary["slug"], accentClass: string): string {
  const base = "relative aspect-[16/10] bg-gradient-to-br";
  switch (slug) {
    case "salon-haru":
      return `${base} ${accentClass} rounded-t-[2rem] md:rounded-t-[2rem]`;
    case "kanriboard":
      return `${base} ${accentClass}`;
    case "moku-coffee":
      return `${base} ${accentClass}`;
    default:
      return `${base} ${accentClass}`;
  }
}

export function WorkCard({ work }: WorkCardProps) {
  const isDark = work.slug === "moku-coffee";
  const isSalon = work.slug === "salon-haru";
  const isSaas = work.slug === "kanriboard";

  return (
    <article
      className={`group flex flex-col overflow-hidden transition hover:-translate-y-0.5 ${cardShell(work.slug)}`}
    >
      <Link href={`/work/${work.slug}`} className="flex flex-1 flex-col">
        <div className={thumbArea(work.slug, work.accentClass)} aria-hidden>
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <span
              className={`text-center tracking-tight ${
                isDark
                  ? "font-display text-2xl font-semibold text-white/95"
                  : isSalon
                    ? "font-display text-2xl font-semibold text-[#3d3428]"
                    : "text-lg font-semibold tracking-[-0.02em] text-[#1D1D1F]"
              }`}
            >
              {work.title}
            </span>
          </div>
          {isSaas && (
            <div
              className="absolute bottom-0 left-0 right-0 h-1 bg-[#0071E3]/90"
              aria-hidden
            />
          )}
        </div>
        <div
          className={`flex flex-1 flex-col p-6 ${
            isDark ? "bg-[#141210]" : isSalon ? "bg-[#FFFCF8]" : "bg-white"
          }`}
        >
          <p
            className={`text-xs font-medium uppercase tracking-wider ${
              isDark ? "text-stone-500" : "text-neutral-500"
            }`}
          >
            {work.category} · {work.year}
          </p>
          <h2
            className={`mt-2 text-xl font-semibold tracking-tight ${
              isDark
                ? "font-display text-stone-100"
                : isSalon
                  ? "font-display text-[#2C2C2C]"
                  : "text-[#1D1D1F]"
            }`}
          >
            {work.title}
          </h2>
          <p
            className={`mt-2 flex-1 text-sm leading-relaxed ${
              isDark ? "text-stone-400" : "text-neutral-600"
            }`}
          >
            {work.tagline}
          </p>
          <span
            className={`mt-4 inline-flex items-center gap-1 text-sm font-medium transition group-hover:gap-2 ${
              isDark
                ? "text-[#D4A017]"
                : isSalon
                  ? "text-[#5C4D3A]"
                  : "text-[#0071E3]"
            }`}
          >
            詳しく見る
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </Link>
    </article>
  );
}
