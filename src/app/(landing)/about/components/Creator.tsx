import { Container } from '@/components/ui/Container'
import creatorImage from '@/assets/images/team/gustavo-dias-profile.jpeg'
import Image from 'next/image'
import { Text } from '@/components/ui/Text'
import { Github, Linkedin } from 'lucide-react'

export function Creator() {
  return (
    <section className="bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
          <div className="flex flex-col items-center gap-4">
            <Image
              src={creatorImage}
              alt="Gustavo Dias Image"
              className="rounded-full h-40 w-40"
            />

            <div className="text-center">
              <strong>Gustavo Dias</strong>
              <small className="block">Full Stack Developer</small>
            </div>

            <div className="flex justify-center gap-2 text-gray-300">
              <Linkedin />
              <Github />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 flex-1">
            <Text size="lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur ratione voluptatem deleniti libero? Consequuntur
              exercitationem dicta atque nisi rerum, sed eligendi sequi ipsam
              ipsum, explicabo perferendis quibusdam quasi. Cupiditate,
              expedita!
            </Text>

            <Text color="lowOpacity">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              suscipit ducimus voluptas molestiae aspernatur deleniti omnis
              mollitia, rerum adipisci laborum commodi aliquam sit at
              dignissimos, quis ut consequuntur culpa earum.
            </Text>
          </div>
        </div>
      </Container>
    </section>
  )
}
