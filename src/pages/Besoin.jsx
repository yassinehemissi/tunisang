import { useState } from "react";
import "../styles/pages/Besoin.css";

import Header from "../components/Header";

const Etape1 = ({
  setPrenom,
  setNom,
  setEmail,
  setCIN,
  Prenom,
  Nom,
  Email,
  CIN,
}) => {
  return (
    <>
      <h1>Information Personelle.</h1>
      <input
        onChange={(e) => setPrenom(e.target.value)}
        value={Prenom}
        placeholder="Prenom"
      />
      <input
        onChange={(e) => setNom(e.target.value)}
        value={Nom}
        placeholder="Nom"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={Email}
        placeholder="Email"
      />
      <input
        onChange={(e) => setCIN(e.target.value)}
        value={CIN}
        placeholder="CIN"
      />
    </>
  );
};

const Etape2 = ({
  setVille,
  setProvince,
  setHopital,
  Ville,
  Province,
  Hopital,
}) => {
  return (
    <>
      <h1>Information Sur L'operation.</h1>
      <input
        onChange={(e) => setVille(e.target.value)}
        value={Ville}
        placeholder="Ville"
      />
      <input
        onChange={(e) => setProvince(e.target.value)}
        value={Province}
        placeholder="Province"
      />
      <input
        onChange={(e) => setHopital(e.target.value)}
        value={Hopital}
        placeholder="Nom de l'hopital / Clinique"
      />
    </>
  );
};

const Etape3 = ({ NomPrenom, CIN, Lieu, NumDemande }) => {
  return (
    <>
      <h1>Confirmation des informations</h1>
      <div className="besoin-confirmation">
        <li>Nom & Prenom: {NomPrenom}</li>
        <li>CIN: {CIN}</li>
        <li>Lieu de l'operation: {Lieu}</li>
        <li>Numero de la demaned: {NumDemande}</li>
      </div>
    </>
  );
};

const Besoin = () => {
  const [Progress, setProgress] = useState([
    "progress-on",
    "progress-now",
    "progress-off",
  ]);
  const [Prenom, setPrenom] = useState("");
  const [Nom, setNom] = useState("");
  const [Email, setEmail] = useState("");
  const [CIN, setCIN] = useState("");
  const [Ville, setVille] = useState("");
  const [Province, setProvince] = useState("");
  const [Hopital, setHopital] = useState("");
  const updateEtape = (type) => {
    let clone = [...Progress];
    let currentStep = Progress.indexOf("progress-now");
    console.log(currentStep);
    if (type == "suivant" && currentStep != 2) {
      clone[currentStep] = "progress-on";
      clone[currentStep + 1] = "progress-now";
    } else if (type == "precedent" && currentStep != 0) {
      clone[currentStep - 1] = "progress-now";
      clone[currentStep] = "progress-off";
    }
    setProgress(clone);
  };

  return (
    <>
      <Header route="besoin" theme="white" />
      <main className="besoin">
        <div className="besoin-progress">
          {Progress.map((e) => (
            <>
              <hr className={e}></hr>
              <div className={e}></div>
            </>
          ))}
          <hr></hr>
        </div>
        <form className="besoin-form">
          {Progress[0] == "progress-now" ? (
            <Etape1
              setPrenom={setPrenom}
              Prenom={Prenom}
              setNom={setNom}
              Nom={Nom}
              setEmail={setEmail}
              Email={Email}
              setCIN={setCIN}
              CIN={CIN}
            />
          ) : null}
          {Progress[1] == "progress-now" ? (
            <Etape2
              setVille={setVille}
              Ville={Ville}
              setProvince={setProvince}
              Province={Province}
              setHopital={setHopital}
              Hopital={Hopital}
            />
          ) : null}
          {Progress[2] == "progress-now" ? (
            <Etape3
              NomPrenom={`${Nom} ${Prenom}`}
              CIN={CIN}
              Lieu={`${Hopital}, ${Province}, ${Ville}`}
              NumDemande={1}
            />
          ) : null}

          <div className="besoin-form__control">
            <button
              onClick={(e) => {
                e.preventDefault();
                updateEtape("precedent");
              }}
              className="besoin-form__prev-button"
            >
              {"<"} Precedent
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                updateEtape("suivant");
              }}
              className="besoin-form__next-button"
            >
              {Progress[2] == "progress-now" ? "Envoyer" : "Suivant >"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Besoin;
