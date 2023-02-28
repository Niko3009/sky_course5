import styled from 'styled-components'

export const AppStyle = styled('div')`
    width: 100%;
    min-height: 100%;

    background-color: ${(props) => props.data.colorBasic};

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    & {
        .main {
            flex: 1 1 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .logo {
            &__image {
                width: 113.33px;
                height: 17px;
                color: ${(props) => props.data.colorN1};
            }

            cursor: pointer;
        }

        /* .container {
            max-width: 1920px;
            height: 100vh;
            margin: 0 auto;
            position: relative;
        } */

        h1 {
            display: inline-block;

            min-height: 46px;

            font-family: 'StratosSkyeng';
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            text-align: center;

            overflow: hidden;
        }
    }
`
