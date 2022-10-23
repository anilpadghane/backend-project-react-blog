
import { NavLink } from "react-router-dom"
import './Block.css'


const Navigation = () => {
    return (
        <nav className="nav">
            <NavLink to='/' className= "home">Home</NavLink>
            <NavLink to='/Category/Bollywood' className= "bolly">Bollywood</NavLink>
            <NavLink to = '/Category/Technology' className= "tech">Technology</NavLink>
            <NavLink to = '/Category/Tourism' className="tour">Tourism</NavLink>
            <NavLink to= '/Category/Fitness' className= "fit">Fitness</NavLink>
            <NavLink to= '/Category/Food' className= "food">Food</NavLink>
        </nav>
    )

}

export default Navigation