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
<style>
.main-title {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.8rem, 5vw, 4.2rem);
  font-weight: 900;
  text-align: center;
  margin: 2.5rem 0 3rem;

  color: #e9d5ff;

  letter-spacing: 0.15em;
  text-transform: uppercase;

  text-shadow:
    0 2px 12px rgba(168, 85, 247, 0.5),
    0 0 35px rgba(168, 85, 247, 0.35);
}


body {
  margin: 0;
  min-height: 100vh;

  font-family: 'Inter', system-ui, sans-serif;

  background: radial-gradient(
      circle at top,
      #c084fc 0%,
      #7c3aed 35%,
      #4c1d95 70%,
      #1e1b4b 100%
  );

  color: #f8fafc;
}



</style>
