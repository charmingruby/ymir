import { ContentDescriptor } from '@/components/shared/content-descriptor'
import { Title } from '@/components/shared/title'

export function FeatureApresentation() {
  return (
    <div className="flex flex-col gap-6">
      <ContentDescriptor content="Based on popular patterns" />

      <Title content="Accelerate your development" />

      <div className="max-w-2xl">
        <p className="w-full text-lg leading-relaxed">
          Each part of Software Development, from the beggining to the end,
          documented, guaranteing management facilities beyound teams
        </p>
      </div>
    </div>
  )
}
