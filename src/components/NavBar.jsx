import React from 'react';
import { NavLink } from 'react-router';
import user_img from "../assets/user.png"

const NavBar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="nav_mid flex gap-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="nav_right flex gap-5">
                <img src={user_img} alt="" />
                <div className='btn btn-primary px-10'>login</div>
            </div>
        </div>
    );
};

export default NavBar;