import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import Tooltip from "../../components/tooltip/tooltip";
import { useSelector } from "react-redux";



const Header = () => {
    const { values } = useSelector((state) => state);
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Tooltip content="plain" direction="bottom"><Link to="/movies/popular" style={{textDecoration: "none"}}><span className="example-emoji">Popular</span></Link></Tooltip>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                
            </div>
            
        </div>
        
    )
}

export default Header