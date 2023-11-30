import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
    const {books} = useContext(BookContext)
    return ( 
        <div className="navbar">
            <h1>Sanchit's reading list</h1>
            <p>here we have {books.length} books to read...</p>
        </div>
     );
}
 
export default Navbar;