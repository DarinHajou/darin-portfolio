import { useRef, useState } from "react";
import styles from "./ProjectMedia.module.css";

type ProjectMediaProps = {
  title: string;
  index: string;
  imageSrc?: string;
  videoSrc?: string;
  posterSrc?: string;
  alt?: string;
  className?: string;
};

function ProjectMedia({
  title,
  index,
  imageSrc,
  videoSrc,
  posterSrc,
  alt = "",
  className = "",
}: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = async () => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current.playbackRate = 1.3;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const pauseVideo = () => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const toggleVideo = async () => {
    if (isPlaying) {
      pauseVideo();
      return;
    }

    await playVideo();
  };

  return (
    <article className={`${styles.media} ${className}`}>
      <header className={styles.header}>
        <span>{title}</span>
        <span>{index}</span>
      </header>

      <div
        className={styles.viewport}
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
      >
        {videoSrc ? (
          <>
            <video
              ref={videoRef}
              className={styles.asset}
              src={videoSrc}
              poster={posterSrc}
              muted
              loop
              playsInline
              preload="metadata"
            />

            <button
              className={styles.playButton}
              type="button"
              aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
              onClick={toggleVideo}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </>
        ) : imageSrc ? (
          <img className={styles.asset} src={imageSrc} alt={alt} />
        ) : (
          <div className={styles.placeholder}>
            <p>Project media will go here.</p>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectMedia;