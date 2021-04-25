import { Link } from "react-router-dom";

import Carousel from "../components/Carousel";
import { carouselData } from "../components/CarouselData";
import Navigation from "../components/Navigation";

import self from "../img/self-photo.jpeg";

import feed_1 from "../img/instagram_feed/feed_1.jpeg";
import feed_2 from "../img/instagram_feed/feed_2.jpeg";
import feed_3 from "../img/instagram_feed/feed_3.jpeg";
import feed_4 from "../img/instagram_feed/feed_4.jpeg";
import feed_5 from "../img/instagram_feed/feed_5.jpeg";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-header">
        <Navigation />
      </div>

      <div className="home-content">
        <div className="home-presentation">
          <div className="presentation-photo">
            <img src={self} alt="myself" />
            <p>Immortaliser petits et grands moments de bonheur</p>
          </div>

          <div className="presentation-texte">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to="/about">
              <button>A propos</button>
            </Link>
          </div>
        </div>

        <div className="home-mots">
          <h1>Vos mots</h1>
          <Carousel carouselData={carouselData} />
        </div>

        <div className="home-instagram">
          <p>
            {" "}
            <a
              href="https://www.instagram.com/amandine.lthms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @amandine.lthms
            </a>
          </p>
          <div className="instagram-feed">
            <a
              href="https://www.instagram.com/amandine.lthms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="instagram feed" src={feed_1} />
            </a>
            <a
              href="https://www.instagram.com/amandine.lthms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="instagram feed" src={feed_2} />
            </a>
            <a
              href="https://www.instagram.com/amandine.lthms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="instagram feed" src={feed_3} />
            </a>
            <a
              href="https://www.instagram.com/amandine.lthms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="instagram feed" src={feed_4} />
            </a>
            <a
              href="https://www.instagram.com/amandine.lthms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="instagram feed" src={feed_5} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
