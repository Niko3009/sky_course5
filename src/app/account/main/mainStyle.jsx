import styled from 'styled-components'

export const MainStyle = styled('main')`
    width: 100vw; /* 1920px; */
    height: 100vh;
    overflow-y: auto; /* скролл (scroll) плейлиста */
    overflow-x: hidden;

    display: flex;
    justify-content: flex-start;
    gap: 20px;
`

export const MainContentStyle = styled('main')`
    display: flex;
    justify-content: flex-start;
    gap: 20px;
`
