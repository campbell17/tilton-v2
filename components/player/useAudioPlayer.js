import { useState, useEffect, useRef } from 'react';

const useAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalAudioTime, setTotalAudioTime] = useState(0);
  const [isFirstPlay, setIsFirstPlay] = useState(true); 
  const [isIntersecting, setIsIntersecting] = useState(false);

  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation
  const playerContainer = useRef();

  useEffect(() => {
    const onLoadedMetaData = () =>
      setTotalAudioTime(audioPlayer.current?.duration);

    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;

    const calculateTime = (secs) => {
      const minutes = Math.floor(secs / 60);
      const returnedMinutes = `${minutes}`;
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
      setIsFirstPlay(false);
      const prevValue = isPlaying;
      setIsPlaying(!prevValue);

      if (!prevValue) {
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
        audioPlayer.current.pause();
        cancelAnimationFrame(animationRef.current);
      }
    }

    const whilePlaying = () => {
      if (audioPlayer.current) {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
      }
    }

    const changeRange = () => {
      audioPlayer.current.currentTime = progressBar.current.value;
      changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
      progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
      setCurrentTime(progressBar.current.value);
    }
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  return {
    isPlaying,
    setIsPlaying,
    duration,
    currentTime,
    totalAudioTime,
    isFirstPlay,
    isIntersecting,
    audioPlayer,
    progressBar,
    animationRef,
    playerContainer,
    onLoadedMetaData,
    calculateTime,
    togglePlayPause,
    whilePlaying,
    changeRange,
    changePlayerCurrentTime,
  };
}

export default useAudioPlayer;
