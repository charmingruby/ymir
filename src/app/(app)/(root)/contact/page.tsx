import * as Container from '@/components/ui/container'
import { EmailForm } from './components/email-form'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Text } from '@/components/ui/text'
import { AdditionalInfo } from './components/additional-info'
import { SectionDescriptor } from '@/components/section-descriptor'
import { SectionTitle } from '@/components/section-title'

export default function Contact() {
  return (
    <Container.Root>
      <Container.Content
        className="min-h-screen flex items-center flex-row"
        spacing="topPage"
      >
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="flex flex-col">
            <SectionDescriptor text="Contact us" />

            <div className="space-y-4 mb-12">
              <SectionTitle title="Get in touch with us" dark />
              <Text variant="lowOpacity">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                quos eaque laborum illo vel soluta architecto, incidunt
                molestiae commodi voluptatem quas illum rem libero minus.
                Facilis reiciendis veniam nisi magnam.
              </Text>
            </div>

            <div className="space-y-6">
              <AdditionalInfo
                icon={Phone}
                label="Phone number"
                content="+55 (32) 9 9110-0990"
              />
              <AdditionalInfo
                icon={Mail}
                label="Email"
                content="gustavodiasa2121@gmail.com"
              />
              <AdditionalInfo
                icon={MapPin}
                label="Location"
                content="Minas Gerais, Brazil"
              />
            </div>
          </section>

          <EmailForm />
        </div>
      </Container.Content>
    </Container.Root>
  )
}
