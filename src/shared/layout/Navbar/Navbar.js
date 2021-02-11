import React from 'react'

import { NavWrapper, Link } from './Navbar.styled'

const Navbar = () => {
    return (
        <NavWrapper>
            <Link href='/'>Home</Link>
            <Link href='/favs'>Favorites</Link>
        </NavWrapper>
    )
}

export default Navbar;