import React from "react";
import "./fourth.css";
import stamp from "../assets/stamp.png";
import yellow from "../assets/vector2.jpeg";
export const Fourth = () => {
  return (<div className="fourth">
    <div className="four-bloc"></div>
    <p className="web">webiste</p>
    <img src={stamp} alt="stamp" className="stamp"/>
    <div className="four-line"></div>
    <div className="latest">Latest work!</div>
    <div className="des-lat">
      Fresh entry - A selected <br />
      work from the latest <br />
      digital releases.
    </div>
    <div className="tip">tip!</div>
    <div className="tp-des">Click the image to explore</div>
    <div className="four-line-two"></div>
    <div className="yell-blocl">
      <img src={yellow} alt="yellow" className="yell-fill" />
    </div>
    <div className="think">thinkers</div>
    <div className="new-org"></div>
    <div className="new">new</div>
    <div className="new-des-think">
      Thinkers is an experimental e-learning platform that offers <br />
      a wide variety of creative masterclass by award-winning <br />
      digital thinkers on the Awwwwards community.
    </div>
    <div className="four-lin"></div>
    <div className="four-lin-del"></div>
    <div className="text-head-one">think, create</div>
    <div className="delivery">deliver</div>
    <div className="block-a-four"><p className="block-a-let-four">a</p></div>
    <p className="go-des">
      strong project is created by <br />
      deep collaboration. I design, <br />
      develop and deliver webistes
    </p>
    <p className="go-des-two">
      that drive results and win awards.
    </p>
  </div>
  );
};
export default Fourth;