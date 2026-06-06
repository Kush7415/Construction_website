import React from 'react'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-orange-100" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
        <div className="absolute inset-[6px] rounded-full border-4 border-transparent border-t-accent animate-spin" style={{ animationDuration: '0.6s', animationDirection: 'reverse' }} />
      </div>
    </div>
  )
}
