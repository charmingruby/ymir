import { Container } from '@/components/ui/Container'
import { Content } from './Content'
import { EmailForm } from './EmailForm'

export default function Contact() {
  return (
    <Container
      spacing="topPage"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      <Content />
      <EmailForm />
    </Container>
  )
}
