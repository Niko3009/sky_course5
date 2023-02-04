import styled from 'styled-components'

// ============================================================================================

const colorBase = '#181818'

// ============================================================================================

export const navStyle = styled('div')`
    width: 244px;
    background-color: ${colorBase};
    padding: 20px 0 20px 36px;

    & {
        .nav {
            &__logo {
                width: 113.33px;
                height: 43px;
                padding: 13px 0 13px 0;
                background-color: transparent;
                margin-bottom: 20px;
            }

            &__burger {
                width: 20px;
                height: 36px;
                padding: 13px 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            &__menu {
                display: block;
                visibility: visible;
            }
        }

        .menu {
            &__list {
                padding: 18px 0 10px 0;
            }

            &__item {
                padding: 5px 0;
                margin-bottom: 16px;
            }

            &__link {
                color: #ffffff;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
            }
        }

        .burger {
            cursor: pointer;

            &__line {
                display: inline-block;
                width: 100%;
                height: 1px;
                background-color: #d3d3d3;
            }
        }
    }
`
