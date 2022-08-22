import React from "react";
import "./fifth.css";
import bih from "../assets/avat6.jpeg";
export const Fifth = () => {
  return (<div className="five">
    <div className="down-text">
        Like an artisan, I like to start form raw <br />
        matter and give life to an iconic <br />
        product that makes your brand stand <br />
        out, starting from a Visual Strategy <br />
        that guide that client's vision to reality.
    </div>
    <a href="https://www.instagram.com/chaniru.lk/" class="myButton">All work</a>
    <div className="big-block">
    <img src={bih} alt="bih" className="con-bi" />
    </div>
  </div>
  );
};
export default Fifth;
