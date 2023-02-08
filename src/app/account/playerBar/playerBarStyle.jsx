import styled from 'styled-components'

export const PlayerBarStyle = styled('div')`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${(props) => props.data.colorBasic};

    position: fixed;
    bottom: 0;

    & {
        display: flex;
        flex-direction: column;

        .bar {
            &__player-block {
                height: 73px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            &__player {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
            }

            &__volume-block {
                width: auto;
                display: flex;
                align-items: center;
                padding: 0 92px 0 0;

                cursor: pointer;
            }
        }

        .player {
            &__controls {
                display: flex;
                flex-direction: row;
                padding: 0 27px 0 31px;
            }

            &__btn-prev,
            &__btn-play,
            &__btn-next,
            &__btn-repeat,
            &__btn-shuffle {
                padding: 5px;
                display: flex;
                align-items: center;
            }

            &__btn-prev {
                margin-right: 23px;
            }

            &__btn-prev-svg {
                width: 15px;
                height: 14px;
            }

            &__btn-play {
                margin-right: 23px;
            }

            &__btn-play-svg {
                width: 22px;
                height: 20px;
                fill: #d9d9d9;
            }

            &__btn-next {
                margin-right: 28px;
                fill: #a53939;
            }

            &__btn-next-svg {
                width: 15px;
                height: 14px;
                fill: inherit;
                stroke: #d9d9d9;
            }

            &__btn-repeat {
                margin-right: 24px;
            }

            &__btn-repeat-svg {
                width: 18px;
                height: 12px;
                fill: transparent;
                stroke: #696969;
            }

            &__btn-shuffle {
                display: flex;
                align-items: center;
            }

            &__btn-shuffle-svg {
                width: 19px;
                height: 12px;
                fill: transparent;
                stroke: #696969;
            }

            &__track-play {
                display: flex;
                flex-direction: row;
            }
        }

        .track-play {
            &__contain {
                width: auto;
                display: grid;
                grid-template-columns: auto 1fr;
                grid-template-areas: 'image author' 'image album';
                align-items: center;
            }

            &__image {
                width: 51px;
                height: 51px;
                background-color: ${(props) => props.data.colorN2};
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
                grid-area: image;
            }

            &__svg {
                width: 18px;
                height: 17px;
                fill: transparent;
                stroke: #4e4e4e;
            }

            &__author-link {
                grid-area: author;
                min-width: 49px;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: ${(props) => props.data.colorN1};
                white-space: nowrap;
            }

            &__album-link {
                grid-area: album;
                min-width: 49px;
                font-style: normal;
                font-weight: 400;
                font-size: 13px;
                line-height: 24px;
                color: ${(props) => props.data.colorN1};
            }

            &__like-dis {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-left: 26%;
            }

            &__like,
            &__dislike {
                padding: 5px;
            }

            &__like-svg {
                width: 14px;
                height: 12px;
                fill: transparent;
                stroke: #696969;
            }

            &__dislike {
                margin-left: 28.5px;
            }

            &__dislike-svg {
                width: 14.34px;
                height: 13px;
                fill: transparent;
                stroke: #696969;
            }
        }

        .volume {
            &__content {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: end;
            }

            &__image {
                width: 13px;
                height: 18px;
                margin-right: 17px;
            }

            &__svg {
                width: 13px;
                height: 18px;
                fill: transparent;
            }

            &__progress {
                width: 109px;
            }

            &__progress-line {
                width: 109px;
            }
        }
    }
`

export const ProgressBarStyle = styled('div')`
    width: 100%;
    height: 5px;
    background: ${(props) => props.data.colorN3};

    cursor: pointer;

    display: flex;
    justify-content: flex-start;
    overflow: hidden;

    & div {
        height: 100%;
        width: 0;

        background-color: #0055ff;
    }
`
