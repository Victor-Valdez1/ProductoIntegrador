import {  useContext, useEffect } from "react";
import { movieContext } from "../../contex/movies/moviesContext";
import { Container } from "react-bootstrap";
import Movie from "../../components/Movie";
import { getMovies } from "../../helpers/crud";


const MovieId = ({ data }) => {

    console.log(data)
    const { movie, characters } = data;
    const { getCharacters, getMovieById } = useContext(movieContext);
  
    useEffect(() => {
      if (Object.keys(data).length !== 0) {
        getMovieById(movie);
        getCharacters(characters.cast);
      }
    }, [data]);
  
    return (
      <Container>
        <Movie />
      </Container>
    );
  };

export async function getServerSideProps(ctx) {
    const { id } = ctx.query;
    const [result] = await Promise.all([
      {
        movie: await getMovies(`/movie/${id}`),
        characters: await getMovies(`/movie/${id}/credits`)
      }
    ]);
    return {
      props: {
        data: result
      } 
    };
  }
  
export default MovieId;