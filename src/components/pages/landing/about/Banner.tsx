import { Box } from '@/components/ui/Box'
import * as Container from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'

export function Banner() {
  return (
    <Container.Root>
      <Container.Content>
        <Box
          className="flex flex-col md:flex-row justify-between gap-6 md:gap-16 items-center px-16 py-8  bg-primary-100"
          spacing="spaceless"
          color="transparent"
        >
          <Text
            variant="white"
            size="lg"
            className="max-w-2xl mx-auto text-center"
          >
            We provide a dedicated space for developers, offering{' '}
            <strong className="font-bold">
              support in project advancement through collaborative resources
            </strong>{' '}
            while promoting continuous learning and career growth.
          </Text>
        </Box>
      </Container.Content>
    </Container.Root>
  )
}
