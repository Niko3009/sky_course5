import { createGlobalStyle } from 'styled-components'

// ======================================== VAR ============================================

const colorBase = '#181818'

// =========================================================================================

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'StratosSkyeng';

    src: local('StratosSkyeng'), local('StratosSkyeng'),
         url('/fonts/StratosSkyeng.woff2') format('woff2'),
         url('/fonts/StratosSkyeng.woff') format('woff'),
         url('/fonts/StratosSkyeng.ttf') format('truetype');

    font-weight: 400;
    font-style: normal;
}

// ----------------------------------------------

html, body {
    background-color: ${colorBase};

    width: 100%;
    height: 100%;

    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif, 'Courier New', monospace;
    font-family: 'StratosSkyeng', sans-serif;

    color: #FFFFFF;


    /* scrollbar */
    * {
        scrollbar-width: thin;
        scrollbar-color: grey transparent;

        &::-webkit-scrollbar {
            width: 4px;
            height: 5px;
        }

        &::-webkit-scrollbar-track {
            background: #313131;
            border-radius: 8px;
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #ffffff;
            border-radius: 4px;
            border: 0px solid transparent;
        }
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    *:before,
    *:after {
        box-sizing: border-box;
    }
}

a {
    &, &:visited{
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
    }
}

ul li {
    list-style: none;
}

button {
    cursor: pointer;
}

.container {
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: ${colorBase};
}


._btn {
    cursor: pointer;

    &-text{

    &:active {
        border-color: #AD61FF;
        color: #AD61FF;
        cursor: pointer;
    }

    &:hover {
        border-color: #D9B6FF;
        color: #D9B6FF;
        cursor: pointer;
    }
    }

    &-icon{

    &:hover svg {
    fill: transparent;
        stroke: #ACACAC;
        cursor: pointer;
    }

&:active{

    & svg {
    fill: transparent;
    stroke: #FFFFFF;
    cursor: pointer;

    }

    & .track-play__like-svg,
    & .track-play__dislike-svg {
    fill: #696969;
    stroke: #FFFFFF;
    cursor: pointer;
    }
}
    }

}
`
