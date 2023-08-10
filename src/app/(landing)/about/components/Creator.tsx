import { Container } from '@/components/ui/Container'
import creatorImage from '@/assets/images/team/gustavo-dias-profile.jpeg'
import Image from 'next/image'
import { Text } from '@/components/ui/Text'

export function Creator() {
  return (
    <section className="bg-gray-900">
      <Container>
        <div className="flex w-full gap-8">
          <div className="">
            <Image
              src={creatorImage}
              alt="Gustavo Dias Image"
              className="rounded-full h-16 w-16"
            />
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
