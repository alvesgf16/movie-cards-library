export default async function fetchApi(movieId, setState) {
  const API_KEY = 'k_d2v5o3m4';
  const BASE_URL = 'https://imdb-api.com/en/API'
  const endpoint = movieId ? `${BASE_URL}/Title/${API_KEY}/${movieId}` : `${BASE_URL}/Top250Movies/${API_KEY}`;
  try {
    const response = await fetch(endpoint);
    const result = await response.json();
    const data = result.items || result;
    setState(data);
  } catch (e) {
    console.log('error', e);
  }
}
