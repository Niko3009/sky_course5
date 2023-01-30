import './css/style.css'



import { Main } from './appComponents/main'
import { Bar } from './appComponents/bar'

const App = () => {
    return (
        <div className="container">
            <Main />
            <Bar />
            <footer className="footer"></footer>
        </div>
    )
}

export default App
