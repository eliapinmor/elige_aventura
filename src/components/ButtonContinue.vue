<template>
  <button class="btn-continue" @click="$emit('click')">{{ buttonText }}</button>
</template>
<script setup>
defineProps({
  buttonText: {
    type: String,
    default: "Continuar"
  }
});

defineEmits(['click']);
</script>
<style scoped>
.btn-continue {
  font-family: "Poppins", "Segoe UI", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  padding: 0.9rem 2.8rem;
  border-radius: 999px;

  border: none;
  cursor: pointer;

  /* Gradiente lila elegante */
  background: linear-gradient(135deg, #c084fc, #a855f7, #7c3aed);

  color: white;

  /* Sombra profesional */
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.35),
    inset 0 0 0 rgba(255, 255, 255, 0);

  transition: all 0.25s ease;
}

.btn-continue:hover {
  transform: translateY(-2px);

  box-shadow: 0 15px 45px rgba(168, 85, 247, 0.55),
    inset 0 0 8px rgba(255, 255, 255, 0.15);
}
</style>
