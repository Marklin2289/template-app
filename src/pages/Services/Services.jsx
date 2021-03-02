import React from "react";
import { InfoSection } from "../../components";
import { homeObjFive, homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
    </>
  );
};

export default Home;
