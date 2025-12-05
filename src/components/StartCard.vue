<template>
    <div>
        <h2>Start Your Adventure</h2>
        <ul>
            <li>Choose your path</li>
            <li>Face exciting challenges</li>
            <li>Make impactful decisions</li>
            <li>Discover hidden treasures</li>
        </ul>
        <button @click="gameStartStore.startGame">Begin</button>
    </div>
</template>
<script setup>
import { useGameStartStore } from '@/stores/gameStart';
const gameStartStore = useGameStartStore();

</script>
<style scoped>
</style>