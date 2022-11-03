import React, {createContext, useState } from "react";

const songData = require('./data.json').songs

export const SongContext = createContext();

export const SongProvider = (props) =>{
    const [songs, setSongs] = useState(songData);
    return(
        <SongContext.Provider value={[songs, setSongs]}>
            {props.children}
        </SongContext.Provider>
    )
}
