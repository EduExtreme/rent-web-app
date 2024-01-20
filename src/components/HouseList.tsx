import Link from 'next/link'
import { ReactNode } from 'react'
interface HouseListProps {
  children: ReactNode
}
export function HouseList({ children }: HouseListProps) {
  return (
    <div className="flex w-full overflow-x-auto [&::-webkit-scrollbar]:hidden p-2">
      <div className="grid grid-cols-3 w-full h-max gap-4">{children}</div>
    </div>
  )
}
