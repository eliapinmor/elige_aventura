<!-- <template>
    <audio :src="emocionAudio" autoplay></audio>
</template>
<script setup>
import { useGameStartStore } from '@/stores/gameStart';
import { computed } from 'vue';
import { playMusica } from '@/assets/musicManager';
const gameStartStore = useGameStartStore();

const emocionAudio = computed(() => {
  switch (gameStartStore.emocion) {
    case "miedo":
    playMusica("audio/miedo.mp3");
        return "audio/miedo.mp3";
    case "curiosidad":
      playMusica("audio/curiosidad.mp3");
      return "audio/curiosidad.mp3";
    case "emoción":
        playMusica("audio/emocion.mp3");
      return "audio/emocion.mp3";
    default:
      return "vacio";
  }
});
</script> -->