import {Navlink} from "react-router-dom"


 const Navbar = () => {
return (
    <nav className="navbar">
    <div className="nav-link">
    <Navlink to ="/home" className={({isActive}) =>isActive ? "logo-active" : "logo-inactive" }><h1>Bishal</h1></Navlink>
    <Navlink to = "/home" className = {({isActive}) =>isActive ? "home-active" : "home-inactive"}>home</Navlink>
    <Navlink to = "/about" className ={({isActive}) => isActive ? "about-active" : "about-inactive"}>about</Navlink>
    
    </div>
    </nav>   
)
}

export default Navbar;


