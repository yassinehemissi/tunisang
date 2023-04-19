import { useState } from "react";

const Carousel = () => {
  const [Current, setCurrent] = useState(0);
  const [Changer, setChanger] = useState(1);
  return (
    <section
      onClick={() => {
        if (Current == 2 && Changer == 1) {
          setChanger(-1);
          setCurrent(Current - 1);
        } else if (Current == 0 && Changer == -1) {
          setCurrent(Current + 1);
          setChanger(1);
        } else {
          setCurrent(Current + Changer);
        }
      }}
      className="signup-container__right"
    >
      <img
        className={Current == 2 ? "visible" + Changer : "invisible" + Changer}
        src="/assets/signup/carouselle1.png"
      />
      <img
        className={Current == 1 ? "visible" + Changer : "invisible" + Changer}
        src="/assets/signup/carouselle2.png"
      />
      <img
        className={Current == 0 ? "visible" + Changer : "invisible" + Changer}
        src="/assets/signup/carouselle3.png"
      />
    </section>
  );
};

export default Carousel;
