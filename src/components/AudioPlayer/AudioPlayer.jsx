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

import formatTime from "../../utils";

const AudioPlayer = () => {
  const [songProgress, setSongProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const [audioFile, setAudioFile] = useState(new Audio("audio/song.mp3"));
  const [mute, setMute] = useState(false);
  const [play, setPlay] = useState(false);
  const [totalDuration, setTotalDuration] = useState("0:00");

  const [songFormattedCurrentTime, setSongFormattedCurrentTime] =
    useState("0:00");

  const adjustSongProgress = (e) => {
    const ratio =
      e.nativeEvent.offsetX /
      document.getElementById("song__progress").offsetWidth;
    setSongProgress(parseInt(ratio * 100));

    if (audioFile?.currentTime) {
      audioFile.currentTime = (audioFile.duration * (ratio * 100)) / 100;
      console.log((audioFile.duration * (ratio * 100)) / 100);
    }
  };

  const adjustSongVolume = (e) => {
    const ratio =
      e.nativeEvent.offsetX /
      document.getElementById("song__volume").offsetWidth;
    setVolume(parseInt(ratio * 100));
  };

  useEffect(() => {
    if (audioFile?.duration) {
      setTotalDuration(formatTime(audioFile.duration));
    }
  }, [audioFile]);

  useEffect(() => {
    if (audioFile) {
      if (play) {
        setTotalDuration(formatTime(audioFile.duration));
        audioFile.play();
      } else {
        audioFile.pause();
      }
    }
  }, [play, audioFile]);

  useEffect(() => {
    if (audioFile) {
      audioFile.volume = volume / 100;
    }
  }, [volume, audioFile]);

  useEffect(() => {
    if (audioFile) {
      setSongProgress(0);

      audioFile.addEventListener("timeupdate", () => {
        setSongProgress((audioFile.currentTime / audioFile.duration) * 100);
        setSongFormattedCurrentTime(formatTime(audioFile.currentTime));
      });
    }
  }, [audioFile]);

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
              <div className="d-flex flex-row align-items-center justify-content-center">
                <div className="mx-3  d-flex align-items-center">
                  {songFormattedCurrentTime}
                </div>

                <div className="d-block w-100">
                  <ProgressBar
                    now={songProgress}
                    className="player__progress__bar"
                    id="song__progress"
                    onClick={adjustSongProgress}
                  />
                </div>

                <div className="mx-3  d-flex align-items-center">
                  {totalDuration}
                </div>
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
                      setMute(false);
                      setVolume(30);
                    }}
                  />
                ) : (
                  <FaVolumeUp
                    fontSize={16}
                    onClick={() => {
                      setMute(true);
                      setVolume(0);
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
