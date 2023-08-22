import { Content } from '@/components/pages/landing/contact/Content'
import { EmailForm } from '@/components/pages/landing/contact/EmailForm'
import { Container } from '@/components/ui/Container'

export default function Contact() {
  return (
    <Container className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Content />
      <div className="flex items-center w-full">
        <EmailForm />
      </div>
    </Container>
  )
}
