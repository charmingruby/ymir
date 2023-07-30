import { InternalLinkItem } from './internal-link-item'

export interface LinkProps {
  label: string
  url: string
}

const links: LinkProps[] = [
  { label: 'About', url: '/about' },
  { label: 'Products', url: '/products' },
  { label: 'Pricing', url: '/pricing' },
  { label: 'Docs', url: '/docs' },
]

export function InternalLinkList() {
  return (
    <div className="mt-6 flex flex-wrap gap-4">
      {links.map(({ label, url }, index) => (
        <InternalLinkItem
          key={url}
          label={label}
          url={url}
          isTheLast={index === links.length - 1}
        />
      ))}
    </div>
  )
}