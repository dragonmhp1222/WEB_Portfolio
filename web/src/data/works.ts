export type WorkSlug = "salon-haru" | "kanriboard" | "moku-coffee";

export type WorkSummary = {
  slug: WorkSlug;
  title: string;
  tagline: string;
  category: string;
  year: string;
  accentClass: string;
};

export type WorkDetail = WorkSummary & {
  role: string;
  stack: string[];
  overview: string;
  requirements: string;
  siteStructure: string[];
  designTokens: { label: string; value: string }[];
  challenges: string[];
  solutions: string[];
  resultNote: string;
};

export const workSummaries: WorkSummary[] = [
  {
    slug: "salon-haru",
    title: "Salon HARU",
    tagline: "トリートメント特化サロンのランディングページ",
    category: "美容・ライフスタイル",
    year: "2025",
    accentClass: "from-[#C9A96E]/30 to-[#FAF7F2]",
  },
  {
    slug: "kanriboard",
    title: "KanriBoard",
    tagline: "中小企業向けタスク管理SaaSの紹介LP",
    category: "BtoB / SaaS",
    year: "2025",
    accentClass: "from-[#0071E3]/20 to-[#F5F5F7]",
  },
  {
    slug: "moku-coffee",
    title: "MOKU COFFEE",
    tagline: "町家カフェのブランドサイト",
    category: "飲食",
    year: "2025",
    accentClass: "from-[#1a1510] to-[#3d3228]",
  },
];

