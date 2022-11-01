import React, { useState } from "react"
import SongCard from "./Components/SongCard"
import './style.css'

const App = () => {

    const songs = require('./data.json').songs

    const [numSongs, setNumSongs] = useState(5)

    function updateNumSongs(e){
      setNumSongs(e.target.value)
      document.title = `Top ${e.target.value} songs`
    }

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
    }

    return (
      <>
        {/* <input type='number' defaultValue={numSongs} min='1' max='20' onChange={updateNumSongs}/> */}
        <h1>Top <span contentEditable={true} suppressContentEditableWarning={true} onKeyDown={changeNum}>{numSongs}</span> Songs</h1>
        <div>
          {
            songs.slice(0, numSongs).map((song, index) => (
              <SongCard key={index} song={song} rank={index+1}/>
            ))
          }
        </div>
      </>
    )
}

export default App
