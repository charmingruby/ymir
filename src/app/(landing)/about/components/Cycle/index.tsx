import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react'
import { CycleElement } from './CycleElement'

export function Cycle() {
  return (
    <section className="bg-gray-900-gradient rounded-3xl">
      <Container spacing="spaceless" className="py-16 md:py-24">
        <SectionDescriptor text="From dev to dev" />

        <div className="flex flex-col gap-4">
          <SectionTitle title="We provide the resolutions of devs" />
          <Text color="onDarkColor">
            We think about helping not only our team, but the entire ecosystem
            of developers.
          </Text>
        </div>

        {/* Top Cycle */}
        <div className="mt-12 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-8">
            <CycleElement />
            <div className="flex justify-center items-center">
              <ArrowRight className="hidden md:block text-primary-50" />
              <ArrowDown className="block md:hidden text-primary-50" />
            </div>
            <CycleElement />
          </div>
        </div>

        {/* Mid Cycle */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 text-primary-100">
          <div className="hidden md:flex items-center justify-center">
            <ArrowUp />
          </div>
          <div className="flex items-center justify-center">
            <ArrowDown />
          </div>
        </div>

        {/* Bottom Cycle */}
        <div className="mt-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-8">
            <CycleElement />
            <div className="flex justify-center items-center text-primary-100">
              <ArrowRight className="hidden md:block text-primary-50" />
              <ArrowDown className="block md:hidden text-primary-50" />
            </div>
            <CycleElement />
          </div>
        </div>
      </Container>
    </section>
  )
}
