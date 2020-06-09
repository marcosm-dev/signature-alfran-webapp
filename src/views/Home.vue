<template>
  <v-container>
    <v-card class="elevation-2 position">
      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-img height="230px" src="@/assets/LOGO.png" />
        </v-col>
        <v-col cols="4">
          <v-form>
            <v-text-field v-model="user" label="Usuario"></v-text-field>
            <v-text-field v-model="password" type="password" label="Contraseña"></v-text-field>
          </v-form>
          <v-card-actions>
            <v-btn color="pink" max-height="40px" @click="login" rounded dark>Login</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
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
  margin-left: 10%;
}
</style>