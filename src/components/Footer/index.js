import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import ReactFacebookLogin from "react-facebook-login";

const Footer = () => {
  const handleGoogleLogin = (response) => {
    console.log("Google login success:", response);
    // Send response.credential to backend
  };

  const responseFacebook = (response) => {
    console.log("Facebook response:", response);
  };

  return (
    <div>
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-3 text-gray-500 text-sm">or Login with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <GoogleOAuthProvider 
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => console.log("Google login failed")}
            useOneTap
          />
        </GoogleOAuthProvider>
      </div>

      <div className="flex justify-center gap-4 mt-4">
         <ReactFacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>

    </div>
  );
};

export default Footer;
