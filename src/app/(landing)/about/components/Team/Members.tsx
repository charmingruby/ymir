import gustavoProfile from '@/assets/images/team/gustavo-dias-profile.jpeg'
import felipeProfile from '@/assets/images/team/felipe-bignoto-profile.jpeg'
import { MemberProfile } from './MemberProfile'
import { Users } from 'lucide-react'

export function Members() {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Users className="h-5 w-5 text-primary-300" />
        <div className="text-xl font-semibold">Meet the team</div>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
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
    </div>
  )
}
