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

            &__filter {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 51px;
            }

            &__content {
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

        .filter {
            &__title {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                margin-right: 15px;
            }

            &__button {
                display: flex;
                flex-direction: row;

                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                border: 1px solid ${(props) => props.data.colorN1};
                border-radius: 60px;
                padding: 6px 20px;

                cursor: pointer;

                &:hover {
                    border: 1px solid #d9b6ff;
                    color: #d9b6ff;
                }

                &:not(:last-child) {
                    margin-right: 10px;
                }
            }

            &__selection {
                border-color: #ad61ff;
                color: #ad61ff;
                cursor: pointer;

                &:hover {
                    border: 1px inset;
                    border-color: #ad61ff;
                }
            }

            &__current {
                border-color: #0088ff;
                color: #0088ff;
                cursor: pointer;

                &:hover {
                    border: 1px inset;
                    border-color: #0088ff;
                }
            }

            & .filterDetector {
                margin-left: 10px;
                /* margin-right: 10px; */

                width: 28px;
                border-radius: 28px;
                background-color: #ad61ff;

                display: flex;
                align-items: center;
                justify-content: center;

                &:hover {
                    background-color: #0088ff;
                }

                & p {
                    color: white;
                }
            }
        }

        .filterBox {
            position: absolute;
            left: -1400px;

            background-color: ${(props) => props.data.colorN2};
            border-radius: 12px;

            padding: 20px;

            & > div {
                width: 220px;
                min-height: 20px;
                max-height: 280px;

                display: flex;
                flex-direction: column;
                align-items: flex-start;

                gap: 10px;

                overflow-y: auto;
            }

            & span {
                color: ${(props) => props.data.colorN1};
                cursor: pointer;

                &.filterItem {
                }

                &.filterItem_active {
                    color: #b672ff;
                }

                &:hover {
                    text-decoration: underline;
                }
            }

            &_author {
                left: 400px;
            }

            &_release_date {
                left: 550px;
            }

            &_genre {
                left: 700px;
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

        .col01 {
            width: 447px;
        }

        .col02 {
            width: 321px;
        }

        .col03 {
            width: 245px;
        }

        .col04 {
            width: 60px;
            text-align: start;
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
        }

        .playlist-plug {
            & div * {
                background-color: ${(props) => props.data.colorN2};
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
