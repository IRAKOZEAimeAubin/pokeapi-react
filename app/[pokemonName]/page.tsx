import {getPokemon} from '@/actions/pokemons'

export default async function Pokemon({
  params,
}: {
  params: {pokemonName: string}
}) {
  const {pokemonName} = params
    const data = await getPokemon( pokemonName )
    console.log(data)

  return <span>{pokemonName}</span>
}
