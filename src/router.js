import { createRouter, createWebHashHistory } from "vue-router";
import ListaContactosVue from "./views/ListaContactos.vue";
import AgregarContacto from "./views/AgregarContacto.vue";
import EditarContacto from "./views/EditarContacto.vue";

const routes = [
    { name: "Inicio", path: "/", component: ListaContactosVue },
    { name: "Agregar", path: "/contacto/nuevo", component: AgregarContacto },
    { name: "Editar", path: "/contacto/editar/:id", component: EditarContacto },
];

const history = createWebHashHistory();

const router = createRouter({
    history,
    routes,
});

export default router;
