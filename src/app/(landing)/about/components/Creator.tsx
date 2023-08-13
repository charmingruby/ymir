import { Container } from '@/components/ui/Container'
import creatorImage from '@/assets/images/team/gustavo-dias-profile.jpeg'
import Image from 'next/image'
import { Text } from '@/components/ui/Text'
import { Github, Linkedin, Quote } from 'lucide-react'
import { Box } from '@/components/ui/Box'
import { SectionTitle } from '@/components/shared/SectionTitle'

export function Creator() {
  return (
    <section className="bg-gray-900-gradient border-b border-gray-500">
      <Container className="">
        <div className="flex flex-col gap-4 mx-auto text-center mb-12">
          <Quote className="text-primary-300" />
          <SectionTitle title="What our devs want to tell" />
          <Text className="max-w-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis
            reiciendis, dignissimos aut illum aliquid quibusdam, iure dolor
            temporibus facere neque earum harum quis at nesciunt a nam laborum
            eum.
          </Text>
        </div>
        <Box className=" flex flex-col md:flex-row w-full gap-4 p-8 rounded-md">
          <div className="flex gap-4 border-b pb-2 md:pb-2 md:border-b-0 md:border-r pr-4 border-gray-500">
            <Image
              src={creatorImage}
              alt="Gustavo Dias Image"
              className="rounded-full h-14 w-14"
            />

            <div className="mb-2 flex flex-col pt-1">
              <strong className="text-xl leading-tight">Gustavo Dias</strong>
              <small className="text-base text-gray-200 leading-tight">
                Founder
              </small>

              <div className="flex gap-2 mt-2">
                <Linkedin className="h-4 w-4" />
                <Github className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center gap-2 flex-1">
            <Text className="text-xl italic text-gray-100">
              &quot;The primary reason I created Ymir was to assist developers
              who seek a panoramic view of what they are constructing and what
              tasks remain ahead.&quot;
            </Text>
          </div>
        </Box>
      </Container>
    </section>
  )
}
