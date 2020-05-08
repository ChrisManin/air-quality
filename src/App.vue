<template>
  <div id="app">
    <div class="container">
      <h1>Mesure de la qualité de l'air</h1>
      <div class="row">
        <div v-for="city of cities" :key="city.index" class="col-sm-4">
          <City :city="city" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import City from "@/components/City";

export default {
  name: "App",
  components: {
    City
  },
  data() {
    return {
      cities: [
        { name: "Lyon", iqa: 40 },
        { name: "Paris", iqa: 70 },
        { name: "Grenoble", iqa: 10 }
      ]
    };
  }
};
</script>

<style>
</style>
