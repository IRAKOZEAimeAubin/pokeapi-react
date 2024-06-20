'use client'

import {useState} from 'react'
import {Input} from '@/components/ui/input'
import {PokemonCard} from './pokemon-card'
import {useQuery} from '@tanstack/react-query'
import {getAllPokemons} from '@/actions/pokemons'

export const PokemonGrid = () => {
  const [searchText, setSearchText] = useState('')
  const {data, error} = useQuery({
    queryKey: ['pokemons'],
    queryFn: getAllPokemons,
  })

  if (error) <span>Error!</span>
  if (data)
    return (
      <>
        <p className='text-white text-center mb-2'>
          Search for a Pokémon by name.
        </p>
        <div className='flex justify-center mb-4'>
          <div className='relative w-full max-w-md'>
            <Input
              type='text'
              placeholder='Charmander, Bulbasaur, ...'
              className='w-full text-white'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {data.map((pokemon: PokemonFound) => {
            return <PokemonCard key={pokemon.name} name={pokemon.name} />
          })}
        </div>
      </>
    )
}
