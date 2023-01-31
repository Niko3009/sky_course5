import React from 'react'
const { useState } = React

import { Nav } from './main/nav'

import { SideBar } from './main/sideBar'
import { CenterBlock } from './main/centerBlock'

export const Main = (props) => {
    const [status, setStatus] = useState({
        section: 'AllTracks',
    })
    const statusObj = status
    const changeStatus = function (newStatus) {
        setStatus({
            section: newStatus.section,
        })
    }

    const changeSection = function (newSection) {
        statusObj.section = newSection
        changeStatus(statusObj)
    }

    // const selectionsOfTracks = [
    //     'MyPlaylist',
    //     'PlaylistOfDay',
    //     'DanceHits',
    //     'IndieСharge',
    // ]

    return (
        <main className="main">
            <Nav changeSection={changeSection} logOut={props.logOut} />

            <CenterBlock
                changeSection={changeSection}
                section={status.section}
            />

            {status.section === 'AllTracks' && (
                <SideBar changeSection={changeSection} />
            )}
        </main>
    )
}
