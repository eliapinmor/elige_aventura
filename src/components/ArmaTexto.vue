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
      return "Con la espada firmemente sujeta entre tus manos, sientes cómo el peso del acero te devuelve el control de la situación. No es solo un arma: es una extensión de tu voluntad. Cada paso que das está cargado de determinación, sabiendo que, pase lo que pase, estás preparado para luchar por sobrevivir.";
    case "catana":
      return "Empuñas la katana con respeto, consciente de que no es un arma cualquiera. Su hoja afilada refleja tu concentración y disciplina. Cada movimiento es preciso, cada decisión calculada. Sabes que no se trata solo de fuerza, sino de mantener la calma y elegir el momento exacto para atacar.";
    case "pistola":
      return "Sujetando la pistola con firmeza, confías en su simplicidad y eficacia. No hay tiempo para dudar: cada segundo cuenta y cada disparo puede marcar la diferencia. Mantienes la vista al frente, preparado para reaccionar rápido ante cualquier amenaza que se cruce en tu camino.";
    default:
      return "vacio";
  }
});
</script>
