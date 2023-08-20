import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { MissionList } from './MissionList'
import { SectionTitle } from '@/components/shared/SectionTitle'

export function WhyUs() {
  return (
    <Container className="flex flex-col lg:items-center">
      <SectionDescriptor text="bring agility to your apps" />

      <SectionTitle dark title="Build apps with speed and confidence" />

      <div className="max-w-4xl mt-8">
        <Text className="lg:text-center" size="lg">
          The{' '}
          <span className="text-gray-950 font-semibold">
            Ymir Development Assistance
          </span>{' '}
          is a direct line to make your applications agile management and
          easiest to development. With our services, we ensure our users that:
        </Text>
      </div>

      <MissionList />
    </Container>
  )
}
