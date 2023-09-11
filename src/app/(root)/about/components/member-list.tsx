import gustavoProfile from '@/assets/images/team/gustavo-dias-profile.jpeg'
import felipeProfile from '@/assets/images/team/felipe-bignoto-profile.jpeg'
import { MemberProfile } from './member-profile'

export function MemberList() {
  return (
    <div className="flex flex-col w-full md:w-auto md:grid md:grid-cols-2 gap-4 md:gap-8">
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
  )
}
