import React from 'react'
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks'
import SignoutLink from './SignoutLink'
const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className='brand-logo'> sina </Link>
                    <SignedinLinks></SignedinLinks>
                    <SignoutLink></SignoutLink>
                </div>
        </nav>
    )
}
export default Navbar;