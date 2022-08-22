import React from "react";
import "./seven.css";
import sev from "../assets/avat5.jpeg";
import fillblk from "../assets/avat2.jpeg";
import thr from "../assets/avat3.jpeg";
export const Seven = () => {
  return (<div className="seven">
    <div className="sev-lov">
        <img src={sev} alt="pice" className="sev-pic" />
    </div>
    <div className="the">the</div>
    <div className="pixel">pixel</div>
    <div className="blocker">
        <img src={fillblk} alt="pice" className="blocker-fill" />
    </div>
    <div className="throp">
        <img src={thr} alt="thropy" className="thr" />
    </div>
    <div className="perfect">perfect</div>
  </div>
  );
};
export default Seven;