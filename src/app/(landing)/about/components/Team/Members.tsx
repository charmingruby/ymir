import gustavoProfile from '@/assets/images/team/gustavo-dias-profile.jpeg'
import felipeProfile from '@/assets/images/team/felipe-bignoto-profile.jpeg'
import { MemberProfile } from './MemberProfile'
import { ArrowRight, Users } from 'lucide-react'
import { Text } from '@/components/ui/Text'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function Members() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-2xl mb-12">
        <div className="flex flex-col items-center justify-center gap-2 mb-4">
          <Users className="h-8 w-8 text-primary-300" />
          <SectionTitle title="Meet the team" dark />
        </div>
        <Text className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit eum
          tempore temporibus eaque iusto velit beatae perferendis voluptate,
          aperiam numquam, nostrum ea exercitationem corrupti expedita deleniti
          consectetur dignissimos nihil excepturi!
        </Text>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
        <MemberProfile
          avatarPath={gustavoProfile}
          name="Gustavo Dias"
          role="Founder"
          linkedinUrl="https://www.linkedin.com/in/gustavo-dias21/"
        />
        <MemberProfile
          avatarPath={felipeProfile}
          name="Felipe Bignoto"
          role="Assistent"
          linkedinUrl="https://www.linkedin.com/in/felipe-bignoto-palacio/"
        />
      </div>

      <Link
        href="/contact"
        prefetch={false}
        className="mt-8 flex w-full justify-center"
      >
        <Button>
          <span>Join us</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}