const workDetails: Record<WorkSlug, WorkDetail> = {
  "salon-haru": {
    slug: "salon-haru",
    title: "Salon HARU",
    tagline: "トリートメント特化サロンのランディングページ",
    category: "美容・ライフスタイル",
    year: "2025",
    accentClass: "from-[#C9A96E]/30 to-[#FAF7F2]",
    role: "要件整理 / デザイン / 実装（架空案件・サンプル）",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
    overview:
      "東京・表参道を拠点とする架空サロン「Salon HARU」。30代女性を主な顧客層とし、カットよりもトリートメントと艶髪体験を前面に出すLPです。初回予約とInstagram導線を明確にし、信頼感のあるビジュアルでコンバージョンを狙う構成にしました。",
    requirements:
      "・モバイルからの予約が主導線になること\n・「艶」「透明感」を言語と写真の両方で伝えること\n・料金・スタッフ・FAQまで1ページで完結すること（仮定）",
    siteStructure: [
      "ヒーロー（キャッチ＋CTA）",
      "サロンの強み（数字・実績は架空の例示）",
      "悩み共感 → メニュー・料金",
      "スタッフ紹介・店内の雰囲気",
      "FAQ・最終CTA",
    ],
    designTokens: [
      { label: "背景", value: "#FAF7F2（クリーム）" },
      { label: "テキスト", value: "#2C2C2C" },
      { label: "アクセント", value: "#C9A96E（ゴールド）" },
      { label: "タイポ", value: "見出しにセリフ系、本文は Noto Sans JP" },
    ],
    challenges: [
      "美容系は写真の印象が成果を左右するため、余白と階層で「高級感」と「親しみ」のバランスを取る必要がありました。",
      "実在しないサンプルのため、具体性は保ちつつ誇大表現にならないトーン設計が課題でした。",
    ],
    solutions: [
      "8px基準のスペーシングと、色数を3系統に絞って視線の流れをシンプルにしました。",
      "ヒーロー直下に「誰のどんな悩みに応えるか」を短く整理し、スクロール後の離脱を抑える構成にしています。",
    ],
    resultNote:
      "架空サンプルとして、制作フロー（構成案→実装→デプロイ）を一通り提示できる状態を目標にしました。公開URLはデプロイ後に差し替え可能です。",
  },
  kanriboard: {
    slug: "kanriboard",
    title: "KanriBoard",
    tagline: "中小企業向けタスク管理SaaSの紹介LP",
    category: "BtoB / SaaS",
    year: "2025",
    accentClass: "from-[#0071E3]/20 to-[#F5F5F7]",
    role: "情報設計 / UIデザイン方針 / 実装（架空案件・サンプル）",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    overview:
      "中小企業の現場で起きやすい「誰が何を持っているか分からない」課題に対し、KanriBoard の価値を短時間で理解できるBtoB向け紹介LPです。Apple風のミニマルさを意識し、機能はカードで整理して比較しやすくしています。",
    requirements:
      "・意思決定者が多いため、ファクトと導入フローを明確にすること\n・デモ・資料請求・問い合わせへの導線を整理すること（仮定）\n・技術スタックはモダンで保守しやすい構成にすること",
    siteStructure: [
      "ヒーロー（プロダクト名＋一言価値）",
      "課題提起（現場の断片化）",
      "機能一覧（カード）",
      "導入の流れ・料金の目安",
      "FAQ・CTA",
    ],
    designTokens: [
      { label: "背景", value: "#FFFFFF / #F5F5F7" },
      { label: "テキスト", value: "#1D1D1F" },
      { label: "アクセント", value: "#0071E3" },
      { label: "トーン", value: "余白多め・装飾は抑えめ" },
    ],
    challenges: [
      "SaaS LP は情報量が増えがちなため、初見で「何のプロダクトか」が3秒以内に伝わるかが焦点でした。",
      "BtoB向けの信頼感と、モダンさの両立をデザイントークンで統一する必要がありました。",
    ],
    solutions: [
      "ヒーローでプロダクトの位置づけを固定し、以降のセクションはすべてその一文に紐づけて冗長さを削りました。",
      "セクション背景を交互に切り替え、スクロール時の区切りを視覚的に明確にしています。",
    ],
    resultNote:
      "個人開発のSaaS経験をアピールする用途を想定し、実装面では型安全・コンポーネント分割を意識した構成にしています（サンプル）。",
  },
  "moku-coffee": {
    slug: "moku-coffee",
    title: "MOKU COFFEE",
    tagline: "町家カフェのブランドサイト",
    category: "飲食",
    year: "2025",
    accentClass: "from-[#1a1510] to-[#3d3228]",
    role: "コンセプト整理 / デザイン / 実装（架空案件・サンプル）",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    overview:
      "京都・築100年の町家をイメージした架空カフェ「MOKU COFFEE」。ダークトーンと大きなビジュアル領域で、焙煎と空間の静けさを伝えるサイトです。予約・アクセスを迷わせない導線を最優先にしました。",
    requirements:
      "・30〜40代の男女がターゲット（仮定）\n・ダーク系・高級感・写真を大きく見せること\n・スマホでの閲覧が主になること",
    siteStructure: [
      "フルスクリーンに近いヒーロー",
      "こだわり・豆の説明",
      "メニュー・店舗情報",
      "予約・Instagram・地図",
    ],
    designTokens: [
      { label: "背景", value: "#0D0D0D 付近のダーク" },
      { label: "テキスト", value: "#F5F5F5" },
      { label: "アクセント", value: "#D4A017（ゴールド系）" },
      { label: "写真", value: "プレースホルダー（実装時は実撮影に差し替え）" },
    ],
    challenges: [
      "暗色基調は読みやすさとの両立が難しいため、コントラストと行間を慎重に調整しました。",
      "実写真がない段階でも「世界観」が伝わるよう、グラデーションとタイポで雰囲気を補強しています。",
    ],
    solutions: [
      "重要な情報（営業時間・予約ボタン）を画面下部の固定寄り配置でも繰り返し、迷子を防ぐレイアウトにしました。",
      "アクセントカラーはCTAに集中させ、装飾には使わない方針に統一しています。",
    ],
    resultNote:
      "飲食案件で多い「雰囲気は良いが情報が見つからない」状態を避け、世界観と導線の両方を満たすバランスを意識したサンプルです。",
  },
};

export function getWorkDetail(slug: string): WorkDetail | undefined {
  if (slug === "salon-haru" || slug === "kanriboard" || slug === "moku-coffee") {
    return workDetails[slug];
  }
  return undefined;
}

export function getAllSlugs(): WorkSlug[] {
  return ["salon-haru", "kanriboard", "moku-coffee"];
}
