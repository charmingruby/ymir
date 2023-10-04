import { SectionTitle } from '@/components/section-title'
import * as Container from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { AtSign, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import logo from '@/assets/images/logo.svg'
import owner from '@/assets/images/team/gustavo-dias-profile.jpeg'
import { MediaCard } from './components/media-card'
import { SectionDescriptor } from '@/components/section-descriptor'

export default function Contact() {
  return (
    <Container.Root className="min-h-screen flex items-center">
      <Container.Content
        spacing="topPage"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <SectionDescriptor text="Let's network" />
            <SectionTitle title="Get in touch" dark />
          </div>

          <Text>
            Feel free to reach out to us via phone anytime. Our dedicated team
            is here to assist you with any questions, concerns, or inquiries you
            may have. Whether it{"'"}s for immediate assistance or a friendly
            chat, we{"'"}re just a phone call away. Your call matters to us, and
            we look forward to speaking with you soon.
          </Text>

          <div className="flex flex-col gap-4">
            <MediaCard
              content="/gustavo-dias21"
              icon={Linkedin}
              url="https://www.linkedin.com/in/gustavo-dias21/"
            />
            <MediaCard
              content="/charmingruby"
              icon={Github}
              url="https://github.com/charmingruby"
            />
            <MediaCard content="gustavodiasa2121@gmail.com" icon={AtSign} />
          </div>
        </div>

        <div className="flex flex-col py-10 justify-center gap-8 lg:gap-10 lg:max-w-sm mx-auto">
          {/* Logo */}
          <div className="flex flex-row gap-2 items-center">
            <Image src={logo} alt="Logo" className="w-7 h-7" />
            <span className="font-logo text-primary-300 text-4xl">Ymir</span>
          </div>

          {/* Quote */}
          <Text className="font-medium leading-loose text-lg italic">
            {`"`}Our developer assistance app is a powerful tool to enhance
            productivity and coding skills, essential for collaboration and
            learning within the developer community.{`"`}
          </Text>

          {/* Owner */}
          <div className="flex items-center gap-4">
            <div>
              <Image
                src={owner}
                alt="Gustavo Dias image"
                className="rounded-full h-14 w-14"
              />
            </div>
            <div className="flex flex-col">
              <strong className="text-lg">Gustavo Dias</strong>
              <small className="text-sm text-gray-400 font-medium">
                Founder
              </small>
            </div>
          </div>
        </div>
      </Container.Content>
    </Container.Root>
  )
}
