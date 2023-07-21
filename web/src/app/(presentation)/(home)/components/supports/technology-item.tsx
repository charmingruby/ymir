import { SupporttedTechnology } from './technology-list'

export function TechnologyItem({ icon, name }: SupporttedTechnology) {
  return (
    <div className="flex h-16 w-full cursor-pointer items-center justify-start gap-4 rounded-md border-2 border-gray-500 bg-gray-700 px-4 shadow-sm transition-shadow hover:shadow-lg">
      <div className="rounded-md border-2 border-gray-500 bg-gray-600 p-2 text-2xl shadow-lg">
        {icon}
      </div>
      <div className="h-8 w-0.5 rounded-md bg-gray-500" />
      <span className="text-lg font-semibold">{name}</span>
    </div>
  )
}
