<template>
  <v-row class="justify-center text-center">
    <v-col ref="content" cols="12">
      <h2 class="mt-10" id="titulo">CONSENTIMIENTO EXPRESO</h2>
      <div class="text-start mt-5 pd-adjust">
        <p>
          En aras a dar cumplimiento al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) conjuntamente con la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), y siguiendo las Recomendaciones e Instrucciones emitidas por la Agencia Española de Protección de Datos (A.E.P.D.),
          <b>SE INFORMA:</b>
        </p>

        <p>
          Los datos de carácter personal solicitados y facilitados por usted, son incorporados un fichero de titularidad privada cuyo responsable y único destinatario es
          <b>ALFRAN ARCHIPIELAGO SL</b>, con CIF. B-76565381, con domicilio en Calle Bentagay, 1 y 3, 38111, Santa Cruz de Tenerife, España. Teléfonos: 822026641-922244877.
          <v-icon small>mdi-email-outline</v-icon>:
          <a>gestion@alfranarchipielago.com</a> (en adelante el
          <span class="doble">Responsable</span> del Tratamiento).
        </p>
        <ul>
          <li
            class="my-4"
          >Solo serán aquellos datos estrictamente necesarios para prestar adecuadamente los servicios solicitados, pudiendo ser necesario recoger datos de contacto de terceros, tales como representantes legales, tutores, o personas a cargo designadas por los mismos.</li>
          <li
            class="my-4"
          >Todos los datos recogidos cuentan con el compromiso de confidencialidad, con las medidas de seguridad establecidas legalmente, y bajo ningún concepto son cedidos o tratados por terceras personas, físicas o jurídicas, sin el previo consentimiento del cliente, tutor o representante legal, salvo en aquellos casos en los que fuere imprescindible para la correcta prestación del servicio.</li>
          <li class="my-4">
            Una vez finalizada la relación entre la empresa y el cliente los datos serán archivados y conservados, durante un
            <u>periodo tiempo mínimo</u> de 5 años, tras lo cual seguirá archivado o en su defecto serán devueltos íntegramente al cliente o autorizado legal. ´
          </li>
          <li
            class="my-4"
          >Debido a los cambios introducidos por la nueva normativa europea, le solicitamos que nos confirme su consentimiento expreso para continuar recibiendo comunicaciones comerciales que pudieran ser de su interés, en relación a ofertas de nuestros productos y/o servicios, vía correo electrónico o medios análogos.</li>
          <li
            class="my-4"
          >Le comunicamos que existe la posibilidad de realizar comunicaciones a través de sistemas de mensajería instantánea como Whatsapp con la finalidad de agilizar la gestión de los servicios contratados, para lo cual se solicita su consentimiento expreso.</li>
          <li class="my-4">
            Se le
            <u>informa que</u> se ha instalado un sistema de vigilancia mediante cámaras en el interior de este establecimiento, para garantizar la seguridad de todas aquellas personas que concurran al interior de las instalaciones de la empresa. Que la información obtenida y almacenada mediante el sistema de grabación se utilizará exclusivamente para fines de prevención,
            seguridad< y protección de personas y bienes que se encuentren en el establecimiento o instalación sometida a protección.
          </li>
          <li class="my-4">
            Los datos que facilito en su día serán incluidos en el Registro de Actividades de Tratamiento denominado Clientes de ALFRAN ARCHIPIELAGO SL con la finalidad de gestionar el servicio contratado, emisión de facturas, contacto vía teléfono, contacto a través de whatsApp, envíos de Email, Redes Sociales (Facebook/Instagram/twitter), Correo Electrónico, Página Web (
            <a
              href="#"
            >https://alfranarchipielago.com)</a>, todas las gestiones relacionadas con los clientes y manifiesto mi consentimiento expreso. También se me ha informado de la posibilidad de ejercitar los derechos de acceso,
            <u>rectificación, oposición,</u> limitación al tratamiento, supresión y portabilidad, indicándolo por escrito adjuntando copia de su DNI por ambas caras a la dirección notificada “ut supra”.
          </li>
          <li>
            Los datos personales serán cedidos por
            <b>ALFRAN ARCHIPIELAGO SL</b> a las entidades que prestan servicios al mismo.
          </li>
        </ul>
        <div class="mt-10">
          <p>
            Nombre fiscal:
            <span v-if="client">{{client.razonSocial}}</span>
          </p>
          <p>
            Nombre comercial:
            <span>{{client.nombre}}</span>
          </p>
          <p>
            NIF/ CIF / NIE/ Pasaporte:
            <span>{{client.dni}}</span>
          </p>
          <p>
            Nombre y apellidos del Cliente:
            <span class="fullname">
              <input class="fullname" v-model="fullName" type="text" />
            </span>
          </p>
          <p>
            Representante legal (menores de edad): DNI:
            <span></span>
          </p>
          <div>
            En
            <input class="city" type="text" label="Las Palmas" />
            , a {{ new Date().getDay() }} de {{ new Date().getMonth() + 1}} de {{ new Date().getFullYear() }}
          </div>
          <p class="mt-10">FIRMA:</p>
          <span>
            <v-col cols="4" class="text-center">
              <v-dialog v-model="dialog">
                <template v-slot:activator="{ on }">
                  <v-btn v-show="!data" v-on="on" rounded color="grey">FIRMA AQUI</v-btn>
                </template>

                <v-card height="500px">
                  <v-card-title class="headline grey lighten-2" primary-title>Protección de datos</v-card-title>
                  <v-container class="pa-0 d-flex justify-center">
                    <v-row class="text-center">
                      <v-col cols="12" class="mb-10">
                        <VueSignaturePad
                          id="signature"
                          width="100%"
                          height="300px"
                          ref="signaturePad"
                          :options="options"
                        />
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-btn outlined @click="clear">Limpiar</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn outlined @click="save">Guardar</v-btn>
                    </v-row>
                  </v-container>
                  <v-divider></v-divider>
                </v-card>
              </v-dialog>
              <v-img width="300px" height="150px" :src="data" />
            </v-col>
          </span>
        </div>
      </div>
    </v-col>
    <v-row class="justify-center text-center">
      <v-col cols="12" ref="clientData">
        <v-simple-table :dense="dense" :fixed-header="fixedHeader" class="tabla">
          <thead>
            <tr>
              <td colspan="2" class="t-title display-1 font-weight-medium">FICHA CLIENTE NUEVO</td>
            </tr>
          </thead>
          <tbody class="body">
            <tr>
              <span class="align">Nº RUTA:</span>
              <td width="60%">{{client.ruta}}</td>
            </tr>
            <tr class="grey">
              <span class="align">Nº ZONA:</span>
              <td>{{client.zona}}</td>
            </tr>
            <tr>
              <span class="align">NIF/CIF:</span>
              <td>{{client.dni}}</td>
            </tr>
            <tr class="grey">
              <span class="align">RAZON SOCIAL:</span>
              <td>{{client.razonSocial}}</td>
            </tr>
            <tr>
              <span class="align">NOMBRE COMERCIAL:</span>
              <td>{{client.nombre}}</td>
            </tr>
            <tr class="grey">
              <span class="align">DIRECCION:</span>
              <td>{{client.direccion}}</td>
            </tr>
            <tr>
              <span class="align">CODIGO POSTAL:</span>
              <td>{{client.cp}}</td>
            </tr>
            <tr class="grey">
              <span class="align">MUNICIPIO:</span>
              <td>{{client.municipio}}</td>
            </tr>
            <tr>
              <span class="align">LOCALIDAD:</span>
              <td>{{client.localidad}}</td>
            </tr>
            <tr class="grey">
              <span class="align">PROVINCIA:</span>
              <td>{{client.provincia}}</td>
            </tr>
            <tr>
              <span class="align">TELEFONO:</span>
              <td>{{client.telefono}}</td>
            </tr>
            <tr class="grey">
              <span class="align">EMAIL:</span>
              <td v-if="client.email">{{client.email}}</td>
            </tr>
            <tr>
              <span class="align">HORARIO REPARTO:</span>
              <td>{{client.horario}}</td>
            </tr>
            <tr class="grey">
              <span class="align">PERSONA CONTACTO:</span>
              <td>{{client.contacto}}</td>
            </tr>
            <tr>
              <span class="align">CARGO:</span>
              <td>{{client.cargo}}</td>
            </tr>
            <tr class="grey">
              <span class="align">Nº COPIAS:</span>
              <td>{{client.copias}}</td>
            </tr>
            <tr>
              <span class="align">CONDICIONES DE PAGO:</span>
              <td>{{client.pago}}</td>
            </tr>
            <tr class="grey">
              <span class="align">DESCUENTO MONDELEZ:</span>
              <td v-if="descuento === true">SI</td>
              <td v-else>No</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      <v-btn
        v-show="botonShow"
        class="my-10"
        color="light-blue darken-3"
        @click="downloadPDF"
        rounded
      >Descargar</v-btn>
    </v-row>
  </v-row>
</template>

<script>
import API from "@/services/api.js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default {
  data: () => ({
    descuento: false,
    botonShow: true,
    dense: false,
    fixedHeader: false,
    fullName: "",
    data: "",
    dialog: false,
    options: {
      penColor: "rgb(0, 0, 0)",
      dotSize: 2,
      minWidth: 2,
      throttle: 32,
      velocityFilterWeight: 1
    },
    client: false
  }),
  methods: {
    downloadPDF(quality = 1) {
      this.botonShow = false;
      const doc = new jsPDF("p", "mm", "a4");
      var canvasElement = document.createElement("canvas");
      var canvasElement2 = document.createElement("canvas");
      const page2 = this.$refs.clientData;
      html2canvas(this.$refs.content, { canvas: canvasElement }).then(function(
        canvas
      ) {
        doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
        doc.addPage();
        html2canvas(page2, { canvas: canvasElement2 }).then(function(canvas) {
          doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
          doc.save("proteccion.pdf");
        });
      });
    },
    clear() {
      this.$refs.signaturePad.clearSignature();
    },
    save() {
      this.dialog = false;
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      this.data = data;
    }
  },
  async created() {
    this.client = await API.getClient(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
#titulo {
  color: blue;
  text-decoration: underline;
}
#signature {
  border: double 1px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.city {
  width: 100px;
}
.fullname {
  width: 500px;
}
.pd-adjust {
  margin-left: 10%;
  margin-right: 10%;
}
.tabla {
  width: 90%;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
}
tr {
  font-weight: 500;
  font-size: 20px;
  height: 10px;
}
td {
  font-size: 20px !important;
  font-weight: 400;
}
.t-title {
  background-color: grey;
  color: white;
}
.body {
  text-align: start;
}
.align {
  margin-left: 40px;
}
</style>