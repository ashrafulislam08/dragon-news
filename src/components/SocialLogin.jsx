import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="space-y-2">
        <button className="btn">
          <FaGoogle /> Log In with Google
        </button>
        <button className="btn">
          <FaGithub /> Log In with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
