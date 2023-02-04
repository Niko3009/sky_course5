import { Main } from './account/main'
import { Bar } from './account/bar'

export const Account = (props) => {
    return (
        <div>
            <Main logOut={props.logOut} />
            <Bar />
            <footer className="footer"></footer>
        </div>
    )
}
