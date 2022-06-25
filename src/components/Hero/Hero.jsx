import React from "react";

import HeroImage from "../../assets/images/hero.png";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={HeroImage}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-6 lh-1 mb-3 hero__header">
            The stock market for music
          </h1>
          <p className="lead hero__sub__header">Earn passive income from the music you love.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="custom__btn px-4 me-md-2"
            >
              Listen now
            </button>
            <button
              type="button"
              className="custom__btn  px-4"
            >
              View Marketplace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
