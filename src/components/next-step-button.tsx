import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface NextStepButtonProps {
  url: string
  onClick?: () => void
}

export function NextStepButton({ url, onClick }: NextStepButtonProps) {
  return (
    <Link href={url} prefetch={false} onClick={onClick} className="flex mt-16">
      <Button className="md:w-full" size="form">
        <span>Next</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </Button>
    </Link>
  )
}
