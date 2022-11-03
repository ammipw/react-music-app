import React, { useState } from "react"
import SongCard from '../SongCard'

export default function Bottom() {
  const songs = require('../../data.json').songs
  console.log(songs.length)
    const [numSongs, setNumSongs] = useState(5)
    function changeNum(e){
      e.preventDefault()
      // console.log(e.key)

      switch(e.key){
        case 'ArrowUp':
          setNumSongs(n => n + (n < songs.length ? 1 : 0))
          break
        case 'ArrowDown':
          setNumSongs(n => n - (n > 0 ? 1 : 0))
          break
        case 'Backspace':
          break
        case 'Enter':
          break
        default:
          if(parseInt(e.key)){

          }
      }

      document.title = `Bottom ${numSongs} songs`
    }


  return (
    <div>
        <h1>Bottom <span contentEditable={true} suppressContentEditableWarning={true} onKeyDown={changeNum}>{numSongs}</span> Songs</h1>
    <div>
        {
            songs.slice(songs.length-numSongs, songs.length).map((song, index) => (
            <SongCard key={index} song={song} rank={index+1}/>
            ))
        }
    </div>
    </div>
  )
}
