<template>
  <div class="page story-text">
    <div class="texto">
      <ArmaTexto />
    </div>
    <div class="lugar">
      <LugarImagen />
    </div>
    <div class="boton-reproducir">
      <a @click="playMusic">⏸️</a>
    </div>
  </div>
</template>

<script setup>
import { useGameStartStore } from "@/stores/gameStart";
import { computed } from "vue";
import ArmaTexto from "../components/ArmaTexto.vue";
import LugarImagen from "@/components/LugarImagen.vue";
import { playMusica } from "@/assets/musicManager";
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
.page {
  padding: 350px;
  padding-top: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.story-text {
  max-width: 800px;
  margin: 0 auto 2.5rem;

  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);

  padding: 2rem;
  border-radius: 16px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);

  white-space: normal;
  word-break: break-word;
}

.lugar {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.boton-reproducir {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.boton-reproducir :hover {
  cursor: pointer;
}
</style>
