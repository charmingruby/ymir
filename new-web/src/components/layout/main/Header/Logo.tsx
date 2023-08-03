import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" prefetch={false}>
      <strong className="text-3xl flex items-center gap-2 font-medium">
        <svg
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          width="500.000000pt"
          height="500.000000pt"
          viewBox="0 0 500.000000 500.000000"
        >
          <g fill="#9CEC5B">
            <path
              d="M445 4840c-19-21-20-36-20-457 0-512-13-466 133-477 393-29 766-188 1067-454 256-226 463-561 546-885 54-213 52-154 58-1308 6-1041 7-1078 25-1098 19-21 25-21 453-21 422 0 434 1 453 20 21 21 21 25 17 1123-3 1069-3 1106-24 1232-125 760-515 1392-1139 1843-396 287-932 474-1427 499-117 5-123 5-142-17zM3665 4846c-226-51-410-201-504-408-112-246-77-539 88-749 56-70 154-153 228-192 369-192 815-49 993 318 56 116 73 191 73 320 1 136-17 208-80 335-84 167-237 297-418 357-98 32-283 41-380 19z"
              transform="matrix(.1 0 0 -.1 0 500)"
            />
          </g>
        </svg>
        <span className="font-alt hidden lg:block">Ymir</span>
      </strong>
    </Link>
  )
}
