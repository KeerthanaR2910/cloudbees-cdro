import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import "./App.css"

function App() {
    return (
        <div className="content">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<UserList/>}/>
                        <Route path="/user/:username" element={<UserDetails/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
