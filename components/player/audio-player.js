import React, {useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import { ForwardIcon, BackwardIcon, PlayIcon, PauseIcon, ArrowUturnRightIcon, ArrowUturnLeftIcon } from '@heroicons/react/20/solid'

export default function AudioPlayer (props) {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalAudioTime, setTotalAudioTime] = useState(0);
  const [isFirstPlay, setIsFirstPlay] = useState(true); 
  const [isIntersecting, setIsIntersecting] = useState(false);

  // reference
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation
  const playerContainer = useRef();

  // Function to handle intersection changes
  const handleIntersection = (entries) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    // Create the Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      threshold: 1, // 50% intersection required
    });

    // Observe the player container
    if (playerContainer.current && !props.notpinned) {
      observer.observe(playerContainer.current);
    }

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);
  
  // Function to add or remove a class based on intersection status
  const handleIntersectionClass = () => {
    if (isIntersecting) {
      // Add your class name here to add it when the component is intersecting
      playerContainer.current.classList.remove('pinned');
    } else {
      // Remove your class name here to remove it when the component is not intersecting
      playerContainer.current.classList.add('pinned');
    }
  };

  // Call the function whenever the intersection status changes
  useEffect(() => {
    handleIntersectionClass();
  }, [isIntersecting]);  

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
    <div notpinned={props.notpinned} ref={playerContainer} className={`${props.className} flex flex-col z-[1] rounded-t-lg overflow-hidden`}>
      <div className={`${props.fringe ? "rounded-b-lg" : null} text-white items-center justify-between isolate bg-gray-900 gap-2 flex flex-col p-4 shadow-2xl`}>
        <div className="flex flex-col gap-2 sm:flex-row items-center justify-center sm:justify-between w-full">
        <audio ref={audioPlayer} onLoadedMetadata={onLoadedMetaData} src={props.trackSource} title={props.mappedSongTitle} project={props.mappedSongProject} image={props.mappedSongImage} active={props.active} preload="metadata" ></audio>
        <div className="flex items-center text-xs w-full">
          {props.image ? 
          <div className="hidden sm:flex w-16 relative mr-2 border rounded-md border-black">
            <Image url={props.url} title={props.title}       
              src={props.image}
              alt={props.image}
              width={64}
              height={64}
              className="rounded-md"
            />
          </div> : null}
          <div className="flex flex-1 sm:flex-col justify-center items-start">
            <div>{props.trackName}</div>
            <div className="hidden sm:block opacity-50 text-left">{props.project}</div>
          </div>
        </div>
        <div className="flex items-center">
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

        </div>
      </div>
          <div className="flex items-center justify-center gap-4 w-full text-xs text-indigo-600">

            {/* current time */}
            <div className="w-7 flex justify-center">{calculateTime(currentTime)}</div>

            {/* progress bar */}
            <div className="flex items-center w-full">
              <input className="w-full" type="range" defaultValue="0" ref={progressBar} onChange={changeRange} />
            </div>

            {/* duration */}
            <div className="w-7 flex justify-center">{(duration && !isNaN(duration)) ? calculateTime(duration) : '0:00'}</div>
          </div>
          </div>
    </div>
  )
}