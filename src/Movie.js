import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
export default function Movie(props) {
    let history = useHistory()
    let name = useParams()
    let [movieData,setMovieData]=useState(null)
    let [isPending,setIsPending]=useState(true)
    let [isError, setIsError] = useState(false)
    const mystyle={
        "margin-left":"50px"
    }
    let [mname,setmname] = useState((window.location.href).split('/')[4])
    useEffect(()=>{ 
        setmname((window.location.href).split('/')[4])    
        fetch(`http://www.omdbapi.com/?t=${mname}&apikey=e420a177`).then((res)=>{
        res.json().then((p)=>{
          console.log("p: "+p.Response)
          if(p.Response==='False'){
            setIsError(true)
          }
            setMovieData(p)
            setIsPending(false)
        })
    })
    },[])

    let handleDownload = () =>{
      history.push(`/download/${movieData.Title}`)
    }

    console.log(movieData)
    return (
        <div>
          {console.log("error ye rha:"+isError)}
            {isPending&&<div>Loading...</div>}
            {!isError&&movieData&&<div class="card" style={{"background-color":"#D2C3C3"}}>
  <div class="card__inner" >
    
    <main class="card__body">
    <img src={`${movieData.Poster}`} height="25%" width="25%" style={mystyle}></img>
      <div className="card__info">
        <h1 className="card__title">{movieData.Title}</h1>
    
        <p className="card__slug">{movieData.Plot}</p>
      
        <button className="card__btn" value="Download" onClick={handleDownload}>Download</button>

        <div className="card__rating">
          {movieData.imdbRating}
        </div>
      </div>
    </main>
    
    <footer className="card__footer">
      <ul className="list list--info" style={{"margin-right":"30px"}}>
        <li>{movieData.Released}</li>
        <li>{movieData.Runtime}</li>
        <li>{movieData.Genre}</li>
      </ul>
    </footer>
  </div>
</div>}
{isError&&<center><div>Movie Not Found</div></center>}
        </div>
    )
    
    
}
