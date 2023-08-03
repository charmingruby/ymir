interface SectionDescriptorProps {
  text: string
}

export function SectionDescriptor({ text }: SectionDescriptorProps) {
  return (
    <span className="text-sm font-semibold uppercase mb-4 text-primary-300">
      {text}
    </span>
  )
}
