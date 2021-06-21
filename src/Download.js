import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import Dlink from './Dlink.js'
export default function Download() {
    let {name} = useParams()
    let [links,setLinks] = useState(null)
    let [isPending, setIsPending] = useState(true)
    useEffect(()=>{
        console.log(name)
        fetch(`http://localhost:8000/getlinks/${name}`)
        .then(res => res.json().then(r=>{
            setLinks(r)
            setIsPending(false)
        }))
    },[])
    return (
        <div>
            <center><h1>{name}</h1></center>
            {links&&<div>
                
                {links.map(link=>{
                    return <Dlink link={link} isPending={isPending} />
                })}
                </div>}
        </div>
    )
}
