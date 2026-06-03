'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { findAnswer, gptLink } from '@/lib/chatKnowledge'

interface Message {
  role: 'ai' | 'user'
  html: string
}

const ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>'

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [opened, setOpened] = useState(false)
  const messagesRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const scrollToBottom = useCallback(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    function onClickOutside(e: MouseEvent) {
      if (
        isOpen &&
        panelRef.current && !panelRef.current.contains(e.target as Node) &&
        btnRef.current && !btnRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClickOutside)
    }
  }, [isOpen])

  function welcome() {
    if (!opened) {
      setOpened(true)
      setMessages([{
        role: 'ai',
        html: 'Hi! I\'m the <strong>Human-Agent Experience assistant</strong>.<br>I can help you navigate the site, explain HAX patterns, or point you to research.<br><br>Try: <em>"What is HAX?"</em> or <em>"Show me Escalation Paths"</em>',
      }])
    }
  }

  function togglePanel() {
    const next = !isOpen
    setIsOpen(next)
    if (next) {
      welcome()
      setTimeout(() => inputRef.current?.focus(), 120)
    }
  }

  function send() {
    const q = input.trim()
    if (!q) return
    setInput('')

    setMessages(prev => [...prev, { role: 'user', html: q }])

    setTimeout(() => {
      const ans = findAnswer(q)
      const reply = ans
        ? ans + gptLink
        : 'I don\'t have a specific answer for that. The <strong>HAX Pattern Research GPT</strong> can help with detailed questions about human-agent design.' + gptLink
      setMessages(prev => [...prev, { role: 'ai', html: reply }])
    }, 600 + Math.random() * 400)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value)
    e.target.style.height = ''
    e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px'
  }

  return (
    <>
      <style>{`
#oa-btn {
  position: fixed; bottom: 28px; right: 28px; z-index: 9999;
  width: 56px; height: 56px; border-radius: 50%;
  background: linear-gradient(135deg, #7c6af7, #3b82f6);
  border: none; cursor: pointer; padding: 0;
  box-shadow: 0 4px 20px rgba(124,106,247,0.45);
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s; color: #fff; line-height: 1;
}
#oa-btn::before { content: none; }
#oa-btn:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(124,106,247,0.6); }
#oa-btn svg { width: 26px; height: 26px; display: block; flex-shrink: 0; pointer-events: none; }
#oa-panel {
  position: fixed; bottom: 96px; right: 28px; z-index: 9998;
  width: 380px; max-width: calc(100vw - 40px);
  height: 520px; max-height: calc(100vh - 120px);
  background: var(--color-bg, #fff);
  border: 1px solid var(--color-border, rgba(0,0,0,0.1));
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06);
  display: flex; flex-direction: column; overflow: hidden;
  animation: oaPanelIn 0.2s ease;
}
[data-theme="dark"] #oa-panel { background: #1a1f2e; border-color: rgba(255,255,255,0.1); box-shadow: 0 8px 40px rgba(0,0,0,0.5); }
@keyframes oaPanelIn { from { opacity:0; transform:translateY(12px) scale(0.97); } to { opacity:1; transform:translateY(0) scale(1); } }
.oa-header { display:flex; align-items:center; gap:10px; padding:14px 16px 12px; border-bottom:1px solid var(--color-border, rgba(0,0,0,0.08)); flex-shrink:0; }
[data-theme="dark"] .oa-header { border-color:rgba(255,255,255,0.08); }
.oa-avatar { width:32px; height:32px; border-radius:50%; background:linear-gradient(135deg,#7c6af7,#3b82f6); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.oa-avatar svg { width:16px; height:16px; color:#fff; pointer-events:none; }
.oa-title { font-size:0.88em; font-weight:600; color:var(--color-text,#111); }
.oa-sub { font-size:0.73em; color:var(--color-text-muted,#888); }
.oa-close { margin-left:auto; background:none; border:none; cursor:pointer; padding:4px; border-radius:6px; display:flex; align-items:center; justify-content:center; transition:color 0.15s, background 0.15s; color:var(--color-text-muted,#888); }
.oa-close::before { content: none; }
.oa-close:hover { color:var(--color-text,#111); background:var(--color-hover,rgba(0,0,0,0.06)); }
.oa-close svg { width:16px; height:16px; pointer-events:none; }
.oa-messages { flex:1; overflow-y:auto; padding:14px 16px; display:flex; flex-direction:column; gap:10px; scroll-behavior:smooth; }
.oa-msg { display:flex; gap:8px; align-items:flex-end; max-width:92%; }
.oa-msg--ai { align-self:flex-start; }
.oa-msg--user { align-self:flex-end; flex-direction:row-reverse; }
.oa-bubble { padding:9px 13px; border-radius:14px; font-size:0.84em; line-height:1.55; color:var(--color-text,#111); background:var(--color-surface,#f2f3f7); }
[data-theme="dark"] .oa-bubble { background:rgba(255,255,255,0.07); }
.oa-msg--user .oa-bubble { background:linear-gradient(135deg,#7c6af7,#3b82f6); color:#fff; border-bottom-right-radius:4px; }
.oa-msg--ai .oa-bubble { border-bottom-left-radius:4px; }
.oa-msg-avatar { width:26px; height:26px; border-radius:50%; flex-shrink:0; background:linear-gradient(135deg,#7c6af7,#3b82f6); display:flex; align-items:center; justify-content:center; }
.oa-msg-avatar svg { width:13px; height:13px; color:#fff; pointer-events:none; }
.oa-link { display:inline-flex; align-items:center; gap:4px; margin-top:6px; font-size:0.8em; color:#7c6af7; text-decoration:none; font-weight:500; cursor:pointer; }
.oa-link:hover { text-decoration:underline; }
.oa-link svg { width:11px; height:11px; pointer-events:none; }
.oa-inputbar { display:flex; align-items:flex-end; gap:8px; padding:10px 12px 12px; border-top:1px solid var(--color-border,rgba(0,0,0,0.08)); flex-shrink:0; }
[data-theme="dark"] .oa-inputbar { border-color:rgba(255,255,255,0.08); }
.oa-textarea { flex:1; padding:9px 12px; border-radius:12px; border:1px solid var(--color-border-medium,rgba(0,0,0,0.15)); background:var(--color-surface,#f2f3f7); color:var(--color-text,#111); font-size:0.85em; font-family:inherit; resize:none; line-height:1.5; min-height:38px; max-height:100px; outline:none; transition:border-color 0.15s; overflow-y:auto; }
[data-theme="dark"] .oa-textarea { background:rgba(255,255,255,0.06); border-color:rgba(255,255,255,0.12); color:#e0eeff; }
.oa-textarea:focus { border-color:#7c6af7; }
.oa-send { width:36px; height:36px; flex-shrink:0; border-radius:50%; border:none; cursor:pointer; padding:0; background:linear-gradient(135deg,#7c6af7,#3b82f6); color:#fff; display:flex; align-items:center; justify-content:center; transition:opacity 0.15s, transform 0.15s; }
.oa-send::before { content: none; }
.oa-send:hover { opacity:0.88; transform:scale(1.06); }
.oa-send svg { width:16px; height:16px; pointer-events:none; }
      `}</style>

      <button id="oa-btn" ref={btnRef} aria-label="Open Outshift Design assistant" title="Human-Agent Experience assistant" onClick={togglePanel}>
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
      </button>

      {isOpen && (
        <div id="oa-panel" ref={panelRef} role="dialog" aria-label="Human-Agent Experience assistant">
          <div className="oa-header">
            <div className="oa-avatar" dangerouslySetInnerHTML={{ __html: ICON }} />
            <div>
              <div className="oa-title">Outshift Design · Ask me anything</div>
              <div className="oa-sub">Powered by HAX Pattern Research GPT</div>
            </div>
            <button className="oa-close" aria-label="Close" onClick={() => setIsOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div className="oa-messages" ref={messagesRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`oa-msg oa-msg--${msg.role}`}>
                {msg.role === 'ai' && (
                  <div className="oa-msg-avatar" dangerouslySetInnerHTML={{ __html: ICON }} />
                )}
                <div
                  className="oa-bubble"
                  dangerouslySetInnerHTML={{ __html: msg.role === 'user' ? msg.html.replace(/</g, '&lt;').replace(/>/g, '&gt;') : msg.html }}
                />
              </div>
            ))}
          </div>

          <div className="oa-inputbar">
            <textarea
              ref={inputRef}
              className="oa-textarea"
              placeholder="Ask a question…"
              rows={1}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
            />
            <button className="oa-send" aria-label="Send" onClick={send}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
