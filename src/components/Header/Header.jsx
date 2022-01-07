import LeftMenu from "./LeftMenu"
import Search from "./Search"

function Header(props) {
    return (
        <header className="header">
            <LeftMenu />
            <Search setSearch={props.setSearch} />

        </header>
    )
}

export default Header