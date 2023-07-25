import { Descriptor } from '@/components/descriptor'
import { Text } from '@/components/ui/text'
import { Title } from '@/components/ui/title'

export function Presentation() {
  return (
    <div className="mb-6 flex flex-col gap-6">
      <Descriptor content="bring agility to your apps" />
      <div className="flex flex-col gap-3">
        <Title content="Build apps with speed and confidence" />
        <Text>
          The{' '}
          <strong className="text-gray-50">Ymir Development Assistance</strong>{' '}
          is a direct line to make your applications agile management and
          easiest to development. With our services, we ensure our users that:
        </Text>
      </div>
    </div>
  )
}
