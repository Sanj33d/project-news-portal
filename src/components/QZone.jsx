import React from 'react';
import img_swimming from "../assets/swimming.png"
import img_classroom from "../assets/class.png"
import img_playground from "../assets/playground.png"

const QZone = () => {
    return (
        <div className='bg-base-200 mt-8 p-3'>
            <h1 className='font-bold mb-5'>Q-Zone</h1>
            <div className="flex flex-col">
                <img src={img_swimming} alt="" />
                <img src={img_classroom} alt="" />
                <img src={img_playground} alt="" />
            </div>
        </div>
    );
};

export default QZone;