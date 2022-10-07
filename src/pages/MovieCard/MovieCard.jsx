import { useParams } from 'react-router-dom';
import { fetchDataById } from 'services/api';

const MovieCard = () => {
  const { id } = useParams();
  const movie = fetchDataById(id);
  console.log(id);
  console.log(movie);
  //   return (
  //     <div>
  //       <img
  //         src={`https://www.themoviedb.org/t/p/w500${poster_path}`}
  //         alt={`${title}`}
  //       />
  //       <div>
  //         <h2>{`${title}`}</h2>
  //       </div>
  //     </div>
  //   );
};

export default MovieCard;
