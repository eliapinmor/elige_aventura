import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue');
const GameView = () => import('../views/GameView.vue');
const ResultView = () => import('../views/ResultView.vue');
import { useGameStartStore } from '@/stores/gameStart';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: () => import('../views/HomeView.vue')},
    {path: '/game' , component: () => import('../views/GameView.vue')},
    {path: '/result', component: () => import('../views/ResultView.vue'), meta: { requiresFinishedGame: true } },
  ],
})

router.beforeEach((to) => {
  const gameStore = useGameStartStore();

  if (to.meta.requiresFinishedGame) {
    if (      !gameStore.arma ||
      !gameStore.lugar ||
      !gameStore.emocion) {
      return { path: "/game" };
    }
  }
});


export default router
