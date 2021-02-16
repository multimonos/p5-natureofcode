import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SketchLoader from "../views/SketchLoader.vue";

const routes = [
    {path: "/", name: "home", component: Home},
    {path: "/sketches/:id?", name: "sketches", component: SketchLoader},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router