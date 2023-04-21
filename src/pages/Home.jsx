import { useState } from "react";
import "../styles/pages/Home.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header route="acceuil" />
      <main className="home-container">
        <section className="home-container__top-section">
          <h1>
            Notre <span>Sang</span>
            <br />
            Notre <span>Union</span>
          </h1>
          <Link to="/book">JE DONNE MON SANG!</Link>
        </section>
        <section className="home-container__bottom-section">
          <div className="bottom-section__article">
            <div className="article-container">
              <article>
                <h2>
                  ENSEMBLE,
                  <br />
                  SAUVONS DES VIES.
                </h2>
                <p>
                  Grâce aux dons, les personnes qui en ont
                  <br /> besoin sont soignées directement via la
                  <br /> transfusion sanguine ou indirectement par
                  <br />
                  l'utilisation des médicaments dérivés du
                  <br /> sang issu du don de plasma.
                  <br />
                  Derrière chaque <span>don</span>, il y a une histoire.
                </p>
              </article>
            </div>
            <img src="/assets/home/heart.png" />
          </div>
          <div className="bottom-section__motto">
            <h2>Passez un test d'éligibilité de don.</h2>
          </div>
          <footer className="home-footer">
            <div className="home-footer-left">
              <img className="home-footer__logo" src="/assets/logo_white.png" />
              <div className="home-footer__seprator"></div>
              <h4 className="home-footer__text">GLSI2</h4>
            </div>
            <p>contact.tunisang@gmail.com</p>
          </footer>
        </section>
      </main>
    </>
  );
};

export default Home;

() => {};
