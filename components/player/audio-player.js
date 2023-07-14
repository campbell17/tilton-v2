import React, {useState, useRef, useEffect} from 'react';
import { ForwardIcon, BackwardIcon, PlayIcon, PauseIcon, ArrowUturnRightIcon, ArrowUturnLeftIcon } from '@heroicons/react/20/solid'

export default function AudioPlayer (props) {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalAudioTime, setTotalAudioTime] = useState(0);
  const [isFirstPlay, setIsFirstPlay] = useState(true); 

  // reference
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  const onLoadedMetaData = () =>
    setTotalAudioTime(audioPlayer.current?.duration);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  useEffect(() => {
    // Automatically play the audio when trackSource changes and it's not the first play
    if (!isFirstPlay && props.trackSource) {
      audioPlayer.current.src = props.trackSource;
      audioPlayer.current.load();
      audioPlayer.current.play();
      setIsPlaying(true);
    }
  }, [isFirstPlay, props.trackSource]);

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

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) - 10;
    changeRange();
  }  

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 10;
    changeRange();
  }    
  const changeTrack = (newSrc) => {
    if (audioPlayer.current) {
      audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0;
    }
    audioPlayer.current.src = newSrc;
    audioPlayer.current.load();
    audioPlayer.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col">
      <div className="text-white items-center justify-between isolate overflow-hidden bg-gray-900 gap-4 flex flex-col p-4 rounded-b-lg shadow-2xl">
        <audio ref={audioPlayer} onLoadedMetadata={onLoadedMetaData} src={props.trackSource} title={props.mappedSongTitle} active={props.active} preload="metadata" ></audio>
        <div className="text-center text-xs w-full">{props.trackName}</div>
        <div className="flex items-center w-full justify-around">
          <div className="flex items-center justify-center gap-2">
            <span className="text-indigo-600 text-xs">10s</span>
            <button
              type="button"
              className="rounded-full border border-indigo-600 p-2 text-white text-xs flex items-center gap-1 shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={backThirty}
            >
              <ArrowUturnLeftIcon className="h-3 w-3" aria-hidden="true" />
            </button>
            <button
              onClick={togglePlayPause}
              type="button"
              className="rounded-full bg-indigo-600 p-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isPlaying ? <PauseIcon className="h-5 w-5" aria-hidden="true" /> : <PlayIcon className="h-5 w-5" aria-hidden="true" />}
            </button>
            <button
              type="button"
              className="rounded-full border border-indigo-600 p-2 text-white text-xs flex items-center gap-1 shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={forwardThirty}
            >
              <ArrowUturnRightIcon className="h-3 w-3" aria-hidden="true" />
            </button>
            <span className="text-indigo-600 text-xs">10s</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-indigo-600">

            {/* current time */}
            <div className="w-7 flex justify-center">{calculateTime(currentTime)}</div>

            {/* progress bar */}
            <div className="flex items-center">
              <input className="w-60" type="range" defaultValue="0" ref={progressBar} onChange={changeRange} />
            </div>

            {/* duration */}
            <div className="w-7 flex justify-center">{(duration && !isNaN(duration)) ? calculateTime(duration) : '0:00'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}