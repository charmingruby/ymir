import { ContentContainer } from '@/components/shared/content-container'
import { Button } from '@/components/shared/button'
import { LuArrowRight } from 'react-icons/lu'

export function StartApp() {
  return (
    <div className="border-y-2 border-gray-600 bg-gray-900 py-32">
      <ContentContainer>
        <div className="flex w-full">
          {/* Content */}
          <div className="flex flex-col justify-center gap-8">
            {/* Title */}
            <div className="flex justify-center">
              <h2 className="text-5xl font-bold text-gray-50">Blablabla</h2>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                expedita corrupti dolores aspernatur repudiandae? Nemo sint
                quasi animi labore dignissimos numquam omnis, quam delectus unde
                laudantium blanditiis aspernatur voluptates dolor.
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-center">
              <Button variant="secondary" className="px-10">
                <span className=" text-lg font-semibold text-gray-50">
                  Get started
                </span>
              </Button>

              <div className="flex items-center">
                <span>Learn more</span>
                <LuArrowRight />
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  )
}
