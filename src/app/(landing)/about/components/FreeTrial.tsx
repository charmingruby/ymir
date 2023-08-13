import { Box } from '@/components/ui/Box'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'

export function FreeTrial() {
  return (
    <section className="bg-gray-900-gradient ">
      <Container>
        <Box>
          <h2>Have a free trial before start</h2>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            voluptate eveniet, consectetur eos omnis iusto temporibus, aliquam
            enim cum voluptatibus voluptatem obcaecati in ipsam reprehenderit
            harum dicta amet. Reiciendis, odit?
          </Text>
          <Button>Free test for 2 weeks</Button>
        </Box>
      </Container>
    </section>
  )
}
