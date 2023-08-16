interface SeparatorProps {
  onDarkColor?: boolean
}

export function Separator({ onDarkColor = false }: SeparatorProps) {
  return (
    <div
      className={`flex h-[1.5px] w-full ${
        onDarkColor ? 'bg-gray-500' : 'bg-gray-100'
      }`}
    />
  )
}
