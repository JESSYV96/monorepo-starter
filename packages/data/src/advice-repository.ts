import { Advice } from '@jessy/core'
import axios from 'axios'

export const getAdvice = async (): Promise<Advice> => {
  const { data } = await axios.get<{ slip: Advice }>('https://api.adviceslip.com/advice')
  return data.slip
}
