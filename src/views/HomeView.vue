<script setup>
import usePropiedades from '../composables/usePropiedades'
import Propiedad from '../components/Propiedad.vue'
import propertyPrice from '../helpers'

const { propertiesCollection } = usePropiedades()
</script>

<template>
    <h1 class="text-center text-h3 font-weight-bold my-5">Nuestras Propiedades</h1>

    <v-card class="py-10">
        <v-row>
            <Propiedad v-for="propiedad in propertiesCollection" :key="propiedad.id" :propiedad="propiedad" :price="propertyPrice"/>
        </v-row>

    </v-card>
</template>
