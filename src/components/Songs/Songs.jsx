import "./Songs.css";

import Lists from "../Lists/Lists";

const Songs = () => {
  return (
    <div className="songs__page__container">
      <div className="custom__margin__top">
        <Lists title="Most Streamed Songs" />
        <Lists title="New Releases" />
      </div>
    </div>
  );
};

export default Songs;
