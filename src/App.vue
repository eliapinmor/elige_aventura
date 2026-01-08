<template>
  <h1>ELIGE TU PROPIA AVENTURA</h1>
  <div v-if="gameStartStore.gameStartedStatus === 'no'">
    <StartCard />
  </div>
  <div v-else-if="gameStartStore.gameStartedStatus === 'progress'">
    <p>The game has started! Enjoy your adventure!</p>
    <GameView />
  </div>
  <div v-else-if="gameStartStore.gameStartedStatus === 'finished'">
    <ResultView />
  </div>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>
<script setup>
import StartCard from '@/components/StartCard.vue';
import { useGameStartStore } from '@/stores/gameStart';
import GameView from './views/GameView.vue';
import ResultView from './views/ResultView.vue';
const gameStartStore = useGameStartStore();
</script>
<style scoped></style>
