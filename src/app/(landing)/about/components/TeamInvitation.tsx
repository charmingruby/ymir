import { Box } from '@/components/ui/Box'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'

export function TeamInvitation() {
  return (
    <Container spacing="spaceless" className="py-12">
      <Box
        className="flex flex-col md:flex-row justify-between gap-6 md:gap-16 items-center px-16 py-8  bg-primary-100"
        spacing="spaceless"
        color="transparent"
      >
        <strong className="text-xl text-gray-50">Join team</strong>
        <Text color="onDarkColor" className="flex-1 text-center md:text-start ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae
          quam corporis, facilis quo eum, blanditiis ea, reiciendis ducimus
          voluptate iure corrupti in esse excepturi et. Placeat quo nisi quis!
        </Text>
        <Button color="light">Contact</Button>
      </Box>
    </Container>
  )
}
