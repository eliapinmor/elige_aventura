<template>
  <p>{{ armaTexto }}</p>
</template>
<script setup>
import { useGameStartStore } from "@/stores/gameStart";
import { computed } from "vue";
const gameStartStore = useGameStartStore();

const armaTexto = computed(() => {
  switch (gameStartStore.arma) {
    case "espada":
      return "Con la espada en mano, te adentras en el bosque oscuro, sintiendo el peso de la aventura en cada paso.";
    case "catana":
      return "Empuñando la catana, caminas por las bulliciosas calles de la ciudad, listo para enfrentar cualquier desafío.";
    case "pistola":
      return "Con la pistola asegurada, vuelas alto en el cielo, observando el mundo desde una perspectiva única.";
    default:
      return "vacio";
  }
});
</script>
