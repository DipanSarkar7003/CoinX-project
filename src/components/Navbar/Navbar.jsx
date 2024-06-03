import { Link , NavLink } from 'react-router-dom'

const Navbar = () => {
 
    const navItems = [
        {path : "/" , element :"home" } , {path : "/exchanges" , element :"exchanges" } , {path : "/coins" , element :"coins" }  , {path : "/more" , element :"more" }  , ]

  return (
<nav className='navbar'>
    <Link to={"/"} className='logo'>CoinX</Link>
    <ul className='navList'>
        {navItems.map((item , index)=> { 
        return ( <NavLink className='listItem' to={item.path} key={index}>{item.element} </NavLink> 
)})}
    </ul>
</nav>  )
}

export default Navbar