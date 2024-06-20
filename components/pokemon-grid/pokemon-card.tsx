import {Card} from '@/components/ui/card'

interface PokemonCardProps {
  name: string
}

export const PokemonCard = ({name}: PokemonCardProps) => {
  return (
    <Card className='text-center p-4'>
      <h2 className='text-xl font-medium'>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Card>
  )
}
