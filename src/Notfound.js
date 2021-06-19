import React from 'react'
import {Link} from 'react-router-dom'
export default function Notfound() {
    return (
        <div>
            <p>Error Page not found!!!</p>
            <Link to="/">Back To Homepage...</Link>
        </div>
    )
}
