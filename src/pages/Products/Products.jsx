import React from "react";
import { InfoSection } from "../../components";
import { homeObjFive, homeObjFour, homeObjThree, homeObjTwo } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
    </>
  );
};

export default Home;
