import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[50vh] border-b border-neutral-200 bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-medium text-neutral-500">404</p>
          <h1 className="mt-2 text-2xl font-semibold text-[#111111]">
            ページが見つかりません
          </h1>
          <Link
            href="/"
            className="mt-8 inline-block text-sm font-medium text-[#111111] underline underline-offset-4"
          >
            トップへ戻る
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
