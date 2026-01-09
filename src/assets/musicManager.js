import { Howl } from 'howler';
const songVolume = 0.5;
let howler;


export function playMusica(emocionAudio) {
howler = new Howl({
    src: [emocionAudio],
    volume: songVolume,
    onload: () => {
    
      howler.play();

      console.log("Audio cargado y reproduciéndose");
    },
  });}