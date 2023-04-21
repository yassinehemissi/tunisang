import { useEffect, useState } from "react";

const Carousel = () => {
  const [Current, setCurrent] = useState(0);
  const [Changer, setChanger] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      if (Current == 2) {
        setCurrent(0);
      } else {
        setCurrent(Current + 1);
      }
    }, 2000);
  }, [Current]);
  return (
    <section className="signup-container__right">
      <img
        style={{ zIndex: 1 }}
        className={Current == 2 ? "visible" : "invisible"}
        src="/assets/signup/carouselle1.png"
      />
      <img
        style={{ zIndex: 1 }}
        className={Current == 1 ? "visible" : "invisible"}
        src="/assets/signup/carouselle2.png"
      />
      <img
        style={{ zIndex: 1 }}
        className={Current == 0 ? "visible" : "invisible"}
        src="/assets/signup/carouselle3.png"
      />
    </section>
  );
};

export default Carousel;
