import desktop from "./images/image-web-3-desktop.jpg";
import mobile from "./images/image-web-3-mobile.jpg";
import retro from "./images/image-retro-pcs.jpg";
import gaming from "./images/image-gaming-growth.jpg";
import laptop from "./images/image-top-laptops.jpg";

const Main = () => {
  return (
    <div className="main">
      <Hero />
      <Features />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="hero-section">
      <HeroContainer />
      <Aside />
    </div>
  );
};

const HeroContainer = () => {
  return (
    <div className="hero-container">
      <Images />
      <Headings />
    </div>
  );
};

const Aside = () => {
  return (
    <div className="news-aside">
      <h2>New</h2>
      <News
        heading={"Hydrogen VS Electric Cars"}
        text={"Will hydrogen-fueled cars ever catch up to EVs?"}
      />
      <div className="line"></div>
      <News
        heading={"The Downsides of AI Artistry"}
        text={
          "What are the possible adverse effects of on-demand AI image generation?"
        }
      />
      <div className="line"></div>
      <News
        heading={"Is VC Funding Drying Up?"}
        text={
          " Private funding by VC firms is down 50% YOY. We take a look at what that means"
        }
      />
    </div>
  );
};

const Features = () => {
  return (
    <div className="feature-section">
      <Card
        image={retro}
        number={"01"}
        heading={" Reviving Retro PCs"}
        text={"What happens when old PCs are given modern upgrades?"}
      />
      <Card
        image={laptop}
        number={"02"}
        heading={" Top 10 Laptops of 2022"}
        text={"Our best picks for various needs and budgets."}
      />
      <Card
        image={gaming}
        number={"03"}
        heading={" The Growth of Gaming"}
        text={"How the pandemic has sparked fresh opportunities."}
      />
    </div>
  );
};

const Card = (props) => {
  const { image, number, heading, text } = props;
  return (
    <div className="card-details">
      <div className="image">
        <img src={image} alt="name" />
      </div>
      <div className="texts">
        <h3>{number}</h3>
        <h5>{heading}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

const News = (props) => {
  const { heading, text } = props;
  return (
    <div className="news-highlight">
      <h4 className="news-header">{heading}</h4>
      <p className="news-text">{text}</p>
    </div>
  );
};

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
