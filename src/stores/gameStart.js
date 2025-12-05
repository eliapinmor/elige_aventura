import { defineStore } from 'pinia';

export const useGameStartStore = defineStore ("quiz", {
    state: () => ({
        gameStarted: false,
    }),
    actions: {
        startGame() {
            this.gameStarted = true;
            console.log("Game started:", this.gameStarted);
        },
        endGame() {
            this.gameStarted = false;
            console.log("Game started:", this.gameStarted);
        },

    },
});