'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { asset } from '@/lib/asset'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  function toggleDropdown(name: string, isHub: boolean, e: React.MouseEvent) {
    if (isHub) {
      const target = e.target as HTMLElement
      if (!target.closest('.icon')) return
      e.preventDefault()
    } else {
      e.preventDefault()
    }
    setActiveDropdown(prev => prev === name ? null : name)
  }

  function closeMenu() {
    setMenuOpen(false)
    setMenuOpen(false)
  }

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/" onClick={closeMenu}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/images/outshift_logo.svg')} alt="Outshift" className="logo-light" style={{ height: 50 }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/images/outshift_logo-white.svg')} alt="Outshift" className="logo-dark" style={{ height: 50 }} />
          </Link>
          <div className="design">design</div>
        </div>

        <button
          className={`menu-toggle${menuOpen ? ' active' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav ref={navRef} className={menuOpen ? 'open' : ''}>
          <ul>
            {/* Initiatives dropdown */}
            <li className={`has-dropdown${activeDropdown === 'initiatives' ? ' is-active' : ''}`}>
              <a
                href="#initiatives"
                onClick={(e) => toggleDropdown('initiatives', false, e)}
              >
                <span className="text">Initiatives</span>{' '}
                <span className="icon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset('/images/keyboard-arrow-down-icon.svg')} alt="" />
                </span>
              </a>
              <ul className="nav-dropdown">
                <li className="nav-dropdown-group">
                  <Link href="/hax" className="nav-dropdown-label" onClick={() => { setActiveDropdown(null); closeMenu() }}>
                    The Human-Agent Experience
                  </Link>
                </li>
                <li>
                  <a
                    href="https://outshift.cisco.com/internet-of-cognition/explore"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { setActiveDropdown(null); closeMenu() }}
                  >
                    Internet of Cognition{' '}
                    <svg className="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </li>

            {/* Research dropdown */}
            <li className={`has-dropdown has-dropdown--hub${activeDropdown === 'research' ? ' is-active' : ''}`}>
              <Link
                href="/research"
                onClick={(e) => toggleDropdown('research', true, e)}
              >
                <span className="text">Research</span>{' '}
                <span className="icon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset('/images/keyboard-arrow-down-icon.svg')} alt="" />
                </span>
              </Link>
              <ul className="nav-dropdown nav-dropdown--research">
                <li>
                  <Link href="/research/foundational-principles" onClick={() => { setActiveDropdown(null); closeMenu() }}>
                    Foundational Principles
                  </Link>
                </li>
                <li>
                  <Link href="/research/cognitive-frameworks" onClick={() => { setActiveDropdown(null); closeMenu() }}>
                    Cognitive Frameworks
                  </Link>
                </li>
                <li className="nav-dropdown-group">
                  <Link href="/research/societal-impact" className="nav-dropdown-label" onClick={() => { setActiveDropdown(null); closeMenu() }}>
                    Societal Impact
                  </Link>
                  <ul className="nav-dropdown-sub">
                    <li>
                      <Link href="/research/societal-impact/agent-impact-map" onClick={() => { setActiveDropdown(null); closeMenu() }}>
                        Agent Impact Map
                      </Link>
                    </li>
                    <li>
                      <Link href="/research/societal-impact/cognitive-load-audit" onClick={() => { setActiveDropdown(null); closeMenu() }}>
                        Cognitive Load Audit
                      </Link>
                    </li>
                    <li>
                      <Link href="/research/societal-impact/foresight-canvas" onClick={() => { setActiveDropdown(null); closeMenu() }}>
                        Foresight Canvas
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/research/security-privacy" onClick={() => { setActiveDropdown(null); closeMenu() }}>
                    Security &amp; Privacy
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/blog" onClick={closeMenu}>
                <span className="text">Blog</span>
              </Link>
            </li>

            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
