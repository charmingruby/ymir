interface DescriptorProps {
  content: string
}

export function Descriptor({ content }: DescriptorProps) {
  return (
    <span className="text-sm font-semibold uppercase text-primary-300">
      {content}
    </span>
  )
}
