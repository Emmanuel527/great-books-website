import React from 'react'
import Link from 'next/link'

const genres = () => {
    return (
        <div class='flex flex-row m-8 space-y-96 text-3xl p-5 text-white'>
        <ul>
            
            <li> <Link href="/math">Mathematics </Link> </li>
            <li> <Link href="/physics">  Physics </Link></li>
            <li> <Link href="/chemistry"> Chemistry </Link></li>
            <li> <Link href="/biology"> Biology</Link></li>
            <li> <Link href="/computation"> Computation </Link></li>
            <li> <Link href="/philosophy"> Philosophy and Theology </Link></li>
            <li> <Link href="/psychology"> Psychology </Link></li>
            <li> <Link href="/history"> History and Biographies </Link></li>
            <li> <Link href="/poetry">Poetry </Link></li>
            <li> <Link href="/fiction"> Fiction </Link></li>
            
        </ul>
        </div>
    )
}

export default genres