import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface NextStepButtonProps {
  url: string
  onClick?: () => void
}

export function NextStepButton({ url, onClick }: NextStepButtonProps) {
  return (
    <Link href={url} prefetch={false} onClick={onClick} className="flex">
      <Button className="md:w-full">
        <span>Next</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </Button>
    </Link>
  )
}
