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
  return <div>Permission</div>
}
