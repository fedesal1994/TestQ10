import axios from 'axios';

export async function getCharactersAPI() {
  try {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character',
    );
    return response.data.results;
  } catch (error) {
    throw error;
  }
}

export async function getDetailsAPI(id) {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    //console.log(id);
    return response.data;
  } catch (error) {
    throw error;
  }
}
