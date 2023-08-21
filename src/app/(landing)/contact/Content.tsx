import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Text } from '@/components/ui/Text'
import { Mail, MapPin, Phone } from 'lucide-react'
import { AdditionalInfo } from './AdditionalInfo'

export function Content() {
  return (
    <section className="flex flex-col justify-center pt-16 lg:pt-0">
      <SectionDescriptor text="Contact us" />

      <div className="space-y-4 mb-12">
        <SectionTitle title="Get in touch with us" dark />
        <Text color="lowOpacity">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos
          eaque laborum illo vel soluta architecto, incidunt molestiae commodi
          voluptatem quas illum rem libero minus. Facilis reiciendis veniam nisi
          magnam.
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
  )
}
