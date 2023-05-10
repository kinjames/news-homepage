import logo from "./images/logo.svg";
import menu from "./images/icon-menu.svg";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Logo />
      <Menu />
      <Navlinks />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

// const CloseMenu = () => {
//   return (
//     <div className="close-menu">
//       <img src={close} alt="Close-Btn" />
//     </div>
//   );
// };

const Menu = () => {
  return (
    <div className="menu hide-from-desktop">
      <img src={menu} alt="Menu-Btn" className="menu-img" />
    </div>
  );
};

const Navlinks = () => {
  return (
    <div className="nav-links">
      <a href="https://google.com">Home</a>
      <a href="https://google.com">New</a>
      <a href="https://google.com">Popular</a>
      <a href="https://google.com">Trending</a>
      <a href="https://google.com">Category</a>
    </div>
  );
};

export default Navbar;
