import { SectionDescriptor } from '@/components/SectionDescriptor'
import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { ReasonList } from './ReasonList'
import { SectionTitle } from '@/components/SectionTitle'

export function WhyUs() {
  return (
    <section className="bg-gray-900 border-t border-gray-600">
      <Container className="flex flex-col lg:items-center">
        <SectionDescriptor text="bring agility to your apps" />

        <SectionTitle title="Build apps with speed and confidence" />

        <div className="max-w-4xl mt-8">
          <Text className="lg:text-center" size="lg">
            The{' '}
            <span className="text-gray-50 font-semibold">
              Ymir Development Assistance
            </span>{' '}
            is a direct line to make your applications agile management and
            easiest to development. With our services, we ensure our users that:
          </Text>
        </div>

        <ReasonList />
      </Container>
    </section>
  )
}
