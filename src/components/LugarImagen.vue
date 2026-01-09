<template>
    <img :src="lugarImagen" alt="Lugar seleccionado" class="imgLugar"/>
</template>
<script setup>
import { computed } from "vue";
import { useGameStartStore } from "@/stores/gameStart";

const gameStartStore = useGameStartStore();

const lugarImagen = computed(() => {
  switch (gameStartStore.lugar) {
    case "bosque":
      return "img/bosque.jpg";
    case "ciudad":
      return "img/ciudad.jpg";
    case "cielo":
      return "img/cielo.jpg";
    default:
      return "vacio";
  }
});
</script>
<style scoped>
.imgLugar {
  width: 400px;
  height: auto;
  margin-top: 20px;
  border-radius: 10px;
}
</style>