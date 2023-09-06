import { SectionTitle } from '@/components/section-title'
import * as Container from '@/components/ui/container'
import { Text } from '@/components/ui/text'

export default function Contact() {
  return (
    <Container.Root className="min-h-screen">
      <Container.Content spacing="topPage" className="grid grid-cols-2">
        <div>
          <SectionTitle title="Get in touch" dark />

          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            similique vitae cupiditate doloribus debitis quo repellendus soluta
            in unde molestias minus inventore porro hic quisquam fuga,
            perferendis aspernatur iure architecto.
          </Text>

          <div>
            <div></div>
          </div>
        </div>
        <div>form</div>
      </Container.Content>
    </Container.Root>
  )
}
