<template>
    <div class="start-card">
        <h2>AQUÍ EMPIEZA TU AVENTURA...</h2>
        <p>se trata de un juego donde tu imaginación es el límite. Prepárate para sumergirte en un mundo lleno de desafíos y sorpresas.</p>
        <p style="font-weight: 700;">¿Qué deberás hacer?</p>
        <ul>
            <li>Lee la historia que se te presenta</li>
            <li>Encontrarás huecos en los textos que debes completar</li>
            <li>Arrastra las opciones disponibles a los huecos correspondientes</li>
            <li>Una vez completes todos los huecos, pulsa CONTINUAR</li>
            <li>Tus elecciones afectarán al resultado final</li>
        </ul>
        <!-- <button class="btn-continue" @click="gameStartStore.startGame">START</button> -->
        <div class="center"> 
            <ButtonContinue buttonText="COMENZAR" @click="gameStartStore.startGame" />
        </div>
    </div>
</template>
<script setup>
import { useGameStartStore } from '@/stores/gameStart';
import ButtonContinue from './ButtonContinue.vue';
const gameStartStore = useGameStartStore();

</script>
<style scoped>
.start-card {
  max-width: 720px;
  margin: 0 auto 3rem;
  padding: 2.5rem 3rem;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.35),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.start-card h2 {
  text-align: center;
  margin-bottom: 1.5rem;

  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 0.12em;

  color: #f5d0fe;
}

.start-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: #f1f5f9;
  margin-bottom: 1rem;
}

.start-card ul {
  margin: 1.5rem 0 2rem;
  padding-left: 1.2rem;
}

.start-card li {
  margin-bottom: 0.6rem;
  line-height: 1.5;
  color: #e5e7eb;
}

.center {
    display: flex;
    justify-content: center;
}


</style>