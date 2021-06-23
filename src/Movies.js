import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
export default function Movies(props) {
  let history = useHistory();
  let {name} = useParams();
    useEffect(()=>{
      history.push(`/movie/${name}`)
    })
    return (
        <div></div>
    )
    
    
}
