import { ScrollBackToTopButton } from './scroll-back-to-top-button'

export function BottomFooter() {
  return (
    <div className="flex items-center justify-between">
      {/* Copyright */}
      <div className="text-sm text-gray-300">
        © Copyright 2023,{' '}
        <span className="font-semibold text-primary-300">Ymir</span>. All rights
        reserved.
      </div>

      <ScrollBackToTopButton />
    </div>
  )
}
