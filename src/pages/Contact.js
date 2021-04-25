import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <Navigation />
      <div className="contact-content">
        <div className="contact-left">
          <p>
            De beaux portraits, c’est avant tout la rencontre de deux univers et
            une relation de confiance. N’hésitez pas à consulter les autres
            onglets pour en savoir plus sur mon travail. Si mon approche vous
            parle, vous pouvez me contacter via le formulaire de contact ou par
            courriel pour me parler de vous et de votre projet, nous discuterons
            ensemble de ce qu’il est possible de faire.
          </p>
          <p>J’ai hâte de vous lire, à très vite !</p>
          <div className="box-contact">
            <h1>Amandine Thomas</h1>
            <p>contact@amandinethomas.com</p>
            <p>Montréal, Canada</p>
            <div className="box-icon">
              <a
                href="https://www.instagram.com/amandine.lthms/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="box-facebook"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="13"
                  height="23"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/amandine.lthms/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="box-instagram"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="22"
                  height="25"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h1>Formulaire</h1>
          <form>
            <label htmlFor="noms">
              Prénom(s) et nom(s) <span>*</span>
            </label>
            <input type="text" id="noms" name="noms" required />

            <label htmlFor="email">
              Courriel <span>*</span>
            </label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="projet">
              Parlez-moi de vous et de votre projet (date, lieu, occasion,
              ambiance, etc. plus vous me donnez de détails, plus il est facile
              pour moi de cerner vos attentes et d’y répondre :) ).{" "}
              <span>*</span>
            </label>
            <textarea id="projet" name="projet" required />

            <label htmlFor="choix">
              Qu’est-ce qui vous plaît dans mes images ?
            </label>
            <textarea id="choix" name="choix" required />

            <label htmlFor="decouverte" id="decouverte">
              Comment m’avez-vous découverte ?
            </label>
            <div className="decouverte">
              <div className="choix">
                <input
                  type="radio"
                  id="oreille"
                  name="decouverte"
                  value="bouche-oreille"
                />
                <label htmlFor="bouche">Bouche à oreille</label>
              </div>

              <div className="choix">
                <input
                  type="radio"
                  id="instagram"
                  name="decouverte"
                  value="instagram"
                />
                <label htmlFor="instagram">Instagram</label>
              </div>

              <div className="choix">
                <input
                  type="radio"
                  id="facebook"
                  name="decouverte"
                  value="facebook"
                />
                <label htmlFor="facebook">Facebook</label>
              </div>

              <div className="choix">
                <input
                  type="radio"
                  id="recherche"
                  name="decouverte"
                  value="moteur-recherche"
                />
                <label htmlFor="recherche">Moteur de recherche</label>
              </div>
              <div className="choix">
                <input
                  type="radio"
                  id="autre"
                  name="decouverte"
                  value="autre"
                />
                <label htmlFor="autre">Autre</label>
                <input type="text" id="autre" name="decouverte" />
              </div>
            </div>
            <label htmlFor="bonus">Quelque chose à rajouter ?</label>
            <textarea id="bonus" name="bonus" />

            <input id="form-submit" type="submit" value="Envoyer"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
