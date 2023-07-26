import { AdvantageItem } from './advantage-item'

export interface Advantage {
  advantage: string
}

const advantagesList: Advantage[] = [
  {
    advantage: 'Scalability',
  },
  {
    advantage: 'Developer Experience',
  },
  {
    advantage: 'Code Quality',
  },
  {
    advantage: 'Testing',
  },
  {
    advantage: 'Comprehensive Documentation',
  },
  {
    advantage: 'Database Schemas',
  },
]

export function AdvantageList() {
  return (
    <div className="flex flex-col gap-1.5">
      {advantagesList.map((advantage) => (
        <AdvantageItem key={advantage.advantage} {...advantage} />
      ))}
    </div>
  )
}
