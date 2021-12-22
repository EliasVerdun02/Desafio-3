import CartWidget from "./CartWidget"


const NavBar = () => {

    return (
        <nav>
            <h1 class="title">TITULO</h1>
            <ul class="nav">
                <li><a href="1#">ITEM 1</a></li>
                <li><a href="1#">ITEM 2</a></li>
                <li><a href="1#">ITEM 3</a></li>
                <li><a href="1#">ITEM 4</a></li>
                <li><a href="1#"><CartWidget/></a></li>
            </ul>
        </nav>
    )
}

export default NavBar