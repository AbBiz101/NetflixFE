//React modules
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MovieDetails from "./views/MovieDetails";
import Home from "./views/Home";
import UserLogin from "./views/UserLogin"

const App = () => {

  //PROP DRILLING 
  const [query , setQuery] = useState("")

  return (
    <div>
      <Router>
        <MyNavbar query={query} setQuery={setQuery} />
        <Route path="/" exact render={(routerProps) => <Home {...routerProps} query={query} setQuery={setQuery} />} />
        <Route path="/details/:id" component={MovieDetails} />
        <Route path="/login" component={UserLogin} />
        <MyFooter />
      </Router>
    </div>
  );
};

export default App;
