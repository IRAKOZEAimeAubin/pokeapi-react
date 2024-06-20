import {getAllPokemons} from '@/actions/pokemons'
import {PokemonGrid} from '@/components/pokemon-grid/pokemon-grid'
import {dehydrate, HydrationBoundary, QueryClient} from '@tanstack/react-query'

export default async function Home() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['pokemons'],
    queryFn: getAllPokemons,
  })

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PokemonGrid />
      </HydrationBoundary>
    </>
  )
}
