import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import React from "react";
import ReactFacebookLogin from "react-facebook-login";
import { auth } from "../../utils/firebase-config";

const Footer = () => {
  const handleGoogleLogin = (response) => {
    console.log("Google login success:", response);
    // Send response.credential to backend
  };

  const responseFacebook = (response) => {
    console.log("Facebook response:", response);
  };

  const handleTwitterLogin = async () => {
    const provider = new TwitterAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Twitter Login Success:", user);
    } catch (error) {
      console.error("Twitter Login Error:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-3 text-gray-500 text-sm">or Login with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
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

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={handleTwitterLogin}
          className="bg-blue-400 text-white px-4 py-2 rounded"
        >
          Login with Twitter
        </button>
      </div>
   </div>
  );
};

export default Footer;
