import Link from "next/link";

const nav = [
  { href: "/#works", label: "制作実績" },
  { href: "/#about", label: "私たちについて" },
  { href: "/#contact", label: "お問い合わせ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#FAFAFA]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-[#111111] transition hover:opacity-70"
        >
          Portfolio
        </Link>
        <nav aria-label="主要ナビゲーション">
          <ul className="flex gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-neutral-600 transition hover:text-[#111111]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
