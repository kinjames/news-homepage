import desktop from "./images/image-web-3-desktop.jpg";
import mobile from "./images/image-web-3-mobile.jpg";

const Main = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="hero-section">
      <HeroContainer />
    </div>
  );
};

const HeroContainer = () => {
  return (
    <div className="hero-container">
      <Images />;
      <Headings />;
    </div>
  );
};

// const Aside = () => {
//     return (

//     )
// }

const Images = () => {
  return (
    <div className="hero-images">
      <div className="desktop-hero-image">
        <img src={desktop} alt="desktop-hero-image" />
      </div>
      <div className="mobile-hero-image">
        <img src={mobile} alt="mobile-hero-image" />
      </div>
    </div>
  );
};

const Headings = () => {
  return (
    <div className="hero-texts">
      <h1>The Bright Future of Web 3.0?</h1>
      <div className="para-link">
        <p className="para">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <a href="#" className="link">
          read more
        </a>
      </div>
    </div>
  );
};
export default Main;
