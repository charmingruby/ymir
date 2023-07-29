import { LuExpand, LuWand2, LuCircleDot } from 'react-icons/lu'
import { ReasonItem } from './reason-item'

export function ReasonList() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      <ReasonItem
        icon={LuExpand}
        reason="Scalability"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus expedita reiciendis debitis nisi, voluptate labore minima sunt autem sit magnam."
      />

      <ReasonItem
        icon={LuWand2}
        reason="Ease of use"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus expedita reiciendis debitis nisi, voluptate labore minima sunt autem sit magnam."
      />

      <ReasonItem
        icon={LuCircleDot}
        reason="Consistency"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus expedita reiciendis debitis nisi, voluptate labore minima sunt autem sit magnam."
      />
    </div>
  )
}
