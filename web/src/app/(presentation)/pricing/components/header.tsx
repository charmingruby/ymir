export function Header() {
  return (
    <header className="mb-6 flex justify-between">
      {/* Title */}
      <div className="space-x-3">
        <strong className="text-2xl font-medium text-gray-50">
          Select plan
        </strong>
        <span className="text-gray-200">
          Choose the plan that works better for you
        </span>
      </div>

      {/* Choose monthly or annually */}
      <div className="flex">
        <div>MONTHLY</div>
        <div>ANNUALLY</div>
      </div>
    </header>
  )
}
