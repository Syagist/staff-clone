import {useDispatch, useSelector} from "react-redux";
import {register} from "./store/slices/auth/registerSlice.ts";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";
import Navigation from "./components/Navigation.tsx";
import Card from "./components/Card.tsx";

function App() {
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>(); // Use ThunkDispatch
    const {isLoading, user, isError} = useSelector((state) => state.user);

    const handleRegister = () => {
        dispatch(register());
    };

    return (
        <div>
            <Navigation/>
            <Card><p>22</p></Card>
            <button onClick={handleRegister}>Register</button>
            {isLoading && <p>Loading...</p>}
            {user && <p>User: {user.token}</p>}
            {isError && <p>Error occurred</p>}
        </div>
    );
}

export default App
