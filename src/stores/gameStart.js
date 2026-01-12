import { defineStore } from 'pinia';

export const useGameStartStore = defineStore ("quiz", {
    state: () => ({
        gameStartedStatus: "no", //no, progress , finished
        arma: null,
        lugar: null,
        emocion: null,
        emocionRuta: null,
    }),
    actions: {
        startGame() {
            this.gameStartedStatus = "progress";
            console.log("Game started:", this.gameStartedStatus);
        },
        endGame(arma, lugar, emocion) {
            this.arma = arma;
            this.lugar = lugar;
            this.emocion = emocion;
            // this.emocionRuta = "/audio/"+emocion+".mp3";
            this.gameStartedStatus = "finished";
            console.log("Game finished:", this.gameStartedStatus);
        },

    },
});