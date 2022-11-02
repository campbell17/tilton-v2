import { Howl } from 'howler';

export default function Audio(props) {
  const track = new Howl({
    src: props.tracksource,
    volume: 0.5,
    html5: true,
    preload: 'metadata',
  });
  
  return(
    <div tracksource={props.tracksource} title={props.title}>
      <div onClick={() => track.play()}>{props.title}</div>
      <div onClick={() => track.pause()}>click me to pause</div>
    </div>
  )
}