<template>
  <div>
    <h1>Connexion</h1>
    <b-form @submit="submitAction">
      <b-form-group label="Adresse email">
        <b-form-input @change="initMessageError" v-model="email" type="email"></b-form-input>
      </b-form-group>

      <b-form-group label="Mot de passe">
        <b-form-input @change="initMessageError" v-model="password" type="password" />
      </b-form-group>
      <b-button type="submit" variant="primary">Connexion</b-button>
      <b-button type="button" variant="secondary" to="/create-account">Créer compte</b-button>

      <b-alert show v-if="messageError" variant="danger">{{ messageError }}</b-alert>
    </b-form>
  </div>
</template>

<script>
import { auth } from "@/firebase";
export default {
  data() {
    return {
      email: null,
      password: null,
      messageError: false
    };
  },
  methods: {
    async submitAction(evt) {
      evt.preventDefault();
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ path: "/admin" });
      } catch (error) {
        this.messageError = "Erreur de Login/Mot de passe";
      }
    },
    initMessageError() {
        this.messageError = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>