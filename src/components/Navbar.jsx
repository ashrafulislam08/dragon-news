import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between mt-4">
      <div className=""></div>
      <div className="space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>

      <div className="flex gap-2 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <Link to="/auth/login" className="btn btn-neutral">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
