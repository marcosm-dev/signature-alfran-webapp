<template>
  <v-app id="app">
    <component id="background" :is="layout">
      <router-view />
    </component>
    <v-footer dark padless app>
      <v-card color="light-blue darken-3" class="flex" flat tile>
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
  name: "Home",
  data: () => ({
    drawerData: [
      {
        name: "Nuevo cliente",
        icon: "mdi-newspaper-plus",
        to: "/newclient"
      },
      {
        name: "Nuevo documento",
        icon: "mdi-file-document",
        to: "/newproteccion"
      },
      {
        name: "Editar documento",
        icon: "mdi-file-document-edit",
        to: "/editclient"
      }
    ],
    drawer: false
  }),
  methods: {
    logout() {
      this.$router.push("/");
      localStorage.clear();
    }
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    }
  }
};
</script>

