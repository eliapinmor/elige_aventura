<template>
  <div class="page">
    <p class="info">
      ⓘ Arrastra los elementos entre la zona libre y el contenedor.
    </p>

    <div class="zones story-text">
      <!-- <div> -->
      <span>
        Te han aparecido un grupo de seres indescriptibles, de otro planeta. En
        ese momento estabas en casa y has conseguido coger una mochila y meter
        dentro lo necesario para sobrevivir. Para poder defenderte coges una

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

        .
      </span>
      <span>
        Llevas ya un rato corriendo cuando te empiezas a adentrar en el

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
      </span>
      <span>
        Empiezas a respirar aliviado, pero de repente sientes
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

        al ver lo que hay delante de ti.
      </span>
    </div>
    <div class="zones-container">
      <div>
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
      </div>
      <div>
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
      <div>
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
    </div>

    <p id="p1">{{ message }}</p>
    <!-- habilitar botón cuando todos los gaps no esten vacios -->
    <div style="
    display: flex; justify-content: center;">
      <ButtonContinue
        route="/result"
        buttonText="CONTINUAR"
        :class="{disabled: !(
          selectedArma &&
          selectedLugar &&
          selectedEmocion
        )}"
        @click="
          gameStartStore.endGame(selectedArma, selectedLugar, selectedEmocion)
        "
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DropZone from "../components/DropZone.vue";
import { computed } from "vue";
import ButtonContinue from "@/components/ButtonContinue.vue";
import { useGameStartStore } from "@/stores/gameStart";
const gameStartStore = useGameStartStore();

console.log("estoy en /:", gameStartStore.gameStartedStatus);
onMounted(() => {
  gameStartStore.startGame()
})
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
    label: "centro de la ciudad",
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

const selectedArma = computed(
  () => items.value.find((i) => i.zone === "gap-arma")?.label
);

const selectedLugar = computed(
  () => items.value.find((i) => i.zone === "gap-lugar")?.label
);

const selectedEmocion = computed(
  () => items.value.find((i) => i.zone === "gap-emocion")?.label
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
  const gapType = zoneId.split("-")[1]; //me quedo con la segunda parte
  const itemType = item.zone.split("-")[1]; //me quedo con el grupo parte del objeto

  if (gapType !== itemType) {
    message.value = "NO PUEDES SOLTAR ESTE ELEMENTO AQUÍ";
    draggedItemId.value = null;
    return;
  }

  //max length de 1 en el gap (no en el container)
  if (zoneId.startsWith("gap")) {
    const currentItems = itemsByZone(zoneId);
    if (currentItems.length >= 1) {
      message.value =
        currentItems.length + " ELEMENTO(S) YA ESTÁN EN ESTA ZONA";
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
  padding-top: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

h1 {
  margin-top: 0;
}

.intro {
  margin-bottom: 1rem;
}

.zones,
.zones-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.zones-container {
  justify-content: center;
}

.story-text {
  max-width: 800px;
  margin: 0 auto 2.5rem;

  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);

  padding: 2rem;
  border-radius: 16px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);

  white-space: normal;
  word-break: break-word;
}

.story-text span {
  margin-right: 0.25rem; /* espacio mínimo entre palabras y gaps */
}

.info {
  max-width: 680px;
  margin: 0 auto 1.5rem;

  font-family: "Inter", "Segoe UI", sans-serif;
  font-size: 0.85rem;
  line-height: 1.5;
  text-align: center;

  color: #ffff;
  background: #0b81ff9f;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.container {
  margin: auto;
  display: flex;
}
</style>
