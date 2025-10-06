import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import Create from "./components/Create.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/create" element={<Create />}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
