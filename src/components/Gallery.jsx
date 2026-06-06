import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { HiCamera } from 'react-icons/hi'

const placeholders = Array.from({ length: 12 }, (_, i) => i + 1)

export default function Gallery() {
  const { t } = useTranslation()

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            {t('gallery.eyebrow')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">{t('gallery.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholders.map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.06, duration: 0.5 }}
              className="aspect-[4/3] bg-gray-100 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-200 hover:border-primary hover:bg-orange-50/40 transition-all duration-200 group cursor-default"
            >
              <HiCamera className="w-10 h-10 text-gray-300 group-hover:text-primary transition-colors mb-3" />
              <span className="text-gray-400 group-hover:text-primary text-sm font-medium transition-colors text-center px-4">
                {t('gallery.placeholder')}
              </span>
              <span className="text-gray-300 text-xs mt-1">Project #{n}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
