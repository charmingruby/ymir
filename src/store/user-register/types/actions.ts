export interface AssignPersonalDetailsProps {
  name: string
  lastName: string
  email: string
  birthdate: Date
}

export type UserRegisterActions = {
  assignPersonalDetails: (props: AssignPersonalDetailsProps) => void
  assignPassword: () => void
  assignUpdateProfile: () => void
  assignUseMotivation: () => void
}
