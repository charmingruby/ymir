'use client'

import { CaretDown } from 'phosphor-react'

export function Navigation() {
  return (
    <nav>
      <div className="flex gap-4 text-base font-medium text-gray-50">
        <div>Home</div>
        <div className="flex items-center gap-1">
          <span className="">Projects</span>
          <CaretDown size={14} className="text-gray-300" />
        </div>
        <div className="flex items-center gap-1">
          <span className="">Organizations</span>
          <CaretDown size={14} className="text-gray-300" />
        </div>
        <div className="flex items-center gap-1">
          <span className="">Developers</span>
          <CaretDown size={14} className="text-gray-300" />
        </div>
        <div>Docs</div>
      </div>
    </nav>
  )
}
