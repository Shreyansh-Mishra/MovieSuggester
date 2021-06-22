import React from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {useState} from 'react'

export default function Navbar(props) {
    let history = useHistory()
    let [movieName,setMovieName] = useState('')

    let handleClick = () =>{
        console.log(props)
        console.log(window.location.href.split('/')[3])
        if(window.location.href.split('/')[3]==='movie'){
            console.log('andar hu')
            history.push(`/movies/${movieName}`)
        }
        else{
            history.push(`/movie/${movieName}`)
        }
        
        
    }

    const handleKeypress = e => {
        console.log(e.keyCode)
      if (e.keyCode === 13) {
        handleClick()
      }
    };

    return (
        <div>
            <nav className="navbar topnav">
                <Link to="/"><h1>RandomWatch</h1></Link>
                <div className="links">
                <input type="text" placeholder="Search Movie" size="70" value={movieName} onChange={(e)=>setMovieName(e.target.value)} onKeyDown={handleKeypress} />
                <button onClick={()=>handleClick()}>Search</button>
                    <Link to ="/watchlist">Watch List</Link>    
                </div>    
            </nav>            
        </div>
    )
}
