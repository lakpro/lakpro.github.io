import { useEffect } from "react";
import ReactGA from "react-ga4";

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize("G-SFCPEML3WH");
  }, []);
  return null;
};

export default Analytics;
