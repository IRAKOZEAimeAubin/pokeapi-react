'use server'

import {client} from '@/util/axios-client'
import {AxiosResponse} from 'axios'

export const getAllPokemons = async () => {
  try {
    const response: AxiosResponse = await client.get('/')
    const data: PokemonFound[] = response.data.results
    return data
  } catch (error) {
    console.log(error)
  }
}
