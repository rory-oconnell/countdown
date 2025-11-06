import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={"navbar"}>
            <h1>Test</h1>
            <div className={"links"}>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/countdown"}>Countdown</Link>
                <Link to={"/create"} style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "10px",
                    borderRadius: "5px",
                }}>New Blog</Link>
            </div>
        </nav>

    );
}

export default Navbar;