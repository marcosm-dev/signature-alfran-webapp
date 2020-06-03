<template>
  <v-row class="justify-center text-center">
    <v-col cols="10">
      <h2 id="titulo">CONSENTIMIENTO EXPRESO</h2>
      <div class="text-start mt-5">
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
          >class="my-4"Todos los datos recogidos cuentan con el compromiso de confidencialidad, con las medidas de seguridad establecidas legalmente, y bajo ningún concepto son cedidos o tratados por terceras personas, físicas o jurídicas, sin el previo consentimiento del cliente, tutor o representante legal, salvo en aquellos casos en los que fuere imprescindible para la correcta prestación del servicio.</li>
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
            <span></span>
          </p>
          <p>
            Nombre comercial:
            <span></span>
          </p>
          <p>
            NIF/ CIF / NIE/ Pasaporte:
            <span></span>
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
          <div class="city">
            En
            <input type="text" label="Las Palmas" />
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
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">Volver</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-img :src="data" />
            </v-col>
          </span>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    fullName: "",
    data: "",
    dialog: false,
    options: {
      penColor: "#000000"
    }
  }),
  methods: {
    clear() {
      this.$refs.signaturePad.clearSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
      this.data = data;
    },
    change() {
      this.options = {
        penColor: "#00f"
      };
    },
    resume() {
      this.options = {
        penColor: "#c0f"
      };
    }
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
  width: 500px;
}
.fullname {
  width: 500px;
}
</style>