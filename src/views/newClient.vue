<template>
  <v-form class="text-center mt-5">
    <h1>CLIENTE NUEVO</h1>
    <v-container>
      <v-row>
        <v-col
          cols="4"
        >
          <v-text-field
            v-model="ruta"
            label="Nº Ruta"
            required
          ></v-text-field> 
        </v-col>
        <v-col
          cols="4"
        >
          <v-text-field
            v-model="zona"
            label="Nº Zona"
            required
          ></v-text-field> 
        </v-col>
       <v-col
          cols="4"
        >
          <v-text-field
            v-model="dni"
            label="NIF/CIF"
            required
          ></v-text-field> 
        </v-col>
        <v-col
          cols="6"
        > 
          <v-text-field
            v-model="razonSocial"
            label="Razon Social"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="6"
        > 
          <v-text-field
            v-model="nombre"
            label="Nombre Comercial"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="8"
        > 
          <v-text-field
            v-model="direccion"
            label="Dirección"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        > 
          <v-text-field
            v-model="cp"
            label="Codigo Postal"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="6"
        > 
          <v-text-field
            v-model="localidad"
            label="Localidad"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="6"
        > 
          <v-text-field
            v-model="municipio"
            label="Municipio"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="8"
        > 
          <v-text-field
            v-model="provincia"
            label="Provincia"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        > 
          <v-text-field
            v-model="telefono"
            label="Teléfono"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="7"
        > 
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="5"
        > 
          <v-text-field
            v-model="horario"
            label="Horario de reparto"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        > 
          <v-text-field
            v-model="contacto"
            label="Persona de contacto"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        > 
          <v-text-field
            v-model="cargo"
            label="Cargo"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        > 
          <v-text-field
            v-model="copias"
            label="Numero de Copias"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        > 
          <v-select
            v-model="pago"
            :items="tipoDePago"
            label="Condiciones de Pago"
            required
          ></v-select>
        </v-col>
        <v-col
          cols="4"
        > 
          <v-checkbox
          v-model="descuento"
          label="Descuento de Mondelez"
          >
          </v-checkbox>
        </v-col>
    <v-col cols="4" class="text-center">
    <v-dialog
      v-model="dialog"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          rounded
          dark
          v-on="on"
        >
          Firma
        </v-btn>
      </template>

      <v-card height="500px">
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Protección de datos
        </v-card-title>
        <Signature/>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-col>
      </v-row>
      <v-btn class="mt-10" color="primary" rounded @click="createClient">Crear Cliente</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import Signature from "@/components/Signature"

export default {
 data: () => ({
   tipoDePago: ['Contado', 'Credito'],
   descuento: false,
   dialog: false,
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
   pago: 'Contado'
 }),
 components: {
   Signature
 },
 methods: {
   createClient(){
     alert('nuevo cliente')
   }
 }
}
</script>