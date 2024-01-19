import { Bath, Bed, BedDoubleIcon } from 'lucide-react'
import whatsLogo from '../../public/WhatsApp.svg'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface HouseItemProps {
  address: string
  image: StaticImageData
}
export function HouseItem({ address, image }: HouseItemProps) {
  return (
    <div className="flex flex-col h-[100%] w-[300px] cursor-pointer rounded-lg bg-white shadow-md">
      <Image
        src={image}
        width={0}
        height={0}
        alt="imagem dos imóveis"
        sizes="100vw"
        className="h-[50%] rounded-t-lg max-w-[100%] object-cover"
      />

      <div className="px-4 mt-4">
        <span className="text-black font-bold text-base">{address}</span>
        <div className="flex flex-col mt-4 ">
          <p className="font-medium text-gray-700">Ponto Comercial</p>
          <span className="text-orange-500">R$1200/Mês</span>
        </div>
      </div>

      <div className="flex mt-4 border border-t-orange-500 gap-2 items-center">
        <Image src={whatsLogo} alt="social icon" className="w-10 h-10 mx-2" />
        <div className="flex items-center gap-1 text-gray-700">
          <BedDoubleIcon size={24} />
          <p>3</p>
        </div>
        <div className="flex items-center gap-1 text-gray-700">
          <Bath size={24} />
          <p>3</p>
        </div>
      </div>
    </div>
  )
}
