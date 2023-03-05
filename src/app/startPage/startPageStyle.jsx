import styled from 'styled-components'

export const startPageStyle = styled('div')`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled('div')`
    width: 366px;
    height: 520px;

    &.reg {
        height: 620px;
    }

    border-radius: 12px;
    background-color: #fff;

    padding: 40px;

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    gap: 20px;
    align-items: center;

    & {
        & input {
            &,
            &:active,
            &:hover,
            &:focus {
                height: 44px;
                width: 278.5px;

                border-radius: 0px;
                border: none;
                outline: 0;
                outline-offset: 0;
                border-bottom: 1px solid #d0cece;

                font-family: 'StratosSkyeng';
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
                text-align: left;
            }

            &::placeholder {
                color: #d0cece;
            }
        }

        & button {
            height: 52px;
            width: 278px;

            border-radius: 6px;
            border: 1px solid grey;

            font-family: 'StratosSkyeng';
            font-size: 18px;
            font-weight: 600;
            line-height: 24px;

            color: black;

            &.btn-dark {
                color: white;

                background: #580ea2;
                &:hover {
                    background: #3f007d;
                }
                &:active,
                &:disabled {
                    background: #271a58;
                }
            }

            &.btn-ligth {
                color: black;

                background: #f5f5f5;
                &:hover {
                    background: #e6e8e9;
                }
                &:active,
                &:disabled {
                    background: #d0cece;
                }
            }
        }

        & p {
            display: inline-block;

            min-height: 46px;

            font-family: 'StratosSkyeng';
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            text-align: center;

            color: black;
            /* lightcoral; */

            overflow: hidden;
        }

        .logo {
            height: 22px;
            width: 140px;
        }
    }
`
