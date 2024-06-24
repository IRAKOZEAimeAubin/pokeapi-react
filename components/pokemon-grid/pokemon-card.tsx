import {Card} from '@/components/ui/card'
import Link from 'next/link'

interface PokemonCardProps {
  name: string
}

export const PokemonCard = ({name}: PokemonCardProps) => {
  return (
    <Link href={name}>
      <Card className='text-center p-2 cursor-pointer'>
        <h2 className='text-xl font-medium'>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
      </Card>
    </Link>
  )
}
