<template>
  <div class="page">
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
          title=""
          :items="itemsByZone('gap-arma')"
          group="arma"
          @drag-start="onDragStart"
          @drag-over="onDragOver"
          @drop="onDrop"
        />

        o pero que ha pasado para que de repente haya otro hueco
        <DropZone
          class="drop-zone--outside"
          zone-id="gap-lugar"
          title=""
          :items="itemsByZone('gap-lugar')"
          group="lugar"
          @drag-start="onDragStart"
          @drag-over="onDragOver"
          @drop="onDrop"
        />

        y ahora otro hueco mas
        <DropZone
          class="drop-zone--outside"
          zone-id="gap-emocion"
          title=""
          :items="itemsByZone('gap-emocion')"
          group="emocion"
          @drag-start="onDragStart"
          @drag-over="onDragOver"
          @drop="onDrop"
        />
      </p>
    </div>
    <div class="zones">

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
          <DropZone
        class="drop-zone--container"
        zone-id="container-emocion"
        title="hueco 3"
        :items="itemsByZone('container-emocion')"
        group="emocion"
        @drag-start="onDragStart"
        @drag-over="onDragOver"
        @drop="onDrop"
      />
    </div>


    <p id="p1">{{ message }}</p>
    <!-- habilitar botón cuando todos los gaps no esten vacios -->
    <button class="btn-continue" @click="gameStartStore.endGame(selectedArma, selectedLugar, selectedEmocion)">Continuar</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DropZone from "../components/DropZone.vue";
import { computed } from "vue";
import { useGameStartStore } from '@/stores/gameStart';
const gameStartStore = useGameStartStore();

// Elementos arrastrables
const items = ref([
  {
    id: "arma1",
    label: "espada",
    type: "tag",
    zone: "container-arma",
  },
  {
    id: "arma2",
    label: "catana",
    type: "tag",
    zone: "container-arma",
  },
  {
    id: "arma3",
    label: "pistola",
    type: "tag",
    zone: "container-arma",
  },
  {
    id: "lugar1",
    label: "bosque",
    type: "tag",
    zone: "container-lugar",
  },
  {
    id: "lugar2",
    label: "ciudad",
    type: "tag",
    zone: "container-lugar",
  },
  {
    id: "lugar3",
    label: "cielo",
    type: "tag",
    zone: "container-lugar",
  },
    {
    id: "emocion1",
    label: "miedo",
    type: "tag",
    zone: "container-emocion",
  },
    {
    id: "emocion2",
    label: "curiosidad",
    type: "tag",
    zone: "container-emocion",
  },
    {
    id: "emocion3",
    label: "emoción",
    type: "tag",
    zone: "container-emocion",
  },
]);


const selectedArma = computed(() =>
  items.value.find(i => i.zone === "gap-arma")?.label
);

const selectedLugar = computed(() =>
  items.value.find(i => i.zone === "gap-lugar")?.label
);

const selectedEmocion = computed(() =>
  items.value.find(i => i.zone === "gap-emocion")?.label
);

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


/* Solo layout/colores generales, estilos de la zona en DropZone.vue */
</style>
