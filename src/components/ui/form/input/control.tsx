import { ComponentProps, forwardRef } from 'react'

interface InputProps extends ComponentProps<'input'> {
  hasError?: boolean
  name: string
}

const Control = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, hasError = false, placeholder, ...props }, ref) => {
    const inputId = id ?? name

    /* eslint-disable */
    return (
      <div className='relative'>
        <input
          {...props}
          ref={ref}
          id={inputId}
          name={name}
          className={`
          w-full bg-white h-[52px] px-3 outline-none box-border placeholder-shown:pt-0 pt-4 peer transition-colors border rounded-lg
          ${hasError
              ? 'border-danger-300 placeholder-danger-300'
              : 'border-gray-100 placeholder-gray-200 focus:border-primary-300 '
            }
      `}
          placeholder=' '
        />
        <label
          htmlFor={inputId}
          className='absolute left-[13px] top-2 text-xs pointer-events-none text-gray-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all'
        >
          {placeholder}
        </label>
      </div>
    )
    /* eslint-enable */
  },
)

Control.displayName = 'Control'

export { Control }
