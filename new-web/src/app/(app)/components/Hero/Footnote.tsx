import { Go } from '@/assets/images/langs/Go'
import { Node } from '@/assets/images/langs/Node'
import { Python } from '@/assets/images/langs/Python'
import { Plus } from 'lucide-react'

export function Footnote() {
  return (
    <div className="flex w-full flex-col items-center gap-2 mt-16">
      <p className="text-sm text-gray-300">Abstracted of technologies </p>
      <div className="flex gap-2 fill-gray-300 items-center">
        <Python className="h-6 w-6" />
        <Node className="h-6 w-6" />
        <Go className="h-6 w-6" />
        <Plus className="text-gray-300 h-4 w-4" />
      </div>
    </div>
  )
}
