import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Visual Note Taker",
    "one_liner": "Convert screenshots into organized notes instantly using AI.",
    "why_now": "With remote work on the rise, quick organization of visual information is essential.",
    "novel_mechanism": "Utilizing reinforcement learning for improved contextual understanding in OCR.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Vision"
    ],
    "edge_use_cases": [
      "Studying from lecture slides",
      "Documenting visual ideas from brainstorming sessions"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "screenshot upload",
        "note organization",
        "export options"
      ],
      "tools": [
        "React",
        "Firebase",
        "Stripe",
        "Zapier"
      ],
      "data_bootstrap": [
        "use existing screenshot datasets",
        "crowdsource small scale visual data"
      ],
      "risk": [
        "low user adoption",
        "technical OCR inaccuracies"
      ],
      "mitigation": [
        "in-user feedback loops",
        "improve model via iterative training"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Live demo of note-taking from visual data",
        "Before/after organization of chaotic information"
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Discord"
      ],
      "pricing": {
        "free": "Basic features with limits",
        "pro": "$5/month for advanced features",
        "business": "$25/month for team capabilities"
      }
    },
    "moat": [
      "Quick adaptability to user preference",
      "Growing database of screenshots enhancing accuracy",
      "Integration with existing productivity tools"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 7
    },
    "total_score": 31,
    "reasoning": "While traditional note-taking apps exist, this uniquely combines visual inputs with AI-driven organization, catering to visually-oriented users."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}