import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { Text } from '@/components/ui/Text'
import { ProductList } from './ProductList'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'
import * as Container from '@/components/ui/Container'

export function Products() {
  return (
    <Container.Root backgroundColor="dark">
      <Container.Content className="pb-16 md:pb-24 pt-16">
        <div className="flex sm:items-center flex-col">
          <SectionDescriptor
            text="some services already done for you"
            onDarkColor
          />

          <div className="sm:text-center gap-4 flex flex-col sm:items-center">
            <SectionTitle title="Products designed for your use" />
            <Text className="max-w-2xl sm:text-center" variant="white">
              We are thrilled to offer not only a developer platform but also a
              variety of pre-made apps just for you. And if you need a custom
              app, we{"'"}ve got you covered!
            </Text>
          </div>

          <div className="mt-4">
            <Button variant="terciary">
              <span>View all</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <ProductList />
      </Container.Content>
    </Container.Root>
  )
}
