import Link from 'next/link'

interface ServiceLink {
  label: string
  url: string
}

export function ServiceLink({ label, url }: ServiceLink) {
  return (
    <Link href={url} prefetch={false}>
      <small className="text-gray-300 font-medium text-sm hover:text-primary-300 transition-colors">
        {label}
      </small>
    </Link>
  )
}
