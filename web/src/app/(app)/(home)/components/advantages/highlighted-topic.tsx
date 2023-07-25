import Link from 'next/link'
import { LuArrowRight, LuExpand } from 'react-icons/lu'

export function HighlightedTopic() {
  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col gap-2 md:flex-row md:items-center">
        {/* Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-700 shadow-lg">
          <LuExpand className="text-2xl text-primary-300" />
        </div>
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-50">Scalability</h2>
      </header>

      {/* Content */}
      <div>
        <p className="mb-4 text-lg leading-snug">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          mollitia odio a. Nisi ut libero atque deleniti maiores fugit quos,
          provident eum eos ullam tempora nobis consequatur vitae quidem. Illum!
        </p>
        <Link
          href="/"
          className="flex items-center gap-1 text-lg font-medium text-primary-300"
        >
          <div className="flex items-center gap-1 border-b-2 border-primary-300">
            Check tests section
            <LuArrowRight />
          </div>
        </Link>
      </div>
    </div>
  )
}
