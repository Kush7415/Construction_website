import React from 'react'
import { useTranslation } from 'react-i18next'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

const quickLinks = [
  { labelKey: 'home',     href: '#hero' },
  { labelKey: 'packages', href: '#packages' },
  { labelKey: 'compare',  href: '#compare' },
  { labelKey: 'gallery',  href: '#gallery' },
  { labelKey: 'contact',  href: '#contact' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="mb-1">
              <span className="font-black text-xl text-white">{t('nav.brandLine1')} <span className="text-primary">{t('nav.brandLine2')}</span></span>
            </div>
            <div className="text-white/40 text-sm mb-4">{t('nav.brandSub')}</div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">{t('footer.tagline')}</p>
            <div className="flex gap-3 mt-5">
              <a
                href="tel:+919827622032"
                className="w-9 h-9 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors"
                aria-label="Call"
              >
                <HiPhone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919827622032"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-green-500 rounded-xl flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="mailto:sajansmardana@gmail.com"
                className="w-9 h-9 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <HiMail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {t(`nav.${link.labelKey}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">{t('footer.contactInfo')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiPhone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+919827622032" className="text-white/50 hover:text-white text-sm transition-colors">
                  +91 98276 22032
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiMail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:sajansmardana@gmail.com" className="text-white/50 hover:text-white text-sm transition-colors break-all">
                  sajansmardana@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiLocationMarker className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">{t('contact.addressVal')}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.madeWith')}</span>
        </div>
      </div>
    </footer>
  )
}
