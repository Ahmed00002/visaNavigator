import { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { AuthContext } from "../contexts/contexts";
const ScrollNav = ({ menu }) => {
  const { publicRoutes, userProfile, loginButton } = menu;
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <>
      <div
        className={`fixed py-2 transition-all z-40 duration-700 bg-white w-full paddingX shadow-md ${
          isScrolled ? "top-0 left-0 block" : "-top-20 left-0"
        }
      `}
      >
        <div className={`flex items-center justify-center w-full  bg-white`}>
          <div>
            <img className="h-10" src={logo} alt="website logo" />
          </div>
          <div className="links grow flex items-center justify-center gap-4">
            {publicRoutes}
          </div>
          <div className="pl-4">{user ? userProfile : loginButton}</div>
        </div>
      </div>
    </>
  );
};

export default ScrollNav;
