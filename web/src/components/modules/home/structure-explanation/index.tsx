import { ContentContainer } from '@/components/shared/content-container'
import { ContentDescriptor } from '@/components/shared/content-descriptor'
import { ContentSectionExplanationText } from '@/components/shared/content-section-explanation-text'
import { Title } from '@/components/shared/title'

export function StructureExplanation() {
  return (
    <div className="border-b-2 border-gray-600 py-12">
      <ContentContainer>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <ContentDescriptor content="blabla" />

            <Title
              content="
              Method designed for
              speed up your projects with quality"
            />

            <div className="flex items-center justify-center">
              <ContentSectionExplanationText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                officia veniam incidunt quibusdam enim praesentium, magni
                sapiente, nisi itaque sequi magnam alias aspernatur ullam, quasi
                blanditiis dolorem nesciunt ducimus accusamus.
              </ContentSectionExplanationText>
            </div>
          </div>
        </div>
        Structure Explanation (Talking about entities, use cases, etc){' '}
      </ContentContainer>
    </div>
  )
}
