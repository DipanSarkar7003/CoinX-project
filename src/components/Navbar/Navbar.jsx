import React from 'react'

const Navbar = () => {
 
    const navItems = ["home" ,"exchanges" , "coins" , "more"   , ]

  return (
<nav className='navbar'>
    <h1 className='logo'>CoinX</h1>
    <ul className='navList'>
        {navItems.map((item)=> { 
        return (<li className='listItem'>{item}</li>
)})}
    </ul>
</nav>  )
}

export default Navbar