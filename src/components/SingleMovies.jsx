import { Link } from "react-router-dom"


const SingleMovies = (props) => (
  <div className="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1">
    <div className="card col-size-style">
      <Link to={'/details/' + props.data.imdbID}>            
        <img
          src={props.data.Poster}
          className="card-img-top img-netflix-movies"
        />
      </Link>
    </div>
  </div>
)


export default SingleMovies