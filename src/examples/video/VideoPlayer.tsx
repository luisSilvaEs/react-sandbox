import type { PlayerProps } from "../../types/video/video";
import { useRef, useState } from "react";

const VideoPlayer = ({ src }: PlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [labelPlayPause, setLabelPlayPause] = useState<string>("▶ Play");

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setLabelPlayPause("⏸ Pause");
    } else {
      videoRef.current.pause();
      setLabelPlayPause("▶ Play");
    }
  };

  return (
    <div className="video-player">
      <div className="video-player__container">
        <video ref={videoRef} width="640">
          <source src={src} />
          Your browser does not support the video tag
        </video>
      </div>
      <div className="video-player__controlls">
        <button onClick={handlePlayPause}>{labelPlayPause}</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
