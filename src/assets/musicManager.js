import { Howl } from 'howler';
const songVolume = 0.5;
let howler;


export function playMusica(emocionAudio) {
howler = new Howl({
    src: [emocionAudio],
    volume: songVolume,
    onload: () => {
      console.log("Audio cargado, intentando reproducir:", emocionAudio);
      howler.play();
    },
    onloaderror: (id, error) => {
      console.error('Error al cargar el audio:', error, 'para:', emocionAudio);
    },
    onplayerror: (id, error) => {
      console.error('Error al reproducir el audio:', error, 'para:', emocionAudio);
    },
    onplay: () => {
      console.log("Audio reproduciéndose:", emocionAudio);
    }
  });}

export function stopMusica() {
  if (howler) {
    howler.stop();
  }
}