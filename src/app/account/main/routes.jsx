import { MainRoutesStyle as RoutesStyle } from './mainStyle'

import { Routes, Route } from 'react-router-dom'

import { CenterBlock } from './centerBlock'
import { SideBar } from './sideBar'

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<AllTracks />} />

            <Route path="my-playlist/:id" element={<MyPlaylist />} />
            <Route path="playlist-of-day/:id" element={<PlaylistOfDay />} />
            <Route path="dance-hits/:id" element={<DanceHits />} />
            <Route path="indie-charge/:id" element={<IndieCharge />} />
        </Routes>
    )
}

const AllTracks = () => {
    return (
        <RoutesStyle>
            <CenterBlock />
            <SideBar />
        </RoutesStyle>
    )
}

const MyPlaylist = () => {
    return <Сollection mode={'my-playlist'} />
}
const PlaylistOfDay = () => {
    return <Сollection mode={'playlist-of-day'} />
}
const DanceHits = () => {
    return <Сollection mode={'dance-hits'} />
}
const IndieCharge = () => {
    return <Сollection mode={'indie-charge'} />
}

const Сollection = ({ mode }) => {
    return (
        <RoutesStyle>
            <CenterBlock mode={mode} />
            <SideBar mode={mode} />
        </RoutesStyle>
    )
}
