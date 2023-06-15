import { ContentContainer } from '@/components/shared/content-container'
import { LuArrowRight, LuExpand } from 'react-icons/lu'

export function ServicesDisplay() {
  return (
    <section className="min-h-screen w-full bg-gray-900 pt-16">
      <ContentContainer>
        <div className="mx-auto mb-12 flex max-w-4xl flex-col items-center gap-6">
          <span className="font-semibold text-primary-500">
            Based on most popular patterns
          </span>
          <h2 className="text-5xl font-extrabold">
            Applying patterns on your projects
          </h2>
          <div className="max-w-2xl">
            <p className="w-full leading-relaxed">
              Each part of Software Development, from the beggining to the end,
              documented, guaranteing management facilities beyound teams
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Card */}
          <div className="flex flex-col rounded-md border border-gray-600 p-4">
            {/* Adjective + Icon */}
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-gray-500 text-primary-500">
              <LuExpand size={18} />
            </div>

            {/* Content */}
            <div className="mb-8">
              <header className="text-lg font-bold">Scalable</header>
              <p className="leading-relaxed text-gray-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus molestiae, dolorum aperiam officia quos deleniti at
                magni tempore, recusandae illo fugit temporibus sunt totam
                commodi alias iusto. Ipsam, voluptas enim!
              </p>
            </div>

            {/* Explanation redirection */}
            <button className="flex items-center gap-1 font-medium text-primary-500">
              View more
              <LuArrowRight />
            </button>
          </div>

          <div className="rounded-md border border-gray-600 p-4">
            <span>jjj</span>
          </div>

          <div className="rounded-md border border-gray-600 p-4">
            <span>jjj</span>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
