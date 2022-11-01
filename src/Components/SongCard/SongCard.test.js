/**
 * @jest-environment jsdom
 */

import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import SongCard from '.'

describe("SongCard component", () => {

    beforeEach(() => {
        render(<SongCard song={{"title":"And it Stoned Me","artist":"Van Morrison","year":"1970","web_url":"http://www.songnotes.cc/songs/27-van-morrison-and-it-stoned-me","img_url":"http://fireflygrove.com/songnotes/images/artists/VanMorrison.jpg"}} rank={4}/>)
    })

    it("Displays a heading with the appropriate text", () =>{

        const heading = screen.getAllByRole("heading")[0]

        expect(heading).toBeInTheDocument()
        expect(heading.textContent).toBe("04")

    })
})