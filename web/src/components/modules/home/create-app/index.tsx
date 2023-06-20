import { ContentContainer } from '@/components/shared/content-container'
import { NewAppTitle } from './components/title'
import { NewAppDescription } from './components/description'
import { NewAppActions } from './components/actions'

export function CreateApp() {
  return (
    <div className="bg-primary-900 relative overflow-hidden border-b-2 border-gray-900 py-16">
      <div className="absolute right-1/2 -z-10 h-1/2 w-1/2 translate-x-1/2 bg-primary-300 blur-full" />
      <ContentContainer>
        {/* Content */}
        <div className="flex flex-col items-center gap-8">
          <NewAppTitle />
          <NewAppDescription />
          <NewAppActions />
        </div>
      </ContentContainer>
    </div>
  )
}
