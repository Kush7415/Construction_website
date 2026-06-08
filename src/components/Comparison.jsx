import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCheckCircle, HiXCircle, HiArrowUp } from 'react-icons/hi'

const tabKeys = ['structural', 'flooring', 'waterproofing', 'doors', 'electrical', 'painting', 'sanitary']

const tableData = {
  structural: [
    { feature: 'Internal Wall Thickness', h: '4" Bricks', p: '4" Bricks', l: '4" Bricks' },
    { feature: 'External Wall Thickness', h: '4" Bricks', p: '4" Bricks', l: '4" Bricks' },
    { feature: 'Stairs', h: 'Simple Straight (Zigzag ₹15k extra/floor)', p: 'Simple / Zigzag — Both Included', l: 'Simple / Zigzag — Both Included', pUpgrade: true, lUpgrade: true },
    { feature: 'Plinth Height', h: "1'6\" from Ground", p: "2' from Ground", l: "2'6\" from Ground", pUpgrade: true, lUpgrade: true },
    { feature: 'Floor Height', h: "10'6\" slab to slab", p: "11' slab to slab", l: "11' slab to slab", pUpgrade: true, lUpgrade: true },
    { feature: 'Concrete Grade', h: 'M-20 (1:2:3)', p: 'M-20 (1:2:3)', l: 'M-25 (1:2:3) — Higher Grade!', lUpgrade: true },
    { feature: 'Steel Grade', h: 'TMT Bars (ISI Standard)', p: 'TMT Bars (ISI Standard)', l: 'TMT Bars (ISI Standard)' },
  ],
  flooring: [
    { feature: 'Kitchen / Living / Bedroom (Vitrified)', h: '₹35/sqft', p: '₹40/sqft', l: '₹45/sqft', pUpgrade: true, lUpgrade: true },
    { feature: 'Parking Tiles (Anti Skid)', h: '₹25/sqft', p: '₹30/sqft', l: '₹35/sqft', pUpgrade: true, lUpgrade: true },
    { feature: 'Granite (Kitchen or Stairs)', h: 'Upto ₹85/sqft, 150 sqft', p: 'Upto ₹100/sqft, 150 sqft', l: 'Upto ₹110/sqft, 200 sqft', pUpgrade: true, lUpgrade: true },
    { feature: 'Bathroom Tiles (Anti Skid)', h: '₹30/sqft', p: '₹35/sqft', l: '₹40/sqft', pUpgrade: true, lUpgrade: true },
    { feature: 'Kitchen Dado / Toilet Dado / Wash Area', h: '₹30/sqft', p: '₹35/sqft', l: '₹40/sqft', pUpgrade: true, lUpgrade: true },
    { feature: 'Stairs Tiling', h: 'Single-Layer Stone', p: 'Double-Layer Stone', l: 'Double-Layer Stone Finish with Center White Line', pUpgrade: true, lUpgrade: true },
  ],
  waterproofing: [
    { feature: 'Bathroom Waterproofing', h: 'Brick Bat Coba', p: 'Brick Bat Coba', l: 'Brick Bat Coba' },
    { feature: 'Terrace Waterproofing', h: 'Crush/Fine Aggregate Finish (Gradient/Slope)', p: 'Crush/Fine Aggregate + Chemical WP', l: 'Crush/Fine Aggregate + Chemical WP', pUpgrade: true, lUpgrade: true },
    { feature: 'External Wall', h: 'Not Included', p: '—', l: '—', hLow: true },
  ],
  doors: [
    { feature: 'Main Door (with Frame & Accessories)', h: '₹7,000 Saghwan Wood', p: '₹8,000 Saghwan Wood', l: '₹9,000 Saghwan Wood', pUpgrade: true, lUpgrade: true },
    { feature: 'Room Door (with Frame & Accessories)', h: '₹3,000 Pine Door', p: '₹3,500 Pine Door', l: '₹4,000 Pine Door', pUpgrade: true, lUpgrade: true },
    { feature: 'Toilet Door (with Frame & Accessories)', h: '₹2,500 PVC Door', p: '₹3,000 PVC Door', l: '₹3,500 PVC Door', pUpgrade: true, lUpgrade: true },
    { feature: 'Terrace Door (Iron)', h: '₹3,500', p: '₹4,000', l: '₹5,000', pUpgrade: true, lUpgrade: true },
    { feature: 'Window (Mosquito Net Gauge 20, Glass 4mm)', h: '3 Track Aluminium @ ₹200/sqft', p: 'Mini Domal @ ₹250/sqft', l: 'Domal / UPVC @ ₹350/sqft', pUpgrade: true, lUpgrade: true },
    { feature: 'Ventilation', h: 'Aluminium MS Fix Type', p: 'Aluminium MS Fix Type', l: 'Aluminium MS Fix Type' },
  ],
  electrical: [
    { feature: 'Main Door Weight', h: '90 KG', p: '110 KG', l: '130 KG', pUpgrade: true, lUpgrade: true },
    { feature: 'Balcony / Staircase Railing (per floor)', h: 'Tata/Jindal Steel — Max ₹250/rft', p: 'Tata/Jindal Steel — Max ₹300/rft', l: 'Tata/Jindal Steel — Max ₹350/rft', pUpgrade: true, lUpgrade: true },
    { feature: 'Electrical Wiring', h: 'Polycab / KEI', p: 'Polycab / KEI / Finolex', l: 'Polycab / KEI / Havells', pUpgrade: true, lUpgrade: true },
    { feature: 'Switches (6/16 Amp)', h: '₹20–30 per switch', p: '₹30–40 per switch', l: '₹40–45 per switch', pUpgrade: true, lUpgrade: true },
    { feature: 'Sockets (6/16 Amp)', h: '₹50–60 per socket', p: '₹60–70 per socket', l: '₹70–80 per socket', pUpgrade: true, lUpgrade: true },
    { feature: 'MCB & DB Panel', h: '₹1,000', p: '₹1,200', l: '₹1,500', pUpgrade: true, lUpgrade: true },
  ],
  painting: [
    { feature: 'Internal Wall Putti', h: 'Batti Ghisai + 2 Coat Birla White', p: 'Batti Ghisai + 2 Coat Birla White', l: 'Batti Ghisai + 2 Coat Birla White' },
    { feature: 'Internal Wall Paint', h: 'Asian Tractor @ ₹150/Ltr', p: 'Asian / Burger @ ₹200/Ltr', l: 'Asian / Burger @ ₹250/Ltr', pUpgrade: true, lUpgrade: true },
    { feature: 'External Wall', h: '1 Coat White Cement', p: '1 Coat Primer', l: '1 Coat Primer', pUpgrade: true, lUpgrade: true },
    { feature: 'Paint on Fabrication', h: '1 Coat Primer', p: '1 Coat Primer + 2 Coat Enamel', l: '1 Coat Primer + 2 Coat Enamel', pUpgrade: true, lUpgrade: true },
    { feature: 'AC Line', h: 'Not Included', p: '15 Running Feet Included', l: '25 Running Feet Included', hLow: true, pUpgrade: true, lUpgrade: true },
  ],
  sanitary: [
    { feature: 'Indian / Western Toilet (max 2)', h: 'Indian ₹800 / Western ₹3,500', p: 'Indian ₹1,200 / Western ₹4,500', l: 'Indian ₹1,500 / Western ₹5,000', pUpgrade: true, lUpgrade: true },
    { feature: 'Kitchen Fixture', h: '₹6,000', p: '₹8,000', l: '₹10,000', pUpgrade: true, lUpgrade: true },
    { feature: 'Kitchen Plumbing', h: 'Sink, Boring, Wash, Washing Machine, Normal, Parking UGT', p: 'Same as Happiness', l: 'Same as Happiness' },
    { feature: 'Tap Rate', h: '₹350/piece avg', p: '₹400/piece avg', l: '₹450/piece avg', pUpgrade: true, lUpgrade: true },
    { feature: 'Underground Water Tank', h: '4" Bricks, 4000–5000 L (RCC ₹15k extra)', p: '8" Bricks, 4000–5000 L', l: '4" Brick + 4" RCC, 4000–5000 L', pUpgrade: true, lUpgrade: true },
    { feature: 'Overhead Water Tank', h: '1000 L Vectus/Supremo', p: '1500 L Vectus/Supremo', l: '1500 L Vectus/Supremo', pUpgrade: true, lUpgrade: true },
  ],
}

