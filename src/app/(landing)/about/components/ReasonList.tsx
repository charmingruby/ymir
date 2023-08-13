import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react'
import { ReasonItem } from './ReasonItem'

export function ReasonList() {
  return (
    <section className="bg-gray-900-gradient ">
      <Container>
        <SectionDescriptor text="From dev to dev" />

        <div className="flex flex-col gap-4">
          <SectionTitle title="We provide the resolutions of devs" />
          <Text>
            We think about helping not only our team, but the entire ecosystem
            of developers.
          </Text>
        </div>

        {/* Top Cycle */}
        <div className="mt-12 flex flex-col gap-8">
          <div className="flex flex-row gap-8">
            <ReasonItem />
            <div className="flex justify-center items-center">
              <ArrowRight className="text-primary-50" />
            </div>
            <ReasonItem />
          </div>
        </div>

        {/* Mid Cycle */}
        <div className="grid grid-cols-2 mt-8 text-primary-100">
          <div className="flex items-center justify-center">
            <ArrowUp />
          </div>
          <div className="flex items-center justify-center">
            <ArrowDown />
          </div>
        </div>

        {/* Bottom Cycle */}
        <div className="mt-12 flex flex-col gap-8">
          <div className="flex flex-row gap-8">
            <ReasonItem />
            <div className="flex justify-center items-center text-primary-100">
              <ArrowLeft />
            </div>
            <ReasonItem />
          </div>
        </div>
      </Container>
    </section>
  )
}
