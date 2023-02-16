import { useContext } from 'react'
import { appContext } from 'app'

export const Search = () => {
    const appTheme = useContext(appContext).appTheme

    return (
        <div className="centerblock__search search">
            <svg className="search__svg">
                <use
                    xlinkHref={`/img/icon/search.svg#${
                        appTheme.current.name === 'dark' ? 'white' : 'black'
                    }`}
                ></use>
            </svg>

            <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </div>
    )
}
