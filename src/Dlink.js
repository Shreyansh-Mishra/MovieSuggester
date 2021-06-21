import React from 'react'
import { Link } from 'react-router-dom'
export default function Dlink({link,isPending}) {
    console.log(isPending)
    return (
        <div>
            {isPending && <div>Loading...</div>}
            {!isPending&&
                    <div className="blog-preview">
                    <a href={`${link}`}>
                        <h2>{link}</h2>
                    </a>
                    </div>
                
            }
        </div>
    )
}
