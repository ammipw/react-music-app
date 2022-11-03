import React, {useContext} from "react"
import {useSelector, useDispatch} from 'react-redux'
import SongCard from '../SongCard'
import { increase, decrease } from "../../actions"
import { SongContext } from "../../SongContext"

export default function Top() {

    // const songs = require('../../data.json').songs
    const [songs, setSongs] = useContext(SongContext)

    const numSongs = useSelector(state => {
      return state.num
    })
    const dispatch = useDispatch();

    function changeNum(e){
      e.preventDefault()
      // console.log(e.key)

      switch(e.key){
        case 'ArrowUp':
          dispatch(increase())
          break
        case 'ArrowDown':
          dispatch(decrease())
          break
        case 'Backspace':
          break
        case 'Enter':
          break
        default:
          if(parseInt(e.key)){

          }
      }

      document.title = `Top ${numSongs} songs`
    }


  return (
    <div>
        <h1>Top <span contentEditable={true} suppressContentEditableWarning={true} onKeyDown={changeNum}>{numSongs}</span> Songs</h1>
    <div>
        {
            songs.slice(0, numSongs).map((song, index) => (
            <SongCard key={index} song={song} rank={index+1}/>
            ))
        }
    </div>
    </div>
  )
}
