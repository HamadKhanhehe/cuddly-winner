const key = '0d3454ddc83e0d4462f099e4d04e9ec2'

 const requests = {
requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
// requestHorror: `https://api.themoviedb.org/3/movie/horror?api_key=${key}`,

}
export default requests