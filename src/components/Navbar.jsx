import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'

const navLinks = [
  { key: 'home',     href: '#hero' },
  { key: 'packages', href: '#packages' },
  { key: 'compare',  href: '#compare' },
  { key: 'gallery',  href: '#gallery' },
  { key: 'contact',  href: '#contact' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'hi' : 'en'
    i18n.changeLanguage(next)
    localStorage.setItem('ssc_lang', next)
  }

  useEffect(() => {
    const ids = ['hero', 'packages', 'compare', 'gallery', 'contact']
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { threshold: 0.3 }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#hero" className="flex flex-col leading-tight">
            <span className="font-bold text-lg text-secondary leading-none">
              {t('nav.brandLine1')} <span className="text-primary">{t('nav.brandLine2')}</span>
            </span>
            <span className="text-xs text-gray-500 font-medium">
              {t('nav.brandSub')}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.key}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary bg-orange-50'
                    : 'text-gray-600 hover:text-primary hover:bg-orange-50'
                }`}
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center bg-gray-100 rounded-full p-1 gap-1 text-xs font-semibold"
              aria-label="Toggle language"
            >
              <span className={`px-3 py-1 rounded-full transition-all duration-200 ${i18n.language === 'en' ? 'bg-secondary text-white' : 'text-gray-500'}`}>EN</span>
              <span className={`px-3 py-1 rounded-full transition-all duration-200 ${i18n.language === 'hi' ? 'bg-secondary text-white' : 'text-gray-500'}`}>हिंदी</span>
            </button>

            {/* Call button desktop */}
            <a
              href="tel:+919827622032"
              className="hidden lg:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors shadow-md"
            >
              <HiPhone className="w-4 h-4" />
              {t('nav.callNow')}
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-secondary hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary bg-orange-50'
                      : 'text-gray-700 hover:text-primary hover:bg-orange-50'
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
              <a
                href="tel:+919827622032"
                className="mt-2 flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-xl text-sm font-semibold"
                onClick={handleNavClick}
              >
                <HiPhone className="w-4 h-4" />
                {t('nav.callNow')}: 9827622032
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
