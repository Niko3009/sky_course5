import styled from 'styled-components'

export const SideBarStyle = styled('div')`
    width: 360px;
    padding: 20px 0 20px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    & {
        .sidebar_personal {
            width: 240px;

            padding: 12px 0 15px 0;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;

            &_name {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: ${(props) => props.data.colorN1};
                margin-right: 16px;
            }

            &_avatar {
                width: 43px;
                height: 43px;
                background-color: ${(props) => props.data.colorN2};
                border-radius: 50%;
            }
        }

        & .sidebar_list {
            height: 100%;
            padding: 240px 0 0 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            & a {
                width: 100%;
                height: 100%;
            }

            & div {
                width: 250px;
                height: 150px;

                &:not(:last-child) {
                    margin-bottom: 30px;
                }
            }

            & img {
                width: 100%;
                height: auto;
            }
        }
    }
`
