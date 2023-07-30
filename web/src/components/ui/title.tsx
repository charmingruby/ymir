interface TitleProps {
  content: string
}

export function Title({ content }: TitleProps) {
  return (
    <h2 className="m-0 text-4xl font-extrabold text-gray-50 md:text-5xl">
      {content}{' '}
    </h2>
  )
}
