import type { Metadata } from 'next'
import Link from 'next/link'
import './article.css'
import { asset } from '@/lib/asset'
import ReadingProgress from '@/components/ReadingProgress'
import LightboxImage from '../LightboxImage'

export const metadata: Metadata = {
  title: 'Making Room for Agents in Expert Tools — Outshift Design',
  description:
    'A design exploration of how AI agents can be integrated into expert workflows in security, network ops, policy admin, and finance.',
  openGraph: {
    type: 'website',
    title: 'Making Room for Agents in Expert Tools — Outshift Design',
    description:
      'A design exploration of how AI agents can be integrated into expert workflows in security, network ops, policy admin, and finance.',
    url: 'https://vaesposito.github.io/outshift-design/making-room-for-agents.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Making Room for Agents in Expert Tools — Outshift Design',
    description:
      'A design exploration of how AI agents can be integrated into expert workflows in security, network ops, policy admin, and finance.',
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Making Room for Agents in Expert Tools',
  description:
    'A design exploration of how AI agents can be integrated into expert workflows in security, network ops, policy admin, and finance.',
  author: { '@type': 'Person', name: 'Marc Scibelli' },
  publisher: { '@type': 'Organization', name: 'Outshift Design' },
  datePublished: '2026-05-03',
  url: 'https://vaesposito.github.io/outshift-design/blog/making-room-for-agents',
  image: 'https://vaesposito.github.io/outshift-design/images/blog/making-room-agents/hero.png',
  keywords: ['AI agents', 'expert tools', 'UX design', 'human-agent interaction', 'design patterns'],
}

function CaseSummary({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="case-summary">
      {items.map((item) => (
        <div className="case-summary-item" key={item.label}>
          <div className="case-summary-label">{item.label}</div>
          <div className="case-summary-value">{item.value}</div>
        </div>
      ))}
    </div>
  )
}

export default function MakingRoomForAgentsPage() {
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
            Making Room for Agents in Expert Tools
          </div>

          <div className="article-meta">
            <span className="article-tag">Design</span>
            <span className="article-tag">AI</span>
            <span className="article-tag">Product Design</span>
            <span className="article-date">May 3, 2026</span>
            <span className="article-read-time">11 min read</span>
          </div>

          <h1 className="article-title">Making Room for Agents in Expert Tools</h1>

          <div className="article-hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset('/images/blog/making-room-agents/hero.png')}
              alt="Making Room for Agents in Expert Tools"
            />
          </div>

          <div className="author-row">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset('/images/blog/making-room-agents/marc-headshot.jpg')}
              alt="Marc Scibelli"
              className="author-avatar"
            />
            <div>
              <div className="author-name">Marc Scibelli</div>
              <div className="author-title">Director, UI/UX Engineering</div>
            </div>
          </div>

          <div className="article-body">
            <p>One thing I keep noticing in expert tools is how quickly the conversation around AI collapses into interface patterns.</p>

            <p>Add a side panel. Add a chat assistant. Add a prompt box.</p>

            <p>But that is not really the design problem I see.</p>

            <p>In expert products like security consoles, network operations platforms, and financial terminals, what users rely on is not just the visible interface. Over time they develop a feel for the product&apos;s deeper logic: where signal tends to show up, where proof lives, how interpretation starts to form, and which paths hold up when the pressure is on.</p>

            <p>The tool becomes more than a set of screens — it becomes a learned structure for how the work gets done.</p>

            <p>That is what makes agent integration hard for these expert tools.</p>

            <p>Adding an agent that is supposed to interpret, prepare, suggest, remember, and sometimes act is not like adding one more feature. It means introducing a new participant into a working environment that already has an established logic, built over years through trust, repetition, and expert fluency.</p>

            <p>I have seen a version of this dynamic before. When I led design at Infor, working across large enterprise platforms being moved from on-prem products to a broader cloud suite, I dealt with deeply ingrained expert users all the time. Their expertise was often one of the best sources of insight, but it could also become a major bottleneck to change. I used to call it &quot;the tyranny of the super-user.&quot;</p>

            <p>That tension matters again now with AI integrations. The people who know these systems best are often the first to push back on change, not because they are resistant by nature, but because they understand what even small disruptions can cost once a product has become part of how their work gets done.</p>

            <p>In many products, the first answer to AI integration has been to slap a chat assistant to the side of the interface. That&apos;s probably safe, but not enough for an expert system.</p>

            <p>We need to start tackling the hard work of how an agent should actually participate in the work. What should it be allowed to see? When should it step forward? How should it connect its output to evidence? How does it hand work back? And how do you make its role clear enough that the product still feels dependable to the people who know it best?</p>

            <div className="callout">
              Expert tools always have a grammar. Not a visual style, but a deeper structure of orientation, evidence, action, and trust. If agents are going to enter these environments well, they have to map onto that grammar.
            </div>

            <hr />

            <h2>The grammar of expert tools</h2>

            <p>Every expert product has a logic that only really becomes visible once someone has spent enough time inside it. There are stable anchors that help people stay oriented, places where they know evidence lives, and places where interpretation starts to form.</p>

            <p>Expert users know the shortest paths for moving between the two. They understand the grammar for moments where speed matters, where verification matters, and where judgment cannot be abstracted away.</p>

            <p>That&apos;s the grammar I&apos;m talking about. It&apos;s the structure that lets expertise take hold inside the product.</p>

            <p>Once you look at expert tools that way, the design problem shifts from adding an assistant that answers questions to creating an interface for a working relationship, with context and user judgment at the center.</p>

            <p>So I explored that through four small design experiments across security, network operations, policy administration, and financial position management.</p>

            <p>These aren&apos;t meant to be full-on product designs — they&apos;re just vibe-designed ways I am trying out to test a specific question:</p>

            <div className="callout">
              How can an agent participate in work with an expert without displacing the structure that already makes that expert&apos;s work possible?
            </div>

            <hr />

            <h2>1. Security investigation: the agent as case-building partner</h2>

            <CaseSummary
              items={[
                { label: 'Topic', value: 'Security investigation console' },
                { label: 'Agent role', value: 'A case-building partner that helps frame the incident, surface plausible hypotheses, connect them to evidence, and suggest next pivots.' },
                { label: 'What changes', value: 'The analyst gets faster support in building and revising a working theory.' },
                { label: 'What does not', value: 'Raw evidence stays visible, uncertainty stays open, and the analyst still owns the case.' },
              ]}
            />

            <p>The first concept sits inside a security investigation console, where the division between evidence and interpretation is central to the work. An analyst moves across alerts, timelines, entity relationships, raw logs, and case notes, slowly building a case from incomplete and often messy signals. The problem is rarely that the data is missing from the tool. The problem is stitching it into something coherent without losing track of why one clue matters more than another.</p>

            <p>The agent enters as a case-building partner. It flags the alerts that appear most relevant, surfaces a few plausible hypotheses and links them back to specific evidence, highlights correlated clusters on the timeline, traces a likely attack path through the entity graph, and drafts a case narrative directly inside the analyst&apos;s notes as the picture sharpens.</p>

            <p>What matters is that it does not replace the investigation process. It does not hide the logs behind a clean summary or turn a working theory into a finished answer. The analyst still needs to inspect the underlying material, challenge the framing, reject the wrong hypothesis, approve or discard the drafted note, and keep the case open long enough for uncertainty to stay visible.</p>

            <div className="article-img-pair">
              <LightboxImage src={asset('/images/blog/making-room-agents/concept_01_security_investigation.svg')} alt="Security investigation concept" />
              <LightboxImage src={asset('/images/blog/making-room-agents/annotated_01_security_investigation.svg')} alt="Security investigation annotated" />
            </div>
            <ul className="caption-list">
              <li><strong>Expanded alert context.</strong> The flagged alert opens inline to show the incident narrative, ranked hypotheses, and suggested next pivots. The analyst gets a working theory without leaving the alerts queue.</li>
              <li><strong>Correlated cluster on timeline.</strong> The agent groups related events and highlights the cluster visually. This surfaces the burst pattern the analyst would otherwise need to spot manually.</li>
              <li><strong>Attack path overlay.</strong> A suggested traversal path drawn over the entity graph in the analyst&apos;s own evidence view. Gives the analyst a starting thread to verify or reject.</li>
              <li><strong>Hypothesis tags on log lines.</strong> Small markers linking individual log entries back to the hypotheses they support — keeping the connection between raw evidence and interpretation visible.</li>
              <li><strong>Unresolved questions.</strong> Open gaps the agent cannot fill are surfaced explicitly, keeping uncertainty visible rather than burying it behind confident-sounding summaries.</li>
              <li><strong>Draft case note.</strong> The agent prepares a draft summary directly inside the case notes panel. Approve, edit, or discard are all one action away.</li>
            </ul>

            <hr />

            <h2>2. Network operations: the agent as triage guide</h2>

            <CaseSummary
              items={[
                { label: 'Topic', value: 'Network operations console' },
                { label: 'Agent role', value: 'A triage partner that groups correlated signals into incident clusters, labels affected devices, and surfaces what to check next.' },
                { label: 'What changes', value: 'The operator gets a starting interpretation of which alerts are the same problem and how far the damage extends.' },
                { label: 'What does not', value: 'Individual alerts stay visible, the operator still consoles into devices, verifies groupings, and determines root cause.' },
              ]}
            />

            <p>The second concept sits inside a network operations console, where the core challenge is making sense of cascading failures fast enough to act on them. An operator watches a health table, an alert stream, a topology view, and device detail panels, trying to figure out which of the dozens of signals firing at once are actually the same problem.</p>

            <p>A single upstream failure can produce forty downstream alerts, and separating the root from the noise takes pattern recognition under time pressure. The agent enters as a triage partner — grouping correlated signals into incident clusters, labeling the devices that belong to each group, overlaying those groupings on the topology, and flagging what to check next.</p>

            <p>What matters is that it does not take over the triage process. It does not auto-resolve incidents or hide individual alerts behind a rolled-up summary. The operator still needs to console into the device, verify the grouping makes sense, and determine the actual root cause.</p>

            <div className="article-img-pair">
              <LightboxImage src={asset('/images/blog/making-room-agents/concept_02_network_operations.svg')} alt="Network operations concept" />
              <LightboxImage src={asset('/images/blog/making-room-agents/annotated_02_network_operations.svg')} alt="Network operations annotated" />
            </div>
            <ul className="caption-list">
              <li><strong>Expanded triage context.</strong> The flagged device opens inline to show why the agent grouped these signals, what the blast radius looks like, and what to check next.</li>
              <li><strong>Correlation markers on alert stream.</strong> Each alert is tagged with its incident group — letting the operator see at a glance which alerts are part of the same cascading failure.</li>
              <li><strong>Cluster overlay on topology.</strong> The agent draws the incident boundary directly onto the topology view, without requiring a switch to a separate map or summary.</li>
              <li><strong>Unresolved questions and confidence.</strong> Open uncertainties and confidence levels sit inside the device detail panel, keeping the operator grounded in what still needs verification.</li>
            </ul>

            <hr />

            <h2>3. Policy administration: the agent as consequence layer</h2>

            <CaseSummary
              items={[
                { label: 'Topic', value: 'Policy administration tool' },
                { label: 'Agent role', value: 'A consequence analyst that explains rules in plain language, flags conflicts, traces exception spillover, and surfaces the governance burden of the current configuration.' },
                { label: 'What changes', value: 'The admin can see what a change will do downstream before committing to it.' },
                { label: 'What does not', value: 'The admin still owns every decision: resolving conflicts, scoping exceptions, and sending changes through formal approval.' },
              ]}
            />

            <p>The policy administration concept deals with defining rules, managing exceptions, and navigating the dependency chains that connect one policy to the rest of the system. The danger is not making a bad rule. The danger is making a reasonable rule that quietly breaks something three policies away.</p>

            <p>The agent enters as a consequence analyst. It explains what a rule does in plain language, flags conflicts with other policies, traces exception spillover through the dependency chain, and surfaces the governance burden of the current configuration. When a conflict exists, the agent shows exactly which rules contradict and what would happen under different resolution paths.</p>

            <p>What matters is that it does not make policy decisions. It does not auto-resolve conflicts or silently adjust scopes to avoid problems. The admin still needs to approve or reject changes, decide whether a conflict is acceptable, and send the change through the formal approval workflow.</p>

            <div className="article-img-pair">
              <LightboxImage src={asset('/images/blog/making-room-agents/concept_03_policy_admin.svg')} alt="Policy administration concept" />
              <LightboxImage src={asset('/images/blog/making-room-agents/annotated_03_policy_admin.svg')} alt="Policy administration annotated" />
            </div>

            <ul className="caption-list">
              <li><strong>Conflict marker on policy list.</strong> A small flag on the list item itself, visible before the admin even opens the rule — putting the signal where scanning happens.</li>
              <li><strong>Inline rule annotations.</strong> Plain language explanation, dependency warning, and conflict alert appear directly below the rule definition while editing.</li>
              <li><strong>Spillover and impact in exceptions.</strong> The agent traces how an exception cascades through dependent policies and shows what would change if it were removed.</li>
              <li><strong>Governance burden in change controls.</strong> A summary of approval complexity, exception count, and downstream exposure sits inside the change controls panel.</li>
              <li><strong>Dependency chain visualization.</strong> The agent draws the policy dependency graph inside the dependencies panel, with the conflict highlighted.</li>
              <li><strong>Recommended actions.</strong> Concrete next steps span the workspace. These are suggestions, not decisions — the admin still owns every action.</li>
            </ul>

            <hr />

            <h2>4. Financial position management: the agent as signal interpreter</h2>

            <CaseSummary
              items={[
                { label: 'Topic', value: 'Financial position management' },
                { label: 'Agent role', value: 'A signal interpreter that flags positions where conditions have changed, surfaces correlations between names, tags news with the positions it affects, and annotates risk when exposure shifts.' },
                { label: 'What changes', value: 'The trader gets earlier visibility into connections between positions, news, and risk that would otherwise require manual cross-referencing.' },
                { label: 'What does not', value: 'The trader still evaluates every signal, decides whether the thesis has changed, and maintains full control over orders, stops, and position sizing.' },
              ]}
            />

            <p>A financial terminal has one of the most deeply learned structures of any expert tool. Traders do not just rely on data density. They rely on a working feel for how positions, orders, risk, charts, news, and alerts fit together in the moment.</p>

            <p>The challenge isn&apos;t simply seeing information — it&apos;s knowing what matters to this book, this exposure, and this decision while markets are moving. If an agent is going to help here, it can&apos;t just replace that model with a generic summary of what the market is doing. It has to add interpretation that is specific to the trader&apos;s context.</p>

            <p>The agent enters as a signal interpreter. It flags positions where conditions have changed enough to warrant a second look, surfaces correlations between positions that might not be obvious from the book alone, tags incoming news with the positions it affects, and annotates risk metrics when portfolio-level exposure shifts.</p>

            <p>What matters is that it does not make trading decisions. It does not move stops, resize positions, or execute orders. The trader still needs to evaluate the signal, decide whether the thesis has changed, and maintain final control over every order.</p>

            <div className="article-img-pair">
              <LightboxImage src={asset('/images/blog/making-room-agents/concept_04_financial_terminal.svg')} alt="Financial terminal concept" />
              <LightboxImage src={asset('/images/blog/making-room-agents/annotated_04_financial_terminal.svg')} alt="Financial terminal annotated" />
            </div>

            <ul className="caption-list">
              <li><strong>Expanded position context.</strong> The flagged position opens inline to show why it matters now, which other positions are connected, and what actions might be worth considering.</li>
              <li><strong>Risk metric annotations.</strong> The agent annotates shifts in portfolio-level risk directly inside the risk panel — beta drift, VaR changes, and concentration warnings appear where the trader already checks exposure.</li>
              <li><strong>Position relevance tags on news.</strong> Incoming headlines are tagged with the tickers they affect and the direction of impact, letting the trader scan the feed and immediately see what matters to their book.</li>
              <li><strong>Suggested stop adjustment.</strong> The agent flags a stop that may need tightening based on momentum and volatility — the suggestion is visible; the decision stays with the trader.</li>
              <li><strong>Chart event annotation.</strong> A vertical marker ties a price inflection to the news catalyst that drove it, connecting the chart to the news feed without requiring manual cross-referencing.</li>
            </ul>

            <hr />

            <h2>What these experiments suggest</h2>

            <p>This is just a rough exploration, but it starts to show a more useful way of thinking about agents in expert tools.</p>

            <p><strong>First, agents need a role, not just a place in the interface.</strong> The design problem becomes what function the agent serves inside the workflow, and whether that function is legible to the user.</p>

            <p><strong>Second, the strongest roles are usually bounded.</strong> The agent works best when it helps build understanding, preserve orientation, reveal consequence, or surface what matters in context. It works less well when it tries to replace the core logic of the tool itself.</p>

            <p><strong>Third, the agent has to stay close to the product&apos;s learned structure.</strong> In every example, the value of the agent depends on its ability to work within an existing logic of evidence, interpretation, and action. It can&apos;t float above the tool as a detached intelligence layer.</p>

            <p><strong>Fourth, evidence and judgment have to remain explicit.</strong> If an agent is going to interpret, suggest, or prepare work, its output needs to stay connected to visible evidence, system state, rules, or positions.</p>

            <div className="callout">
              Expert products do not just need AI features. They need a workable relationship between human expertise and agent participation.
            </div>

            <hr />

            <h2>A few principles that fall out of this</h2>

            <ul className="principles-list">
              <li><strong>Preserve the anchors.</strong> If parts of the product carry orientation for expert users, those structures should not move casually.</li>
              <li><strong>Add synthesis, not substitution.</strong> Agents are strongest when they help connect fragmented work, not when they try to replace the product&apos;s existing logic.</li>
              <li><strong>Keep claims inspectable.</strong> Suggestions, summaries, and proposed next steps need to stay tied to evidence, rules, positions, or visible system state.</li>
              <li><strong>Make the agent&apos;s role legible.</strong> If an agent is acting with some autonomy, the user should understand what kind of role it is playing and why it is stepping in.</li>
              <li><strong>Protect user judgment.</strong> The more capable the agent becomes, the more important it is to keep judgment, accountability, and handoff clear.</li>
              <li><strong>Work within the product&apos;s learned structure.</strong> Expert tools already contain a trusted way of working. Agents need to map onto that structure rather than ask users to reorganize themselves around the agent.</li>
            </ul>

            <hr />

            <h2>What I&apos;m left thinking about</h2>

            <p>For a long time, one of the hardest design problems in enterprise software was figuring out how to improve entrenched tools without breaking the trust and fluency expert users had built inside them. That problem is back now, but in a more demanding form.</p>

            <p>The challenge is how to make room inside these products for this new AI participant in the work. That takes more than attaching a chat assistant to the edge of the tool. It takes a clearer understanding of the learned structure expert users already rely on, and a more careful definition of the role an agent is actually meant to play.</p>

            <p>The best AI integrations won&apos;t come from treating the agent as a layer dropped on top. They&apos;ll come from treating agentic participants as something that has to earn its place inside an established way of working.</p>

            <p>To me, that feels like the real design task ahead of us: not just adding intelligence to expert systems, but figuring out what those systems need to become when expert humans are no longer working alone inside them.</p>

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
