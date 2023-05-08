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
      <a href="#">Home</a>
      <a href="#">New</a>
      <a href="#">Popular</a>
      <a href="#">Trending</a>
      <a href="#">Category</a>
    </div>
  );
};

export default Navbar;
