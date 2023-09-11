import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ElementType } from 'react'

interface MediaCardProps {
  icon: ElementType
  content: string
  url?: string
}

export function MediaCard({ icon: Icon, content, url }: MediaCardProps) {
  return (
    <div className="flex items-center gap-2 group cursor-pointer w-fit">
      <div className="bg-gray-100 group-hover:bg-primary-300 w-fit p-2 rounded-full transition-colors">
        <Icon
          className="group-hover:text-gray-50 text-gray-300 h-5 w-5 transition-colors"
          strokeWidth={1.5}
        />
      </div>
      {url ? (
        <Link
          href={url}
          prefetch={false}
          className="text-gray-300 group-hover:text-primary-300 font-medium flex items-center gap-2 transition-colors"
        >
          <span className="group-hover:underline underline-offset-4 transition-all">
            {content}
          </span>
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      ) : (
        <div className="text-gray-300 group-hover:text-primary-300 font-medium flex items-center gap-2 transition-colors break-all">
          {content}
        </div>
      )}
    </div>
  )
}
