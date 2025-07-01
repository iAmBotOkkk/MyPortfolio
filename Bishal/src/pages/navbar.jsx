 export const Navbar = () => {
return (
    <nav className="navbar">
    <div className="nav-link">
    <NavLink to ="/" className={({isActive}) =>isActive ? "active" : ""}><h1>Bishal</h1></NavLink>
    <NavLink to = "/home" className = {({isActive}) =>isActive ? "active" : ""}>home</NavLink>
    <NavLink to = "/about" className ={({isActive}) => isActive ? "active" : ""}>about</NavLink>
    
    </div>
    </nav>   
)
}