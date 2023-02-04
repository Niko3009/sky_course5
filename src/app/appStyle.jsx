import styled from 'styled-components'

// ============================================================================================

const colorBase = '#181818'

// ============================================================================================

export const AppStyle = styled('div')`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: ${colorBase};

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
                color: ${colorBase};
            }

            cursor: pointer;
        }
    }
`
