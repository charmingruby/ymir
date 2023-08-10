import { InternalLinkItem } from './InternalLinkItem'

export interface LinkProps {
  label: string
  url: string
}

const links: LinkProps[] = [
  { label: 'Features', url: '/features' },
  { label: 'Products', url: '/products' },
  { label: 'Pricing', url: '/pricing' },
  { label: 'The Ymir', url: '/about' },
  { label: 'Contact', url: '/contact' },
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
