<template>
  <v-app>
    <v-container class="pa-0 d-flex justify-center">
      <v-row class="firma text-center">
        <v-col cols="12">
          <VueSignaturePad
            id="signature"
            width="100%"
            ref="signaturePad"
            :options="options"
          />
        </v-col>
          <v-spacer></v-spacer>
          <v-btn outlined @click="undo">Undo</v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined @click="save">Save</v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined @click="change">Change</v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined @click="resume">Resume</v-btn>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    options: {
      penColor: "#c0f"
    }
  }),
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();

      alert("Open DevTools see the save data.");
      console.log(isEmpty);
      console.log(data);
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

<style>
#signature {
  border: double 2px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.firma {
  max-width: 500px;
}
</style>