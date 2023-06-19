import { ContentContainer } from '@/components/shared/content-container'
import { ContentDescriptor } from '@/components/shared/content-descriptor'
import { Title } from '@/components/shared/title'

export function StructureExplanation() {
  return (
    <div className="border-b-2 border-gray-600 py-12">
      <ContentContainer>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <ContentDescriptor content="blabla" />
            <Title
              content="
              Method designed for
              speed up your projects"
            />
          </div>

          <div className="flex items-center justify-center">
            <span className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              natus optio doloribus commodi accusamus maiores ducimus illo
              atque, molestiae temporibus, placeat deserunt debitis. Voluptatum,
              qui. Nemo consequuntur iste minus sequi.
            </span>
          </div>
        </div>
        Structure Explanation (Talking about entities, use cases, etc){' '}
      </ContentContainer>
    </div>
  )
}
