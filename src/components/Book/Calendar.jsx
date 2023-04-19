import { useEffect, useState } from "react";
import "../../styles/components/Calendar.css";

const MONTH_NAMES = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const DATE_DIFFERENCES = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

const getDayName = (date = new Date(), locale = "fr-FR") => {
  return date.toLocaleDateString(locale, { weekday: "long" });
};

const Calendar = ({ state }) => {
  const [CurrentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [CurrentDisplay, setCurrentDisplay] = useState([]);
  useEffect(() => {
    const date = new Date();
    const nb_days = new Date(date.getFullYear(), CurrentMonth, 0).getDate();
    const result = [];
    for (
      let i = 0;
      i <
      DATE_DIFFERENCES.indexOf(
        getDayName(new Date(date.getFullYear(), CurrentMonth - 1, 1))
      );
      i++
    ) {
      result.push("");
    }
    for (let i = 0; i < nb_days; i++) {
      result.push(i + 1);
    }
    setCurrentDisplay(result);
  }, [CurrentMonth]);
  return (
    <section className={"calendar " + state}>
      <div className="calendar__dates">
        <div className="dates__month-control">
          <button
            onClick={() =>
              setCurrentMonth(
                CurrentMonth > new Date().getMonth() + 1
                  ? CurrentMonth - 1
                  : CurrentMonth
              )
            }
          >
            {"<"}
          </button>
          <h1>
            {MONTH_NAMES[CurrentMonth - 1] + " " + new Date().getFullYear()}
          </h1>
          <button
            onClick={() =>
              setCurrentMonth(
                CurrentMonth < 12 ? CurrentMonth + 1 : CurrentMonth
              )
            }
          >
            {">"}
          </button>
        </div>
        <ul className="dates__days">
          {DATE_DIFFERENCES.map((e, i) => (
            <li key={e + i} className="dates__days-name">
              {e.substring(0, 3).toUpperCase()}
            </li>
          ))}
          {CurrentDisplay.map((e, i) => (
            <li key={e + i} className="dates__days-number">
              {e}
            </li>
          ))}
          {}
        </ul>
      </div>
      <hr />
      <div className="calendar__hours">
        <h2>Choissiser une heure</h2>
        <ul>
          <li>10h00</li>
          <li>10h30</li>
          <li>11h</li>
          <li>14h</li>
          <li>14h45</li>
          <li>16h</li>
        </ul>
        <button>RESERVER</button>
      </div>
    </section>
  );
};

export default Calendar;
