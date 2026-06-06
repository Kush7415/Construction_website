import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MdEngineering,
  MdVerified,
  MdFamilyRestroom,
  MdHandyman,
  MdBarChart,
  MdAccountBalance,
} from 'react-icons/md'

const usps = [
  { titleKey: 'u1title', descKey: 'u1desc', Icon: MdVerified,        color: 'text-blue-600',   bg: 'bg-blue-50',   border: 'border-blue-400' },
  { titleKey: 'u2title', descKey: 'u2desc', Icon: MdEngineering,     color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-400' },
  { titleKey: 'u3title', descKey: 'u3desc', Icon: MdFamilyRestroom,  color: 'text-primary',     bg: 'bg-orange-50',  border: 'border-primary' },
  { titleKey: 'u4title', descKey: 'u4desc', Icon: MdHandyman,        color: 'text-violet-600',  bg: 'bg-violet-50',  border: 'border-violet-400' },
  { titleKey: 'u5title', descKey: 'u5desc', Icon: MdBarChart,        color: 'text-amber-600',   bg: 'bg-amber-50',   border: 'border-amber-400' },
  { titleKey: 'u6title', descKey: 'u6desc', Icon: MdAccountBalance,  color: 'text-teal-600',    bg: 'bg-teal-50',    border: 'border-teal-400' },
]

const statsRow = [
  { value: 10,  suffix: '+', label: 'Years\nWarranty' },
  { value: 300, suffix: '+', label: 'Quality\nChecks' },
  { value: 500, suffix: '+', label: 'Happy\nFamilies' },
]

function useCountUp(target, inView, duration = 1400) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const step = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [inView, target, duration])

  return count
}

function StatCounter({ value, suffix, label, inView }) {
  const count = useCountUp(value, inView)
  return (
    <div className="text-center px-4 py-5 sm:px-6 sm:py-6">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-white/70 text-xs sm:text-sm font-medium mt-1 leading-snug">
        {label.replace('\n', ' ')}
      </div>
    </div>
  )
}

export default function WhyUs() {
  const { t } = useTranslation()
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section id="whyus" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            {t('whyus.eyebrow')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mb-4">
            {t('whyus.title')}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">{t('whyus.subtitle')}</p>
        </motion.div>

        {/* Animated stats row */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-secondary via-secondary to-slate-800 rounded-3xl mb-14 overflow-hidden"
        >
          <div className="flex flex-row divide-x divide-white/10">
            {statsRow.map((s, i) => (
              <div key={i} className="flex-1">
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} inView={statsInView} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* USP Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className={`
                bg-background border border-gray-100 border-l-4 ${usp.border}
                rounded-2xl p-6
                hover:shadow-lg hover:-translate-y-1
                transition-all duration-250 group
              `}
            >
              <div className={`w-12 h-12 ${usp.bg} ${usp.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <usp.Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-secondary text-base mb-2">{t(`whyus.${usp.titleKey}`)}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t(`whyus.${usp.descKey}`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
