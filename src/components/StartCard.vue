<template>
    <div class="start-card">
        <h2>Start Your Adventure</h2>
        <ul>
            <li>Choose your path</li>
            <li>Face exciting challenges</li>
            <li>Make impactful decisions</li>
            <li>Discover hidden treasures</li>
        </ul>
        <button class="btn-continue" @click="gameStartStore.startGame">START</button>
    </div>
</template>
<script setup>
import { useGameStartStore } from '@/stores/gameStart';
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

.btn-continue {
  margin-top: 2.5rem;
  padding: 1rem 3.2rem;

  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  color: white;
  background: linear-gradient(
    135deg,
    #c77dff,
    #9d4edd
  );

  border: none;
  border-radius: 50px;
  cursor: pointer;

  box-shadow:
    0 8px 20px rgba(157, 78, 221, 0.45),
    inset 0 -3px 0 rgba(0, 0, 0, 0.25);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease;
}

/* Hover */
.btn-continue:hover {
  transform: translateY(-2px);
  box-shadow:
    0 12px 28px rgba(157, 78, 221, 0.6),
    inset 0 -3px 0 rgba(0, 0, 0, 0.3);
  filter: brightness(1.08);
}

/* Click */
.btn-continue:active {
  transform: translateY(1px);
  box-shadow:
    0 5px 14px rgba(157, 78, 221, 0.5),
    inset 0 3px 0 rgba(0, 0, 0, 0.35);
}

/* Deshabilitado */
.btn-continue:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  box-shadow: none;
  filter: grayscale(0.6);
}

</style>