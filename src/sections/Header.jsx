import Nav from "../component/Nav";
import Navbar from "../component/Navbar";

const Header = () => {
    return (
        <header className="sticky top-0 bg-dark z-10">
            {/* <Navbar /> */}
            <Nav />
        </header>
    );
};

export default Header;