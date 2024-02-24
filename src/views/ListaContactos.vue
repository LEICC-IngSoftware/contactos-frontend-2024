<template>
    <div class="d-flex justify-content-end mb-3">
        <RouterLink to="/contacto/nuevo" class="btn btn-primary">Agregar contacto</RouterLink>
    </div>
    <div class="row">
        <div class="col-3" v-for="contacto in contactos">
            <div class="card contacto">
                <h3>{{ contacto.nombre }}</h3>
                <div>Email: {{ contacto.email }}</div>
                <div>Telefono: {{ contacto.telefono }}</div>
                <RouterLink :to="`/contacto/editar/${contacto.id}`" class="btn btn-secondary btn-sm mt-3">Editar contacto</RouterLink>
                <button type="button" class="btn btn-danger btn-sm mt-1" @click="eliminarContacto(contacto.id)" >Eliminar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import supabase from '../supabase/init';

    const contactos = ref([]);
    async function obtenerContactos() {
        const { data, error } = await supabase.from('contactos').select('*');
        if (!error) {
            console.log(contactos);
            contactos.value = data;
        }
    }

    async function eliminarContacto(id) {
        const { error } = await supabase
            .from('contactos')
            .delete()
            .eq('id', id);
        obtenerContactos();
    }

    onMounted(() => {
        obtenerContactos();
    })
</script>

<style>
    .contacto {
        padding: 10px;
        text-align: center;
        font-family: Arial;
    }
</style>