import { Howl } from 'howler';

export default function Audio(props) {
  const track1 = new Howl({
    src: props.tracksource,
    loop: true,
    volume: 0.5,
  });
  
  return(
    <div tracksource={props.tracksource} title={props.title}>
      <div onClick={() => track1.play()}>{props.title}</div>
      <div onClick={() => track1.pause()}>click me to pause</div>
    </div>
  )
}