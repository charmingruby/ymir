import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Text } from '@/components/ui/Text'
import { Phone } from 'lucide-react'

export function Content() {
  return (
    <section className="flex flex-col justify-center">
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
        <div className="flex  items-center gap-4">
          <div className="w-14 h-14 bg-primary-300 rounded-md shadow-sm justify-center items-center flex">
            <Phone className="text-white h-6 w-6" />
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-base font-medium  ">Phone number</span>
            <small className="block text-sm text-gray-400">
              +55 (32) 9 9110-0990
            </small>
          </div>
        </div>

        <div className="flex  items-center gap-4">
          <div className="w-14 h-14 bg-primary-300 rounded-md shadow-sm justify-center items-center flex">
            <Phone className="text-white h-6 w-6" />
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-base font-medium  ">Phone number</span>
            <small className="block text-sm text-gray-400">
              +55 (32) 9 9110-0990
            </small>
          </div>
        </div>

        <div className="flex  items-center gap-4">
          <div className="w-14 h-14 bg-primary-300 rounded-md shadow-sm justify-center items-center flex">
            <Phone className="text-white h-6 w-6" />
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-base font-medium  ">Phone number</span>
            <small className="block text-sm text-gray-400">
              +55 (32) 9 9110-0990
            </small>
          </div>
        </div>
      </div>
    </section>
  )
}
