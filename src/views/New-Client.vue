<template>
  <v-container fluid>
    <v-form class="text-center mt-5">
      <h1 class="title_bg font-weight-bold display-1 py-1 mt-n7">CLIENTE NUEVO</h1>
      <v-row>
        <v-col cols="6" class="pb-0">
          <v-text-field
            type="number"
            v-model="ruta"
            :rules="numberRules"
            label="Nº Ruta"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="pb-0">
          <v-text-field
            type="number"
            v-model="zona"
            :rules="numberRules"
            label="Nº Zona"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field v-model="dni" :rules="dniRules" label="NIF/CIF" outlined required></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field v-model="razonSocial" label="Razon Social" outlined required></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field v-model="nombre" label="Nombre Comercial" outlined required></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field v-model="direccion" label="Dirección" outlined required></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            type="number"
            v-model="cp"
            :rules="cpRules"
            label="Codigo Postal"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field type v-model="localidad" label="Localidad" outlined required></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field v-model="municipio" label="Municipio" outlined required></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field v-model="provincia" label="Provincia" outlined required></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            type="number"
            v-model="telefono"
            :rules="phoneRules"
            label="Teléfono"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="py-1">
          <v-text-field
            v-model="email"
            type="email"
            :rules="emailRules"
            outlined
            placeholder="ejemplo@email.com"
            label="E-mail"
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            v-model="horario"
            placeholder="9:00 a 14:00 / 16:00 a 20:00"
            label="Horario de reparto"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field v-model="contacto" label="Persona de contacto" outlined required></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field v-model="cargo" label="Cargo" outlined required></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-select v-model="copias" :items="copiaItems" outlined label="Numero de Copias"></v-select>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-select
            v-model="pago"
            :items="tipoDePago"
            outlined
            label="Condiciones de Pago"
            required
          ></v-select>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            type="number"
            :rules="numberRules"
            v-model="selectDescuento"
            v-if="showDescuento"
            outlined
            suffix="%"
          ></v-text-field>
          <v-select
            v-else
            v-model="descuento"
            :items="descuentoItems"
            outlined
            label="Descuento"
            suffix="%"
          ></v-select>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field v-model="eoi" outlined label="EOID"></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field v-model="sid" outlined label="SID"></v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field v-model="observaciones" outlined label="Observaciones"></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="my-10" color="primary" rounded @click="crearCliente">Firmar proteccion</v-btn>
      <h1 class="title_bg font-weight-bold py-1 mb-n2">* Todos los campos son obligatorios</h1>
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
    eoi: null,
    sid: null,
    cargo: null,
    ruta: null,
    numberRules: [v => /^[0-9]{1,}?$/i.test(v)],
    zona: null,
    dni: null,
    dniRules: [
      v =>
        /^[0-9]{8}[A-Z]{1}?$/i.test(v) ||
        /^[A-Z]{1}[0-8]{8}[A-Z]{1}?$/i.test(v) ||
        /^[A-Z]{1}[0-8]{8}?$/i.test(v) ||
        "Inserta un NIF o CIF válido"
    ],
    razonSocial: null,
    nombre: null,
    direccion: null,
    cp: null,
    cpRules: [v => /^[0-9]{5}?$/i.test(v) || "Inserta un código postal válido"],
    localidad: null,
    municipio: null,
    provincia: null,
    telefono: null,
    phoneRules: [v => /^[0-9]{9}?$/i.test(v)],
    email: null,
    emailRules: [v => /.+@.+/.test(v) || "Inserta un email válido"],
    horario: null,
    contacto: null,
    cargo: null,
    copias: null,
    pago: "Contado",
    observaciones: ""
  }),
  methods: {
    async crearCliente() {
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
        observaciones: this.observaciones,
        EOI: this.eoi,
        SID: this.sid
      };
      if (this.descuento !== "OTRO") {
        newClient.descuento = this.descuento;
      } else {
        newClient.descuento = this.selectDescuento;
      }

      await API.createClient(newClient).then(response => {
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

<style lang="scss">
.title_bg {
  background-color: rgb(190, 190, 190);
  color: white;
  border: 1px solid rgba(82, 82, 82, 0.432);
}
</style>