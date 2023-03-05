import styled from 'styled-components'

export const CenterBlockStyle = styled('div')`
    width: auto;
    height: min-content;

    margin-left: 240px;

    padding: 20px 40px 100px 110px;
    flex-grow: 3;

    & {
        a,
        span {
            cursor: default;
        }

        p.loadingText {
            margin: 20px;
            margin-left: 30px;
        }

        .centerblock {
            &__search {
                width: 100%;
                border-bottom: 1px solid #4e4e4e;
                margin-top: 40px;
                margin-bottom: 51px;
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            &__h2 {
                font-style: normal;
                font-weight: 400;
                font-size: 64px;
                line-height: 72px;
                letter-spacing: -0.8px;
                margin-bottom: 45px;
            }

            &__content {
                /* margin-top: 300px; */
                display: flex;
                flex-direction: column;
            }
        }

        .search {
            &__svg {
                width: 17px;
                height: 17px;
                margin-right: 5px;
                stroke: ${(props) => props.data.colorN1};
            }

            &__text {
                flex-grow: 100;
                background-color: transparent;
                border: none;
                padding: 13px 10px 14px;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: ${(props) => props.data.colorN1};

                &::placeholder {
                    background-color: transparent;
                    color: ${(props) => props.data.colorN1};
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                }
            }
        }

        .content {
            &__title {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 24px;
            }

            &__playlist {
                display: flex;
                flex-direction: column;
            }
        }

        .playlist-title {
            &__col {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
                letter-spacing: 2px;
                color: #696969;
                text-transform: uppercase;
            }

            &__svg {
                width: 12px;
                height: 12px;
                fill: transparent;
                stroke: #696969;
            }
        }

        .col {
            &01 {
                width: 447px;
            }

            &02 {
                width: 321px;
            }

            &03 {
                width: 245px;
            }

            &04 {
                width: 60px;
                text-align: start;
            }
        }

        .playlist {
            &__item {
                width: 100%;
                display: block;
                margin-bottom: 12px;

                padding: 8px;
            }

            &__track {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                & div {
                    overflow: hidden;
                }
            }

            &-plug {
                & div * {
                    background-color: ${(props) => props.data.colorN2};
                }
            }
        }

        .track {
            &__title {
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 447px;
            }

            &__title-image {
                width: 51px;
                height: 51px;
                padding: 16px;
                background: ${(props) => props.data.colorN2};
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 17px;
            }

            &__title-svg {
                width: 18px;
                height: 17px;
                fill: transparent;
                stroke: #4e4e4e;
            }

            &__title-text {
                cursor: pointer;
            }

            &__title-link {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: ${(props) => props.data.colorN1};
            }

            &__title-span {
                margin-left: 20px;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #4e4e4e;
            }

            &__author {
                width: 321px;
                display: flex;
                justify-content: flex-start;
            }

            &__author-link {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: ${(props) => props.data.colorN1};
                text-align: left;
            }

            &__album {
                width: 245px;
            }

            &__album-link {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #696969;
            }

            //&__time {}

            &__time-svg {
                width: 14px;
                height: 12px;
                margin-right: 17px;
                fill: transparent;
                stroke: #696969;

                cursor: pointer;
            }

            &__time-text {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                text-align: right;
                color: #696969;
            }
        }

        .activeTrack {
            border: 2px solid ${(props) => props.data.colorN1};
        }

        .track__title-text {
            a,
            span {
                cursor: pointer;
            }
        }
    }
`
