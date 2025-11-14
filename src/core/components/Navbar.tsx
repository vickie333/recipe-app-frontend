import { NavLink, useNavigate } from "react-router-dom";
import recipe from "../../assets/recipe.png"

export default function Navbar(){
    const navigate = useNavigate()

    return (
        <div className="navbar">
            <img src={recipe}/>
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/profile"><li>Profile</li></NavLink>
                <NavLink to="/recipe/details"><li>Recipe Details</li></NavLink>
                <NavLink to="/recipes"><li>Recipes</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/user/login"><li>Login</li></NavLink>
            </ul>
            <button onClick={() => navigate("/about")}>Get Started</button>
        </div>
    )
}