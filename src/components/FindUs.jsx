import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold mt-8 pb-5">Find Us On</h1>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn join-item justify-start bg-base-100 hover:bg-base-200"><FaFacebook></FaFacebook> Facebook</button>
          <button className="btn join-item justify-start bg-base-100 hover:bg-base-200"><FaTwitter></FaTwitter> Twitter</button>
          <button className="btn join-item justify-start bg-base-100 hover:bg-base-200"><FaInstagram></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
