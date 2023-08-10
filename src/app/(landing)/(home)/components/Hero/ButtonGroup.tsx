import { Button } from '@/components/ui/Button'

export function ButtonGroup() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <Button>Start developing</Button>
      <Button color="uncolored">
        <span>Get an app</span>
      </Button>
    </div>
  )
}
