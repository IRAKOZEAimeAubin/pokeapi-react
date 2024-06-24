'use server'

import {client} from '@/util/axios-client'
import {AxiosResponse} from 'axios'

export const getAllPokemons = async () => {
  try {
    const response: AxiosResponse = await client.get('?limit=151')
    const data: PokemonFound[] = response.data.results
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getPokemon = async (pokemonName: string) => {
  try {
    const response: AxiosResponse = await client.get(`/${pokemonName}`)
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}
