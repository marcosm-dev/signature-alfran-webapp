<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-col cols="12" class="auth d-flex justify-center">
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ on }">
              <v-img v-on="on" src="@/assets/LOGO.png" class="logo" />
            </template>
            <v-col class="mx-auto bg-dialog" cols="3">
              <v-text-field v-model="user" label="Usuario"></v-text-field>
              <v-text-field v-model="password" label="Contraseña"></v-text-field>
              <v-btn max-height="40px" rounded @click="login">Login</v-btn>
            </v-col>
          </v-dialog>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "@/services/api.js";

export default {
  data: () => ({
    dialog: false,
    user: "Alfran",
    password: "af1234"
  }),
  methods: {
    login() {
      let user = {
        identifier: this.user,
        password: this.password
      };
      API.login(user)
        .then(user => {
          localStorage.setItem("token", user.jwt);
          this.$router.push("/newclient");
        })
        .catch(err => console.error(err));
    }
  }
};
</script> 

<style lang="scss" scoped>
.logo {
  width: 300px;
  height: 250px;
}
.auth {
  height: 55vh;
  margin-top: 50%;
}
.bg-dialog {
  background-color: white;
  opacity: 0.7;
  border-radius: 10px 10px 10px 10px;
}
</style>