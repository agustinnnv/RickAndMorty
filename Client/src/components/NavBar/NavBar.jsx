
import { resetCharacters } from "../../Redux/Action/Actions";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

const Nav = ({ onSearch }) => {
    const dispatch = useDispatch();
    return (
        <nav>
            <SearchBar onSearch={onSearch} />
            <button>
                <Link to='/about' > ABOUT</Link>
            </button>
            <button onClick={() => dispatch(resetCharacters())}>
                <Link to='/home' > HOME</Link>
            </button>
            <button>
            <Link to='/favorites' > FAVORITES</Link>
            </button>
        </nav>
    )
}
export default Nav;