export const fetchMovies = async (input) => {
  const response = await (await fetch(`http://www.omdbapi.com/?apikey=744db6a4&r=json&s=${input}`)).json()
  console.log(response);
  return response.Search
}
