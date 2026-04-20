export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-10">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Web制作ポートフォリオ（サンプル含む架空案件を掲載）
        </p>
      </div>
    </footer>
  );
}
