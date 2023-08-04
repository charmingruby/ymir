import { CheckCircle2, XCircle } from 'lucide-react'

interface PermissionProps {
  permitted: boolean
  text: string
}

export function Permission({ permitted, text }: PermissionProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Icon */}
      {permitted ? (
        <CheckCircle2 className="text-2xl text-success-300" />
      ) : (
        <XCircle className="text-2xl text-danger-300" />
      )}

      {/* Permission Text */}
      <div>
        <span className="">{text}</span>
      </div>
    </div>
  )
}
