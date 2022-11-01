import React from 'react'
import LikeButton from '../LikeButton'

const SongCard = ({song, rank}) => {
    return (
        <div className='card'>
            <h2 name='title'>{(rank.toString().length === 1 ? '0' : '') + rank}</h2>
            <div>
                <h3>{song.title}</h3>
                <p>{song.artist} | {song.year}</p>
            </div>
            <LikeButton />
        </div>
    )
}

export default SongCard