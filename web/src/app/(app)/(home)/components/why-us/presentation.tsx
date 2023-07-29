import { Descriptor } from '@/components/descriptor'
import { Title } from '@/components/ui/title'

export function Presentation() {
  return (
    <div className="mb-16 flex flex-col gap-6 lg:items-center">
      <Descriptor content="bring agility to your apps" />
      <div className="flex flex-col items-center gap-4">
        <Title content="Build apps with speed and confidence" />
        <div className="max-w-4xl">
          <p className="text-lg leading-relaxed lg:text-center">
            {' '}
            The{' '}
            <strong className="text-gray-50">
              Ymir Development Assistance
            </strong>{' '}
            is a direct line to make your applications agile management and
            easiest to development. With our services, we ensure our users that:
          </p>{' '}
        </div>
      </div>
    </div>
  )
}
