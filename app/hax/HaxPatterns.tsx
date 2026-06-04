'use client'

import { useEffect, useRef } from 'react'

// Verbatim markup migrated from the legacy static hax.html patterns section.
// It is static, first-party content (no user input), injected once and wired
// up with the original interaction logic, scoped to this component's root.
const PATTERNS_HTML = `  <div class="container">
    <div class="patterns-header">
      <h2>Guiding principles</h2>
      <p>Five ideas for trustworthy agent experiences that prioritize human control and agency.</p>
      <hr class="patterns-header-divider">
    </div>
    <div class="patterns-layout">
      <nav class="patterns-nav">
        <div class="pattern-nav-group">
          <button class="pattern-filter is-active" data-pattern="control">Control</button>
          <div class="pattern-subnav is-open" data-subnav="control">
            <button class="pattern-subitem pattern-subitem--section" data-scroll="control-desc">Description</button>
            <button class="pattern-subitem pattern-subitem--section pattern-subitem--toggle" data-toggle="control-patterns">Related Patterns<svg class="subitem-toggle-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 6 8 10 12 6"/></svg></button>
            <div class="pattern-subnav-patterns" id="control-patterns">
              <button class="pattern-subitem" data-scroll="control-scope">Scope &amp; Boundaries</button>
              <button class="pattern-subitem" data-scroll="control-authority">Customization of Autonomy</button>
              <button class="pattern-subitem" data-scroll="control-pgates">Permission &amp; Confirmation Gates</button>
            </div>
            <button class="pattern-subitem pattern-subitem--section" data-scroll="control-how-to">How to implement</button>
            <button class="pattern-subitem pattern-subitem--section" data-scroll="control-pitfalls">Common pitfalls</button>
          </div>
        </div>
        <div class="pattern-nav-group">
          <button class="pattern-filter" data-pattern="clarity">Clarity</button>
          <div class="pattern-subnav" data-subnav="clarity">
            <button class="pattern-subitem pattern-subitem--section" data-scroll="clarity-desc">Description</button>
            <button class="pattern-subitem pattern-subitem--section pattern-subitem--toggle" data-toggle="clarity-patterns">Related Patterns<svg class="subitem-toggle-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 6 8 10 12 6"/></svg></button>
            <div class="pattern-subnav-patterns" id="clarity-patterns">
              <button class="pattern-subitem" data-scroll="clarity-ir">Inline Rationale</button>
              <button class="pattern-subitem" data-scroll="clarity-cd">Confidence &amp; Uncertainty</button>
              <button class="pattern-subitem" data-scroll="clarity-sa">Source Attribution</button>
              <button class="pattern-subitem" data-scroll="clarity-at">Alternatives &amp; Trade-offs</button>
            </div>
            <button class="pattern-subitem pattern-subitem--section" data-scroll="clarity-how-to">How to implement</button>
            <button class="pattern-subitem pattern-subitem--section" data-scroll="clarity-pitfalls">Common pitfalls</button>
          </div>
        </div>
        <div class="pattern-nav-group">
          <button class="pattern-filter" data-pattern="recovery">Recovery</button>
          <div class="pattern-subnav" data-subnav="recovery">
            <button class="pattern-subitem pattern-subitem--section" data-scroll="recovery-desc">Description</button>
            <button class="pattern-subitem pattern-subitem--section pattern-subitem--toggle" data-toggle="recovery-patterns">Related Patterns<svg class="subitem-toggle-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 6 8 10 12 6"/></svg></button>
            <div class="pattern-subnav-patterns" id="recovery-patterns">
              <button class="pattern-subitem" data-scroll="recovery-undo">Undo &amp; Redo Support</button>
              <button class="pattern-subitem" data-scroll="recovery-eo">Editable Outputs</button>
              <button class="pattern-subitem" data-scroll="recovery-sd">Safe Defaults</button>
              <button class="pattern-subitem" data-scroll="recovery-ep">Escalation Paths</button>
            </div>
            <button class="pattern-subitem pattern-subitem--section" data-scroll="recovery-how-to">How to implement</button>
            <button class="pattern-subitem pattern-subitem--section" data-scroll="recovery-pitfalls">Common pitfalls</button>
          </div>
        </div>
        <div class="pattern-nav-group">
          <button class="pattern-filter" data-pattern="collaboration">Collaboration</button>
          <div class="pattern-subnav" data-subnav="collaboration">
            <button class="pattern-subitem pattern-subitem--section" data-scroll="collaboration-desc">Description</button>
            <button class="pattern-subitem pattern-subitem--section pattern-subitem--toggle" data-toggle="collaboration-patterns">Related Patterns<svg class="subitem-toggle-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 6 8 10 12 6"/></svg></button>
            <div class="pattern-subnav-patterns" id="collaboration-patterns">
              <button class="pattern-subitem" data-scroll="collab-mi">Mixed Initiative</button>
              <button class="pattern-subitem" data-scroll="collab-ce">Co-editing Interfaces</button>
              <button class="pattern-subitem" data-scroll="collab-rc">Role Clarity &amp; Turn Signals</button>
            </div>
            <button class="pattern-subitem pattern-subitem--section" data-scroll="collaboration-how-to">How to implement</button>
            <button class="pattern-subitem pattern-subitem--section" data-scroll="collaboration-pitfalls">Common pitfalls</button>
          </div>
        </div>
        <div class="pattern-nav-group">
          <button class="pattern-filter" data-pattern="traceability">Traceability</button>
          <div class="pattern-subnav" data-subnav="traceability">
            <button class="pattern-subitem pattern-subitem--section" data-scroll="traceability-desc">Description</button>
            <button class="pattern-subitem pattern-subitem--section pattern-subitem--toggle" data-toggle="traceability-patterns">Related Patterns<svg class="subitem-toggle-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 6 8 10 12 6"/></svg></button>
            <div class="pattern-subnav-patterns" id="traceability-patterns">
              <button class="pattern-subitem" data-scroll="trace-ah">Action History</button>
              <button class="pattern-subitem" data-scroll="trace-vd">Visual Diffing</button>
              <button class="pattern-subitem" data-scroll="trace-bt">Behavior Tuning Over Time</button>
            </div>
            <button class="pattern-subitem pattern-subitem--section" data-scroll="traceability-how-to">How to implement</button>
            <button class="pattern-subitem pattern-subitem--section" data-scroll="traceability-pitfalls">Common pitfalls</button>
          </div>
        </div>
      </nav>
      <div class="patterns-content">

    <div class="pattern-panel is-active" data-panel="control">
      <h3 class="pattern-title" id="control-desc">Control</h3>
      <p class="pattern-desc">Let the Human Set the Rules</p>

      <div class="pattern-info-row">
        <div class="pattern-info">
          <span class="pattern-info-symbol">?</span>
          <p class="pattern-info-title">What it means</p>
          <p>Humans guide how agents operate by setting boundaries, preferences, and intent. Rather than making assumptions, agents respond to this direction with flexibility. Control doesn't mean limiting autonomy, it means aligning it with human goals.</p>
        </div>
        <div class="pattern-why">
          <span class="pattern-info-symbol">!</span>
          <p class="pattern-info-title">Why this matters</p>
          <p>People are more likely to trust and engage with agents when they understand how decisions are made, and can shape them. Giving users control over behaviors, permissions, and preferences makes the system feel collaborative and intentional, rather than unpredictable.</p>
        </div>
      </div>

      <h4 class="pattern-examples-label" id="control-related">Related Patterns</h4>
      <div class="pattern-related-intro" id="control-scope">
        <p class="pattern-related-intro-name">Scope &amp; Boundaries</p>
        <p class="pattern-related-intro-desc">Users define operational limits for AI behavior. The agent operates within these boundaries, avoiding unintended actions.</p>
      </div>

        <p class="pattern-component-label">Interaction example: Instruction / Scope</p>

        <!-- Interactive: Scope & Boundaries -->
        <div class="scope-demo-wrapper">
          <!-- Callout 1 → tab bar -->
          <div class="scope-callout" style="--ct: 68px;" data-callout="1">
            <span class="sc-num">1</span><span class="sc-line"></span>
            <div class="sc-popover">
              <p class="sc-popover-title">Instruction mode</p>
              <p class="sc-popover-desc">Users define interaction boundaries by selecting input modes, guiding the agent to operate safely within intended, user-controlled scopes.</p>
            </div>
          </div>
          <!-- Callout 2 → content area -->
          <div class="scope-callout" style="--ct: 200px;" data-callout="2">
            <span class="sc-num">2</span><span class="sc-line"></span>
            <div class="sc-popover">
              <p class="sc-popover-title">Task specific boundaries</p>
              <p class="sc-popover-desc">Specific checkboxes define what the AI is allowed to change (e.g., title edits) and what it must avoid. These help define clear behavioral constraints.</p>
            </div>
          </div>

          <div class="scope-demo">
            <!-- Tab bar -->
            <div class="scope-demo-topbar">
              <span class="scope-demo-via">Instructions via</span>
              <div class="scope-demo-tabs">
                <button class="scope-tab active" data-tab="settings">Settings</button>
                <button class="scope-tab" data-tab="chat">Chat</button>
                <button class="scope-tab" data-tab="file">File</button>
                <button class="scope-tab" data-tab="qa">Q&amp;A</button>
              </div>
            </div>

            <!-- Hint -->
            <div class="scope-hint">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 3v7M5 7l3 3 3-3"/></svg>
              Click the tabs above to explore
            </div>

            <!-- Panels -->
            <div class="scope-panels">

              <!-- Settings -->
              <div class="scope-panel active" data-panel="settings">
                <div class="sc-acc-item sc-expanded">
                  <div class="sc-acc-header">
                    <span class="sc-check sc-checked"></span>
                    <span class="sc-num-label">1 of 3</span>
                    <span class="sc-acc-name">Scope &amp; Boundaries</span>
                    <svg class="sc-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 6 8 10 12 6"/></svg>
                  </div>
                  <div class="sc-acc-body">
                    <div class="sc-sub-row"><span class="sc-check sc-checked"></span> Update the item label if it doesn't match the defined scope</div>
                    <div class="sc-sub-row"><span class="sc-check sc-checked"></span> Extend the description to clarify boundaries without altering original intent</div>
                  </div>
                </div>
                <div class="sc-acc-item">
                  <div class="sc-acc-header">
                    <span class="sc-check"></span>
                    <span class="sc-num-label">2 of 3</span>
                    <span class="sc-acc-name">Another Setting</span>
                    <svg class="sc-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 6 8 10 12 6"/></svg>
                  </div>
                </div>
                <div class="sc-acc-item">
                  <div class="sc-acc-header">
                    <span class="sc-check"></span>
                    <span class="sc-num-label">3 of 3</span>
                    <span class="sc-acc-name">Behavioral Limits</span>
                    <svg class="sc-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 6 8 10 12 6"/></svg>
                  </div>
                </div>
              </div>

              <!-- Chat -->
              <div class="scope-panel" data-panel="chat">
                <div class="sc-chat">
                  <div class="sc-msg sc-user">
                    <div class="sc-avatar sc-user-av">U</div>
                    <div class="sc-bubble">Turn off auto-updates for this app</div>
                  </div>
                  <div class="sc-msg sc-agent">
                    <div class="sc-avatar sc-agent-av"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 0 1 .894.553l1.618 3.278 3.618.526a1 1 0 0 1 .554 1.706l-2.618 2.552.618 3.603a1 1 0 0 1-1.451 1.054L10 13.347l-3.233 1.925a1 1 0 0 1-1.451-1.054l.618-3.603L3.316 8.063a1 1 0 0 1 .554-1.706l3.618-.526L9.106 2.553A1 1 0 0 1 10 2z"/></svg></div>
                    <div class="sc-bubble">Do you want to turn off auto-updates for all apps or just this one?</div>
                  </div>
                  <div class="sc-msg sc-user">
                    <div class="sc-avatar sc-user-av">U</div>
                    <div class="sc-bubble">Yeah, show me the options</div>
                  </div>
                  <div class="sc-msg sc-agent">
                    <div class="sc-avatar sc-agent-av"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 0 1 .894.553l1.618 3.278 3.618.526a1 1 0 0 1 .554 1.706l-2.618 2.552.618 3.603a1 1 0 0 1-1.451 1.054L10 13.347l-3.233 1.925a1 1 0 0 1-1.451-1.054l.618-3.603L3.316 8.063a1 1 0 0 1 .554-1.706l3.618-.526L9.106 2.553A1 1 0 0 1 10 2z"/></svg></div>
                    <div class="sc-bubble sc-with-opts">
                      Which would you like?
                      <div class="sc-opts">
                        <span class="sc-opt">Option 1</span>
                        <span class="sc-opt">Option 2</span>
                        <span class="sc-opt">Option 3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- File -->
              <div class="scope-panel" data-panel="file">
                <div class="sc-file">
                  <p class="sc-file-h">Overview</p>
                  <p class="sc-file-p">This configuration file defines preferences and settings for automated review and analysis of changes, with a focus on new settings. It supports automation, best practice recommendations, and change assessments.</p>
                  <p class="sc-file-h">Title and Description Guidelines</p>
                  <ul class="sc-file-ul">
                    <li><strong>Title:</strong>
                      <ul><li>Update titles as needed to reflect the content of the changes.</li></ul>
                    </li>
                    <li><strong>Description:</strong>
                      <ul>
                        <li>Add relevant context or detail to the PR description directly; do not leave suggestions as comments.</li>
                        <li>Reference: <span class="sc-link">How to write a good request description</span></li>
                      </ul>
                    </li>
                  </ul>
                  <p class="sc-file-h">Summary of Changes</p>
                </div>
              </div>

              <!-- Q&A -->
              <div class="scope-panel" data-panel="qa">
                <div class="sc-qa">
                  <div class="sc-qa-item">
                    <p class="sc-qa-q">1. What is the Instruction / Scope pattern in this context?</p>
                    <div class="sc-qa-a">It's when the user gives a one-time instruction — such as changing a system setting — and the scope of the change is defined either in the file content or in the action of uploading the file itself.</div>
                  </div>
                  <div class="sc-qa-item">
                    <p class="sc-qa-q">2. What does a typical user action look like?</p>
                    <div class="sc-qa-a">The user uploads a file (e.g., config.json, settings.yaml, or a .docx template) that contains configuration data or preferences</div>
                  </div>
                  <div class="sc-qa-item">
                    <p class="sc-qa-q">3. What does the system (agent) do upon receiving the file?</p>
                    <div class="sc-qa-select">Validates the file (format, schema, safety) <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 6 8 10 12 6"/></svg></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="pattern-related-intro" id="control-authority">
          <p class="pattern-related-intro-name">Customization of Autonomy</p>
          <p class="pattern-related-intro-desc">Users control the spectrum of autonomy, from passive suggestions to full automation based on their comfort and context.</p>
        </div>

        <p class="pattern-component-label">Interaction example: Authority Sliders</p>

        <!-- Interactive: Customization of Autonomy -->
        <div class="authority-demo-wrapper">
        <div class="authority-demo">
          <p class="authority-top-label">Agent Control Panel</p>
          <div class="authority-tabs">
            <button class="auth-tab active" data-agent="0">Monitoring Agent</button>
            <button class="auth-tab" data-agent="65">Traffic Control Agent</button>
            <button class="auth-tab" data-agent="35">Alerts Agent</button>
            <button class="auth-tab" data-agent="90">Simulation Agent</button>
          </div>

          <div class="scope-hint">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 3v7M5 7l3 3 3-3"/></svg>
            Click tabs or drag the slider to explore
          </div>

          <div class="authority-body">
            <p class="authority-scope-label">Scope of Authority</p>
            <div class="authority-slider-wrap">
              <input type="range" class="authority-slider" min="0" max="100" value="0" id="authoritySlider">
              <div class="authority-track-labels">
                <span>Monitoring</span>
                <span>Guided</span>
                <span>Full Control</span>
              </div>
              <!-- Callouts positioned below the track labels -->
              <div class="authority-callouts">
                <div class="auth-callout" data-n="1">
                  <span class="auth-vline"></span>
                  <span class="sc-num">1</span>
                  <div class="sc-popover sc-popover--up">
                    <p class="sc-popover-title">Monitoring</p>
                    <p class="sc-popover-desc">Agent observes and reports but takes no autonomous action. Full human oversight.</p>
                  </div>
                </div>
                <div class="auth-callout" data-n="2">
                  <span class="auth-vline"></span>
                  <span class="sc-num">2</span>
                  <div class="sc-popover sc-popover--up">
                    <p class="sc-popover-title">Guided</p>
                    <p class="sc-popover-desc">Agent suggests actions and awaits human approval before executing. Collaborative control.</p>
                  </div>
                </div>
                <div class="auth-callout" data-n="3">
                  <span class="auth-vline"></span>
                  <span class="sc-num">3</span>
                  <div class="sc-popover sc-popover--up">
                    <p class="sc-popover-title">Full Control</p>
                    <p class="sc-popover-desc">Agent acts autonomously within defined boundaries, optimizing for outcomes without step-by-step approval.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div><!-- /.authority-demo-wrapper -->

      <div class="pattern-related-intro" id="control-pgates">
        <p class="pattern-related-intro-name">Permission &amp; Confirmation Gates</p>
      <p class="pattern-related-intro-desc">Explicit checkpoints require human approval before proceeding. Safeguards critical operations through shared decision-making.</p>
    </div>

    <p class="pattern-component-label">Interaction example: Kill switch and preview modes</p>

    <!-- Interactive: Permission & Confirmation Gates -->
    <div class="pgates-demo-wrapper">
      <!-- Callout 1 → toggle -->
      <div class="scope-callout" style="--ct: 128px;" data-callout="pg1">
        <span class="sc-num">1</span><span class="sc-line"></span>
        <div class="sc-popover">
          <p class="sc-popover-title">Immediate agent shutdown</p>
          <p class="sc-popover-desc">A prominent "Disable Agent" toggle gives users a fast, irreversible way to halt all agent activity. This supports emergency intervention and restores user authority instantly.</p>
        </div>
      </div>
      <!-- Callout 2 → current activities -->
      <div class="scope-callout" style="--ct: 230px;" data-callout="pg2">
        <span class="sc-num">2</span><span class="sc-line"></span>
        <div class="sc-popover">
          <p class="sc-popover-title">Visible control settings</p>
          <p class="sc-popover-desc">The system shows settings upfront allowing the user to assess whether to make decisions based on risks and live situations.</p>
        </div>
      </div>

      <div class="pgates-demo">
        <p class="pgates-header">Agent Control Panel</p>
        <div class="pgates-tabs">
          <button class="pgates-tab active">Traffic Control Agent</button>
          <button class="pgates-tab">Alerts Agent</button>
          <button class="pgates-tab">Simulation Agent</button>
        </div>
        <div class="pgates-body">
          <!-- Toggle card -->
          <div class="pgates-card">
            <div class="pgates-toggle-row">
              <label class="pgates-toggle">
                <input type="checkbox" class="pgates-toggle-input">
                <span class="pgates-toggle-track">
                  <span class="pgates-toggle-thumb"></span>
                </span>
              </label>
              <span>Disable Agent</span>
            </div>
          </div>
          <!-- Current Activities card -->
          <div class="pgates-card">
            <p class="pgates-section-title">Current Activities</p>
            <label class="pgates-check-row">
              <span class="pgates-check checked"></span>
              Require approval before proceeding
            </label>
            <div class="pgates-field">
              <p class="pgates-field-label">Approval Load <span class="pgates-required">*</span></p>
              <div class="pgates-input-mock">75%</div>
            </div>
            <label class="pgates-check-row">
              <span class="pgates-check"></span>
              Ask user to confirm finalizing
            </label>
            <label class="pgates-check-row" style="margin-bottom:0">
              <span class="pgates-check"></span>
              Log every action performed
            </label>
            <hr class="pgates-divider">
          </div>
        </div>
      </div>
    </div>

    <div class="pattern-divider"></div>
    <h4 class="pattern-examples-label" id="control-how-to">How to implement</h4>
    <ul class="how-to-list">
      <li>Make automation opt-in, never assume users want it</li>
      <li>Let users override any system decision, anytime</li>
      <li>Show what rules are active and how they're working</li>
      <li>Make it easy to change and adjust settings</li>
    </ul>

    <div class="pattern-divider"></div>
    <h4 class="pattern-examples-label" id="control-pitfalls">Common pitfalls</h4>
    <div class="pitfalls-grid">
      <div class="pitfall-card">
        <p class="pitfall-card-title">Over-reliance on implicit controls</p>
        <p class="pitfall-card-desc">Assuming users understand what the agent is doing without clear communication</p>
      </div>
      <div class="pitfall-card">
        <p class="pitfall-card-title">Boundary creep</p>
        <p class="pitfall-card-desc">Agents gradually take on more than intended without safeguards or oversight</p>
      </div>
      <div class="pitfall-card">
        <p class="pitfall-card-title">Ambiguous authority</p>
        <p class="pitfall-card-desc">It is unclear if the agent or the human is responsible for the task, especially in case of failure states</p>
      </div>
      <div class="pitfall-card">
        <p class="pitfall-card-title">Hidden behavior</p>
        <p class="pitfall-card-desc">The agent performs actions without surfacing intent or outcomes to the user</p>
      </div>
    </div>

    </div><!-- /.pattern-panel control -->

    <div class="pattern-panel" data-panel="clarity">
      <h3 class="pattern-title" id="clarity-desc">Clarity</h3>
      <p class="pattern-desc">Show the agent's reasoning</p>

      <div class="pattern-info-row">
        <div class="pattern-info">
          <span class="pattern-info-symbol">?</span>
          <p class="pattern-info-title">What it means</p>
          <p>Agents should make their reasoning, context, and confidence visible. Instead of acting like black boxes, they show how decisions are made so users can understand, question, or adjust them.</p>
        </div>
        <div class="pattern-why">
          <span class="pattern-info-symbol">!</span>
          <p class="pattern-info-title">Why this matters</p>
          <p>People make better decisions when they understand how an agent reached its conclusion. Clarity helps users spot errors, judge reliability, and decide when to lean in or push back.</p>
        </div>
      </div>

      <h4 class="pattern-examples-label" id="clarity-related">Related Patterns</h4>
      <div class="pattern-related-intro" id="clarity-ir">
        <p class="pattern-related-intro-name">Inline Rationale</p>
        <p class="pattern-related-intro-desc">Agents articulate why they made recommendations. Rationale should be accessible, understandable, and relevant to help users make sense of the thinking.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Inline Rationale</p>

      <!-- Interactive: Inline Rationale -->
      <div class="ir-demo-wrapper">
        <div class="scope-callout" style="--ct: 60px;" data-callout="ir1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Agent's reasoning surfaced</p>
            <p class="sc-popover-desc">The agent labels its own decision logic, making invisible prioritization visible so users can understand, question, or reorder.</p>
          </div>
        </div>
        <div class="scope-callout sc-callout--right" style="--ct: 136px;" data-callout="ir2">
          <span class="sc-num">2</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Scope of impact</p>
            <p class="sc-popover-desc">Quantified impact badges let users grasp real-world consequences at a glance — without needing to investigate further.</p>
          </div>
        </div>
        <div class="scope-callout" style="--ct: 222px;" data-callout="ir3">
          <span class="sc-num">3</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Contextual rationale</p>
            <p class="sc-popover-desc">A brief description explains the incident's cause, supporting informed decisions without overwhelming the interface.</p>
          </div>
        </div>
        <div class="ir-demo">
          <div class="ir-demo-header">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5v3.5l2 1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Prioritizing incidents based on severity and impact
          </div>
          <div class="ir-incidents">
            <div class="ir-incident">
              <div class="ir-incident-top">
                <span class="ir-incident-title">Incident 1</span>
                <div class="ir-badges">
                  <span class="ir-badge ir-badge-high">
                    <svg viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="currentColor" opacity="0.25"/><path d="M4 4l4 4M8 4l-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                    High
                  </span>
                  <span class="ir-badge ir-badge-impact">Impact: 8 departments; 233 Devices</span>
                </div>
              </div>
              <p class="ir-incident-desc">Description of the incident, what is causing it and more details on impact</p>
            </div>
            <div class="ir-incident">
              <div class="ir-incident-top">
                <span class="ir-incident-title">Incident 2</span>
                <div class="ir-badges">
                  <span class="ir-badge ir-badge-medium">
                    <svg viewBox="0 0 12 12" fill="none"><path d="M6 1.5L11 10H1L6 1.5z" stroke="currentColor" stroke-width="1.2" fill="currentColor" opacity="0.2"/><path d="M6 5v2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="6" cy="9" r="0.6" fill="currentColor"/></svg>
                    Medium
                  </span>
                  <span class="ir-badge ir-badge-impact">Impact: 3 departments; 75 Users</span>
                </div>
              </div>
              <p class="ir-incident-desc">Description of the incident, what is causing it and more details on impact</p>
            </div>
          </div>
        </div>
      </div>

      <div class="pattern-related-intro" id="clarity-cd">
        <p class="pattern-related-intro-name">Confidence &amp; Uncertainty Displays</p>
        <p class="pattern-related-intro-desc">Disclosing confidence levels helps users interpret outcomes effectively and calibrate trust appropriately for transparent decision support.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Diagnostic Report</p>

      <!-- Interactive: Confidence & Uncertainty Display -->
      <div class="cd-demo-wrapper">
        <!-- Callout 1: left — Reasoning linked to confidence -->
        <div class="scope-callout" style="--ct: 178px;" data-callout="cd1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Reasoning linked to confidence</p>
            <p class="sc-popover-desc">Explanations are paired with certainty indicators, showing why the system believes something and how strongly it believes it. This helps users validate or challenge the logic.</p>
          </div>
        </div>
        <!-- Callout 2: top — Confidence levels made visible -->
        <div class="scope-callout sc-callout--top" style="--cl: 272px;" data-callout="cd2">
          <span class="sc-num">2</span>
          <span class="sc-line sc-line--v"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Confidence levels made visible</p>
            <p class="sc-popover-desc">Each insight is accompanied by a clear degree of certainty, often a percentage or visual indicator. This helps users assess how much trust to place in each suggestion.</p>
          </div>
        </div>
        <!-- Callout 3: right — Actions calibrated to certainty -->
        <div class="scope-callout sc-callout--right" style="--ct: 178px;" data-callout="cd3">
          <span class="sc-num">3</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Actions calibrated to certainty</p>
            <p class="sc-popover-desc">The system tailors its suggested actions based on confidence — more assertive steps when certainty is high, and more cautious ones when confidence is low.</p>
          </div>
        </div>
        <!-- Callout 4: bottom — Low confidence is still shown -->
        <div class="scope-callout sc-callout--bottom" style="--cl: 272px;" data-callout="cd4">
          <span class="sc-line sc-line--v"></span>
          <span class="sc-num">4</span>
          <div class="sc-popover">
            <p class="sc-popover-title">Low confidence is still shown</p>
            <p class="sc-popover-desc">Even uncertain insights are surfaced, not hidden — but clearly marked. This promotes transparency and allows human judgment to guide next steps.</p>
          </div>
        </div>

        <div class="cd-demo">
          <p class="cd-demo-title">Diagnostic Report with Actionables</p>
          <div class="cd-table-head">
            <span class="cd-th">Suspected Cause</span>
            <span class="cd-th">Confidence</span>
            <span class="cd-th">Rationale</span>
            <span class="cd-th">Recommended Action</span>
          </div>
          <div class="cd-row">
            <div class="cd-td">High Resource Utilization in Component A</div>
            <div class="cd-td">
              <span class="cd-conf-label">High <span class="cd-conf-pct">(80%)</span></span>
              <div class="cd-bar-wrap"><div class="cd-bar cd-bar--high"></div></div>
            </div>
            <div class="cd-td cd-td--muted">Reasoning on why this is happening</div>
            <div class="cd-td"><button class="cd-action-btn">Resolution 1</button></div>
          </div>
          <div class="cd-row">
            <div class="cd-td">Environmental Interference in Zone X</div>
            <div class="cd-td">
              <span class="cd-conf-label">Medium <span class="cd-conf-pct">(43%)</span></span>
              <div class="cd-bar-wrap"><div class="cd-bar cd-bar--medium"></div></div>
            </div>
            <div class="cd-td cd-td--muted">Reasoning on why this is happening</div>
            <div class="cd-td"><button class="cd-action-btn">Resolution 2</button></div>
          </div>
          <div class="cd-row">
            <div class="cd-td">Processing Bottleneck</div>
            <div class="cd-td">
              <span class="cd-conf-label">Low <span class="cd-conf-pct">(25%)</span></span>
              <div class="cd-bar-wrap"><div class="cd-bar cd-bar--low"></div></div>
            </div>
            <div class="cd-td cd-td--muted">Reasoning on why this is happening</div>
            <div class="cd-td"><button class="cd-action-btn">Resolution 3</button></div>
          </div>
        </div>
      </div>

      <div class="pattern-related-intro" id="clarity-sa">
        <p class="pattern-related-intro-name">Source Attribution</p>
        <p class="pattern-related-intro-desc">Revealing where information came from helps users verify and contextualize outputs, supporting accountability and enabling further inquiry.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Findings with Sources</p>

      <!-- Interactive: Source Attribution -->
      <div class="sa-demo-wrapper">
        <!-- Callout 1: left — Source labels are visually distinct -->
        <div class="scope-callout" style="--ct: 68px;" data-callout="sa1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Source labels are visually distinct and clickable</p>
            <p class="sc-popover-desc">The source elements are styled for immediate recognition and likely interactive (e.g., tags, badges, or buttons), improving usability and clarity.</p>
          </div>
        </div>
        <!-- Callout 2: left — Claims supported by cited references -->
        <div class="scope-callout" style="--ct: 178px;" data-callout="sa2">
          <span class="sc-num">2</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Claims supported by cited references</p>
            <p class="sc-popover-desc">Each recommendation is backed by named sources, allowing users to verify the rationale and explore more details independently.</p>
          </div>
        </div>

        <div class="sa-demo">
          <p class="sa-demo-title">Findings about the System</p>
          <div class="sa-finding">
            <p class="sa-finding-title">Finding 1</p>
            <p class="sa-finding-desc">Recommendation about the finding</p>
            <div class="sa-sources">
              <span class="sa-sources-label">Sources:</span>
              <span class="sa-source-tag">Source label with link</span>
              <span class="sa-source-tag">Source label with link</span>
            </div>
          </div>
          <div class="sa-finding">
            <p class="sa-finding-title">Finding 2</p>
            <p class="sa-finding-desc">Recommendation about the finding</p>
            <div class="sa-sources">
              <span class="sa-sources-label">Sources:</span>
              <span class="sa-source-tag">Source label with link</span>
              <span class="sa-source-tag">Source label with link</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pattern-related-intro" id="clarity-at">
        <p class="pattern-related-intro-name">Alternatives &amp; Trade-offs</p>
        <p class="pattern-related-intro-desc">Showing what the agent didn't choose and why helps users understand trade-offs. It creates transparency and supports participatory decision-making.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Suggested Actions</p>

      <!-- Interactive: Alternatives & Trade-offs -->
      <div class="at-demo-wrapper">
        <!-- Callout 1: left — Consequences and benefits are explicit -->
        <div class="scope-callout" style="--ct: 96px;" data-callout="at1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Consequences and benefits are explicit</p>
            <p class="sc-popover-desc">Includes options with a clear summary of what it changes and what the effect will be, allowing the user to compare outcomes at a glance.</p>
          </div>
        </div>
        <!-- Callout 2: left — Multiple actions presented side-by-side -->
        <div class="scope-callout" style="--ct: 174px;" data-callout="at2">
          <span class="sc-num">2</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Multiple actions presented side-by-side</p>
            <p class="sc-popover-desc">The interface surfaces more than one possible action instead of a single automated path. This supports user agency and accommodates different risk tolerances.</p>
          </div>
        </div>
        <!-- Callout 3: right — Supports informed trade-off decisions -->
        <div class="scope-callout sc-callout--right" style="--ct: 174px;" data-callout="at3">
          <span class="sc-num">3</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Supports informed trade-off decisions</p>
            <p class="sc-popover-desc">By presenting pros and cons transparently, the system helps users make context-aware decisions, especially when no option is perfect.</p>
          </div>
        </div>
        <!-- Callout 4: right — Labels indicate duration and reversibility -->
        <div class="scope-callout sc-callout--right" style="--ct: 96px;" data-callout="at4">
          <span class="sc-num">4</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Labels indicate duration and reversibility</p>
            <p class="sc-popover-desc">Visual tags communicate whether an option is temporary, reversible, or long-term. This helps users understand not just the effect, but also the scope and risk.</p>
          </div>
        </div>

        <div class="at-demo">
          <p class="at-demo-title">Suggested actions to improve performance</p>
          <div class="at-cards">
            <div class="at-card">
              <p class="at-card-title">First preferred action</p>
              <div class="at-tags">
                <span class="at-tag at-tag--olive">Temporary measure</span>
                <span class="at-tag at-tag--olive">Immediate, reversible</span>
              </div>
              <p class="at-card-impact">Measurable impact</p>
              <div class="at-actions">
                <button class="at-btn at-btn--primary">Accept</button>
                <button class="at-btn at-btn--outline">Modify</button>
                <button class="at-btn at-btn--outline">Reject</button>
              </div>
            </div>
            <div class="at-card">
              <p class="at-card-title">Second preferred action</p>
              <div class="at-tags">
                <span class="at-tag at-tag--teal">Medium-term measure</span>
                <span class="at-tag at-tag--teal">5 minutes</span>
              </div>
              <p class="at-card-impact">Measurable impact</p>
              <div class="at-actions">
                <button class="at-btn at-btn--primary">Accept</button>
                <button class="at-btn at-btn--outline">Modify</button>
                <button class="at-btn at-btn--outline">Reject</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="pattern-examples-label">How to implement</h4>
      <ul class="how-to-list" id="clarity-how-to">
        <li>Include reasoning explanations alongside every recommendation or decision</li>
        <li>Make explanations accessible through plain language and visual aids</li>
        <li>Use progressive disclosure to offer both quick summaries and detailed explanations</li>
        <li>Show alternative options considered and why they were not chosen</li>
        <li>Provide clear source citations and links for verification</li>
        <li>Display confidence levels and uncertainty ranges where relevant</li>
      </ul>

      <h4 class="pattern-examples-label">Common pitfalls</h4>
      <div class="pitfalls-grid" id="clarity-pitfalls">
        <div class="pitfall-card">
          <p class="pitfall-card-title">Opaque decision logic</p>
          <p class="pitfall-card-desc">Users can't tell why the agent made a choice</p>
        </div>
        <div class="pitfall-card">
          <p class="pitfall-card-title">Over explanation</p>
          <p class="pitfall-card-desc">Flooding users with too much technical detail and overwhelming them with too much detail</p>
        </div>
      </div>

    </div><!-- /.pattern-panel clarity -->

    <div class="pattern-panel" data-panel="recovery">
      <h3 class="pattern-title" id="recovery-desc">Recovery</h3>
      <p class="pattern-desc">Assume the agent will make mistakes, make them clearly fixable</p>

      <div class="pattern-info-row">
        <div class="pattern-info">
          <span class="pattern-info-symbol">?</span>
          <p class="pattern-info-title">What it means</p>
          <p>Agents will make mistakes, what matters is how fixable they are. Recovery means giving users clear, safe ways to undo actions, correct errors, and guide future behavior. It makes systems feel less brittle and more collaborative.</p>
        </div>
        <div class="pattern-why">
          <span class="pattern-info-symbol">!</span>
          <p class="pattern-info-title">Why this matters</p>
          <p>Without recovery, even small errors can erode trust and stall progress. Clear ways to fix mistakes turn agent failures into moments of learning for both the system and the person using it.</p>
        </div>
      </div>

      <h4 class="pattern-examples-label" id="recovery-related">Related Patterns</h4>
      <div class="pattern-related-intro" id="recovery-undo">
        <p class="pattern-related-intro-name">Undo &amp; Redo Support</p>
        <p class="pattern-related-intro-desc">This pattern is essential in agentic systems or tools with automation because it provides a safety net. It protects users from unintended consequences and reinforcing their control.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Undo &amp; Redo Support</p>

      <!-- Interactive: Undo & Redo Support -->
      <div class="ur-demo-wrapper">
        <!-- Callout 1: right — Actions are reversible by default -->
        <div class="scope-callout sc-callout--right" style="--ct: 52px;" data-callout="ur1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Actions are reversible by default</p>
            <p class="sc-popover-desc">The interface includes options like Undo or Revert for each automated change, giving users an immediate path to reverse agent decisions.</p>
          </div>
        </div>
        <!-- Callout 2: right — Justification for actions builds trust -->
        <div class="scope-callout sc-callout--right" style="--ct: 145px;" data-callout="ur2">
          <span class="sc-num">2</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Justification for actions builds trust</p>
            <p class="sc-popover-desc">A short, plain-language explanation helps users understand the rationale behind changes, reducing confusion and making recovery decisions easier.</p>
          </div>
        </div>
        <!-- Callout 3: left — Multiple levels of recovery available -->
        <div class="scope-callout" style="--ct: 268px;" data-callout="ur3">
          <span class="sc-num">3</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Multiple levels of recovery available</p>
            <p class="sc-popover-desc">Users can revert or approve individual changes or apply recovery to all actions at once. This offers both fine-grained control and bulk handling.</p>
          </div>
        </div>

        <div class="ur-demo">
          <p class="ur-demo-title">Agent Suggested Change</p>
          <p class="ur-demo-subtitle">Based on recent activity the agent marked these tasks as complete and reassigned owners</p>
          <hr class="ur-divider">
          <div class="ur-table">
            <div class="ur-thead">
              <span class="ur-th">Task</span>
              <span class="ur-th">Action</span>
              <span class="ur-th"></span>
              <span class="ur-th"></span>
            </div>
            <div class="ur-row">
              <div class="ur-task">
                <span class="ur-task-icon ur-task-icon--check">✓</span>
                Draft Proposal
              </div>
              <div class="ur-action">Marked as complete</div>
              <button class="ur-btn">Undo</button>
              <button class="ur-btn">Adjust</button>
            </div>
            <div class="ur-row">
              <div class="ur-task">
                <span class="ur-task-icon ur-task-icon--arrow">→</span>
                Assign Reviewer
              </div>
              <div class="ur-action">Reassigned to Alex</div>
              <button class="ur-btn">Revert</button>
              <button class="ur-btn">Edit</button>
            </div>
          </div>
          <hr class="ur-divider" style="margin-top: 14px;">
          <p class="ur-why-title">Why this happened</p>
          <p class="ur-why-text">The agent detected inactivity for 5+ days and no blocking comments, so it marked the task as complete.</p>
          <div class="ur-footer">
            <button class="ur-btn-revert">Revert All</button>
            <button class="ur-btn-approve">Approve All</button>
          </div>
        </div>
      </div>

      <div class="pattern-related-intro" id="recovery-eo">
        <p class="pattern-related-intro-name">Editable Outputs</p>
        <p class="pattern-related-intro-desc">Agents should hand off control. Editable outputs ensure that humans retain authorship and can correct or improve AI-generated content easily.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Editable Outputs</p>

      <!-- Interactive: Editable Outputs -->
      <div class="eo-demo-wrapper">
        <!-- Callout 1: left — Human-in-the-loop decision making -->
        <div class="scope-callout" style="--ct: 60px;" data-callout="eo1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Human-in-the-loop decision making</p>
            <p class="sc-popover-desc">The interface shows multiple alternatives, but waits for the user to select one. This maintains control and avoids premature execution.</p>
          </div>
        </div>
        <!-- Callout 2: left — Language supports co-creation -->
        <div class="scope-callout" style="--ct: 230px;" data-callout="eo2">
          <span class="sc-num">2</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Language supports co-creation</p>
            <p class="sc-popover-desc">AI's phrasing encourages collaboration reinforcing the user as the final authority, not a passive observer.</p>
          </div>
        </div>
        <!-- Callout 3: left — Selected output is not final -->
        <div class="scope-callout" style="--ct: 272px;" data-callout="eo3">
          <span class="sc-num">3</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Selected output is not final</p>
            <p class="sc-popover-desc">Once the user picks an option, the system surfaces editable fields instead of applying the change directly. This allows precise customization.</p>
          </div>
        </div>

        <div class="eo-demo">
          <!-- Three alternatives -->
          <div class="eo-alternatives">
            <div class="eo-alt-card">
              <p class="eo-alt-label">Alternative 1</p>
              <p class="eo-alt-title">Explanation</p>
              <p class="eo-alt-impact">Measurable impact</p>
            </div>
            <div class="eo-alt-card">
              <p class="eo-alt-label">Alternative 2</p>
              <p class="eo-alt-title">Explanation</p>
              <p class="eo-alt-impact">Measurable impact</p>
            </div>
            <div class="eo-alt-card">
              <p class="eo-alt-label">Alternative 3</p>
              <p class="eo-alt-title">Explanation</p>
              <p class="eo-alt-impact">Measurable impact</p>
            </div>
          </div>
          <!-- Chat exchange -->
          <div class="eo-chat">
            <div class="eo-msg eo-msg--user">
              <div class="eo-avatar eo-avatar--user">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
              </div>
              <p class="eo-msg-text">Let's go with alternative 1</p>
            </div>
            <div class="eo-msg eo-msg--agent">
              <div class="eo-avatar eo-avatar--agent">A</div>
              <p class="eo-msg-text">Sure, before I go ahead with implementing this, please confirm the following details</p>
            </div>
          </div>
          <!-- Editable fields -->
          <div class="eo-fields">
            <div class="eo-field-row">
              <span class="eo-field-text">Actionable 1</span>
              <span class="eo-select">Metric <span class="eo-select-arrow">▾</span></span>
              <span class="eo-field-text">in categories</span>
              <span class="eo-select eo-select--wide">Category 1 <span class="eo-select-arrow">▾</span></span>
              <span class="eo-field-text">for</span>
              <span class="eo-select">user <span class="eo-select-arrow">▾</span></span>
            </div>
            <div class="eo-field-row">
              <span class="eo-field-text">with exceptions for</span>
              <span class="eo-select">None <span class="eo-select-arrow">▾</span></span>
            </div>
          </div>
        </div>
      </div>

      <div class="pattern-related-intro" id="recovery-sd">
        <p class="pattern-related-intro-name">Safe Defaults</p>
        <p class="pattern-related-intro-desc">Defaulting to conservative actions prevents harm and sets user-friendly expectations, particularly in early use or high-risk environments.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Safe Defaults</p>

      <!-- Interactive: Safe Defaults -->
      <div class="sd-demo-wrapper">
        <!-- Callout 1: left — Builds trust through predictable, gradual control -->
        <div class="scope-callout" style="--ct: 122px;" data-callout="sd1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Builds trust through predictable, gradual control</p>
            <p class="sc-popover-desc">Safe, consistent defaults help users gain confidence and expand control at their own pace.</p>
          </div>
        </div>
        <!-- Callout 2: left — Activation requires explicit user intent -->
        <div class="scope-callout" style="--ct: 195px;" data-callout="sd2">
          <span class="sc-num">2</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Activation requires explicit user intent</p>
            <p class="sc-popover-desc">Features that could affect security or behavior are opt-in only. This ensures users can explore safely and expand functionality on their terms.</p>
          </div>
        </div>

        <div class="sd-demo">
          <div class="sd-header">
            <div class="sd-header-text">
              <p class="sd-title">Rules</p>
              <p class="sd-subtitle">Rules will ensure safe, conservative operation based on prior user interactions and best practices.</p>
            </div>
            <button class="sd-add-btn">Add New</button>
          </div>
          <div class="sd-rules">
            <div class="sd-rule">
              <div class="sd-rule-top">
                <div class="sd-checkbox"></div>
                <span class="sd-rule-name">Default 1</span>
              </div>
              <p class="sd-rule-desc">Description of the default</p>
            </div>
            <div class="sd-rule">
              <div class="sd-rule-top">
                <div class="sd-checkbox"></div>
                <span class="sd-rule-name">Default 2</span>
              </div>
              <p class="sd-rule-desc">Description of the default</p>
            </div>
          </div>
        </div>
      </div>

      <div class="pattern-related-intro" id="recovery-ep">
        <p class="pattern-related-intro-name">Escalation Paths</p>
        <p class="pattern-related-intro-desc">Agents should never trap users. Providing clear escape routes to human assistance or manual control is vital for safety and trust.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Escalation Paths</p>

      <!-- Interactive: Escalation Paths -->
      <div class="ep-demo-wrapper">
        <!-- Callout 1: left — Manual input always available -->
        <div class="scope-callout" style="--ct: 207px;" data-callout="ep1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Manual input and escalation always available</p>
            <p class="sc-popover-desc">Users can directly provide input or ask their own questions at any time, ensuring they remain in control and can override or guide the agent when needed.</p>
          </div>
        </div>
        <!-- Callout 2: left — Clear option to proceed independently -->
        <div class="scope-callout" style="--ct: 258px;" data-callout="ep2">
          <span class="sc-num">2</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Clear option to proceed independently</p>
            <p class="sc-popover-desc">The "Alternate" option offers an immediate escape route — users can skip the assistant and take action themselves without friction or waiting for approval.</p>
          </div>
        </div>

        <div class="ep-demo">
          <!-- Tabs -->
          <div class="ep-tabs">
            <button class="ep-tab active">Chat</button>
            <button class="ep-tab">Workflow</button>
          </div>
          <!-- Body -->
          <div class="ep-body">
            <!-- Message 1 -->
            <div class="ep-msg">
              <div class="ep-msg-top">
                <span class="ep-spark">✦</span>
                <p class="ep-msg-text">Important screen loaded by Agent</p>
              </div>
            </div>
            <!-- Message 2: agent question + user input + alternate -->
            <div class="ep-msg">
              <div class="ep-msg-top">
                <span class="ep-spark">✦</span>
                <p class="ep-msg-text">Agent asks a question about the screen because they cannot make a decision and need clarification from user</p>
              </div>
              <div class="ep-input-row">
                <span class="ep-input-placeholder">Describe step here</span>
                <button class="ep-send">
                  <svg viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="8" x2="14" y2="8"/><polyline points="9 3 14 8 9 13"/></svg>
                </button>
              </div>
              <button class="ep-alt-btn">Alternate</button>
            </div>
          </div>
          <!-- Footer -->
          <div class="ep-footer">
            <div class="ep-footer-input">
              <span class="ep-input-placeholder">Ask the AI Assistant a question</span>
              <button class="ep-send">
                <svg viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="8" x2="14" y2="8"/><polyline points="9 3 14 8 9 13"/></svg>
              </button>
            </div>
            <p class="ep-disclaimer">Assistant can make mistakes. Verify responses.</p>
          </div>
        </div>
      </div>

      <h4 class="pattern-examples-label">How to implement</h4>
      <ul class="how-to-list" id="recovery-how-to">
        <li>Design agents to offer fallback options or manual alternatives instead of total failure</li>
        <li>Use feedback from failure and recovery experiences to continuously improve system behavior</li>
        <li>Make recovery options easy to find, context-sensitive, and layered from simple to advanced controls</li>
      </ul>

      <h4 class="pattern-examples-label">Common pitfalls</h4>
      <div class="pitfalls-grid" id="recovery-pitfalls">
        <div class="pitfall-card">
          <p class="pitfall-card-title">Failing to learn from recovery events</p>
          <p class="pitfall-card-desc">Failing to analyze recovery patterns can lead to repeated mistakes, missing the opportunity to learn from user corrections and improve AI performance over time</p>
        </div>
        <div class="pitfall-card">
          <p class="pitfall-card-title">Lack of granular control</p>
          <p class="pitfall-card-desc">Using only high-level revision features frustrates users who want to undo specific AI actions without losing their own work, missing the need for precise, collaborative recovery</p>
        </div>
        <div class="pitfall-card">
          <p class="pitfall-card-title">Inconsistent recovery experiences</p>
          <p class="pitfall-card-desc">Recovery mechanisms that work differently across different parts of the system confuse users and create cognitive overhead</p>
        </div>
        <div class="pitfall-card">
          <p class="pitfall-card-title">Unclear recovery guidance</p>
          <p class="pitfall-card-desc">Users need clear explanations and recovery options when things go wrong. Vague errors and unclear paths lead to frustration and reduced trust</p>
        </div>
      </div>

    </div><!-- /.pattern-panel recovery -->

    <div class="pattern-panel" data-panel="collaboration">
      <h3 class="pattern-title" id="collaboration-desc">Collaboration</h3>
      <p class="pattern-desc">Design for shared effort and mutual input</p>

      <div class="pattern-info-row">
        <div class="pattern-info">
          <span class="pattern-info-symbol">?</span>
          <p class="pattern-info-title">What it means</p>
          <p>Autonomous agents should act as capable partners, not just tools waiting for commands. Collaboration means shared context, back-and-forth interaction, and joint ownership of outcomes. The agent contributes ideas, takes input, and improves the work in progress.</p>
        </div>
        <div class="pattern-why">
          <span class="pattern-info-symbol">!</span>
          <p class="pattern-info-title">Why this matters</p>
          <p>Collaboration builds stronger results than automation alone. When people and agents shape outcomes together, users stay engaged and push toward more creative, effective solutions.</p>
        </div>
      </div>

      <h4 class="pattern-examples-label" id="collaboration-related">Related Patterns</h4>
      <div class="pattern-related-intro" id="collab-mi">
        <p class="pattern-related-intro-name">Mixed Initiative</p>
        <p class="pattern-related-intro-desc">This pattern fosters adaptive turn-taking between human and agent. It supports fluid collaboration by allowing both to lead based on context.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Mixed Initiative</p>

      <!-- Interactive: Mixed Initiative -->
      <div class="mi-demo-wrapper">
        <!-- Callout 1: left — Agent proactively initiates -->
        <div class="scope-callout" style="--ct: 68px;" data-callout="mi1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Agent proactively initiates based on context</p>
            <p class="sc-popover-desc">Allow the agent to proactively detect issues or make suggestions, especially when it has useful context the user may not.</p>
          </div>
        </div>
        <!-- Callout 2: right — Build on each other's contributions -->
        <div class="scope-callout sc-callout--right" style="--ct: 130px;" data-callout="mi2">
          <span class="sc-num">2</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Build on each other's contributions</p>
            <p class="sc-popover-desc">Design interactions so the agent can refine its outputs in response to human edits or questions. Keep the flow continuous and collaborative.</p>
          </div>
        </div>

        <div class="mi-demo">
          <!-- Left: incident list -->
          <div class="mi-left">
            <p class="mi-left-title">Incidents Detected by Agent</p>
            <div class="mi-incident">
              <div class="mi-incident-top">
                <span class="mi-icon">🔴</span>
                <span class="mi-incident-name">Incident 1</span>
              </div>
              <p class="mi-incident-desc">Description</p>
            </div>
            <div class="mi-incident selected">
              <div class="mi-incident-top">
                <span class="mi-icon">🔴</span>
                <span class="mi-incident-name">Incident 2</span>
              </div>
              <p class="mi-incident-desc">Description</p>
            </div>
            <div class="mi-incident">
              <div class="mi-incident-top">
                <span class="mi-icon">🟠</span>
                <span class="mi-incident-name">Incident 3</span>
              </div>
              <p class="mi-incident-desc">Description</p>
            </div>
            <div class="mi-incident">
              <div class="mi-incident-top">
                <span class="mi-icon">🟠</span>
                <span class="mi-incident-name">Incident 4</span>
              </div>
              <p class="mi-incident-desc">Description</p>
            </div>
          </div>
          <!-- Right: chat -->
          <div class="mi-right">
            <p class="mi-right-title">Triage Incident</p>
            <div class="mi-chat">
              <div class="mi-msg">
                <div class="mi-avatar mi-avatar--agent">A</div>
                <div class="mi-msg-body">
                  <p class="mi-msg-text">I have detected a major issue starting at 09:17 UTC. What would you like to do?</p>
                  <div class="mi-actions">
                    <button class="mi-action-btn">View Interface Errors</button>
                    <button class="mi-action-btn">Compare with historical baseline</button>
                    <button class="mi-action-btn">Simulate Rollback</button>
                  </div>
                </div>
              </div>
              <div class="mi-msg">
                <div class="mi-avatar mi-avatar--user">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                </div>
                <p class="mi-msg-text">Compare it to yesterday, and exclude issue x from the analysis.</p>
              </div>
              <div class="mi-msg">
                <div class="mi-avatar mi-avatar--agent">A</div>
                <p class="mi-msg-text">Done. Compare to yesterday's baseline, it shows a 30% decrease in traffic. I recommend rollback. Would you like to rollback.</p>
              </div>
              <div class="mi-msg">
                <div class="mi-avatar mi-avatar--user">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                </div>
                <p class="mi-msg-text">No rollback yet. Pull logs from first — I want to check status.</p>
              </div>
            </div>
            <div class="mi-footer">
              <div class="mi-input-row">
                <span class="mi-input-placeholder">Ask the AI Assistant a question</span>
                <button class="mi-send">
                  <svg viewBox="0 0 16 16"><path d="M2 8l12-6-5 6 5 6z"/></svg>
                </button>
              </div>
              <p class="mi-disclaimer">Assistant can make mistakes. Verify responses.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="pattern-related-intro" id="collab-ce">
        <p class="pattern-related-intro-name">Co-editing Interfaces</p>
        <p class="pattern-related-intro-desc">Shared content and workspace for both AI and humans foster transparency — building clarity and trust.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Co-editing Interfaces</p>

      <!-- Interactive: Co-editing Interfaces -->
      <div class="ce-demo-wrapper">
        <!-- Callout 1: right — Keep AI suggestions non-intrusive -->
        <div class="scope-callout sc-callout--right" style="--ct: 105px;" data-callout="ce1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Keep AI suggestions non-intrusive</p>
            <p class="sc-popover-desc">Present changes as proposals, not automatic edits. Let users review, accept, modify, or reject.</p>
          </div>
        </div>
        <!-- Callout 2: left — Work in shared view -->
        <div class="scope-callout" style="--ct: 215px;" data-callout="ce2">
          <span class="sc-num">2</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Work in shared view</p>
            <p class="sc-popover-desc">Both AI and human should operate on the same content in the same workspace. Transparency builds clarity and trust.</p>
          </div>
        </div>
        <!-- Callout 3: right — User always has final say -->
        <div class="scope-callout sc-callout--right" style="--ct: 170px;" data-callout="ce3">
          <span class="sc-num">3</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">User always has final say</p>
            <p class="sc-popover-desc">The human is the editor-in-chief. AI assists, but never publishes or commits changes on its own.</p>
          </div>
        </div>
        <!-- Callout 4: right — Make editing modalities clear -->
        <div class="scope-callout sc-callout--right" style="--ct: 430px;" data-callout="ce4">
          <span class="sc-num">4</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Make editing modalities clear</p>
            <p class="sc-popover-desc">Let users choose how the AI helps — proofreading, rewriting, suggesting changes, etc. Provide flexible control modes, not just one-size-fits-all.</p>
          </div>
        </div>

        <div class="ce-shell">
          <!-- Header -->
          <div class="ce-header">
            <p class="ce-header-title">Policy Editing</p>
            <div class="ce-meta">
              <span class="ce-meta-item"><strong>Version:</strong> 1.2</span>
              <span class="ce-meta-item"><strong>Owner:</strong> team Name</span>
              <span class="ce-meta-item"><strong>Last Edited By:</strong> Jane Rivera</span>
            </div>
          </div>
          <!-- Body -->
          <div class="ce-body">
            <!-- Left: document -->
            <div class="ce-editor">
              <p class="ce-doc-title">Policy Details &nbsp; Editing</p>
              <div>
                <p class="ce-section-title">Objective</p>
                <p class="ce-section-body">A long description of policy details document added here by the human user.</p>
              </div>
              <div>
                <p class="ce-section-title">Scope</p>
                <p class="ce-section-body">Applies to all employees, contractors, and third-party users accessing internal systems via the corporate VPN.</p>
              </div>
              <div>
                <div class="ce-rules-header">
                  <p class="ce-section-title" style="margin-bottom:0;">Policy Rules</p>
                  <button class="ce-ai-btn">Improve with AI</button>
                </div>
                <div class="ce-rules-list">
                  <div class="ce-rule active">
                    <p class="ce-rule-name">1. Rule 1 for Policy</p>
                    <p class="ce-rule-desc">Description of the rule written by the human. This is the rule selected and visually distinct from rest.</p>
                  </div>
                  <div class="ce-rule">
                    <p class="ce-rule-name">2. Rule 2 for policy</p>
                    <p class="ce-rule-desc">Description of rule</p>
                  </div>
                  <div class="ce-rule">
                    <p class="ce-rule-name">3. Rule 3 for policy</p>
                    <p class="ce-rule-desc">Description of rule</p>
                  </div>
                  <div class="ce-rule">
                    <p class="ce-rule-name">4. Rule 4 for policy</p>
                    <p class="ce-rule-desc">Description of rule</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Right: assist panel -->
            <div class="ce-assist">
              <p class="ce-assist-title">Assist</p>
              <div class="ce-suggestion">
                <div class="ce-avatar">A</div>
                <div class="ce-suggestion-body">
                  <p class="ce-suggestion-label">Suggestion:</p>
                  <p class="ce-suggestion-text">"This is the recommended text for policy rule number 1"</p>
                </div>
              </div>
              <div class="ce-review-btns">
                <button class="ce-btn">Accept</button>
                <button class="ce-btn">Reject</button>
                <button class="ce-btn">More Options ▾</button>
              </div>
              <div class="ce-assist-spacer"></div>
              <div class="ce-assist-bottom">
                <div class="ce-mode-btns">
                  <button class="ce-mode-btn">Rewrite with AI</button>
                  <button class="ce-mode-btn">Proof Read Document</button>
                  <button class="ce-mode-btn">Suggest Changes</button>
                </div>
                <div class="ce-input-row">
                  <span class="ce-input-placeholder">Ask the AI Assistant a question</span>
                  <button class="ce-send">
                    <svg viewBox="0 0 16 16"><path d="M2 8l12-6-5 6 5 6z"/></svg>
                  </button>
                </div>
                <p class="ce-disclaimer">Assistant can make mistakes. Verify responses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pattern-related-intro" id="collab-rc">
        <p class="pattern-related-intro-name">Role Clarity &amp; Turn Signals</p>
        <p class="pattern-related-intro-desc">Clear handoffs and visible role signals reduce confusion in multi-step tasks. This principle makes collaboration feel more natural and efficient.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Role Clarity &amp; Turn Signals</p>

      <!-- Interactive: Role Clarity & Turn Signals -->
      <div class="rc-demo-wrapper">
        <!-- Callout 1: left — Clear stage-based ownership -->
        <div class="scope-callout" style="--ct: 148px;" data-callout="rc1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Clear stage-based ownership</p>
            <p class="sc-popover-desc">Break workflows into visible stages and indicate who leads each one. This reduces ambiguity and improves accountability.</p>
          </div>
        </div>
        <!-- Callout 2: left — Attribute every action -->
        <div class="scope-callout" style="--ct: 370px;" data-callout="rc2">
          <span class="sc-num">2</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Attribute every action</p>
            <p class="sc-popover-desc">Label actions clearly as system-initiated or human-initiated. This helps users interpret intent and trust the flow.</p>
          </div>
        </div>
        <!-- Callout 3: right — Signal when it's the user's turn -->
        <div class="scope-callout sc-callout--right" style="--ct: 100px;" data-callout="rc3">
          <span class="sc-num">3</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Signal when it's the user's turn</p>
            <p class="sc-popover-desc">Use prompts, buttons, or callouts to indicate when the system is waiting for user input. Avoid passive steps that could confuse ownership.</p>
          </div>
        </div>

        <div class="rc-card">
          <div class="rc-card-header">
            <p class="rc-card-title"><span class="rc-card-title-icon">✦</span> Agent action review required</p>
            <span class="rc-status-badge">Waiting for review</span>
          </div>

          <p class="rc-status-label">Status</p>
          <div class="rc-stepper">
            <!-- Step 1: done -->
            <div class="rc-step">
              <div class="rc-step-track">
                <div class="rc-step-circle rc-step-circle--done">✓</div>
                <div class="rc-connector rc-connector--done"></div>
              </div>
              <span class="rc-step-name rc-step-name--done">AI Drafts Changes</span>
            </div>
            <!-- Step 2: active -->
            <div class="rc-step">
              <div class="rc-step-track">
                <div class="rc-step-circle rc-step-circle--active">2</div>
                <div class="rc-connector"></div>
              </div>
              <span class="rc-step-name rc-step-name--active">Engineer Review</span>
            </div>
            <!-- Step 3 -->
            <div class="rc-step">
              <div class="rc-step-track">
                <div class="rc-step-circle rc-step-circle--pending">3</div>
                <div class="rc-connector"></div>
              </div>
              <span class="rc-step-name">Peer Approval</span>
            </div>
            <!-- Step 4 -->
            <div class="rc-step">
              <div class="rc-step-track">
                <div class="rc-step-circle rc-step-circle--pending">4</div>
                <div class="rc-connector"></div>
              </div>
              <span class="rc-step-name">Staging Deployment</span>
            </div>
            <!-- Step 5: last, no connector -->
            <div class="rc-step">
              <div class="rc-step-track">
                <div class="rc-step-circle rc-step-circle--pending">5</div>
              </div>
              <span class="rc-step-name">Commit</span>
            </div>
          </div>

          <div class="rc-section">
            <p class="rc-section-title">Description</p>
            <p class="rc-section-body">Description of the agent action</p>
          </div>

          <div class="rc-section">
            <p class="rc-section-title">Agent Rationale</p>
            <ul class="rc-rationale-list">
              <li>Reason 1</li>
              <li>Reason 2</li>
              <li>Reason 3</li>
            </ul>
          </div>

          <div class="rc-section">
            <p class="rc-section-title">Actions</p>
            <p class="rc-actions-text">This change is pending your review. It will not move forward until approved. Upon confirmation, it will proceed to peer review for secondary validation.</p>
            <div class="rc-action-btns">
              <button class="rc-btn rc-btn--primary">Accept</button>
              <button class="rc-btn rc-btn--outline">Modify</button>
              <button class="rc-btn rc-btn--outline">Reject</button>
            </div>
          </div>
        </div>
      </div>

      <h4 class="pattern-examples-label">How to implement</h4>
      <ul class="how-to-list" id="collaboration-how-to">
        <li>Define clear, intuitive ways for control to shift between human and AI</li>
        <li>Let the AI learn from collaborative successes and adapt its behavior to match individual user styles and preferences</li>
        <li>Maintain a unified workspace that tracks contributions, context, and progress from both human and AI participants</li>
        <li>Gracefully handle simultaneous edits with merging, version comparison, or deferring to human review when needed</li>
      </ul>

      <h4 class="pattern-examples-label">Common pitfalls</h4>
      <div class="pitfalls-grid" id="collaboration-pitfalls">
        <div class="pitfall-card">
          <p class="pitfall-title">Lack of transparency</p>
          <p class="pitfall-desc">Users don't understand how to influence the agent or override agent actions</p>
        </div>
        <div class="pitfall-card">
          <p class="pitfall-title">Assumed alignment</p>
          <p class="pitfall-desc">The agent acts without confirming intent or context</p>
        </div>
        <div class="pitfall-card">
          <p class="pitfall-title">Rigid flows</p>
          <p class="pitfall-desc">The system doesn't adapt when users try to collaborate or redirect</p>
        </div>
        <div class="pitfall-card">
          <p class="pitfall-title">Binary choices</p>
          <p class="pitfall-desc">Only offering accept/reject rather than co-create options</p>
        </div>
      </div>

    </div><!-- /.pattern-panel collaboration -->

    <div class="pattern-panel" data-panel="traceability">
      <h3 class="pattern-title" id="traceability-desc">Traceability</h3>
      <p class="pattern-desc">Make agent behavior visible, searchable &amp; open to review</p>

      <div class="pattern-info-row">
        <div class="pattern-info">
          <span class="pattern-info-symbol">?</span>
          <p class="pattern-info-title">What it means</p>
          <p>Traceability ensures agent decisions can be reviewed, understood, and improved over time. It makes behavior accountable across sessions, users, and workflows supporting debugging, learning, and workflow improvements.</p>
        </div>
        <div class="pattern-why">
          <span class="pattern-info-symbol">!</span>
          <p class="pattern-info-title">Why this matters</p>
          <p>As agents evolve, so do their decisions. Traceability allows teams to track changes, understand outcomes, and stay aligned in multi-user environments. It turns opaque processes into something you can audit, learn from, and improve.</p>
        </div>
      </div>

      <h4 class="pattern-examples-label" id="traceability-related">Related Patterns</h4>
      <div class="pattern-related-intro" id="trace-ah">
        <p class="pattern-related-intro-name">Action History</p>
        <p class="pattern-related-intro-desc">A chronological record of agent behavior supports traceability and builds long-term accountability in agentic systems.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Action History</p>

      <!-- Interactive: Action History -->
      <div class="ah-demo-wrapper">
        <!-- Callout 1: left — Time-stamped and ordered -->
        <div class="scope-callout" style="--ct: 110px;" data-callout="ah1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Make events time-stamped and ordered</p>
            <p class="sc-popover-desc">List all system and human actions in a clear sequence. Timestamps build trust and help reconstruct events during audits or investigations.</p>
          </div>
        </div>
        <!-- Callout 2: left — Cause and effect -->
        <div class="scope-callout" style="--ct: 240px;" data-callout="ah2">
          <span class="sc-num">2</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Include cause and effect where possible</p>
            <p class="sc-popover-desc">Show how one step led to the next. This helps users understand the rationale and logic behind changes.</p>
          </div>
        </div>
        <!-- Callout 3: left — Automated and manual steps -->
        <div class="scope-callout" style="--ct: 400px;" data-callout="ah3">
          <span class="sc-num">3</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Capture both automated and manual steps</p>
            <p class="sc-popover-desc">Record not just user input, but also system decisions. A full picture improves transparency and enables accountability across the workflow.</p>
          </div>
        </div>
        <!-- Callout 4: right — Plain language -->
        <div class="scope-callout sc-callout--right" style="--ct: 480px;" data-callout="ah4">
          <span class="sc-num">4</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Use clear, plain language</p>
            <p class="sc-popover-desc">Write log entries in simple, readable terms — no code dumps or vague system jargon. Everyone should be able to follow what happened.</p>
          </div>
        </div>

        <div class="ah-card">
          <p class="ah-card-title">Failure Log</p>
          <div class="ah-log">
            <div class="ah-entry">
              <p class="ah-entry-text"><strong>1:45 PM:</strong> Issue detected at this time by the Agent</p>
              <span class="ah-badge ah-badge--agent"><span class="ah-badge-icon">✦</span> Agent Action</span>
            </div>
            <div class="ah-entry">
              <p class="ah-entry-text"><strong>2:00 PM:</strong> Agent flagged to the user for optimization</p>
              <span class="ah-badge ah-badge--agent"><span class="ah-badge-icon">✦</span> Agent Action</span>
            </div>
            <div class="ah-entry">
              <p class="ah-entry-text"><strong>2:15 PM:</strong> Resolution by the agent, and displayed on UI</p>
              <span class="ah-badge ah-badge--agent"><span class="ah-badge-icon">✦</span> Agent Action</span>
            </div>
            <div class="ah-entry">
              <p class="ah-entry-text"><strong>2:30 PM:</strong> User reviews the issue</p>
              <span class="ah-badge ah-badge--user">Reviewed by John Doe</span>
            </div>
            <div class="ah-entry">
              <p class="ah-entry-text"><strong>2:40 PM:</strong> User approves the proposed resolution</p>
              <span class="ah-badge ah-badge--user">Approved by John Doe</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pattern-related-intro" id="trace-vd">
        <p class="pattern-related-intro-name">Visual Diffing</p>
        <p class="pattern-related-intro-desc">Visual comparisons make agent-driven changes easier to audit and validate. This helps detect subtle alterations or unintended consequences.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Visual Diffing</p>

      <!-- Interactive: Visual Diffing -->
      <div class="vd-demo-wrapper">
        <!-- Callout 1: left — Side-by-side comparisons -->
        <div class="scope-callout" style="--ct: 230px;" data-callout="vd1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Use side-by-side comparisons</p>
            <p class="sc-popover-desc">Display the original and updated states in parallel columns. This helps users spot differences immediately without extra mental effort.</p>
          </div>
        </div>
        <!-- Callout 2: right — Include the why -->
        <div class="scope-callout sc-callout--right" style="--ct: 88px;" data-callout="vd2">
          <span class="sc-num">2</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Include the why, not just the what</p>
            <p class="sc-popover-desc">Pair the visual change with a short explanation of the reason or logic behind it. This gives context and supports better decision-making.</p>
          </div>
        </div>
        <!-- Callout 3: right — Highlight what changed -->
        <div class="scope-callout sc-callout--right" style="--ct: 330px;" data-callout="vd3">
          <span class="sc-num">3</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Highlight what changed</p>
            <p class="sc-popover-desc">Use color or styling to draw attention to fields or values that were modified. Don't make users guess what's different.</p>
          </div>
        </div>
        <!-- Callout 4: left — Let the user validate or intervene -->
        <div class="scope-callout" style="--ct: 390px;" data-callout="vd4">
          <span class="sc-num">4</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Let the user validate or intervene</p>
            <p class="sc-popover-desc">Offer a clear way to accept, reject, or adjust the change. Visual diffs should inform action, not just display information.</p>
          </div>
        </div>

        <div class="vd-card">
          <p class="vd-card-title">Review Changes</p>
          <p class="vd-subtitle">Due to issues agent changed default value from <strong>old value</strong> to <strong>new value</strong></p>
          <div class="vd-panels">
            <!-- Before -->
            <div class="vd-panel">
              <p class="vd-panel-title">Before</p>
              <div class="vd-field">
                <label class="vd-label">Field 1 <span>*</span></label>
                <input class="vd-input" type="text" placeholder="Value" readonly>
              </div>
              <div class="vd-field">
                <label class="vd-label">Field 2 <span>*</span></label>
                <input class="vd-input" type="text" placeholder="Value" readonly>
              </div>
              <div class="vd-field">
                <label class="vd-label">Field 3 <span>*</span></label>
                <input class="vd-input" type="text" placeholder="Old Value" readonly>
              </div>
            </div>
            <!-- After -->
            <div class="vd-panel">
              <p class="vd-panel-title">After</p>
              <div class="vd-field">
                <label class="vd-label">Field 1 <span>*</span></label>
                <input class="vd-input" type="text" placeholder="Value" readonly>
              </div>
              <div class="vd-field">
                <label class="vd-label">Field 2 <span>*</span></label>
                <input class="vd-input" type="text" placeholder="Value" readonly>
              </div>
              <div class="vd-field">
                <label class="vd-label">Field 3 <span>*</span></label>
                <input class="vd-input vd-input--changed" type="text" value="New Value" readonly>
              </div>
            </div>
          </div>
          <div class="vd-actions">
            <button class="vd-btn vd-btn--outline">View Details</button>
            <button class="vd-btn vd-btn--primary">Validate</button>
          </div>
        </div>
      </div>

      <div class="pattern-related-intro" id="trace-bt">
        <p class="pattern-related-intro-name">Behavior Tuning Over Time</p>
        <p class="pattern-related-intro-desc">Adaptive agents learn from usage and tune their actions to better suit user preferences. This supports trust, efficiency, and personalization.</p>
      </div>

      <p class="pattern-component-label">Interaction example: Behavior Tuning Over Time</p>

      <!-- Interactive: Behavior Tuning Over Time -->
      <div class="bt-demo-wrapper">
        <!-- Callout 1: left — What triggered the change -->
        <div class="scope-callout" style="--ct: 118px;" data-callout="bt1">
          <span class="sc-num">1</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Call out what triggered the change</p>
            <p class="sc-popover-desc">Clearly state the condition or threshold that caused the system to respond differently than before.</p>
          </div>
        </div>
        <!-- Callout 2: left — Compare past vs. present -->
        <div class="scope-callout" style="--ct: 248px;" data-callout="bt2">
          <span class="sc-num">2</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Compare past vs. present behavior</p>
            <p class="sc-popover-desc">Provide users a way to see what's new vs. what used to happen. This helps them understand system learning and decide if further intervention is needed.</p>
          </div>
        </div>
        <!-- Callout 3: left — Decision logic -->
        <div class="scope-callout" style="--ct: 328px;" data-callout="bt3">
          <span class="sc-num">3</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Explain the system's current decision logic</p>
            <p class="sc-popover-desc">Let users understand why the system acted in this instance and how it may influence future behavior. Indicate whether this reflects a one-time response or an evolving pattern.</p>
          </div>
        </div>
        <!-- Callout 4: left — Allow control or rollback -->
        <div class="scope-callout" style="--ct: 418px;" data-callout="bt4">
          <span class="sc-num">4</span><span class="sc-line"></span>
          <div class="sc-popover">
            <p class="sc-popover-title">Allow control or rollback</p>
            <p class="sc-popover-desc">Include an option to undo, override, or adjust the system's adaptive behavior.</p>
          </div>
        </div>

        <div class="bt-card">
          <p class="bt-card-title">Routing Changes</p>

          <div class="bt-why-box">
            <p class="bt-why-title">Why this happened</p>
            <p class="bt-why-body">Agent based on observation modified behavior of the system</p>
          </div>

          <p class="bt-details-label">Details</p>
          <div class="bt-details-grid">
            <span class="bt-detail-key">Where change happened</span>
            <span class="bt-detail-val">Description</span>
            <span class="bt-detail-key">What change happened</span>
            <span class="bt-detail-val">Description</span>
            <span class="bt-detail-key">New Solution</span>
            <span class="bt-detail-val">Details of Solution <small>(active since 2:30 PM)</small></span>
            <span class="bt-detail-key">Previous Solution</span>
            <span class="bt-detail-val">Details of Solution</span>
          </div>

          <div class="bt-expanders">
            <div class="bt-expander"><span class="bt-expander-arrow">›</span> Reasoning for choosing this path</div>
            <div class="bt-expander"><span class="bt-expander-arrow">›</span> How it worked previously</div>
          </div>

          <hr class="bt-footer-divider">
          <p class="bt-footer-note">This will inform future reasoning for similar changes</p>
          <div class="bt-actions">
            <button class="bt-btn-rollback">Rollback</button>
            <button class="bt-btn-primary">Approve as default</button>
          </div>
        </div>
      </div>

      <h4 class="pattern-examples-label">How to implement</h4>
      <ul class="how-to-list" id="traceability-how-to">
        <li>Make it easy to trace outputs back to the inputs, prompts, or interactions that influenced them</li>
        <li>Provide interfaces that let users review, filter, and explore past actions and decisions in a structured, searchable way</li>
        <li>Record all system and AI actions with timestamps, inputs, outputs, and relevant context to support clear trace trails</li>
        <li>Ensure the system's behavior can be independently reviewed and traced to support transparency and hold the system accountable</li>
      </ul>

      <h4 class="pattern-examples-label">Common pitfalls</h4>
      <div class="pitfalls-grid" id="traceability-pitfalls">
        <div class="pitfall-card">
          <p class="pitfall-title">False consistency</p>
          <p class="pitfall-desc">The system behaves differently in similar situations</p>
        </div>
        <div class="pitfall-card">
          <p class="pitfall-title">No feedback loop</p>
          <p class="pitfall-desc">Users don't see whether the action succeeded or failed</p>
        </div>
      </div>

    </div><!-- /.pattern-panel traceability -->
      </div><!-- /.patterns-content -->
    </div><!-- /.patterns-layout -->
  </div><!-- /.container -->`

