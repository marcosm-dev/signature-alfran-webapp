<template>
  <v-row class="justify-center text-center">
    <v-col ref="content">
      <br />
      <br />
      <Proteccion v-if="client" :client="client" />
    </v-col>
    <v-row class="justify-center text-center">
      <v-col cols="12" ref="clientData">
        <h1 class="mb-10">CLIENTE: {{client.nombre}}</h1>
        <v-simple-table v-if="client" class="justify-center d-flex table">
          <tbody align="start">
            <tr>
              <td>Nº RUTA:</td>
              <td width="60%">{{client.ruta}}</td>
            </tr>
            <tr>
              <td>Nº ZONA:</td>
              <td>{{client.zona}}</td>
            </tr>
            <tr>
              <td>NIF/CIF:</td>
              <td>{{client.dni}}</td>
            </tr>
            <tr>
              <td>RAZON SOCIAL:</td>
              <td>{{client.razonSocial}}</td>
            </tr>
            <tr>
              <td>NOMBRE COMERCIAL:</td>
              <td>{{client.nombre}}</td>
            </tr>
            <tr>
              <td>DIRECCION:</td>
              <td>{{client.direccion}}</td>
            </tr>
            <tr>
              <td>CODIGO POSTAL:</td>
              <td>{{client.postalCode}}</td>
            </tr>
            <tr>
              <td>MUNICIPIO:</td>
              <td>{{client.municipio}}</td>
            </tr>
            <tr>
              <td>LOCALIDAD:</td>
              <td>{{client.localidad}}</td>
            </tr>
            <tr>
              <td>PROVINCIA:</td>
              <td>{{client.provincia}}</td>
            </tr>
            <tr>
              <td>TELEFONO:</td>
              <td>{{client.telefono}}</td>
            </tr>
            <tr v-if="client.email">
              <td>EMAIL:</td>
              <td>{{client.email}}</td>
            </tr>
            <tr>
              <td>HORARIO REPARTO:</td>
              <td>{{client.horario}}</td>
            </tr>
            <tr>
              <td>CONTACTO:</td>
              <td>{{client.contacto}}</td>
            </tr>
            <tr>
              <td>CARGO:</td>
              <td>{{client.cargo}}</td>
            </tr>
            <tr>
              <td>Nº COPIAS:</td>
              <td>{{client.copias}}</td>
            </tr>
            <tr>
              <td>CONDICIONES DE PAGO:</td>
              <td>{{client.pago}}</td>
            </tr>
            <tr>
              <td>DESCUENTO MONDELEZ:</td>
              <td>{{client.descuento}} %</td>
            </tr>
            <tr v-if="client.EOI">
              <td>EOI.D</td>
              <td>{{client.EOI}}</td>
            </tr>
            <tr v-if="client.SID">
              <td>SID</td>
              <td>{{client.SID}}</td>
            </tr>
            <tr v-if="client.observaciones != ''">
              <td>OBSERVACIONES</td>
              <td>{{client.observaciones}}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      <v-btn class="my-10" color="light-blue darken-3" @click="downloadPDF" rounded>Finalizar</v-btn>
    </v-row>
  </v-row>
</template>

<script>
import API from "@/services/api";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Proteccion from "@/components/pd-datos";

export default {
  data: () => ({
    client: false
  }),
  components: {
    Proteccion
  },
  methods: {
    downloadPDF(quality = 1) {
      let docName = this.client.razonSocial;
      const doc = new jsPDF("p", "mm", "a4");
      var canvasElement = document.createElement("canvas");
      var canvasElement2 = document.createElement("canvas");
      const page2 = this.$refs.clientData;
      html2canvas(this.$refs.content, { canvas: canvasElement }).then(function(
        canvas
      ) {
        doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
        html2canvas(page2, { canvas: canvasElement2 }).then(function(canvas) {
          doc.addPage();
          doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
          doc.save(`"${docName}".pdf`);
        });
      });
    }
  },
  async created() {
    this.client = await API.getClient(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
.table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>