import React from "react";
import "./nine.css";
import fill1 from  "../assets/vector6.jpeg";
import fill2 from  "../assets/vector5.jpeg";
export const Nine = () => {
  return (<div className="nine">
        <div className="nine-line"></div>
        <div className="nine-line-two"></div>
        <div className="nine-line-three"></div>
        <div className="nine-block">
            <img src={fill1} alt="img" className="nine-fill" />
        </div>
        <p className='tagr-one'>sal parasuco</p>
        <div className="nine-block-two">
            <img src={fill2} alt="img" className="nine-fill" />
        </div>
        <p className='tagr-two'>sal parasuco</p>
        <div className="new-org-nine"></div>
        <div className="new-nine">new</div>
        <div className="nine-des-think">
                Thinkers is an experimental e-learning platform that offers <br />
                a wide variety of creative masterclass by award-winning <br />
                digital thinkers on the Awwwwards community.
        </div>
        <div className="new-org-nine-two"></div>
        <div className="new-nine-two">new</div>
        <div className="nine-des-think-two">
                Thinkers is an experimental e-learning platform that offers <br />
                a wide variety of creative masterclass by award-winning <br />
                digital thinkers on the Awwwwards community.
        </div>
        <div className="cap-work">all work!</div>
        <div className="credit">
            Follow me Instagram <br />
            @chaniru.lk
        </div>
        <a href="https://www.instagram.com/chaniru.lk/" className="here">Click Here</a>
  </div>
  );
};
export default Nine;