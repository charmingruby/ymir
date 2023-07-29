interface TitleProps {
  content: string
}

export function Title({ content }: TitleProps) {
  return (
    <h2 className="m-0 text-5xl font-extrabold text-gray-50">{content} </h2>
  )
}
