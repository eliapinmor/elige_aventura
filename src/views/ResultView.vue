<template>
    <ArmaTexto />
    <LugarImagen />
    <button @click="playMusic">Reproducir Música</button>

</template>

<script setup>
import { useGameStartStore } from '@/stores/gameStart';
import { computed } from 'vue';
import ArmaTexto from '../components/ArmaTexto.vue';
import LugarImagen from '@/components/LugarImagen.vue';
import { playMusica } from '@/assets/musicManager';
const gameStartStore = useGameStartStore();

const emocionAudioRuta = computed(() => {
  switch (gameStartStore.emocion) {
    case "miedo":
      return "/audio/miedo.mp3";
    case "curiosidad":
      return "/audio/curiosidad.mp3";
    case "emoción":
      return "/audio/emocion.mp3";
    default:
      return "vacio";
  }
});

const playMusic = () => {
  playMusica(emocionAudioRuta.value);
};

//llamar a js de musica
//howler


</script>
<style scoped>
.imgLugar {
  width: 400px;
  height: auto;
  margin-top: 20px;
  border-radius: 10px;
}
</style>