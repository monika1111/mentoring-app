import { useNavigate, Link } from "react-router-dom";

import "./Header.scss"

import User from "../../assets/images/user.png";

const Header = () => {
    const navigation = useNavigate();

    return (
        <div className="header">
            <div className="user">
                <img src={User} alt="logo.png" onClick={() => navigation("")}/>
                <span className="user-name">Jack</span>
            </div>
            <nav >
             <Link to="suggestions">Go To Suggestions</Link>
            </nav>
        </div>
    )
}


export default Header