export const getRatingNumber = (rating) => {
  switch (rating.Source) {
    case 'Internet Movie Database':
      return +(rating.Value.split('/')[0] * 10)
    case 'Rotten Tomatoes':
      return +(rating.Value.split('%')[0])
    case 'Metacritic':
      return +(rating.Value.split('/')[0])
  }
  return rating.Value
}