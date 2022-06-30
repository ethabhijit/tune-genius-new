import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="container col-xxl-8 px-4 py-5 ">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="mx-auto">
          <h1 className="display-6 lh-1 mb-3 hero__header text-center">
            The stock market for music
          </h1>
          <p className="lead hero__sub__header text-center">Earn passive income from the music you love.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
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
    </div>
  );
};

export default Hero;
