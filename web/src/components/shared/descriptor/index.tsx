interface DescriptorProps {
  content: string
}

export function Descriptor({ content }: DescriptorProps) {
  return (
    <span className="text-base font-semibold text-primary-300">{content}</span>
  )
}
