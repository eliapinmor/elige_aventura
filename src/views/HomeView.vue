<template>
    <StartCard />
</template>
<script setup>
import StartCard from '@/components/StartCard.vue';
import { useGameStartStore } from '@/stores/gameStart';
const gameStartStore = useGameStartStore();
console.log("estoy en /:", gameStartStore.gameStartedStatus);

</script>
<style scoped></style>
