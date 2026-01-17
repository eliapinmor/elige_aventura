<template>
  <div
    class="drop-zone"
    @dragover.prevent="$emit('drag-over', zoneId)"
    @drop="$emit('drop', zoneId)"
  >
    <h2 v-if="title">{{ title }}</h2>

    <div v-if="items.length === 0" class="empty">
      <h2>vacío</h2>
      <!-- (Suelta elementos aquí) -->
    </div>

    <div
      v-for="item in items"
      :key="item.id"
      class="item-wrapper"
    >
      <!-- Título tipo <h2> del ejemplo original -->
      <h2
        v-if="item.type === 'title'"
        class="dragable"
        draggable="true"
        @dragstart="$emit('drag-start', item.id)"
      >
        {{ item.label }}
      </h2>

      <!-- Caja azul del ejemplo original -->
      <div
        v-else-if="item.type === 'box'"
        class="dragable box"
        draggable="true"
        @dragstart="$emit('drag-start', item.id)"
      ></div>

      <!-- Cualquier otro item "tipo etiqueta" -->
      <div
        v-else
        class="dragable pill"
        draggable="true"
        @dragstart="$emit('drag-start', item.id)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  zoneId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    required: true
  },
  group: {
    type: String
  }
})

defineEmits(['drag-start', 'drag-over', 'drop'])
</script>

<style scoped>
/* --------------------------------------
   Base DropZone
-------------------------------------- */
.drop-zone {
  padding: 0; /* cada tipo tiene su padding */
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
  min-width: auto;   /* importante */
  min-height: auto;  /* importante */
}

/* --------------------------------------
   Gaps inline con el texto
-------------------------------------- */
.drop-zone--outside {
  display: inline-block;
  min-width: 100px;
  min-height: 30px;          /* altura de la línea */
  padding: 0 0.5rem;


  border: 1px #ccc;
  border-radius: 8px;

  background: #f5f5f5;
  color: #1e293b;

  font-weight: 600;
  font-size: 0.95rem;

  align-items: center;
  text-align: center;
}



.drop-zone--outside .empty h2 {
  font-size: 0.9rem;
  margin: 0;
  color: #84909ec5;
  font-style: italic;

}

/* --------------------------------------
   Contenedores grandes
-------------------------------------- */
.drop-zone--container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 200px;
  min-height: 120px;

  background: #d9d9d9;

  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  gap: 15px;
}

.drop-zone--container h2 {
  font-size: 15px;
  margin: 0;
}

.pill {
  background: #ff4aa2;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 500;
  user-select: none;
}
</style>