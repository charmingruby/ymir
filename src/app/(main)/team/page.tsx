import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { Person } from './Person'

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col divide-y divide-gray-600">
      <div className="bg-gray-900">
        <Container spacing="topPage" className="flex justify-center">
          <div className="w-full flex-col items-center flex">
            <h2 className="text-center">Meet our team</h2>
            <Text className="max-w-2xl text-center">
              This small but dynamic group of developers has been working
              tirelessly to bring innovation and creativity to our latest
              project. Let{"'"}s dive in and meet the team.
            </Text>
          </div>
        </Container>
      </div>

      <div>
        <Container className="flex-1">
          <Person />
        </Container>
      </div>
    </div>
  )
}
