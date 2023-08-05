interface SectionTitleProps {
  title: string
  dark?: boolean
}

export function SectionTitle({ title, dark = false }: SectionTitleProps) {
  return (
    <h2
      className={`text-4xl sm:text-5xl font-semibold ${
        dark ? 'text-gray-900' : 'text-gray-50'
      }`}
    >
      {title}
    </h2>
  )
}
