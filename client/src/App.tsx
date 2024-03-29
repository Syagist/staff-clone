import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";
import {register} from "./store/slices/auth/registerSlice.ts";
import Navigation from "./components/Navigation.tsx";
import Card from "./components/Card.tsx";
import {GlobalStyles} from "./styles/GlobalStyles.ts";
import Modals from "./components/Modals.tsx";

function App() {
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();

    // @ts-ignore
    const {isLoading, user, isError} = useSelector((state) => state.user);

    const handleRegister = () => {
    };

    return (
        <div>
            <GlobalStyles />
            <Navigation/>
 <Modals/>
            <Card><p>22</p></Card>
            <button onClick={handleRegister}>Register</button>
            {isLoading && <p>Loading...</p>}
            {user && <p>User: {user.token}</p>}
            {isError && <p>Error occurred</p>}
        </div>
    );
}

export default App
