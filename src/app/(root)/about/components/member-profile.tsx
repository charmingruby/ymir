import { Box } from '@/components/ui/box'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface MemberProfileProps {
  avatarPath: StaticImageData
  name: string
  role: string
  linkedinUrl: string
}

export function MemberProfile({
  avatarPath,
  linkedinUrl,
  name,
  role,
}: MemberProfileProps) {
  return (
    <Box color="light" className="flex gap-4 items-center">
      <Image
        src={avatarPath}
        alt="Ymir creator avatar"
        className="rounded-full w-16 h-16"
      />
      <div className="mb-2  flex-1">
        <strong className="text-lg leading-snug">{name}</strong>
        <small className="block text-sm leading-snug text-gray-400">
          {role}
        </small>
      </div>
      <Link
        href={linkedinUrl}
        prefetch={false}
        className="p-2 hover:brightness-[95%] bg-white rounded-md transition-all"
      >
        <Linkedin className="h-5 w-5 text-primary-300" />
      </Link>
    </Box>
  )
}
