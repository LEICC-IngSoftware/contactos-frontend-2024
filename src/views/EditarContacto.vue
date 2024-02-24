<template>
    <h4>Editar contacto</h4>
    <div class="row">
        <form @submit.prevent="editarContacto">
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
    import { ref, onMounted } from 'vue';
    import supabase from '../supabase/init';
    import { useRoute } from 'vue-router';
    import router from '../router';

    const route = useRoute();
    const nombre = ref("");
    const email = ref("");
    const telefono = ref("");

    async function obtenerContacto() {
        const id = route.params.id;
        const { data, error } = await supabase
            .from('contactos') //Nombre de la tabla
            .select() //Nombres de las columnas, con * podemos obtener todas las columnas
            .eq('id', id) // Obtener la fila que sea igual al ID
            .single(); //Indicar que se espera una sola fila para que no devuelva un arreglo
        
        if (data) {
            nombre.value = data.nombre
            email.value = data.email
            telefono.value = data.telefono
        }
    }

    async function editarContacto() {
        const id = route.params.id;
        const { error } = await supabase
            .from('contactos')
            .update({ nombre: nombre.value, email: email.value, telefono: telefono.value })
            .eq('id', id);
        //Redireccionamos al listado de contactos
        router.push({path: "/"});
    }

    onMounted(() => {
        obtenerContacto();
    })
</script>