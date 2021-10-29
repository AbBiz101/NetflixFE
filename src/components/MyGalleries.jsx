import { useState , useEffect } from "react";
import SingleMovies from "./SingleMovies";
import MySpinner from "./MySpinner";
import Alert from "react-bootstrap/Alert";

const MyGalleries = (props) => {

  const [movies , setMovies] = useState([])
  const [loading , setLoader] = useState(false)
  const [errorMsg , setErrorMsg] = useState("")


  const fetchedData = async () => {
    try {
      setLoader(true);
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=e59f0763&s=" + props.query
      );
      const data = await response.json();
      if(data.Search) {
        console.log(data)
        setMovies(data.Search)
        setLoader(false)
        setErrorMsg("")
      }
    } catch (error) {
      setErrorMsg("movie not found");
    }
  };

  /* async componentDidMount() {
    this.fetchedData();
  } */


  useEffect(() => {
		fetchedData();
	}, [])

  /* componentDidUpdate(prevProps) {
      if(prevProps.query!==this.props.query) {
        this.fetchedData();
      }
  } */

  useEffect(() => {
		fetchedData();
	}, [props.query])

  
  return (
    <>
      <div className=".container-fluid pl-4">
        <h1 className="title shows-title" id="recent">
          {props.query}
        </h1>
        <div className="row">
          {errorMsg && (
            <Alert variant="warning">
              Cannot load the data: {errorMsg}
            </Alert>
          )}
          {loading && <MySpinner/>}
          {
            movies.map((movie, i) => (
              <SingleMovies key={i} data={movie} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default MyGalleries;