<template>
  <h1 class="main-title">ELIGE TU PROPIA AVENTURA</h1>
  <div v-if="gameStartStore.gameStartedStatus === 'no'">
    <StartCard />
  </div>
  <div v-else-if="gameStartStore.gameStartedStatus === 'progress'">
    <GameView />
  </div>
  <div v-else-if="gameStartStore.gameStartedStatus === 'finished'">
    <ResultView />
  </div>
</template>
<script setup>
import StartCard from '@/components/StartCard.vue';
import { useGameStartStore } from '@/stores/gameStart';
import GameView from './views/GameView.vue';
import ResultView from './views/ResultView.vue';
const gameStartStore = useGameStartStore();
</script>
<style scoped>
.main-title {
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-size: clamp(2.8rem, 5vw, 4.2rem);
  font-weight: 800;
  text-align: center;
  margin: 2rem 0 3rem;

  /* Color lila elegante */
  color: #a855f7;

  /* Glow suave */
  text-shadow:
    0 2px 10px rgba(168, 85, 247, 0.35),
    0 0 30px rgba(168, 85, 247, 0.25);

  /* Espaciado */
  letter-spacing: 0.12em;
  text-transform: uppercase;

}


</style>
