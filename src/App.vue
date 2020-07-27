<template>
  <v-app id="app">
    <component id="background" :is="layout">
      <router-view />
    </component>
    <v-footer dark padless app>
      <v-card color="light-blue darken-4" class="flex" flat tile>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>Proteccion de Datos</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
const defaultLayout = "default";
export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    },
  },
};
</script>