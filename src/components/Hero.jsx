import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { HiPhone, HiArrowRight, HiChevronDown } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

const stats = [
  { valueKey: 'stat2Value', labelKey: 'stat2Label' },
  { valueKey: 'stat3Value', labelKey: 'stat3Label' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
})

function WordByWord({ text, delay = 0, className = '' }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center blueprint-bg overflow-hidden"
    >
      {/* Animated orange blueprint grid */}
      <div className="blueprint-orange-grid" />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-slate-900/95" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col items-start">

        {/* Eyebrow */}
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-orange-300 text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-2 rounded-full tracking-wider sm:tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
            {t('hero.eyebrow')}
          </span>
        </motion.div>

        {/* Heading — word by word */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 max-w-4xl">
          <WordByWord text={t('hero.heading1')} delay={0.2} />
          {' '}
          <WordByWord
            text={t('hero.heading2')}
            delay={0.35}
            className="text-gradient"
          />
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-white/80 text-3xl sm:text-4xl lg:text-5xl font-semibold italic"
          >
            {t('hero.subheading')}
          </motion.span>
        </h1>

        {/* Subtext */}
        <motion.p {...fadeUp(0.75)} className="text-white/60 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
          {t('hero.subtext')}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.85)} className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#packages"
            className="flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
          >
            {t('hero.cta1')}
            <HiArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+919827622032"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm"
          >
            <HiPhone className="w-5 h-5 text-primary" />
            {t('hero.cta2')}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 gap-4 w-full max-w-sm"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.valueKey}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } },
              }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center"
            >
              <div className="text-3xl font-black text-gradient">{t(`hero.${s.valueKey}`)}</div>
              <div className="text-white/60 text-xs font-medium mt-1">{t(`hero.${s.labelKey}`)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll down arrow */}
      <div className="absolute bottom-24 sm:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <a href="#packages" aria-label="Scroll down">
          <HiChevronDown className="w-8 h-8 text-primary scroll-arrow" />
        </a>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 64L1440 64L1440 32C1200 0 960 64 720 32C480 0 240 64 0 32L0 64Z" fill="#FAFAF8" />
        </svg>
      </div>
    </section>
  )
}
