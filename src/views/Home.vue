<template>
  <v-container class="position">
    <v-img src="@/assets/LOGO.png" />
    <v-row class="ml-10">
      <v-col>
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
  margin: auto;
  display: flex;
  width: 50%;
  height: 50%;
  margin-top: 10%;
}
</style>