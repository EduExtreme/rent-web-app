import {
  MenuIcon,
  HotelIcon,
  HomeIcon,
  PercentIcon,
  Link,
  ListOrderedIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import { Card } from './ui/card'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
} from './ui/sheet'
import { Button } from './ui/button'
import { House } from '@phosphor-icons/react'

export function Header() {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-4 space-y-4">
            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} /> Inicio
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <HotelIcon size={16} />
              Pontos
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </Card>
  )
}
