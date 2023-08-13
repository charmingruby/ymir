import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import Link from 'next/link'

export function CTA() {
  return (
    <div className="">
      <Container className="flex flex-col text-4xl py-16 sm:text-5xl text-center gap-8">
        <strong className="text-gray-50">Plans that fit on your pocket</strong>
        <Text className="max-w-2xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          magni rerum molestiae consequuntur quos quod, deleniti et totam
          distinctio laudantium eveniet atque veniam minima sint sequi soluta,
          impedit nihil vero.
        </Text>

        <Link
          href="/register"
          prefetch={false}
          className="flex w-full justify-center"
        >
          <Button color="primary">Register now</Button>
        </Link>
      </Container>
    </div>
  )
}
