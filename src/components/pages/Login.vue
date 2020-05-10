<template>
  <div>
    <h1>Connexion</h1>
    <b-form @submit="submitAction">
      <b-form-group label="Adresse email">
        <b-form-input v-model="email" type="email"></b-form-input>
      </b-form-group>

      <b-form-group label="Mot de passe">
        <b-form-input v-model="password" type="password" />
      </b-form-group>
      <b-button type="submit" variant="primary">Connexion</b-button>

      <b-alert show v-if="messageError" variant="danger">{{ messageError }}</b-alert>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      messageError: false
    };
  },
  methods: {
      submitAction(evt) {
          evt.preventDefault();
          console.log({email:this.email, password:this.password});

      }
  },
};
</script>

<style lang="scss" scoped>
</style>