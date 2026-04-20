import Link from "next/link";
import { Mail } from "lucide-react";
import { FadeUp } from "@/components/fade-up";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkCard } from "@/components/work-card";
import { workSummaries } from "@/data/works";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-neutral-200 bg-white py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6">
            <FadeUp>
              <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                Web制作 · フロントエンド
              </p>
              <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-[#111111] md:text-5xl md:leading-[1.15]">
                売上と信頼につながる
                <br />
                Webサイトを設計・制作します
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600">
                要件整理からデザイン、Next.js
                による実装、Vercelへの公開まで。クラウドソーシングや直接取引の両方に対応できるよう、構成とコードの両面で再現性の高い納品を心がけています。
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#works"
                  className="inline-flex items-center justify-center rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  制作実績を見る
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:border-neutral-400"
                >
                  無料で相談する（返信24時間以内）
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

        <section
          id="about"
          className="border-b border-neutral-200 bg-[#FAFAFA] py-16 md:py-24"
        >
          <div className="mx-auto max-w-5xl px-6">
            <FadeUp>
              <h2 className="text-2xl font-semibold tracking-tight text-[#111111] md:text-3xl">
                このポートフォリオについて
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
                掲載している一部は架空クライアント向けのサンプル制作です。実在の許諾が不要で、デザイン・情報設計・実装のスタイルを具体的に確認いただけます。実案件ではNDAに従い、公開範囲を調整します。
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { t: "要件整理", d: "誰に届けるか・何を達成するかを言語化" },
                  { t: "モバイル最適", d: "スマホファーストで導線を設計" },
                  { t: "公開まで", d: "Vercelデプロイを想定した構成" },
                ].map((item) => (
                  <li
                    key={item.t}
                    className="rounded-xl border border-neutral-200 bg-white p-5"
                  >
                    <p className="font-medium text-[#111111]">{item.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {item.d}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </section>

        <section id="works" className="border-b border-neutral-200 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <FadeUp>
              <h2 className="text-2xl font-semibold tracking-tight text-[#111111] md:text-3xl">
                制作実績
              </h2>
              <p className="mt-3 max-w-2xl text-neutral-600">
                美容・BtoB SaaS・飲食の3領域。トーンやレイアウトはブランドごとに切り替えた架空サンプルです。
              </p>
            </FadeUp>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {workSummaries.map((work) => (
                <FadeUp key={work.slug}>
                  <WorkCard work={work} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#111111] py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <FadeUp>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                お問い合わせ
              </h2>
              <p className="mt-4 max-w-2xl text-neutral-300">
                ご予算・納期・サイトの目的が固まっていなくても構いません。まずは課題感をお聞かせください。
              </p>
              <Link
                href="mailto:hello@example.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:bg-neutral-200"
              >
                <Mail className="h-4 w-4" aria-hidden />
                メールで連絡する
              </Link>
              <p className="mt-4 text-xs text-neutral-500">
                ※ メールアドレスはダミーです。公開時に差し替えてください。
              </p>
            </FadeUp>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
