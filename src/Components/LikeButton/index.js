import React, { useState, useEffect, useContext } from 'react'
import { SongContext } from "../../SongContext"

const LikeButton = ({id}) => {
    const [liked, setLiked] = useState(false)
    const [songs, setSongs] = useContext(SongContext)

    useEffect(() => {
        const initLiked = window.localStorage.getItem("song")
        const isLiked = JSON.parse(initLiked)
        setLiked(isLiked[id].liked)
    },[])
    

    function saveLike(){
        setLiked(prev => !prev)
        const newSongs = songs
        newSongs[id].liked = !liked 
        setSongs(prev => newSongs)
        console.log(songs[id])
        window.localStorage.setItem("song", JSON.stringify(newSongs))
    }

    return (
        <button className={liked ? 'filled' : ''} onClick={saveLike}>
            &lt;3
        </button>
    )
}

export default LikeButton
