"use client";
import style from "./index.module.scss";
import React, { useState, useEffect } from "react";

function AudioPlayer({ audioSrc, personPhoto }: any) {
  const [audio, setAudio] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAudio(new Audio(audioSrc));
    }
  }, [audioSrc]);

  useEffect(() => {
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [audio]);

  const togglePlayPause = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (timeInSeconds: any) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progress = (currentTime / duration) * 100 || 0;

  return (
    <div className={style.audioPlayer}>
      <div className={style.button} onClick={togglePlayPause}>
        {isPlaying ? (
          <img src={"/svg/play.svg"} alt="" />
        ) : (
          <img src={"/svg/play.svg"} alt="" />
        )}
      </div>
      <div className={style.playControls}>
        <div className={style.timeline}>
          <div
            className={style.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className={style.timer}>{formatTime(duration - currentTime)}</div>
      </div>
      <div className={style.personPhoto}>
        <img src={personPhoto} alt="Person Photo" />
        <img className={style.mic} src="/svg/mic.svg" alt="" />
      </div>
    </div>
  );
}

export default AudioPlayer;
