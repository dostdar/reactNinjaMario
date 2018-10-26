import React from 'react'
import {NavLink} from 'react-router-dom';

const SigninLink = () => {
    return (
        <ul className="right">
            <li><NavLink to ="/"> new project</NavLink></li>
            <li><NavLink to ="/"> log out</NavLink></li>
            <li><NavLink to ="/" className="btn btn-floating green darken-2"></NavLink></li>
        </ul>
    )
}
export default SigninLink;