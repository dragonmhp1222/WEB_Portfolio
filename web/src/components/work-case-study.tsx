import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeUp } from "@/components/fade-up";
import type { WorkDetail } from "@/data/works";

type WorkCaseStudyProps = {
  work: WorkDetail;
};

function BackLink({ className }: { className?: string }) {
  return (
    <Link
      href="/#works"
      className={`inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-70 ${className ?? ""}`}
    >
      <ArrowLeft className="h-4 w-4" aria-hidden />
      制作実績一覧へ
    </Link>
  );
}

/** 美容サロン：クリーム・ゴールド・セリフ見出し・非対称ヒーロー */
function SalonCaseStudy({ work }: WorkCaseStudyProps) {
  return (
    <main className="bg-[#FAF7F2] text-[#2C2C2C]">
      <section className="border-b border-[#C9A96E]/25">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] md:items-center md:py-24">
          <FadeUp>
            <BackLink className="text-[#6B5B45]" />
            <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-[#8B7355]">
              Case study · {work.category}
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.1] tracking-tight text-[#2C2C2C] md:text-6xl">
              {work.title}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#4A4540]">
              {work.tagline}
            </p>
            <p className="mt-6 text-sm text-[#6B6560]">担当：{work.role}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {work.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-[#C9A96E]/50 bg-white/60 px-3 py-1 text-xs font-medium text-[#5C4D3A]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp>
            <div className="relative aspect-[4/5] max-h-[420px] overflow-hidden rounded-[2rem] border border-[#C9A96E]/35 bg-gradient-to-br from-[#EDE4D8] via-[#FAF7F2] to-[#E8DCC8] shadow-[0_24px_60px_-20px_rgba(90,70,40,0.25)] md:max-h-none">
              <div className="absolute inset-8 rounded-3xl border border-white/50 bg-white/20" />
              <p className="absolute bottom-8 left-8 right-8 text-center font-display text-2xl italic text-[#5C4D3A]/80">
                Glow & calm
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-10 px-6 py-14 md:py-20">
        <FadeUp>
          <article className="rounded-[2rem] border border-[#C9A96E]/25 bg-white/70 p-8 shadow-sm backdrop-blur-sm md:p-10">
            <h2 className="font-display text-2xl font-semibold text-[#2C2C2C]">
              概要
            </h2>
            <p className="mt-5 whitespace-pre-line text-base leading-[1.9] text-[#4A4540]">
              {work.overview}
            </p>
          </article>
        </FadeUp>
        <FadeUp>
          <article className="rounded-[2rem] border border-[#C9A96E]/25 bg-white/70 p-8 shadow-sm backdrop-blur-sm md:p-10">
            <h2 className="font-display text-2xl font-semibold text-[#2C2C2C]">
              要件（仮定を含む）
            </h2>
            <p className="mt-5 whitespace-pre-line text-base leading-[1.9] text-[#4A4540]">
              {work.requirements}
            </p>
          </article>
        </FadeUp>
        <FadeUp>
          <article className="rounded-[2rem] border border-[#C9A96E]/25 bg-white/70 p-8 shadow-sm backdrop-blur-sm md:p-10">
            <h2 className="font-display text-2xl font-semibold text-[#2C2C2C]">
              サイト構造
            </h2>
            <ol className="mt-6 list-decimal space-y-3 pl-5 text-[#4A4540] marker:text-[#C9A96E]">
              {work.siteStructure.map((item) => (
                <li key={item} className="pl-1 leading-relaxed">
                  {item}
                </li>
              ))}
            </ol>
          </article>
        </FadeUp>
        <FadeUp>
          <article className="rounded-[2rem] border border-[#C9A96E]/25 bg-white/70 p-8 shadow-sm backdrop-blur-sm md:p-10">
            <h2 className="font-display text-2xl font-semibold text-[#2C2C2C]">
              デザイントークン
            </h2>
            <ul className="mt-6 space-y-4">
              {work.designTokens.map((token) => (
                <li
                  key={token.label}
                  className="flex flex-col gap-1 border-b border-[#C9A96E]/15 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8B7355]">
                    {token.label}
                  </span>
                  <span className="text-[#4A4540]">{token.value}</span>
                </li>
              ))}
            </ul>
          </article>
        </FadeUp>
        <FadeUp>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-[2rem] border border-[#C9A96E]/25 bg-[#FFFCF8] p-8 md:p-9">
              <h2 className="font-display text-xl font-semibold text-[#2C2C2C]">
                課題
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-[#4A4540]">
                {work.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-[2rem] border border-[#C9A96E]/25 bg-[#FFFCF8] p-8 md:p-9">
              <h2 className="font-display text-xl font-semibold text-[#2C2C2C]">
                アプローチ
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-[#4A4540]">
                {work.solutions.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          </div>
        </FadeUp>
        <FadeUp>
          <article className="rounded-[2rem] border border-[#C9A96E]/40 bg-gradient-to-br from-[#FFF9F2] to-[#F5EBDD] p-8 md:p-10">
            <h2 className="font-display text-2xl font-semibold text-[#2C2C2C]">
              成果メモ（サンプル）
            </h2>
            <p className="mt-5 leading-[1.9] text-[#4A4540]">{work.resultNote}</p>
          </article>
        </FadeUp>
      </div>

      <section className="border-t border-[#C9A96E]/20 bg-[#F3EDE4] py-14">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <div className="overflow-hidden rounded-[2rem] border border-[#C9A96E]/30 shadow-lg shadow-[#8B7355]/10">
              <div
                className={`aspect-video bg-gradient-to-br ${work.accentClass}`}
                role="img"
                aria-label={`${work.title} の画面イメージ（プレースホルダー）`}
              />
            </div>
            <p className="mt-4 text-center text-xs text-[#6B6560]">
              スクリーンショット差し替え用のプレースホルダーです。
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#C9A96E] bg-[#2C2C2C] px-8 py-3.5 text-sm font-medium text-[#FAF7F2] transition hover:bg-[#1a1a1a]"
              >
                同様の制作を依頼する
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

/** BtoB SaaS：白／Appleグレー・左揃え・番号ラベル・シャープな角 */
function SaasCaseStudy({ work }: WorkCaseStudyProps) {
  return (
    <main className="bg-white text-[#1D1D1F]">
      <section className="border-b border-neutral-200/80 bg-[#F5F5F7] bg-[linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <FadeUp>
            <BackLink className="text-[#6E6E73]" />
            <div className="mt-12 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0071E3]">
                BtoB · {work.year} · 架空サンプル
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-6xl md:leading-[1.05]">
                {work.title}
              </h1>
              <div className="mt-6 h-px w-16 bg-[#0071E3]" aria-hidden />
              <p className="mt-6 text-xl font-medium leading-snug text-[#424245] md:text-2xl">
                {work.tagline}
              </p>
              <p className="mt-8 text-sm text-[#6E6E73]">{work.role}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {work.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-[#1D1D1F] ring-1 ring-neutral-200/90"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="divide-y divide-neutral-200/90">
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <FadeUp>
              <div className="grid gap-10 md:grid-cols-[160px_minmax(0,1fr)] md:gap-16">
                <p className="text-sm font-semibold text-[#0071E3] md:pt-1">
                  01
                  <span className="mt-1 block text-[#1D1D1F]">概要</span>
                </p>
                <p className="max-w-3xl whitespace-pre-line text-base leading-[1.85] text-[#424245]">
                  {work.overview}
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="bg-[#F5F5F7]">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <FadeUp>
              <div className="grid gap-10 md:grid-cols-[160px_minmax(0,1fr)] md:gap-16">
                <p className="text-sm font-semibold text-[#0071E3] md:pt-1">
                  02
                  <span className="mt-1 block text-[#1D1D1F]">要件</span>
                </p>
                <p className="max-w-3xl whitespace-pre-line text-base leading-[1.85] text-[#424245]">
                  {work.requirements}
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <FadeUp>
              <div className="grid gap-10 md:grid-cols-[160px_minmax(0,1fr)] md:gap-16">
                <p className="text-sm font-semibold text-[#0071E3] md:pt-1">
                  03
                  <span className="mt-1 block text-[#1D1D1F]">構造</span>
                </p>
                <ol className="max-w-3xl space-y-4 text-[#424245]">
                  {work.siteStructure.map((item, i) => (
                    <li key={item} className="flex gap-4">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#0071E3] text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="bg-[#F5F5F7]">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <FadeUp>
              <div className="grid gap-10 md:grid-cols-[160px_minmax(0,1fr)] md:gap-16">
                <p className="text-sm font-semibold text-[#0071E3] md:pt-1">
                  04
                  <span className="mt-1 block text-[#1D1D1F]">トークン</span>
                </p>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {work.designTokens.map((token) => (
                    <li
                      key={token.label}
                      className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                        {token.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#1D1D1F]">
                        {token.value}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <FadeUp>
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-[#0071E3]">05</p>
                  <h2 className="mt-2 text-xl font-semibold text-[#1D1D1F]">
                    課題
                  </h2>
                  <ul className="mt-6 list-disc space-y-3 pl-5 text-[#424245]">
                    {work.challenges.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0071E3]">06</p>
                  <h2 className="mt-2 text-xl font-semibold text-[#1D1D1F]">
                    アプローチ
                  </h2>
                  <ul className="mt-6 list-disc space-y-3 pl-5 text-[#424245]">
                    {work.solutions.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="bg-[#F5F5F7]">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <FadeUp>
              <div className="grid gap-10 md:grid-cols-[160px_minmax(0,1fr)] md:gap-16">
                <p className="text-sm font-semibold text-[#0071E3] md:pt-1">
                  07
                  <span className="mt-1 block text-[#1D1D1F]">成果</span>
                </p>
                <p className="max-w-3xl leading-[1.85] text-[#424245]">
                  {work.resultNote}
                </p>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>

      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-[#F5F5F7] shadow-sm">
              <div
                className={`aspect-video bg-gradient-to-br ${work.accentClass}`}
                role="img"
                aria-label={`${work.title} の画面イメージ（プレースホルダー）`}
              />
            </div>
            <p className="mt-4 text-center text-xs text-[#6E6E73]">
              スクリーンショット差し替え用のプレースホルダーです。
            </p>
            <div className="mt-12 flex justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0071E3] px-8 py-3.5 text-sm font-medium text-white transition hover:bg-[#0077ED]"
              >
                同様の制作を依頼する
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

/** カフェ：ダーク・ゴールドアクセント・縦ライン・シネマティック */
function CafeCaseStudy({ work }: WorkCaseStudyProps) {
  return (
    <main className="bg-[#0c0a09] text-[#E7E5E4]">
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.12),_transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <FadeUp>
            <BackLink className="text-stone-400 md:absolute md:left-6 md:top-10" />
            <p className="mt-16 text-xs font-medium uppercase tracking-[0.35em] text-[#D4A017] md:mt-0">
              {work.category} · {work.year}
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-[#FAFAF9] md:text-7xl">
              {work.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-300 md:text-xl">
              {work.tagline}
            </p>
            <p className="mt-8 text-sm text-stone-500">{work.role}</p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {work.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-stone-200"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-0 px-6 py-16 md:py-24">
        {[
          { title: "概要", body: work.overview, pre: true },
          { title: "要件（仮定を含む）", body: work.requirements, pre: true },
        ].map((block) => (
          <FadeUp key={block.title}>
            <article className="border-l-2 border-[#D4A017]/70 py-10 pl-8 first:pt-0">
              <h2 className="text-lg font-semibold tracking-wide text-[#D4A017]">
                {block.title}
              </h2>
              <p
                className={`mt-5 text-stone-300 leading-[1.9] ${
                  block.pre ? "whitespace-pre-line" : ""
                }`}
              >
                {block.body}
              </p>
            </article>
          </FadeUp>
        ))}

        <FadeUp>
          <article className="border-l-2 border-[#D4A017]/70 py-10 pl-8">
            <h2 className="text-lg font-semibold tracking-wide text-[#D4A017]">
              サイト構造
            </h2>
            <ol className="mt-6 space-y-4 text-stone-300">
              {work.siteStructure.map((item, i) => (
                <li key={item} className="flex gap-4">
                  <span className="font-mono text-sm text-[#D4A017]/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </article>
        </FadeUp>

        <FadeUp>
          <article className="border-l-2 border-[#D4A017]/70 py-10 pl-8">
            <h2 className="text-lg font-semibold tracking-wide text-[#D4A017]">
              デザイントークン
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {work.designTokens.map((token) => (
                <div
                  key={token.label}
                  className="rounded-lg border border-white/10 bg-[#161311] p-4"
                >
                  <p className="text-xs uppercase tracking-wider text-stone-500">
                    {token.label}
                  </p>
                  <p className="mt-2 text-sm text-stone-200">{token.value}</p>
                </div>
              ))}
            </div>
          </article>
        </FadeUp>

        <FadeUp>
          <article className="border-l-2 border-[#D4A017]/70 py-10 pl-8">
            <h2 className="text-lg font-semibold tracking-wide text-[#D4A017]">
              課題とアプローチ
            </h2>
            <div className="mt-6 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-stone-400">課題</h3>
                <ul className="mt-3 list-disc space-y-3 pl-5 text-stone-300">
                  {work.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-stone-400">
                  アプローチ
                </h3>
                <ul className="mt-3 list-disc space-y-3 pl-5 text-stone-300">
                  {work.solutions.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </FadeUp>

        <FadeUp>
          <article className="border-l-2 border-[#D4A017]/70 py-10 pl-8">
            <h2 className="text-lg font-semibold tracking-wide text-[#D4A017]">
              成果メモ（サンプル）
            </h2>
            <p className="mt-5 leading-[1.9] text-stone-300">{work.resultNote}</p>
          </article>
        </FadeUp>
      </div>

      <section className="border-t border-white/10 bg-[#080706] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <FadeUp>
            <div className="overflow-hidden rounded-sm border border-white/10 shadow-[0_0_80px_-20px_rgba(212,160,23,0.35)]">
              <div
                className={`aspect-video bg-gradient-to-br ${work.accentClass}`}
                role="img"
                aria-label={`${work.title} の画面イメージ（プレースホルダー）`}
              />
            </div>
            <p className="mt-4 text-center text-xs text-stone-500">
              スクリーンショット差し替え用のプレースホルダーです。
            </p>
            <div className="mt-12 flex justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center border border-[#D4A017] bg-[#D4A017] px-10 py-3.5 text-sm font-semibold text-[#0c0a09] transition hover:bg-[#e8b82a]"
              >
                同様の制作を依頼する
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

export function WorkCaseStudy({ work }: WorkCaseStudyProps) {
  switch (work.slug) {
    case "salon-haru":
      return <SalonCaseStudy work={work} />;
    case "kanriboard":
      return <SaasCaseStudy work={work} />;
    case "moku-coffee":
      return <CafeCaseStudy work={work} />;
    default:
      return null;
  }
}
