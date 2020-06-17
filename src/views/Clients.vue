<template>
  <v-container class="text-center" fluid>
    <h1 class="title_bg font-weight-bold display-1 py-1 mt-n2">Lista de Clientes</h1>
    <v-row>
      <v-col>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="clients"
          :button="button"
          :single-select="singleSelect"
          show-select
          :sort-desc="[false, true]"
        >
          <template v-slot:item.ruta="{ item }">
            <v-chip>{{ item.ruta }}</v-chip>
          </template>
        </v-data-table>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-btn class="my-12 primary" dark @click="downloadPDF" rounded>Ir al cliente</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="my-12 red" dark @click="deleteClient" rounded>Borrar Cliente</v-btn>
      <v-spacer></v-spacer>
    </v-row>
    <v-divider></v-divider>
    <h2 class="mt-6">* ¡Recuerda que el cliente debe volver a firmar!</h2>
  </v-container>
</template>

<script>
import API from "@/services/api.js";
export default {
  name: "Clients",
  data: () => ({
    selected: [],
    button: false,
    singleSelect: false,
    clients: [],
    headers: [
      {
        text: "Ruta",
        value: "ruta",
        class: "header_class_ruta"
      },
      {
        text: "Clients",
        align: "start",
        sortable: false,
        value: "nombre",
        class: "header_class_clients"
      },
      {
        text: "Provincia",
        align: "start",
        value: "provincia",
        class: "header_class"
      }
    ]
  }),
  methods: {
    deleteClient() {
      API.deleteClientById(this.selected[0]._id);
      const clientIdx = this.clients.findIndex(
        i => i._id === this.selected[0]._id
      );
      if (clientIdx !== -1) {
        this.clients.splice(clientIdx, 1);
      }
    },
    downloadPDF() {
      if (this.selected !== [])
        this.$router.push("/client/" + this.selected[0]._id);
    }
  },
  async created() {
    this.clients = await API.getAllClients();
  }
};
</script>
<style lang="scss">
.header_class {
  background-color: grey;
  color: white !important;
  font-size: 20px !important;
}
.header_class_clients {
  width: 300px;
  background-color: grey;
  color: white !important;
  font-size: 20px !important;
}
.header_class_ruta {
  width: 100px;
  justify-content: center;
  margin: auto;
  background-color: grey;
  color: white !important;
  font-size: 20px !important;
}
.title_bg {
  background-color: rgb(190, 190, 190);
  color: white;
  border: 1px solid rgba(82, 82, 82, 0.432);
}
</style>