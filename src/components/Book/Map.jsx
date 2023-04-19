import { useEffect, useRef } from "react";
import "../../styles/components/Map.css";

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://my.atlistmaps.com/map/85b72d53-5d8f-499f-aa85-519712dae675?share=true"
        allow="geolocation 'self' https://my.atlistmaps.com"
        frameBorder="0"
        scrolling="no"
        height="100%"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
