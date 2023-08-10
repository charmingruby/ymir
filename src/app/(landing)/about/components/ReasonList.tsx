import { SectionTitle } from '@/components/shared/SectionTitle'
import { Box } from '@/components/ui/Box'
import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Users } from 'lucide-react'

export function ReasonList() {
  return (
    <section className="bg-gray-900">
      <Container>
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
            <Box>
              <div className="flex items-center gap-2">
                <Box spacing="icon">
                  <Users />
                </Box>

                <span>Route</span>
              </div>

              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                consequuntur cupiditate earum impedit rerum enim minima, maxime
                voluptatibus. Cupiditate commodi obcaecati pariatur dignissimos
                a, earum inventore. Officiis veritatis reiciendis laudantium.
              </Text>
            </Box>
            <div className="flex justify-center items-center">
              <ArrowRight />
            </div>
            <Box>
              <div className="flex items-center gap-2">
                <Box spacing="icon">
                  <Users />
                </Box>

                <span>Route</span>
              </div>

              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                consequuntur cupiditate earum impedit rerum enim minima, maxime
                voluptatibus. Cupiditate commodi obcaecati pariatur dignissimos
                a, earum inventore. Officiis veritatis reiciendis laudantium.
              </Text>
            </Box>
          </div>
        </div>

        {/* Mid Cycle */}
        <div className="grid grid-cols-2 mt-8">
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
            <Box>
              <div className="flex items-center gap-2">
                <Box spacing="icon">
                  <Users />
                </Box>

                <span>Route</span>
              </div>

              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                consequuntur cupiditate earum impedit rerum enim minima, maxime
                voluptatibus. Cupiditate commodi obcaecati pariatur dignissimos
                a, earum inventore. Officiis veritatis reiciendis laudantium.
              </Text>
            </Box>
            <div className="flex justify-center items-center">
              <ArrowLeft />
            </div>
            <Box>
              <div className="flex items-center gap-2">
                <Box spacing="icon">
                  <Users />
                </Box>

                <span>Route</span>
              </div>

              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                consequuntur cupiditate earum impedit rerum enim minima, maxime
                voluptatibus. Cupiditate commodi obcaecati pariatur dignissimos
                a, earum inventore. Officiis veritatis reiciendis laudantium.
              </Text>
            </Box>
          </div>
        </div>
      </Container>
    </section>
  )
}
