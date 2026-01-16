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
  font-family: 'Honk', sans-serif;
  font-size: 80px;
  font-weight: 900;
  text-align: center;
  margin: auto;
  padding-bottom: 35px;


  letter-spacing: 0.15em;
  text-transform: uppercase;
}


body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', system-ui, sans-serif;
  background-color: #d9d9d9;
}



</style>
