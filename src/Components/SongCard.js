import React, { useState } from 'react'

const SongCard = ({song, rank}) => {
    const [liked, setLiked] = useState(false)

    return (
        <div className='card'>
            <h2 name='title'>{(rank.toString().length === 1 ? '0' : '') + rank}</h2>
            <div>
                <h3>{song.title}</h3>
                <p>{song.artist} | {song.year}</p>
            </div>
            <button className={liked ? 'filled' : ''} onClick={() => setLiked(prev => !prev)}>
                &lt;3
            </button>
        </div>
    )
}

export default SongCard