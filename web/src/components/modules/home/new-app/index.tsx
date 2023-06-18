import { ContentContainer } from '@/components/shared/content-container'
import { NewAppTitle } from './components/title'
import { NewAppDescription } from './components/description'
import { NewAppActions } from './components/actions'

export function StartApp() {
  return (
    <div className="border-y-2 border-gray-600 bg-gray-900 py-32">
      <ContentContainer>
        <div className="flex w-full">
          {/* Content */}
          <div className="flex flex-col justify-center gap-8">
            <NewAppTitle />
            <NewAppDescription />
            <NewAppActions />
          </div>
        </div>
      </ContentContainer>
    </div>
  )
}
