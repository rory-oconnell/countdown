const Navbar = () => {
    return(
        <nav className={"navbar"}>
            <h1>My Blog</h1>
            <div className={"links"}>
                <a href={"/"}>Home</a>
                <a href={"/about"}>About</a>
                <a href={"/contact"}>Contact</a>
                <a href={"/countdown"}>Countdown</a>
                <a href={"/create"} style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "10px",
                    borderRadius: "5px",
                }}>New Blog</a>
            </div>
        </nav>

    );
}

export default Navbar;