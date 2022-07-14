import { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import {
  FaVolumeUp,
  FaStepBackward,
  FaStepForward,
  FaPlayCircle,
  FaVolumeMute,
  FaPauseCircle,
} from "react-icons/fa";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  const [songProgress, setSongProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const [mute, setMute] = useState(false);
  const [play, setPlay] = useState(false);

  const adjustSongProgress = (e) => {
    const ratio =
      e.nativeEvent.offsetX /
      document.getElementById("song__progress").offsetWidth;
    setSongProgress(parseInt(ratio * 100));
  };

  const adjustSongVolume = (e) => {
    const ratio =
      e.nativeEvent.offsetX /
      document.getElementById("song__volume").offsetWidth;
    setVolume(parseInt(ratio * 100));
  };

  return (
    <>
      <div className="player__container">
        <div className="row">
          <div className="col-sm-0 col-md-3 d-none d-md-block">
            <img
              src="https://i.ibb.co/gRh1hCV/image-edited.png"
              alt="Song Cover"
              className="player__song__cover"
            />
          </div>

          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center ">
            <div className=" flex-grow-1">
              <div className="mb-4">
                <FaStepBackward
                  fontSize={16}
                  className="player__control__backward"
                />
                {play ? (
                  <FaPauseCircle fontSize={35} onClick={() => setPlay(!play)} />
                ) : (
                  <FaPlayCircle fontSize={35} onClick={() => setPlay(!play)} />
                )}

                <FaStepForward
                  fontSize={16}
                  className="player__control__forward"
                />
              </div>
              <div>
                <ProgressBar
                  now={songProgress}
                  className="player__progress__bar"
                  id="song__progress"
                  onClick={adjustSongProgress}
                />
              </div>
            </div>
          </div>

          <div className="col-md-3 d-none d-md-flex justify-content-end ">
            <div className="w-50 h-100 d-flex flex-row align-items-center justify-content-center">
              <div className="mx-3  d-flex align-items-center">
                {mute ? (
                  <FaVolumeMute
                    fontSize={16}
                    onClick={() => {
                      setMute(!mute);
                      setVolume(0);
                    }}
                  />
                ) : (
                  <FaVolumeUp
                    fontSize={16}
                    onClick={() => {
                      setMute(!mute);
                      setVolume(50);
                    }}
                  />
                )}
              </div>
              <div className="d-block w-100">
                <ProgressBar
                  now={volume}
                  className="player__progress__bar"
                  id="song__volume"
                  onClick={adjustSongVolume}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
