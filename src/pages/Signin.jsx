import "../styles/pages/Signup.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

const Signin = () => {
  return (
    <main className="signup-container">
      <section className="signup-container__left">
        <div className="signup-container__logo">
          <Link to="/">
            <img src="/assets/logo_black.png" />
          </Link>
        </div>
        <form>
          <h1>Connectez-vous à votre compte.</h1>
          <h2>Prêts à faire une différence?</h2>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />
          <div>
            <input type="submit" value="Se Connecter" />
          </div>
          <hr></hr>
          <h3>
            Vous êtes nouveaux? <Link to="/signup">Créez un compte</Link>
          </h3>
        </form>
      </section>
      <Carousel />
    </main>
  );
};

export default Signin;
