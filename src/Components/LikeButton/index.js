import React, { useState } from 'react'

const LikeButton = () => {
    const [liked, setLiked] = useState(false)

    return (
        <button className={liked ? 'filled' : ''} onClick={() => setLiked(prev => !prev)}>
            &lt;3
        </button>
    )
}

export default LikeButton