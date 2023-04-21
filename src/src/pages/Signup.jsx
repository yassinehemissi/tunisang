import { useState } from "react";
import "../styles/pages/Signup.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

const Signup = () => {
  return (
    <main className="signup-container">
      <section className="signup-container__left">
        <div className="signup-container__logo">
          <Link to="/">
            <img src="/assets/logo_black.png" />
          </Link>
        </div>
        <form>
          <h1>Créez un compte sur Tunisang. </h1>
          <h2>Vous êtes à un pas de faire une différence.</h2>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />
          <input type="password" placeholder="Confirmer mot de passe" />
          <input type="text" placeholder="CIN" />

          <div>
            <input type="submit" value="Créer" />
          </div>
          <hr></hr>
          <h3>
            Vous avez déjà un compte? <Link to="/signin">Connectez-vous</Link>
          </h3>
        </form>
      </section>
      <Carousel />
    </main>
  );
};

export default Signup;
