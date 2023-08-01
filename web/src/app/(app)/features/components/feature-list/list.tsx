import { Item } from './item'

export function List() {
  return (
    <div className="flex flex-col gap-4">
      {/* Features */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}
