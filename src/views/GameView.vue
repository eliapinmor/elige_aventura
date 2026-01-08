<template>
  <div class="page">
    <h1>Ejemplo de Drag and Drop con Vue</h1>
    <p class="intro">
      Arrastra los elementos entre la zona libre y el contenedor.
    </p>

    <div class="zones">
      <!-- <div> -->
      <p>
        hola esta es la primera frase, el primer hueco:
        <!-- Zona libre -->
        <DropZone
          class="drop-zone--outside"
          zone-id="gap-arma"
          title="_____________"
          :items="itemsByZone('gap-arma')"
          group="arma"
          @drag-start="onDragStart"
          @drag-over="onDragOver"
          @drop="onDrop"
        />
      </p>
      <p>
        o pero que ha pasado para que de repente haya otro hueco
        <DropZone
          class="drop-zone--outside"
          zone-id="gap-lugar"
          title="_____________"
          :items="itemsByZone('gap-lugar')"
          group="lugar"
          @drag-start="onDragStart"
          @drag-over="onDragOver"
          @drop="onDrop"
        />
      </p>

      <!-- Contenedor -->
      <DropZone
        class="drop-zone--container"
        zone-id="container-arma"
        title="hueco 1"
        :items="itemsByZone('container-arma')"
        group="arma"
        @drag-start="onDragStart"
        @drag-over="onDragOver"
        @drop="onDrop"
      />

      <DropZone
        class="drop-zone--container"
        zone-id="container-lugar"
        title="hueco 2"
        :items="itemsByZone('container-lugar')"
        group="lugar"
        @drag-start="onDragStart"
        @drag-over="onDragOver"
        @drop="onDrop"
      />
    </div>

    <p id="p1">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DropZone from "../components/DropZone.vue";

// Elementos arrastrables
const items = ref([
  {
    id: "tag1",
    label: "arma extra 1",
    type: "tag",
    zone: "container-arma",
  },
  {
    id: "tag2",
    label: "arma extra 2",
    type: "tag",
    zone: "container-arma",
  },
  {
    id: "tag3",
    label: "lugar extra 1",
    type: "tag",
    zone: "container-lugar",
  },
  {
    id: "tag4",
    label: "lugar extra 2",
    type: "tag",
    zone: "container-lugar",
  },
]);
// Id del elemento que se está arrastrando
const draggedItemId = ref(null);

// Mensaje tipo #p1 del ejemplo original
const message = ref("");

// Devuelve los items que están en una zona concreta
const itemsByZone = (zone) => {
  return items.value.filter((item) => item.zone === zone);
};

// Handlers de drag & drop (los llaman los DropZone)
const onDragStart = (itemId) => {
  draggedItemId.value = itemId;
  message.value = "ACABAS DE COGER UN ELEMENTO";
};

const onDragOver = () => {
  if (draggedItemId.value) {
    message.value = "ESTÁ EN EL ELEMENTO";
  }
};

const onDrop = (zoneId) => {
  if (!draggedItemId.value) return;

  const item = items.value.find((i) => i.id === draggedItemId.value);
  
  //chekeo de zona
  const gapType = zoneId.split('-')[1]; //me quedo con la segunda parte
  const itemType = item.zone.split('-')[1]; //me quedo con el grupo parte del objeto

  if (gapType !== itemType) {
    message.value = "NO PUEDES SOLTAR ESTE ELEMENTO AQUÍ";
    draggedItemId.value = null;
    return;
  }

  //max length de 1 en el gap (no en el container)
  if(zoneId.startsWith('gap')) {

  const currentItems = itemsByZone(zoneId);
  if (currentItems.length >= 1) {
    message.value = currentItems.length + " ELEMENTO(S) YA ESTÁN EN ESTA ZONA";
    draggedItemId.value = null;
    return;
  }
  }
  
  if (item) {
    item.zone = zoneId;
  }

  message.value = "SE HA SOLTADO EL ELEMENTO";
  draggedItemId.value = null;
};
</script>

<style scoped>
.page {
  padding: 1.5rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

h1 {
  margin-top: 0;
}

.intro {
  margin-bottom: 1rem;
}

.zones {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Solo layout/colores generales, estilos de la zona en DropZone.vue */
</style>
