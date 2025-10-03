// import Countdown from "./components/Countdown.tsx";
import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
            </div>
        </div>
    );
}
export default App;
