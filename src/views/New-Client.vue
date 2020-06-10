<template>
  <v-container fluid>
    <v-form class="text-center mt-5">
      <h1 class="display-1">CLIENTE NUEVO</h1>
      <v-row>
        <v-col cols="6">
          <v-text-field v-model="ruta" label="Nº Ruta" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="zona" label="Nº Zona" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="dni" label="NIF/CIF" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="razonSocial" label="Razon Social" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="nombre" label="Nombre Comercial" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="direccion" label="Dirección" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="cp" label="Codigo Postal" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="localidad" label="Localidad" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="municipio" label="Municipio" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="provincia" label="Provincia" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="telefono" label="Teléfono" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="email" label="E-mail"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="horario" label="Horario de reparto" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="contacto" label="Persona de contacto" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="cargo" label="Cargo" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-select v-model="copias" :items="copiaItems" label="Numero de Copias"></v-select>
        </v-col>
        <v-col cols="6">
          <v-select v-model="pago" :items="tipoDePago" label="Condiciones de Pago" required></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="selectDescuento" v-if="showDescuento" label="Descuento sin %"></v-text-field>
          <v-select v-else v-model="descuento" :items="descuentoItems" label="Descuento"></v-select>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="observaciones" label="Observaciones"></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="my-10" color="primary" rounded @click="crearCliente">Firmar proteccion</v-btn>
      <h1>* Todos los campos son obligatorios</h1>
    </v-form>
  </v-container>
</template>

<script>
import API from "@/services/api.js";
export default {
  data: () => ({
    tipoDePago: ["Contado", "Credito"],
    descuentoItems: ["0", "5", "10", "OTRO"],
    copiaItems: [0, 1, 2],
    descuento: null,
    selectDescuento: null,
    cargo: null,
    ruta: null,
    zona: null,
    dni: null,
    razonSocial: null,
    nombre: null,
    direccion: null,
    cp: null,
    localidad: null,
    municipio: null,
    provincia: null,
    telefono: null,
    email: null,
    horario: null,
    contacto: null,
    cargo: null,
    copias: null,
    pago: "Contado",
    observaciones: ""
  }),
  methods: {
    crearCliente() {
      const newClient = {
        ruta: this.ruta,
        zona: this.zona,
        dni: this.dni,
        razonSocial: this.razonSocial,
        nombre: this.nombre,
        direccion: this.direccion,
        postalCode: this.cp,
        localidad: this.localidad,
        municipio: this.municipio,
        provincia: this.provincia,
        telefono: this.telefono,
        email: this.email,
        horario: this.horario,
        contacto: this.contacto,
        cargo: this.cargo,
        copias: this.copias,
        descuento: "",
        pago: this.pago,
        observaciones: this.observaciones
      };
      if (this.descuento !== "OTRO") {
        newClient.descuento = this.descuento;
      } else {
        newClient.descuento = this.selectDescuento;
      }
      console.log(newClient);

      API.createClient(newClient).then(response => {
        this.$router.push(`/client/${response.id}`);
      });
    }
  },
  computed: {
    showDescuento() {
      if (this.descuento === "OTRO") return true;
    }
  }
};
</script>