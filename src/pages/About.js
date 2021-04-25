import Navigation from "../components/Navigation";

import amandes from "../img/about/amandes.jpg";
import chat from "../img/about/chat.jpg";

const Propos = () => {
  return (
    <div className="about-wrapper">
      <Navigation />
      <div className="about-content">
        <div className="about-first">
          <div className="first-paragraph">
            <h1>Derrière l’appareil photo c’est moi, Amandine</h1>
            <p>
              Passionnée de dessin depuis petite, puis de photographie, j’ai
              tour à tour voulu être vétérinaire, photographe - sans trop m’y
              projeter - ou encore architecte. Finalement diplômée de sciences
              humaines et d’urbanisme, ce n’est qu’après la naissance de mon
              neveu en 2018 et voyant le plaisir que j’avais à capturer sa
              découverte du monde et ses éclats de rire qu’a commencé à germer
              sérieusement l’idée de faire de la photographie mon activité
              professionnelle.
            </p>
            <br />
            <p>
              Basée en Alsace d’où je suis originaire, je peux facilement me
              déplacer dans le Grand Est, ainsi que dans le reste de la France
              (voire à l’étranger) en fonction de mes disponibilités.
            </p>
          </div>
          <div className="first-img">
            <img src={amandes} alt="amandine" />
          </div>
        </div>
        <div className="about-second">
          <div className="second-img">
            <img src={chat} alt="mon approche" />
          </div>
          <div className="second-paragraph">
            <h1>Mon approche</h1>
            <p>
              Pour moi, être photographe c’est créer des capsules temporelles,
              me faire discrète et immortaliser l’instant, les émotions, les
              détails auxquels on ne prête pas assez attention. De mes voyages
              je reviens souvent sans photo de monuments mais avec des clichés
              de fleurs poussant entre les pavés ou d’étals de marché ; je crois
              que c’est assez représentatif de mon rapport au monde et à la
              photographie.
            </p>
            <p>
              J’aime les photos spontanées, vraies, prises sur le vif. Garder
              des souvenirs des grandes étapes de la vie, mais aussi et surtout
              du quotidien, de la poésie du banal. C’est aussi pour ça que je
              retouche peu les photos que je prends. Elles peuvent bien sûr être
              - et sont le plus souvent - redressées ou corrigées si elles
              manquent de lumière ou que les couleurs ne sont pas harmonieuses,
              mais les corps ou la composition ne sont jamais modifiés.
            </p>
            <br />
            <p>
              Ma sensibilité vous parle ? Ecrivez-moi et créons des souvenirs
              ensemble.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propos;
