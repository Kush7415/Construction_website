import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi'

const packages = [
  {
    key: 'happiness',
    priceNum: 1499,
    price: '1,499',
    gradient: 'from-blue-600 to-blue-800',
    border: 'border-blue-200',
    btnBg: 'bg-blue-600 hover:bg-blue-700',
    highlightColor: 'text-blue-600',
    hoverShadow: 'hover:shadow-blue-200',
    popular: false,
  },
  {
    key: 'premium',
    priceNum: 1599,
    price: '1,599',
    gradient: 'from-primary to-orange-600',
    border: 'border-orange-300',
    btnBg: 'bg-primary hover:bg-orange-600',
    highlightColor: 'text-primary',
    hoverShadow: 'hover:shadow-orange-200',
    popular: true,
  },
  {
    key: 'luxury',
    priceNum: 1699,
    price: '1,699',
    gradient: 'from-amber-500 to-yellow-600',
    border: 'border-amber-200',
    btnBg: 'bg-amber-500 hover:bg-amber-600',
    highlightColor: 'text-amber-600',
    hoverShadow: 'hover:shadow-amber-200',
    popular: false,
  },
]

const highlightKeys = ['h1', 'h2', 'h3', 'h4', 'h5']

function useCountUp(target, inView, duration = 1200) {
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

function PriceCounter({ priceNum, inView }) {
  const count = useCountUp(priceNum, inView)
  return <>{count.toLocaleString('en-IN')}</>
}

export default function Packages() {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="packages" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            {t('packages.eyebrow')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mb-4">
            {t('packages.title')}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">{t('packages.subtitle')}</p>
        </motion.div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.key}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: pkg.popular ? -20 : -8, transition: { duration: 0.25 } }}
              className={`relative bg-white rounded-3xl border-2 ${pkg.border} shadow-xl overflow-hidden cursor-pointer
                hover:shadow-2xl ${pkg.hoverShadow} transition-shadow duration-300 ${
                pkg.popular ? 'ring-2 ring-primary ring-offset-2 md:-translate-y-4 popular-glow' : ''
              }`}
            >
              {/* Popular banner */}
              {pkg.popular && (
                <div className={`bg-gradient-to-r ${pkg.gradient} text-white text-xs font-black text-center py-2 tracking-widest uppercase`}>
                  ⭐ {t('packages.popular')}
                </div>
              )}

              {/* Card header */}
              <div className={`bg-gradient-to-br ${pkg.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                <div className="relative z-10">
                  <span className="inline-block bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30 mb-3">
                    {t(`packages.${pkg.key}.badge`)}
                  </span>
                  <h3 className="text-white font-black text-xl mb-4">{t(`packages.${pkg.key}.name`)}</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-white/70 text-xl font-semibold">₹</span>
                    <span className="text-white font-black text-4xl leading-none tabular-nums">
                      <PriceCounter priceNum={pkg.priceNum} inView={inView} />
                    </span>
                    <span className="text-white/70 text-sm font-medium mb-1">{t('packages.perSqft')}</span>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {highlightKeys.map(hk => (
                    <li key={hk} className="flex items-start gap-3">
                      <HiCheckCircle className={`w-5 h-5 ${pkg.highlightColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 text-sm font-medium">{t(`packages.${pkg.key}.${hk}`)}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#compare"
                  className={`flex items-center justify-center gap-2 ${pkg.btnBg} text-white font-bold py-3 px-6 rounded-xl w-full transition-colors duration-200`}
                >
                  {t('packages.knowMore')}
                  <HiArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-6 py-3 text-sm text-gray-600">
            <HiCheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
            All packages include ISI TMT steel, branded cement &amp; full warranty coverage.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
