<template>
    <h4>Agregar contacto</h4>
    <div class="row">
        <form @submit.prevent="crearContacto">
            <div class="mb-3">
                <label class="form-label">Nombre: </label>
                <input class="form-control" name="nombre" v-model="nombre"/>
                <label class="form-label">Correo electrónico: </label>
                <input class="form-control" name="email" v-model="email"/>
                <label class="form-label">Teléfono: </label>
                <input class="form-control" name="telefono" v-model="telefono" />
                <button type="submit" class="btn btn-primary mt-4">Guardar</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import supabase from '../supabase/init';
    import router from '../router';

    const nombre = ref("");
    const email = ref("");
    const telefono = ref("");

    async function crearContacto() {
        const { error } = await supabase
            .from('contactos')
            .insert({ nombre: nombre.value, email: email.value, telefono: telefono.value });

        //Redireccionamos al listado de contactos
        router.push({path: "/"});
    }    
</script>