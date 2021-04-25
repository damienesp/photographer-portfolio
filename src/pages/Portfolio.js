import Navigation from "../components/Navigation";

import photo1 from "../img/portfolio_grid/1.jpg";
import photo2 from "../img/portfolio_grid/2.jpg";
import photo3 from "../img/portfolio_grid/3.jpg";
import photo4 from "../img/portfolio_grid/4.jpg";
import photo5 from "../img/portfolio_grid/5.jpg";
import photo6 from "../img/portfolio_grid/6.jpg";
import photo7 from "../img/portfolio_grid/7.jpg";
import photo8 from "../img/portfolio_grid/8.jpg";
import photo9 from "../img/portfolio_grid/9.jpg";
import photo10 from "../img/portfolio_grid/10.jpg";
import photo11 from "../img/portfolio_grid/11.jpg";
import photo12 from "../img/portfolio_grid/12.jpg";
import photo13 from "../img/portfolio_grid/13.jpg";
import photo14 from "../img/portfolio_grid/14.jpg";
import photo15 from "../img/portfolio_grid/15.jpg";
import photo16 from "../img/portfolio_grid/16.jpg";
import photo17 from "../img/portfolio_grid/17.jpg";
import photo18 from "../img/portfolio_grid/18.jpg";
import photo19 from "../img/portfolio_grid/19.jpg";
import photo20 from "../img/portfolio_grid/20.jpg";
import photo21 from "../img/portfolio_grid/21.jpg";
import photo22 from "../img/portfolio_grid/22.jpg";
import photo23 from "../img/portfolio_grid/23.jpg";
import photo24 from "../img/portfolio_grid/24.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <Navigation />
      <div className="portfolio-grid">
        <div className="column">
          <img src={photo1} alt="photo1" />
          <img src={photo17} alt="photo17" />
          <img src={photo2} alt="photo2" />
          <img src={photo6} alt="photo6" />
          <img src={photo21} alt="photo21" />
          <img src={photo3} alt="photo3" />
          <img src={photo7} alt="photo7" />
          <img src={photo24} alt="photo24" />
          <img src={photo4} alt="photo4" />
        </div>
        <div className="column">
          <img src={photo8} alt="photo8" />
          <img src={photo22} alt="photo22" />
          <img src={photo9} alt="photo9" />
          <img src={photo10} alt="photo10" />
          <img src={photo11} alt="photo11" />
          <img src={photo12} alt="photo12" />
          <img src={photo19} alt="photo19" />
          <img src={photo5} alt="photo5" />
        </div>
        <div className="column">
          <img src={photo15} alt="photo15" />
          <img src={photo14} alt="photo14" />
          <img src={photo16} alt="photo16" />
          <img src={photo23} alt="photo23" />
          <img src={photo18} alt="photo18" />
          <img src={photo20} alt="photo20" />
          <img src={photo13} alt="photo13" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

// Pexels photos from :
// Markus Spiske
// Allan Mas
// Anna Shvets
// Any Lane
// Bekir Donmez
// Cottonbro
// Duong Nhan
// Emma Bauso
// Eva Elijas
// Gary Barnes
// Jonathan Borba
// Josh Hild
// Karolina Grabowska
// Monica Silvestre
// Taryn Elliott
// Wendel Moretti
// Zen Chung
