import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const materialItems = [
  { labelKey: 'steelLabel',   valKey: 'steel',   icon: '⚙️' },
  { labelKey: 'cementLabel',  valKey: 'cement',  icon: '🏭' },
  { labelKey: 'ironLabel',    valKey: 'iron',    icon: '📐' },
  { labelKey: 'terraceLabel', valKey: 'terrace', icon: '🏠' },
  { labelKey: 'brickLabel',   valKey: 'brick',   icon: '🧱' },
]

export default function Materials() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            {t('materials.eyebrow')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-secondary mb-4">
            {t('materials.title')}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t('materials.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {materialItems.map((item, i) => (
            <motion.div
              key={item.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-xs font-bold text-primary tracking-wider uppercase mb-2">
                {t(`materials.${item.labelKey}`)}
              </div>
              <div className="text-secondary font-semibold text-sm leading-snug">
                {t(`materials.${item.valKey}`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
