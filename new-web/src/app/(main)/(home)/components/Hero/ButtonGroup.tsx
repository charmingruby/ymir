import { Button } from '@/components/ui/Button'
import { Book } from 'lucide-react'

export function ButtonGroup() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <Button>Start developing</Button>
      <Button color="uncolored">
        <span>Documentation</span>
        <Book size={16} />
      </Button>
    </div>
  )
}
