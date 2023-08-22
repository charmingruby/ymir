import { Content } from '@/components/pages/landing/contact/Content'
import { EmailForm } from '@/components/pages/landing/contact/EmailForm'
import { Container } from '@/components/ui/Container'

export default function Contact() {
  return (
    <Container
      className="min-h-screen flex items-center flex-row"
      spacing="topPage"
    >
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Content />
        <div className="flex w-full">
          <EmailForm />
        </div>
      </div>
    </Container>
  )
}
