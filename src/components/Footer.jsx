import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <>
      <div className="bg-base-200">
        <div className="footer  text-base-content p-10 center">
          <aside>
            <img src={logo} alt="" />
            <p>
              <span className="text-lg font-bold text-colorPrimary">
                Immigro
              </span>
              <br />
              Your trusted visa partner
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Socials</h6>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">Tiktok</a>
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">Linkedin</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
        <div className="py-4 text-center border-t">
          <small>
            &copy; 2024 All rights by <span className="font-bold">Immigro</span>
          </small>
        </div>
      </div>
    </>
  );
};

export default Footer;
