import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src="/assets/img/logo/rguktlogo.png"
        alt=""
        className="max-w-12 min-h-10 object-contain"
      />
    </Link>
  );
};
