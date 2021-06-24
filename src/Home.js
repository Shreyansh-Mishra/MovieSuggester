import React from 'react';
import {useState,useEffect} from 'react';
import { useHistory } from 'react-router';
export default function Home() {
    let [rating,setRating] = useState(0);
    let [genre, setGenre] = useState("Action");
    let history = useHistory()
    
    let handleSubmit=(e)=>{
        e.preventDefault();
        fetch(`${process.env.REACT_APP_SERVER_IP}genre`)
        .then((res)=>{
            let movie2
            res.json().then(d=>{
                console.log(d)
                let gen = d.genre.find(e=>e.type===genre.toLowerCase())
                let selected = gen.movies.filter(m=>m.rating>=rating)
                movie2 = selected[Math.floor(Math.random() * selected.length)]
            }).then(()=>{
                history.push(`/movie/${movie2.title}`)
            })
        })   
    }
    return (
        <div>
            <div className="create">
                <h1>Suggest a Random Movie</h1><br></br>
                <form onSubmit={handleSubmit}>
                <label><b>Genre:</b></label>
                    <select value={genre} onChange = {(e)=>setGenre(e.target.value)}>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Romance">Romance</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Biography">Biography</option>
                        <option value="Crime">Crime</option>
                        <option value="Drama">Drama</option>
                        <option value="Family">Family</option>
                        <option value="History">History</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Horror">Horror</option>
                        <option value="Music">Music</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-fi">Sci-fi</option>
                        <option value="Sport">Sport</option>
                        <option value="Superhero">Superhero</option>
                        <option value="Thriller">Thriller</option>
                        <option value="War">War</option>
                    </select>
                    <label><b>Rating:</b></label><input type="number" min="0" max="10" step="0.1" value={rating} onChange= {(e)=>setRating(e.target.value)}></input>
                    <button>Submit</button>
                </form>
            </div>        
        </div>
    )
}
