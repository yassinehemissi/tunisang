import "../../styles/components/Search.css";
import LOCATIONS_DATA from "../../data/locations.json";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import Calendar from "./Calendar";

const Search = () => {
  const [Locations, setLocation] = useState(LOCATIONS_DATA);
  const [SearchInput, setSearchInput] = useState("");
  const [CurrentLocation, setCurrentLocation] = useState("");
  useEffect(() => {
    if (SearchInput == "") return setLocation(LOCATIONS_DATA);
    const options = {
      keys: ["hopital", "add2"],
    };

    const fuse = new Fuse(Locations, options);
    const result = fuse.search(SearchInput);
    let newLocations = [];
    for (let i = 0; i < result.length; i++) {
      newLocations.push(result[i].item);
    }
    setLocation(newLocations);
  }, [SearchInput]);
  return (
    <>
      <section className="city-search">
        <div className="city-search__filter">
          <h1>Réservez votre transfusion.</h1>
          <div className="city-search__filter-bar">
            <img src="/assets/book/loop.png" />
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              value={SearchInput}
              type="text"
              placeholder="Chercher un centre"
            ></input>
          </div>
          <div className="city-search__filter-button">
            <h2>Au moins un centre par Ville</h2>
          </div>
        </div>
        <ul className="city-search__cities">
          {Locations.map((e) => (
            <li
              onClick={() => {
                CurrentLocation == e.hopital
                  ? setCurrentLocation("")
                  : setCurrentLocation(e.hopital);
              }}
              className={CurrentLocation == e.hopital ? "city-active" : ""}
              key={e.hopital}
            >
              <h3>{e.hopital}</h3>
              <p>{e.add1}</p>
              <p>{e.add2}</p>
            </li>
          ))}
        </ul>
      </section>
      {<Calendar state={CurrentLocation != "" ? "calender_on" : "calender_off"}/>}
    </>
  );
};

export default Search;
