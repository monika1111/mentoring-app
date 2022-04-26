import { useSelector } from "react-redux";

import './index.scss';

import { Router } from "./componetns/router/Router";
import { Loader } from "./componetns/common/loader/Loader";

function App() {
    const { logInInProgress } = useSelector((state) => state.auth);

    return (
        <div className="App">
            {logInInProgress ? <Loader/> : <Router/>}
        </div>
    );
}

export default App;
