import React from 'react'
import {NavLink} from 'react-router-dom';

const SignoutLink = () => {
    return (
        <ul className="right">
            <li><NavLink to ="/">sign up</NavLink></li>
            <li><NavLink to ="/"> login</NavLink></li>
        </ul>
    )
}
export default SignoutLink;