import React from "react";
import "./third.css";
import side from "../assets/avat1.jpeg";
export const Third = () => {
  return (<div className="third">
    <div className="pic-side-boc">
        <img src={side} alt="side" className="boc-fill" />
    </div>
    <div className="third-line"></div>
    <div className="third-line-two"></div>
    <div className="third-line-three"></div>
    <div className="third-line-four"></div>
    <p className="text-one">digital art director</p>
    <p className="text-two">interactive designer</p>
    <p className="text-three">creative developer</p>
    <p className="text-four">based in <u>Sri - Lanka</u></p>
    <div className="block-a"><p className="block-a-let">a</p></div>
    <p className="text-ablaz">
        s a multidisciplinary freelance, <br />
        I'm passionate about creating <br />
        iconic digital experiences <br />
    </p>
    <p className="ablaz-two">through motion, typography and <br />
        creative coding for companies and <br />
        agencies around the world.</p>
  </div>
  );
};
export default Third;
