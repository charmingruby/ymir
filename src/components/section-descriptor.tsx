interface SectionDescriptorProps {
  text: string
  onDarkColor?: boolean
}

export function SectionDescriptor({
  text,
  onDarkColor = false,
}: SectionDescriptorProps) {
  return (
    <span
      className={`text-sm font-semibold uppercase mb-4 ${
        onDarkColor ? 'text-terciary-300' : 'text-primary-300'
      }`}
    >
      {text}
    </span>
  )
}
