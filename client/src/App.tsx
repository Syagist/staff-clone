import {ReactSVG} from 'react-svg'
import home from './assets/icons/icon-home.svg'
import Card from "./components/Card.tsx";

function App() {

    return (
        <>
            <Card>
                <p>123</p>
                <ReactSVG src={home}/>
            </Card>
            <ReactSVG src={home}/>
        </>
    )
}

export default App
