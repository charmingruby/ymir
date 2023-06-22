import { SupporttedTechnology } from './supportted-technologies'

export function TechnologyCard({ icon, name }: SupporttedTechnology) {
  return (
    <div className="flex h-16 w-full cursor-pointer items-center justify-start gap-4 rounded-md border border-gray-500 px-4 shadow-sm transition-shadow hover:shadow-lg">
      <div className="text-xl">{icon}</div>
      <div className="h-6 w-px bg-gray-500" />
      <span className="text-lg font-semibold">{name}</span>
    </div>
  )
}
