import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar topnav">
                <Link to="/"><h1>RandomWatch</h1></Link>
                <div className="links">
                <input type="text" placeholder="Search Movie" size="80" />
                    <Link to ="/watchlist">Watch List</Link>    
                </div>    
            </nav>            
        </div>
    )
}