function CellContent({ value, isUpgrade, isLow }) {
  if (isLow) {
    return (
      <span className="inline-flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
        <HiXCircle className="text-red-400 w-4 h-4 flex-shrink-0" />
        {value}
      </span>
    )
  }
  if (isUpgrade) {
    return (
      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-xs sm:text-sm">
        <HiArrowUp className="text-emerald-500 w-3 h-3 flex-shrink-0" />
        {value}
      </span>
    )
  }
  return <span className="text-gray-700 text-xs sm:text-sm">{value}</span>
}

function DesktopTable({ rows, t }) {
  return (
    <div className="overflow-x-auto scrollbar-thin rounded-2xl border border-gray-100 shadow-sm">
      <table className="w-full min-w-[640px]">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            {/* Sticky feature column header */}
            <th className="sticky left-0 z-10 bg-gray-50 text-left px-5 py-4 text-sm font-bold text-secondary w-[30%]">
              {t('compare.feature')}
            </th>
            <th className="px-5 py-4 text-center">
              <div className="inline-flex flex-col items-center">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Happiness</span>
                <span className="text-blue-500 font-black text-base">₹1,499/sqft</span>
              </div>
            </th>
            <th className="px-5 py-4 text-center bg-orange-50/60">
              <div className="inline-flex flex-col items-center">
                <span className="text-[10px] font-black text-white bg-primary px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
                  Best Value
                </span>
                <span className="text-xs font-bold text-primary tracking-wider uppercase">Premium</span>
                <span className="text-primary font-black text-base">₹1,599/sqft</span>
              </div>
            </th>
            <th className="px-5 py-4 text-center">
              <div className="inline-flex flex-col items-center">
                <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Luxury</span>
                <span className="text-amber-500 font-black text-base">₹1,699/sqft</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
              {/* Sticky feature name */}
              <td className={`sticky left-0 z-10 px-5 py-4 text-sm font-semibold text-secondary ${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}>
                {row.feature}
              </td>
              <td className="px-5 py-4 text-center">
                <CellContent value={row.h} isLow={row.hLow} />
              </td>
              {/* Premium column — orange highlight when upgrade */}
              <td className={`px-5 py-4 text-center ${row.pUpgrade ? 'bg-orange-50' : 'bg-orange-50/20'}`}>
                <CellContent value={row.p} isUpgrade={row.pUpgrade} isLow={row.pLow} />
              </td>
              <td className="px-5 py-4 text-center">
                <CellContent value={row.l} isUpgrade={row.lUpgrade} isLow={row.lLow} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function MobileCards({ rows }) {
  return (
    <div className="space-y-4">
      {rows.map((row, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-100">
            <span className="font-bold text-secondary text-sm">{row.feature}</span>
          </div>
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            {[
              { label: 'Happiness', value: row.h, upgrade: row.hUpgrade, low: row.hLow, color: 'text-blue-600', bg: '' },
              { label: 'Premium',   value: row.p, upgrade: row.pUpgrade, low: row.pLow, color: 'text-primary', bg: row.pUpgrade ? 'bg-orange-50' : '' },
              { label: 'Luxury',    value: row.l, upgrade: row.lUpgrade, low: row.lLow, color: 'text-amber-600', bg: '' },
            ].map(col => (
              <div key={col.label} className={`p-3 text-center ${col.bg}`}>
                <div className={`text-xs font-bold mb-2 ${col.color}`}>{col.label}</div>
                <CellContent value={col.value} isUpgrade={col.upgrade} isLow={col.low} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Comparison() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('structural')

  return (
    <section id="compare" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            {t('compare.eyebrow')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mb-4">
            {t('compare.title')}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">{t('compare.subtitle')}</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {tabKeys.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-md shadow-primary/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-primary'
              }`}
            >
              {t(`compare.tabs.${tab}`)}
            </button>
          ))}
        </div>

        {/* Table / Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {/* Desktop */}
            <div className="hidden sm:block">
              <DesktopTable rows={tableData[activeTab]} t={t} />
            </div>
            {/* Mobile */}
            <div className="sm:hidden">
              <MobileCards rows={tableData[activeTab]} />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center text-xs text-gray-500">
          <span className="flex items-center gap-1"><HiArrowUp className="text-emerald-500" /> Upgrade from previous tier</span>
          <span className="flex items-center gap-1"><HiXCircle className="text-red-400" /> Not included</span>
          <span className="flex items-center gap-1"><HiCheckCircle className="text-gray-400" /> Standard inclusion</span>
          <span className="flex items-center gap-1">
            <span className="w-4 h-3 rounded bg-orange-50 border border-orange-200 inline-block" /> Premium upgrade
          </span>
        </div>
      </div>
    </section>
  )
}
