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

  background: linear-gradient(135deg, #ffff99, #ff8f5b, #ff3eaf);

  color: white;

  box-shadow: 0 10px 30px #ff8f5b,
    inset 0 0 0 #ff8f5b;

  transition: all 0.25s ease;
}

.btn-continue:hover {
  transform: translateY(-2px);

  box-shadow: 0 10px 30px #ff8f5b,
    inset 0 0 0 #ff8f5b;
}
</style>
