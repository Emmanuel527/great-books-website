import React from 'react'
import Link from 'next/link'

const genres = () => {
    return (
        <div className='flex flex-col m-8 space-y-4 text-3xl p-5'>
        <ul>
            <li> <Link href="/math"> Math </Link> </li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
            <li>Philosophy</li>
            <li>Psychology</li>
            <li>History</li>
            <li>Poetry</li>
            <li>Fiction</li>
            <li>Computation</li>
            
        </ul>
        </div>
    )
}

export default genres