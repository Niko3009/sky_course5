import './css/style.css'

import tracks from './tracks/tracks'

import {
    Logo,
    BurgerMenuSpan,
    BurgerMenu,
    Search,
    SearchBreadcrumbs,
    ContentBreadcrumbs,
    SideBarPersonal,
    SideBarBlock,
    Playlist,
} from './appComponents/main'
import { PlayerBlock } from './appComponents/bar'

const Main = () => {
    return (
        <main className="main">
            <nav className="main__nav nav">
                <Logo />
                <BurgerMenuSpan />
                <BurgerMenu />
            </nav>
            <div className="main__centerblock centerblock">
                <Search />
                <h2 className="centerblock__h2">Треки</h2>
                <SearchBreadcrumbs />
                <div className="centerblock__content">
                    <ContentBreadcrumbs />
                    <Playlist tracks={tracks} />
                </div>
            </div>
            <div className="main__sidebar sidebar">
                <SideBarPersonal />
                <SideBarBlock />
            </div>
        </main>
    )
}

const Bar = () => {
    return (
        <div className="bar">
            <div className="bar__content">
                <div className="bar__player-progress"></div>
                <PlayerBlock />
            </div>
        </div>
    )
}

const Footer = () => {
    return <footer className="footer"></footer>
}

const App = () => {
    return (
        <div className="container">
            <Main />
            <Bar />
            <Footer />
        </div>
    )
}

export default App
