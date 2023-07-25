import { LuCheckCircle2, LuXCircle } from 'react-icons/lu'

interface PermissionProps {
  permitted: boolean
  text: string
  highlight?: boolean
}

export function Permission({
  highlight = false,
  permitted,
  text,
}: PermissionProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Icon */}
      {permitted ? (
        <LuCheckCircle2 className="text-2xl text-success-300" />
      ) : (
        <LuXCircle className="text-2xl text-danger-300" />
      )}

      {/* Permission Text */}
      <div>
        <span className="">{text}</span>
      </div>
    </div>
  )
}
