import Link from 'next/link'
import { ReactNode } from 'react'
interface HouseListProps {
  children: ReactNode
}
export function HouseList({ children }: HouseListProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden p-2">
      <div className="flex w-full h-max gap-4">{children}</div>
    </div>
  )
}
