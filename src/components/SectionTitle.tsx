interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className="text-4xl sm:text-5xl font-semibold">{title}</h2>
}
