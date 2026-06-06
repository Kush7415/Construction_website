import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LoadingSpinner from './components/LoadingSpinner'

const Packages   = lazy(() => import('./components/Packages'))
const Comparison = lazy(() => import('./components/Comparison'))
const Materials  = lazy(() => import('./components/Materials'))
const WhyUs      = lazy(() => import('./components/WhyUs'))
const Gallery    = lazy(() => import('./components/Gallery'))
const Contact    = lazy(() => import('./components/Contact'))
const Footer     = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <Packages />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Comparison />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Materials />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}
