import { Button } from '@/components/ui/Button'

export function ButtonGroup() {
  return (
    <div className="flex flex-col w-full md:flex-row gap-4 justify-center">
      <Button>Start developing</Button>
      <Button variant="secondary">
        <span>Get an app</span>
      </Button>
    </div>
  )
}
