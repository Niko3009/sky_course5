import React from 'react'
const { useState } = React

import { MainStyle as Style } from './main/mainStyle'

import { Nav } from './main/nav'
import { CenterBlock } from './main/centerBlock'
import { SideBar } from './main/sideBar'

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

    return (
        <Style>
            <Nav changeSection={changeSection} logOut={props.logOut} />

            <CenterBlock
                changeSection={changeSection}
                section={status.section}
            />

            {status.section === 'AllTracks' && (
                <SideBar changeSection={changeSection} />
            )}
        </Style>
    )
}
