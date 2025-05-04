import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <img className='w-[471px]' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;