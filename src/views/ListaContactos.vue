<template>
    <div class="row">
        <div class="col-3 card contacto" v-for="contacto in contactos">
            <h3>{{ contacto.nombre }}</h3>
            <div>{{ contacto.email }}</div>
            <div>{{ contacto.telefono }}</div>
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

    onMounted(() => {
        obtenerContactos();
    })
</script>

<style>
    .contacto {
        padding: 10px;
        margin: 5px;
        text-align: center;
        font-family: Arial;
    }
</style>