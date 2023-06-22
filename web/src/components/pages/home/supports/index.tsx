import { Container } from '@/components/shared/container'
import { SupporttedTechnologies } from './components/supportted-technologies'
import { Illustration } from './components/illustration'
import { SupportApresentation } from './components/support-apresentation'
import { Separator } from '@/components/shared/separator'
import { TechnologyCard } from './components/technology-card'
import { SiGraphql } from 'react-icons/si'

export function Supports() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b-2 border-gray-600 py-12">
      {/* Blur */}
      <div className="absolute right-0 -z-10 h-screen w-1/2 translate-x-1/2 rounded-full bg-gray-900 blur-full" />

      <Container>
        <div className="grid grid-cols-2">
          <div className="mb-6 flex flex-col gap-6">
            <SupportApresentation />
            <SupporttedTechnologies />

            <div className="py-4">
              <Separator />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-50">
                Comming <span className="text-primary-300 ">soon</span>
              </h3>

              <div className="w-1/2">
                <TechnologyCard
                  icon={<SiGraphql className="text-[#DE33A6]" />}
                  name="Graphql"
                />
              </div>
            </div>
          </div>

          <Illustration />
        </div>
      </Container>
    </section>
  )
}
