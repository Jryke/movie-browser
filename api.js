const BASE_URL = 'http://www.omdbapi.com/?apikey=744db6a4';

const deserializeResponse = response => {
  if (!response.ok) throw new Error('Error fetching your request')

  return response.json()
}

export const fetchMovies = async (input) => {
  const searchURL = `${BASE_URL}&r=json&s=${input}`
  const response = await fetch(searchURL)
  const result = await deserializeResponse(response)
  console.log('result:', result)
  return result.Search
}

export const fetchMovieInfo = async (id) => {
  const searchURL = `${BASE_URL}&i=${id}`
  const response = await fetch(searchURL)
  const result = await deserializeResponse(response)
  console.log('result:', result)
  return result
}
