import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import movieData from "../dummy-data";

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Variable berikut akan menampung data movie yang akan kita tampilkan
  const movie = movieData.find((movie) => movie.mal_id == id) || {};

  useEffect(() => {
    if(!movie.mal_id) navigate("/not-found", {replace:true});
  }, []);

  return (
    <div className="row my-5">
      <div className="card mb-3 p-0">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={movie.image_url}
              className="img-fluid rounded-start"
              alt="skilvul"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">{movie.score}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
