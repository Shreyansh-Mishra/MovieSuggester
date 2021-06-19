import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
export default function Random() {
    let {name} = useParams()
    let [movieData,setMovieData]=useState(null)
    let [isPending,setIsPending]=useState(true)

    const mystyle={
        "margin-left":"50px"
    }
    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?t=${name}&apikey=e420a177`).then((res)=>{
        res.json().then((p)=>{
            setMovieData(p)
            setIsPending(false)
        })
    })
    },[])

    console.log(movieData)
    return (
        <div>
            {isPending&&<div>Loading...</div>}
            {movieData&&<div class="card" style={{"background-color":"#D2C3C3"}}>
            {console.log(movieData.Poster)}
  <div class="card__inner" >
    
    <main class="card__body">
    <img src={`${movieData.Poster}`} height="25%" width="25%" style={mystyle}></img>
      <div class="card__info">
        <h1 class="card__title">{movieData.Title}</h1>
    
        <p class="card__slug">{movieData.Plot}</p>
      
        <button class="card__btn" value="Watch trailer">Watch trailer</button>

        <div class="card__rating">
          {movieData.imdbRating}
        </div>
      </div>
    </main>
    
    <footer class="card__footer">
      <ul class="list list--info" style={{"margin-right":"30px"}}>
        <li>{movieData.Released}</li>
        <li>{movieData.Runtime}</li>
        <li>{movieData.Genre}</li>
      </ul>
    </footer>
  </div>
</div>}
        </div>
    )
    
    
}
