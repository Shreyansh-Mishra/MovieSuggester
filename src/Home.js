import React from 'react';
import {useState,useEffect} from 'react';
import { useHistory } from 'react-router';
export default function Home() {
    let [rating,setRating] = useState(0);
    let [genre, setGenre] = useState("Action");
    let history = useHistory()
    
    let handleSubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:8000/genre/")
        .then((res)=>{
            let movie2
            res.json().then(d=>{
                let gen = d.find(e=>e.type===genre.toLowerCase())
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
                <form onSubmit={handleSubmit}>
                <label>Genre:</label>
                    <select value={genre} onChange = {(e)=>setGenre(e.target.value)}>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Romance">Romance</option>
                        <option value="Comedy">Comedy</option>
                    </select>
                    <label>Rating:</label><input type="number" min="0" max="10" step="0.1" value={rating} onChange= {(e)=>setRating(e.target.value)}></input>
                    <button>Submit</button>
                </form>
            </div>        
        </div>
    )
}
