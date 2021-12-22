import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"

function App() {

    const greetin = "Hola"

    return (
        <>
            <NavBar/>
            <ItemListContainer greetin={greetin}/>
        </>
    )
}

export default App