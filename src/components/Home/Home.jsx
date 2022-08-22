import React from "react";
import logo from "../assets/logoheader.png";
import vector2 from "../assets/vector1.jpeg";
import vector1 from "../assets/vector6.jpeg";
import vector3 from "../assets/vector3.jpeg";
import "./home.css";
const Home = () => {
  return (<div className="home">
    <div className="nav">
    <img src={logo} alt="logo" className="logo" />
    </div>
    <div className="hamburger">
     <div className="top-bun"></div>
     <div className="meat"></div>
    </div>
          <div className='location'>Sri - Lanka, Maharagama</div>
          <div className="line"></div>
            <div className='pic-block'>
              <img src={vector3} alt='ecom' className='image-og'></img>
            </div>
            <p className='tagger-one'>sal parasuco</p>
            <p className='tagger-des'>
              Sal Parasuco is a digital eCommerce experience providing <br></br>
              luxury outwear garments for the modern entitiy.
            </p>
            <div className='pic-block-two'>
            <img src={vector2} alt='ecom'  className='image-og'></img>
            </div>
            <p className='tagger-two'>books of eye</p>
            <p className='tagger-des-two'>
              Sal Parasuco is a digital eCommerce experience providing <br></br>
              luxury outwear garments for the modern entitiy.
            </p>
            <div className='pic-block-three'>
            <img src={vector1} alt='ecom'  className='image-og'></img>
            </div>
            <p className='tagger-three'>omswami</p>
            <p className='tagger-des-three'>
              Sal Parasuco is a digital eCommerce experience providing <br></br>
              luxury outwear garments for the modern entitiy.
            </p>
          <div className='name-block'></div>
          <div className='name'>miranda</div>
  </div>
  );
};

export default Home;
