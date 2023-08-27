import { ElementType } from 'react'

interface AdditionalInfo {
    icon: ElementType
    label: string
    content: string
}

export function AdditionalInfo({ icon: Icon, label, content }: AdditionalInfo) {
    return (
        <div className="flex  items-center gap-4">
            <div className="w-14 h-14 bg-primary-300 rounded-md shadow-sm justify-center items-center flex">
                <Icon className="text-white h-6 w-6" />
            </div>

            <div className="flex flex-col gap-0.5">
                <span className="text-base font-medium  ">{label}</span>
                <small className="block text-sm text-gray-400">{content}</small>
            </div>
        </div>
    )
}
