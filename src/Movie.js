import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
export default function Random() {
    let {name} = useParams()
    let [movieData,setMovieData]=useState(null)
    let [isPending,setIsPending]=useState(true)

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
            {movieData&&<div>
                Title: {movieData.Title}<br></br>
                Actors: {movieData.Actors}<br></br><br></br>
                <img src={`${movieData.Poster}`}></img>
                </div>}
        </div>
    )
    
    
}
