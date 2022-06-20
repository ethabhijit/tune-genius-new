import React from "react";
import Heading from "../../assets/images/trending-songs.png";

const TrendingSongs = () => {
  const arr = [1, 2, 3, 4, 5]
  return (
    <div className="container mt-4">
      <div>
        <img src={Heading} alt="Trending Songs" />
      </div>
      <div className="d-flex align-items-center justify-content-between mt-4">
        {arr.map(num => (
          <img src={`./images/song${num}.png`} alt="" />
        ))}
      </div>
    </div>
  );
};

export default TrendingSongs;
