<template>

<Nav></Nav>
<RouterView></RouterView>
<Footer></Footer>

</template>

<script setup>

import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Nav from './components/Nav.vue';
</script>