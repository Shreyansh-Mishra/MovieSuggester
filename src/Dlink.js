import React from 'react'
import { Link } from 'react-router-dom'
export default function Dlink({link}) {
    return (
        <div>
            {
                    <div className="blog-preview">
                    <a href={`${link}`}>
                        <h2>{link}</h2>
                    </a>
                    </div>
            }
        </div>
    )
}
