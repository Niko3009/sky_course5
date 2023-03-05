import styled from 'styled-components'

export const FilterSectionStyle = styled('div')`
    & {
        .filterWrapper {
            height: 100px;
        }

        .centerblock {
            &__filter {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 51px;

                gap: 10px;
            }
        }

        .filter {
            &__title {
                margin-left: 0px;
                width: 80px;

                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                margin-right: 15px;
            }

            &__button {
                height: 40px;

                display: flex;
                flex-direction: row;
                justify-content: start;

                padding: 6px 0px;

                border: 1px solid ${(props) => props.data.colorN1};
                border-radius: 60px;

                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;

                cursor: pointer;

                & span {
                    margin-left: 28px;
                    flex-grow: 1;
                    text-align: center;
                    cursor: pointer;
                }

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
        }
        .filterBox {
            position: relative;
            top: -40px;
            left: -1400px;

            width: 220px;
            padding: 20px;

            background-color: ${(props) => props.data.colorN3};
            border-radius: 12px;

            & > div {
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
                    &_active {
                        color: #b672ff;
                    }
                }

                &:hover {
                    text-decoration: underline;
                }
            }

            &_ {
                &author {
                    left: 70px;
                }

                &release_date {
                    left: 250px;
                }

                &genre {
                    left: 390px;
                }
            }
        }

        .sort {
            &__title {
                margin-left: 20px;
                width: 125px;

                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                margin-right: 15px;
            }

            &__button {
                height: 40px;

                display: flex;
                flex-direction: row;
                justify-content: start;

                padding: 6px 0px;

                border: 1px solid ${(props) => props.data.colorN1};
                border-radius: 60px;

                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;

                cursor: pointer;

                & span {
                    margin-left: 28px;
                    flex-grow: 1;
                    text-align: center;
                    cursor: pointer;
                }

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
        }
        .sortBox {
            position: relative;
            top: -40px;
            left: -1000px;

            width: 220px;
            padding: 20px;

            background-color: ${(props) => props.data.colorN3};
            border-radius: 12px;

            & > div {
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

                &.sortItem {
                    &_active {
                        color: #b672ff;
                    }
                }

                &:hover {
                    text-decoration: underline;
                }
            }

            &_ {
                &release_date {
                    left: 720px;
                }
            }
        }

        & .filterDetector {
            position: relative;
            top: -20px;
            left: 10px;

            /* margin-left: 10px; */
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
`
