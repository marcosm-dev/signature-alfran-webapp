<template>
  <v-app id="app">
    <div>
      <v-card class="mx-auto overflow-hidden">
        <v-app-bar v-if="!loged" color="light-blue darken-3" dark>
          <v-app-bar-nav-icon @click="drawer = true" x-large></v-app-bar-nav-icon>
          <v-toolbar-title class="empresa">Alfran Archipielago</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon @click="logout" x-large>mdi-exit-to-app</v-icon>
        </v-app-bar>
        <v-content>
          <router-view></router-view>
        </v-content>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group active-class="light-blue darken-1--text text--accent-4">
              <v-list-item v-for="(data, i) in drawerData " :key="i" :to="data.to">
                <v-list-item-icon>
                  <v-icon>{{data.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{data.name}}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
    <template>
      <v-footer v-if="loged" dark padless>
        <v-card color="light-blue darken-3" class="flex" flat tile>
          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} —
            <strong>Proteccion de Datos</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </v-app>
</template>
<script>
export default {
  name: "Home",
  data: () => ({
    loged: false,
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
  }
};
</script>

<style lang="scss" scoped>
.empresa {
  color: rgb(230, 5, 181);
  font-weight: 700;
  font-size: 40px;
}
</style>