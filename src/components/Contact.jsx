import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiShare } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

const WA_NUMBER = '919827622032'
const WA_MESSAGE = encodeURIComponent(
  'Hello, I\'m interested in Shree Sai Construction packages. Please share more details.'
)
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

const contactItems = [
  {
    Icon: HiPhone,
    labelKey: 'phone',
    value: '+91 98276 22032',
    href: 'tel:+919827622032',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    Icon: HiMail,
    labelKey: 'email',
    value: 'sajansmardana@gmail.com',
    href: 'mailto:sajansmardana@gmail.com',
    color: 'text-primary',
    bg: 'bg-orange-50',
  },
  {
    Icon: HiLocationMarker,
    labelKey: 'address',
    valueKey: 'addressVal',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    Icon: HiClock,
    labelKey: 'hours',
    valueKey: 'hoursVal',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            {t('contact.eyebrow')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left: contact info cards */}
          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.labelKey}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-4 bg-background border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      <item.Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{t(`contact.${item.labelKey}`)}</div>
                      <div className={`font-semibold ${item.color} text-sm`}>{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 bg-background border border-gray-100 rounded-2xl p-5">
                    <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{t(`contact.${item.labelKey}`)}</div>
                      <div className="font-semibold text-secondary text-sm">{t(`contact.${item.valueKey}`)}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Google Maps embed */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <iframe
                title="Shree Sai Construction Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzExLjAiTiA3NcKwNTEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-secondary to-slate-800 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden"
          >
            {/* Decorative */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/10" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-accent/10" />

            <div className="relative z-10">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-2xl font-black mb-3">{t('contact.freeConsult')}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">{t('contact.freeConsultSub')}</p>

              <div className="space-y-4">
                {/* Call button */}
                <a
                  href="tel:+919827622032"
                  className="flex items-center justify-center gap-3 bg-primary hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-200 shadow-lg shadow-primary/30 hover:-translate-y-0.5 w-full"
                >
                  <HiPhone className="w-5 h-5" />
                  {t('contact.callBtn')}: 9827622032
                </a>

                {/* WhatsApp — #25D366 with bounce */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-white font-bold py-4 px-6 rounded-2xl shadow-lg w-full whatsapp-bounce"
                  style={{ backgroundColor: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}
                >
                  <FaWhatsapp className="w-6 h-6" />
                  {t('contact.whatsappBtn')}
                </a>

                {/* Share via WhatsApp — prefilled message */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold py-3 px-6 rounded-2xl transition-all duration-200 w-full"
                >
                  <HiShare className="w-4 h-4" />
                  Share via WhatsApp
                </a>
              </div>

              <p className="text-white/40 text-xs text-center mt-6">
                {t('contact.hours')}: {t('contact.hoursVal')}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
