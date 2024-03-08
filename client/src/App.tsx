import {ReactSVG} from 'react-svg'
import home from './assets/icons/icon-home.svg'
import Card from "./components/Card.tsx";
import {useDispatch, useSelector} from "react-redux";
import { useState} from "react";
import {loginSuccess} from "./store/actions/authActions.ts";
import {RootState} from "./store/store.ts";

function App() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let storedUser = useSelector((state: RootState) => state.auth.user);

    const handleLogin = () => {
        const user = {username, email: 'example@example.com'};

        dispatch(loginSuccess(user));
        localStorage.setItem('user', JSON.stringify(user));
        console.log(storedUser);
    };

    return (
        <>
            <Card>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
                <p>123</p>
                <ReactSVG src={home}/>
            </Card>
            <ReactSVG src={home}/>
        </>
    )
}

export default App
