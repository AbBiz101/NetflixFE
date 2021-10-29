import { Link } from "react-router-dom"
import logo from "../img/avatar.png"
import netflixlogo from "../img/netflix_logo.png"
import Dropdown from "react-bootstrap/esm/Dropdown"

const MyNavbar = (props) => {
    
    return(
    <div className="container-fluid">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-color">
            <Link to={'/'}>
                <img src={netflixlogo} alt="" className="netflix-logo" />{" "}
            </Link>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <Link to={'/'}>
                    <a className="nav-link" href="#">
                        Home <span className="sr-only">(current)</span>
                    </a>
                </Link>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Tv Shows
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Movies
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Recently Added
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    My list
                </a>
                </li>
            </ul>
            <div>
                <input
                type="text"
                placeholder="Search..."
                onChange={(e) => props.setQuery(e.target.value)}
                />
            </div>
            <div className="search-icon">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="white"
                className="bi bi-search"
                viewBox="0 0 16 16"
                >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </div>
            <h6 className="kids-text">KIDS</h6>
            <div className="bell-icon">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="white"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
                >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
            </div>
                <Dropdown>
                    <Dropdown.Toggle id="login-btn">
                        <img src={logo}  alt=" "  id="profile-image" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Link to={"/login"}>
                            <h6 style={{textAlign: "center" , textDecoration: "none"}}>Login</h6>
                        </Link>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    </div>
    )
}


export default MyNavbar