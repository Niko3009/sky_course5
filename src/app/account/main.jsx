import { MainStyle, MainContentStyle } from './main/mainStyle'

import { Routes, Route } from 'react-router-dom'

import { Nav } from './main/nav'
import { CenterBlock } from './main/centerBlock'
import { SideBar } from './main/sideBar'

export const Main = () => {
    return (
        <MainStyle>
            <Nav />
            <MainRoutes />
        </MainStyle>
    )
}

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<AllTracks />} />
            <Route path="my-playlist/" element={<MyPlaylist />} />
            <Route path="playlist-of-day/" element={<PlaylistOfDay />} />
            <Route path="dance-hits/" element={<DanceHits />} />
            <Route path="indie-charge/" element={<IndieCharge />} />
        </Routes>
    )
}

const MainContent = ({ mode }) => {
    return (
        <MainContentStyle>
            <CenterBlock mode={mode} />
            <SideBar mode={mode} />
        </MainContentStyle>
    )
}

const AllTracks = () => {
    const mode = null
    return <MainContent mode={mode} />
}

const MyPlaylist = () => {
    const mode = 'my-playlist'
    return <MainContent mode={mode} />
}
const PlaylistOfDay = () => {
    const mode = 'playlist-of-day'
    return <MainContent mode={mode} />
}
const DanceHits = () => {
    const mode = 'dance-hits'
    return <MainContent mode={mode} />
}
const IndieCharge = () => {
    const mode = 'indie-charge'
    return <MainContent mode={mode} />
}
