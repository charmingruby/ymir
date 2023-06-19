interface ContentDescriptorProps {
  content: string
}

export function ContentDescriptor({ content }: ContentDescriptorProps) {
  return (
    <span className="text-base font-semibold text-primary-300">{content}</span>
  )
}
