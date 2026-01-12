<template>
    <div class="start-card">
        <h2>Start Your Adventure</h2>
        <ul>
            <li>Choose your path</li>
            <li>Face exciting challenges</li>
            <li>Make impactful decisions</li>
            <li>Discover hidden treasures</li>
        </ul>
        <!-- <button class="btn-continue" @click="gameStartStore.startGame">START</button> -->
         <ButtonContinue buttonText="COMENZAR" @click="gameStartStore.startGame" />
    </div>
</template>
<script setup>
import { useGameStartStore } from '@/stores/gameStart';
import ButtonContinue from './ButtonContinue.vue';
const gameStartStore = useGameStartStore();

</script>
<style scoped>
.start-card {
  border: 2px solid #333;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  background-color: #f9f9f9;
}


</style>