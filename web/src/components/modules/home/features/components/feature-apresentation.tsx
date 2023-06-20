import { ContentDescriptor } from '@/components/shared/content-descriptor'
import { ContentSectionExplanationText } from '@/components/shared/content-section-explanation-text'
import { Title } from '@/components/shared/title'

export function FeatureApresentation() {
  return (
    <div className="flex flex-col gap-6">
      <ContentDescriptor content="Based on popular patterns" />

      <Title content="Accelerate your development" />

      <div className="max-w-2xl">
        <ContentSectionExplanationText>
          Each part of Software Development, from the beggining to the end,
          documented, guaranteing management facilities beyound teams
        </ContentSectionExplanationText>
      </div>
    </div>
  )
}
