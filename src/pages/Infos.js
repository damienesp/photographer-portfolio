import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";

const Infos = () => {
  return (
    <div className="infos-wrapper">
      <Navigation />
      <div className="infos-content">
        <p>
          Portrait seul(e) ou à plusieurs, séance grossesse ou famille,
          anniversaire, baptême ou autre événement, simplement chez vous, en
          extérieur ou dans un endroit de votre choix, les possibilités sont
          infinies. N’hésitez pas à prendre{" "}
          <span>
            <Link to="/contact"> contact</Link>
          </span>{" "}
          avec moi pour toute demande de renseignements ou devis.
        </p>
      </div>
    </div>
  );
};

export default Infos;
