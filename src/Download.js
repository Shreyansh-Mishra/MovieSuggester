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
        console.log(`${process.env.REACT_APP_SERVER_IP}getlinks/${name}`)
        fetch(`${process.env.REACT_APP_SERVER_IP}getlinks/${name}`)
        .then(res => res.json().then(r=>{
            setLinks(r)
            setIsPending(false)
        }))
    },[])
    return (
        <div>
            <center><h1>{name}</h1></center>
            {isPending && <div>Loading...</div>}
            {links&&<div>
                {links.map(link=>{
                    return <Dlink link={link}/>
                })}
                </div>}
        </div>
    )
}
