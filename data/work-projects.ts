import type { WorkProject } from '@/types/work'

export const workProjects: WorkProject[] = [
  {
    id: 1,
    title: 'NEXUS CREATIVE',
    category: 'コーポレートサイト',
    ownerType: 'owned',
    description:
      'Web制作・システム開発・マーケティング支援を行うクリエイティブスタジオを想定したコーポレートサイト。WebGL による奥行きのあるファーストビューと、スクロールに合わせたアニメーションで、先進性と信頼感を両立したブランド体験を設計しました。サービス紹介、実績、会社情報、採用、お問い合わせまでを一貫した導線で構成しています。',
    role: 'コンセプト設計 / UIデザイン / フロントエンド実装 / アニメーション設計 / コンポーネント設計',
    scope:
      'ブランドトーン設計、ヒーロー演出、下層ページ設計、実績一覧、問い合わせフォーム、レスポンシブ最適化、WebGL 背景、スクロールアニメーション、コンポーネント分割',
    outcome:
      '架空企業のコーポレートサイトとして、事業内容・実績・採用・問い合わせまでを自然に回遊できるデモサイトを制作。視覚演出を取り入れながらも、情報設計と更新しやすい実装構造を重視したテンプレートとして成立させました。',
    highlights: [
      'WebGL 背景と大きなタイポグラフィで、先進的な第一印象を作るファーストビューを設計',
      'Framer Motion を活用し、スクロールに合わせて情報が段階的に現れる体験を実装',
      '型定義、hooks、表示コンポーネントを分離し、保守しやすい Next.js 構成へ整理',
    ],
    tags: ['Corporate', 'WebGL', 'Animation', 'Responsive'],
    stack: ['Next.js', 'TypeScript', 'React', 'Framer Motion', 'Three.js', 'Tailwind CSS'],
    url: '/',
    year: '2026',
  },
]
