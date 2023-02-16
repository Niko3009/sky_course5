import styled from 'styled-components'

export const NavStyle = styled('div')`
    width: 240px;
    background-color: ${(props) => props.data.colorN2};

    padding: 20px 0 20px 36px;

    display: flex;
    flex-direction: column;

    gap: 10px;

    & {
        & ul {
            padding: 18px 0 10px 0;

            & li {
                padding: 5px 0;
                margin-bottom: 16px;
            }

            & a {
                color: ${(props) => props.data.colorN1};
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;

                cursor: pointer;
            }

            & p {
                color: ${(props) => props.data.colorN1};
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;

                cursor: pointer;
            }
        }

        & .logo {
            width: 113.33px;
            height: 43px;
            padding: 13px 0 13px 0;
            background-color: transparent;
            margin-bottom: 20px;
        }

        & .burger {
            width: 20px;
            height: 36px;
            padding: 13px 0;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            cursor: pointer;

            & span {
                display: inline-block;
                width: 100%;
                height: 1px;
                background-color: #d3d3d3;
            }
        }

        & svg {
            cursor: pointer;
        }
    }
`
