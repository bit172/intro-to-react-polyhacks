import POKEMONS from '../constants/Pokemons.json'

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

export const getPokemons = () =>
  new Promise((resolve, reject) => {
    const timeout = getRandomInt(250, 1000)
    if (!POKEMONS)
      return setTimeout(() => reject(new Error('Pokemons not found')), timeout)
    POKEMONS.forEach((p) => {
      p.name = p.name.replace(/-/g, ' ')
    })
    setTimeout(() => resolve(POKEMONS), timeout)
  })
