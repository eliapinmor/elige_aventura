<template>
  <div class="page">
    <p class="info">
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
    <ButtonContinue buttonText="CONTINUAR" @click="gameStartStore.endGame(selectedArma, selectedLugar, selectedEmocion)" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DropZone from "../components/DropZone.vue";
import { computed } from "vue";
import ButtonContinue from '@/components/ButtonContinue.vue';
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
    label: "katana",
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

.info {
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-size: 0.85rem;
  line-height: 1.4;
  text-align: center;

  color: #1e40af;

  background: rgba(59, 130, 246, 0.08);
  padding: 0.4rem 0.75rem;
  border-radius: 8px;

  width: fit-content;
  margin: 0.75rem auto 1.25rem;

  opacity: 0.9;
}



</style>
