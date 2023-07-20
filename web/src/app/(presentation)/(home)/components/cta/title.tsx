import { Title as TitleUI } from '@/components/ui/title'

export function Title() {
  return (
    <div className="flex flex-col items-center">
      <TitleUI content="Boost your productivity." />
      <TitleUI content="Start using our app today." />
    </div>
  )
}
