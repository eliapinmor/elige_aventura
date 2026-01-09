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
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 0.25em;
  text-transform: uppercase;

  text-align: center;
  margin: 2rem 0 3rem;

  background: linear-gradient(
    135deg,
    #e0aaff,
    #c77dff,
    #9d4edd
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow:
    0 0 12px rgba(199, 125, 255, 0.6),
    0 0 24px rgba(157, 78, 221, 0.4);

  animation: titleGlow 4s ease-in-out infinite;
}

/* Glow suave */
@keyframes titleGlow {
  0% {
    text-shadow:
      0 0 10px rgba(199, 125, 255, 0.5),
      0 0 20px rgba(157, 78, 221, 0.3);
  }
  50% {
    text-shadow:
      0 0 18px rgba(199, 125, 255, 0.8),
      0 0 32px rgba(157, 78, 221, 0.6);
  }
  100% {
    text-shadow:
      0 0 10px rgba(199, 125, 255, 0.5),
      0 0 20px rgba(157, 78, 221, 0.3);
  }}

</style>
