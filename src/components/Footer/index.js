import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-3 text-gray-500 text-sm">or Login with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="flex justify-center gap-4">

        <button className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full">
          <FaFacebookF size={20}/>
        </button>
        
        <button className="bg-white border hover:bg-gray-100 p-3 rounded-full">
          <FcGoogle size={20} />
        </button>
        <button className="bg-white border p-3 hover:bg-gray-100 rounded-full text-pink-500">
          <FaInstagram size={20}/>
        </button>
<button className="bg-black hover:bg-gray-800 text-white p-3 rounded-full">
          <FaTwitter size={20}/>
        </button>
      </div>
    </div>
  );
};

export default Footer;
