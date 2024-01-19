'use Client'

import { points } from './dataHouse/houses'

import { HouseList } from '@/components/HouseList'
import { HouseItem } from '@/components/HouseItem'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#F5F5F5]">
      <div className="flex justify-between w-full items-center mb-20">
        <p className="font-medium text-gray-900">Lista de Pontos</p>
        <span className="bg-[#F4511E] rounded-md px-[33px] py-[10px] text-white">
          Ver todos
        </span>
      </div>
      <HouseList>
        {points.map((point) => (
          <HouseItem address={point.address} image={point.image} />
        ))}
      </HouseList>
    </main>
  )
}
