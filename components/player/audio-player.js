import React, {useState, useRef, useEffect} from 'react';
import { ForwardIcon, BackwardIcon, PlayIcon, PauseIcon, ArrowUturnRightIcon, ArrowUturnLeftIcon } from '@heroicons/react/20/solid'

const AudioPlayer = (props) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // reference
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);    
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }
  
  const togglePlayPause = () => {
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
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
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

  return (
    <div className="flex flex-col">
      <div className="text-white items-center justify-between isolate overflow-hidden bg-gray-900 gap-4 flex flex-col p-4 m-1 rounded-md shadow-2xl lg:flex lg:flex-row lg:gap-x-20">
        <audio ref={audioPlayer} src={props.trackSource} preload="metadata"></audio>
        <div className="lg:text-left lg:w-96 text-center w-full ">{props.trackName}</div>
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

        <div className="flex items-center justify-center gap-4">

          {/* current time */}
          <div className="w-12 flex justify-center">{calculateTime(currentTime)}</div>

          {/* progress bar */}
          <div className="flex items-center">
            <input className="w-60" type="range" defaultValue="0" ref={progressBar} onChange={changeRange} />
          </div>

          {/* duration */}
          <div className="w-12 flex justify-center">{(duration && !isNaN(duration)) ? calculateTime(duration) : '00:00'}</div>
        </div>
      </div>
    </div>
  )
}

export { AudioPlayer } 