import { SectionDescriptor } from '@/components/SectionDescriptor'
import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { ReasonList } from './ReasonList'

export function WhyUs() {
  return (
    <section className="bg-gray-900">
      <Container className="flex flex-col lg:items-center">
        <SectionDescriptor text="bring agility to your apps" />

        <h2 className="text-5xl font-semibold mb-8">
          Build apps with speed and confidence
        </h2>

        <div className="max-w-4xl mb-12">
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
