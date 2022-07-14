import "./Songs.css";

import Lists from "../Lists/Lists";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

const Songs = () => {
  return (
    <div className="songs__page__container">
      <div className="custom__margin__top">
        <Lists title="Most Streamed Songs" />
        <Lists title="New Releases" />
        <div className="p-4 m-5"></div>
      </div>
      <AudioPlayer />
    </div>
  );
};

export default Songs;
