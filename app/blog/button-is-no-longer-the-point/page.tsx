import type { Metadata } from 'next'
import Link from 'next/link'
import '../augmented-designer/article.css'
import { asset } from '@/lib/asset'
import ReadingProgress from '@/components/ReadingProgress'

const TITLE = 'The Button Is No Longer the Point'
const DESCRIPTION =
  'As AI systems begin to reason, adapt, and act, design shifts from perfecting interfaces to shaping behavior and the human–AI relationship — putting HAX principles like Control, Clarity, Recovery, Collaboration, and Traceability at the center of the craft.'
const HERO = 'https://vaesposito.github.io/outshift-design/images/blog/button-is-no-longer-the-point/hero.svg'

export const metadata: Metadata = {
  title: `${TITLE} — Outshift Design`,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    title: `${TITLE} — Outshift Design`,
    description: DESCRIPTION,
    url: 'https://vaesposito.github.io/outshift-design/blog/button-is-no-longer-the-point',
    siteName: 'Outshift Design',
    images: [{ url: HERO }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} — Outshift Design`,
    description: DESCRIPTION,
    images: [HERO],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  author: { '@type': 'Person', name: 'Krystelle Gonzalez Papaux' },
  publisher: { '@type': 'Organization', name: 'Outshift Design' },
  datePublished: '2026-06-05',
  url: 'https://vaesposito.github.io/outshift-design/blog/button-is-no-longer-the-point',
  image: HERO,
  keywords: ['HAX', 'human-agent interaction', 'AI design', 'behavioral design', 'agentic systems', 'UX', 'Outshift'],
}

export default function ButtonIsNoLongerThePointPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />

      <main>
        <div className="article-wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            The Button Is No Longer the Point
          </div>

          <div className="article-meta">
            <span className="article-tag">Design</span>
            <span className="article-tag">AI</span>
            <span className="article-tag">HAX</span>
            <span className="article-tag">Human-Agent Interaction</span>
            <span className="article-tag">Product Design</span>
            <span className="article-date">June 5, 2026</span>
            <span className="article-read-time">6 min read</span>
          </div>

          <h1 className="article-title">The Button Is No Longer the Point</h1>

          <div className="article-hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/images/blog/button-is-no-longer-the-point/hero.svg')} alt="The Button Is No Longer the Point" />
          </div>

          <div className="author-row">
            <div>
              <div className="author-name">Krystelle Gonzalez Papaux</div>
              <div className="author-title">Outshift by Cisco</div>
            </div>
          </div>

          <div className="article-body">
            <p>A few years ago, asking a computer to book a flight, summarize a meeting, write code, or make decisions on your behalf sounded vaguely futuristic. Now people apologize to chatbots. They ask AI for emotional advice at 2 a.m. More often, they delegate work to systems they barely understand.</p>

            <p>And most of this is happening through interfaces that still look deceptively familiar: a textbox, a cursor, a blinking prompt.</p>

            <p>Yet we understand that AI systems behave differently. They infer. They adapt. They interrupt. They suggest. They remember. Increasingly, they act. The interaction no longer feels like operating software; it feels like managing a relationship with an entity that possesses initiative, however artificial that initiative may be.</p>

            <p>The moment technology begins behaving this way, design changes fundamentally. Suddenly the challenge is no longer just usability. It is behavior.</p>

            <div className="callout"><strong>Not:</strong> &quot;How do we make this interface intuitive?&quot;</div>

            <div className="callout"><strong>But:</strong> &quot;How should this system conduct itself around humans?&quot;</div>

            <p>That distinction may define the next era of design. For years, the industry has talked about user experience design primarily through the language of interfaces: screens, flows, components, usability, friction reduction. But AI exposes how incomplete that framing always was. Designers were never simply arranging pixels. What they were actually shaping — often invisibly — was human behavior.</p>

            <p>Every notification, recommendation feed, onboarding flow, and interaction pattern quietly influenced attention, trust, emotion, decision-making, and action. AI simply amplifies this reality to a level that can no longer be ignored. Because when systems begin reasoning, collaborating, and acting autonomously, the designer&apos;s role inevitably expands from interface creator to behavioral architect.</p>

            <p>For example, for decades we designed experiences as a sequence of views and interactions. Users moved from page to page and state changes happened primarily behind the scenes. Interfaces served as stable snapshots of what the system was doing at any given moment.</p>

            <p>Agentic systems don&apos;t behave that way. They are constantly evolving beneath the surface. They gather information and they revise plans. They invoke tools then may switch strategies. They negotiate uncertainty and when all works well, they recover from failures. Essentially, they adapt to new context.</p>

            <p>This means that the interaction is no longer defined by the screen itself, but by a continuous series of transitions occurring inside the system. An agent&apos;s reasoning, every handoff to a tool, every change in context, every uncertainty, every decision to pause, continue, or revise a plan — each of these is a state. And increasingly, those states are becoming the experience. This may be one of the most significant design challenges introduced by AI. Humans cannot collaborate with a system they cannot understand.</p>

            <p>Imagine asking an agent to plan a multi-city trip through Europe. The system begins comparing routes, checking availability, balancing costs, and building an itinerary. Halfway through, you change your mind. &quot;Actually, skip Berlin and add Lyon.&quot; The experience doesn&apos;t restart. The plan evolves. Recommendations shift. Constraints change. New tradeoffs emerge. What matters is not simply the final itinerary. What matters is whether you understand what changed. Did the agent abandon an earlier assumption? Did it discover a cheaper route? Did it discard options? Is it waiting for your input? Is it uncertain? As systems become more autonomous, maintaining awareness becomes just as important as achieving outcomes. The challenge for designers is no longer simply making actions visible. It is making change visible. Users need to know when a system has shifted direction. When its confidence has changed. When new information has altered a recommendation. When a tool has failed. When a decision has been made on their behalf. Not because every technical detail matters but because trust depends on continuity. People don&apos;t build confidence in systems by seeing more information. They build confidence by understanding what is happening and why.</p>

            <p>This is where many of the emerging conversations around human-agent interaction become increasingly important. At Outshift, we&apos;ve been exploring this challenge through HAX — a research initiative and a set of principles focused on Control, Clarity, Recovery, Collaboration, and Traceability. What&apos;s interesting about these principles is that they aren&apos;t really about interfaces at all. They&apos;re about preserving the conditions that allow humans and intelligent systems to work together effectively.</p>

            <ul className="principles-list">
              <li><strong>Control</strong> means people remain capable of influencing outcomes rather than merely observing them.</li>
              <li><strong>Clarity</strong> means the system&apos;s intentions, actions, and current state are understandable.</li>
              <li><strong>Recovery</strong> acknowledges that both humans and agents make mistakes and that meaningful collaboration requires a path back.</li>
              <li><strong>Collaboration</strong> treats intelligence as something that emerges between human and machine rather than residing exclusively in either.</li>
              <li><strong>Traceability</strong> ensures that decisions remain explainable and accountable.</li>
            </ul>

            <p>Taken together, they point toward a broader shift occurring across the industry. As intelligent systems become participants in our workflows rather than tools within them, designers must increasingly focus on making machine cognition socially navigable. The designer&apos;s role, then, is no longer merely to make systems usable. It is to make increasingly complex forms of machine cognition legible, accountable, and collaborative. Not by exposing every technical detail, but by designing the right forms of visibility, friction, explanation, and intervention.</p>

            <h2>The Future Designer Is Part Strategist, Part Behavioral Architect</h2>

            <p>The designer emerging from the AI era looks very different from the designer technology companies optimized for over the last decade. Not just a UI specialist. Not just a product thinker. But someone capable of shaping:</p>

            <ul className="principles-list">
              <li><strong>Interaction ecosystems</strong></li>
              <li><strong>Behavioral dynamics</strong></li>
              <li><strong>Trust relationships</strong></li>
              <li><strong>Human-AI collaboration systems</strong></li>
            </ul>

            <p>Because as interfaces evolve from static products into adaptive systems, design itself evolves from arranging information to shaping relationships. And relationships require more than usability. They require understanding.</p>

            <p>The future of design is not about making AI feel more human. It is about designing new forms of coexistence between humans and intelligent systems. Not through better screens alone. But through experiences that help people understand, influence, and navigate systems that are constantly changing around them.</p>

            <div className="callout"><strong>Because ultimately, the button was never the point. The relationship was.</strong></div>

            <Link href="/blog" className="back-to-blog">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8H4M4 8l4-4M4 8l4 4" /></svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
