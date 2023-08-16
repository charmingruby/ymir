import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { ProductList } from './ProductList'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'

export function Products() {
  return (
    <section className="bg-gray-900-gradient rounded-b-3xl border-b-2 border-gray-400">
      <Container spacing="spaceless" className="pb-24 pt-16">
        <div className="flex sm:items-center flex-col">
          <SectionDescriptor
            text="some services already done for you"
            onDarkColor
          />

          <div className="sm:text-center gap-4 flex flex-col sm:items-center">
            <SectionTitle title="Products designed for your use" />
            <Text className="max-w-2xl sm:text-center" color="onDarkColor">
              We are thrilled to offer not only a developer platform but also a
              variety of pre-made apps just for you. And if you need a custom
              app, we{"'"}ve got you covered!
            </Text>
          </div>

          <div className="mt-4">
            <Button color="terciary">
              <span>View all</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <ProductList />
      </Container>
    </section>
  )
}
