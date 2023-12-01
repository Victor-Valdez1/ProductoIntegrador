import axiosFetch  from '../config/axios'
export const getMovies = async (path) => {
  try {
    const {data} = await axiosFetch(path);
    return data
  } catch (error) {
    console.log('erros.message :>>', error.message)
  }
}