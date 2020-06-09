<template>
  <v-container>
    <v-row class="position" align="center" justify="center">
      <v-col cols="6">
        <v-img height="230px" src="@/assets/LOGO.png" />
      </v-col>
      <v-col cols="4">
        <v-card class="elevation-4 pa-5">
          <v-form>
            <v-text-field v-model="user" label="Usuario"></v-text-field>
            <v-text-field v-model="password" type="password" label="Contraseña"></v-text-field>
          </v-form>
          <v-card-actions>
            <v-btn color="pink" max-height="40px" @click="login" rounded dark>Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "@/services/api.js";

export default {
  data: () => ({
    user: "comercial",
    password: "af1311"
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
.position {
  margin-top: 25%;
  margin-right: 10%;
}
</style>