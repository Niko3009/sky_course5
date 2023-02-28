import styled from 'styled-components'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { idFromStore } from 'back/selectors/userSelector'
import { appContext } from 'app'

export const NotFound = () => {
    const navigate = useNavigate()

    const appTheme = useContext(appContext).appTheme
    const id = useSelector(idFromStore)

    const backToMain = function () {
        navigate(`/main/${id}/`, { replace: true })
    }

    return (
        <Style data={appTheme.current}>
            <h1>404</h1>

            <div>
                <h2>Страница не найдена</h2>
                <img src="/img/crying.png" />
            </div>

            <p>
                Возможно, она была удалена <br />
                или перенесена на другой адрес
            </p>

            <button onClick={backToMain} className={'btn-dark'}>
                Вернуться на главную
            </button>
        </Style>
    )
}

const Style = styled('div')`
    & {
        padding-top: 200px;
        width: 920px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;

        & {
            h1 {
                font-size: 160px;
                font-weight: 400;
                line-height: 168px;
                letter-spacing: 0px;
                text-align: left;
            }

            h2 {
                font-size: 32px;
                font-weight: 400;
                line-height: 40px;
                letter-spacing: 0em;
                text-align: left;
            }

            & div {
                display: flex;
                flex-direction: row;
                gap: 20px;
            }

            p {
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
                color: #4e4e4e;
                text-align: center;
            }

            img {
                height: 52px;
                width: 52px;
                cursor: pointer;
            }

            button {
                height: 52px;
                width: 278px;

                border-radius: 6px;
                border: 0px;
                background: #580ea2;

                color: '#fffff';
                font-size: 18px;
                font-weight: 400;
            }
        }
    }
`