export default function HaxPatterns() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const cleanups: Array<() => void> = []
    const on = (el: Element, ev: string, fn: (e: Event) => void) => {
      el.addEventListener(ev, fn)
      cleanups.push(() => el.removeEventListener(ev, fn))
    }

    // Principle filter buttons -> switch active panel + subnav
    root.querySelectorAll('.pattern-filter').forEach((btn) => {
      on(btn, 'click', () => {
        root.querySelectorAll('.pattern-filter.is-active').forEach((el) => el.classList.remove('is-active'))
        btn.classList.add('is-active')
        const target = btn.getAttribute('data-pattern')
        root.querySelectorAll('.pattern-panel').forEach((p) => p.classList.remove('is-active'))
        const activePanel = root.querySelector('.pattern-panel[data-panel="' + target + '"]')
        if (activePanel) {
          activePanel.classList.add('is-active')
          activePanel.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        root.querySelectorAll('.pattern-subnav').forEach((nav) => nav.classList.remove('is-open'))
        const activeSubnav = root.querySelector('.pattern-subnav[data-subnav="' + target + '"]')
        if (activeSubnav) activeSubnav.classList.add('is-open')
      })
    })

    // Subitem scroll links
    root.querySelectorAll('.pattern-subitem[data-scroll]').forEach((item) => {
      on(item, 'click', () => {
        const id = item.getAttribute('data-scroll')
        const target = id ? document.getElementById(id) : null
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        const subnav = item.closest('.pattern-subnav')
        if (subnav) subnav.querySelectorAll('.pattern-subitem').forEach((el) => el.classList.remove('is-active'))
        item.classList.add('is-active')
      })
    })

    // Related Patterns expand / collapse
    root.querySelectorAll('[data-toggle]').forEach((btn) => {
      on(btn, 'click', (e) => {
        e.stopPropagation()
        const targetId = btn.getAttribute('data-toggle')
        const target = targetId ? document.getElementById(targetId) : null
        if (target && targetId) {
          const isOpen = target.classList.toggle('is-open')
          btn.classList.toggle('is-open', isOpen)
          if (isOpen) {
            const heading = document.getElementById(targetId.replace('-patterns', '') + '-related')
            if (heading) heading.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      })
    })

    // Scope demo tabs (Settings / Chat / File / Q&A)
    root.querySelectorAll('.scope-tab').forEach((tab) => {
      on(tab, 'click', () => {
        const demo = tab.closest('.scope-demo')
        if (!demo) return
        demo.querySelectorAll('.scope-tab').forEach((t) => t.classList.remove('active'))
        demo.querySelectorAll('.scope-panel').forEach((p) => p.classList.remove('active'))
        tab.classList.add('active')
        const key = (tab as HTMLElement).dataset.tab
        const targetPanel = demo.querySelector('.scope-panel[data-panel="' + key + '"]')
        if (targetPanel) targetPanel.classList.add('active')
      })
    })

    // Authority slider + agent presets + hover callouts
    const slider = root.querySelector('#authoritySlider') as HTMLInputElement | null
    if (slider) {
      const updateSlider = (val: number) => {
        slider.value = String(val)
        slider.style.setProperty('--val', val + '%')
      }
      updateSlider(0)
      root.querySelectorAll('.auth-tab').forEach((tab) => {
        on(tab, 'click', () => {
          root.querySelectorAll('.auth-tab').forEach((t) => t.classList.remove('active'))
          tab.classList.add('active')
          const targetVal = parseInt((tab as HTMLElement).dataset.agent || '0', 10)
          let current = parseInt(slider.value, 10)
          const step = targetVal > current ? 1 : -1
          const interval = setInterval(() => {
            current += step
            updateSlider(current)
            if (current === targetVal) clearInterval(interval)
          }, 8)
          cleanups.push(() => clearInterval(interval))
        })
      })
      on(slider, 'input', () => updateSlider(parseInt(slider.value, 10)))
      root.querySelectorAll('.auth-callout').forEach((callout) => {
        const popover = callout.querySelector('.sc-popover') as HTMLElement | null
        if (!popover) return
        on(callout, 'mouseenter', () => {
          popover.style.opacity = '1'
          popover.style.pointerEvents = 'auto'
        })
        on(callout, 'mouseleave', () => {
          popover.style.opacity = '0'
          popover.style.pointerEvents = 'none'
        })
      })
    }

    // Permission & confirmation gates: tab bar + toggleable checkboxes
    root.querySelectorAll('.pgates-tab').forEach((tab) => {
      on(tab, 'click', () => {
        const tabs = tab.closest('.pgates-tabs')
        if (tabs) tabs.querySelectorAll('.pgates-tab').forEach((t) => t.classList.remove('active'))
        tab.classList.add('active')
      })
    })
    root.querySelectorAll('.pgates-check-row').forEach((row) => {
      on(row, 'click', () => {
        const check = row.querySelector('.pgates-check')
        if (check) check.classList.toggle('checked')
      })
    })

    // ── Mobile: fit interaction-example demos to width + tap-to-expand modal ──
    const mql = window.matchMedia('(max-width: 768px)')
    const demoWraps = Array.from(
      root.querySelectorAll('[class*="demo-wrapper"]')
    ) as HTMLElement[]

    // Wrap each demo's children in a layout-transparent node we can scale.
    demoWraps.forEach((wrap) => {
      const first = wrap.firstElementChild as HTMLElement | null
      if (first && first.classList.contains('hax-demo-fit')) return
      const fit = document.createElement('div')
      fit.className = 'hax-demo-fit'
      while (wrap.firstChild) fit.appendChild(wrap.firstChild)
      wrap.appendChild(fit)
    })

    // Scale a .hax-demo-fit so its content fits its wrapper's content box.
    // Demos clip their own overflow (overflow:hidden), so the true content width
    // is found by briefly revealing overflow, then we impose that width and scale
    // the whole thing down — the entire demo stays visible, never cropped.
    const applyFit = (fit: HTMLElement) => {
      fit.style.transform = ''
      fit.style.marginBottom = ''
      fit.style.width = ''
      const container = fit.parentElement
      if (!container) return
      const cs = getComputedStyle(container)
      const padL = parseFloat(cs.paddingLeft) || 0
      const padR = parseFloat(cs.paddingRight) || 0
      const avail = container.clientWidth - padL - padR
      if (avail <= 0) return
      // Measure natural width with all inner overflow revealed.
      const nodes = [fit, ...Array.from(fit.querySelectorAll('*'))] as HTMLElement[]
      const prev = nodes.map((n) => n.style.overflow)
      nodes.forEach((n) => {
        n.style.overflow = 'visible'
      })
      const natural = fit.scrollWidth
      nodes.forEach((n, i) => {
        n.style.overflow = prev[i]
      })
      if (!natural || natural <= avail + 1) return
      // Lay the demo out at its natural width, then scale to fit.
      fit.style.width = `${natural}px`
      const scale = avail / natural
      const h = fit.offsetHeight
      fit.style.transformOrigin = 'top left'
      fit.style.transform = `scale(${scale})`
      fit.style.marginBottom = `${-h * (1 - scale)}px`
    }

    const fitInline = () => {
      demoWraps.forEach((wrap) => {
        const fit = wrap.querySelector(':scope > .hax-demo-fit') as HTMLElement | null
        if (!fit) return
        if (mql.matches) {
          applyFit(fit)
        } else {
          fit.style.transform = ''
          fit.style.marginBottom = ''
        }
      })
    }

    // Build the expand modal once.
    const modal = document.createElement('div')
    modal.className = 'hax-demo-modal'
    modal.setAttribute('role', 'dialog')
    modal.setAttribute('aria-modal', 'true')
    modal.setAttribute('aria-label', 'Expanded interaction example')
    modal.innerHTML =
      '<div class="hax-demo-modal-backdrop"></div>' +
      '<div class="hax-demo-modal-content">' +
      '<button type="button" class="hax-demo-modal-close" aria-label="Close expanded demo">\u00d7</button>' +
      '<div class="hax-demo-modal-body"></div>' +
      '</div>'
    document.body.appendChild(modal)
    const modalBody = modal.querySelector('.hax-demo-modal-body') as HTMLElement
    const modalClose = modal.querySelector('.hax-demo-modal-close') as HTMLElement
    const modalBackdrop = modal.querySelector('.hax-demo-modal-backdrop') as HTMLElement

    const closeModal = () => {
      if (!modal.classList.contains('open')) return
      modal.classList.remove('open')
      modalBody.innerHTML = ''
      document.documentElement.style.overflow = ''
    }
    const openModal = (wrap: HTMLElement) => {
      modalBody.innerHTML = ''
      const clone = wrap.cloneNode(true) as HTMLElement
      const cloneFit = clone.querySelector('.hax-demo-fit') as HTMLElement | null
      if (cloneFit) {
        cloneFit.style.transform = ''
        cloneFit.style.marginBottom = ''
      }
      modalBody.appendChild(clone)
      modal.classList.add('open')
      document.documentElement.style.overflow = 'hidden'
      modalClose.focus()
      requestAnimationFrame(() => {
        if (cloneFit) applyFit(cloneFit)
      })
    }

    demoWraps.forEach((wrap) => {
      on(wrap, 'click', () => {
        if (mql.matches) openModal(wrap)
      })
    })

    modalClose.addEventListener('click', closeModal)
    modalBackdrop.addEventListener('click', closeModal)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', onKey)

    let resizeT: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(resizeT)
      resizeT = setTimeout(() => {
        fitInline()
        const openFit = modalBody.querySelector('.hax-demo-fit') as HTMLElement | null
        if (modal.classList.contains('open') && openFit) applyFit(openFit)
      }, 150)
    }
    window.addEventListener('resize', onResize)
    const onMqlChange = () => {
      if (!mql.matches) closeModal()
      fitInline()
    }
    mql.addEventListener('change', onMqlChange)

    requestAnimationFrame(fitInline)
    const fitTimer = setTimeout(fitInline, 350)

    cleanups.push(() => {
      clearTimeout(resizeT)
      clearTimeout(fitTimer)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('keydown', onKey)
      mql.removeEventListener('change', onMqlChange)
      modal.remove()
      document.documentElement.style.overflow = ''
    })

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <div
      ref={ref}
      className="patterns-section"
      id="guiding-principles"
      dangerouslySetInnerHTML={{ __html: PATTERNS_HTML }}
    />
  )
}
