import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

const Footer = () => {

     const handleGoogleLogin = (response) => {
    console.log("Google login success:", response);
    // Send response.credential to backend
  };

  return (
    <div>
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-3 text-gray-500 text-sm">or Login with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
       
        <GoogleOAuthProvider clientId="142194786397-e40000jsupi3ruqnpb82iv4j9egbb7md.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => console.log("Google login failed")}
          useOneTap
        />
      </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Footer;
