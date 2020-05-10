<template>
  <div>
    <h1>Admin</h1>
    <div class="row form-group ajouterVille">
      <div class="col-sm-2">Ajouter une ville :</div>

      <div class="col-sm-3">
        <input type="text" id="cityField" class="form-control" v-model="newCity" />
      </div>

      <div class="col-sm-2">
        <b-button @click="addCityAction">Ajouter</b-button>
      </div>
    </div>

    <ul>
      <li v-for="city of cities" :key="city.id">{{ city.name }}</li>
    </ul>
  </div>
</template>

<script>
import { CitiesService } from "@/services/Cities.service";

export default {
  data() {
    return {
      cities: [],
      newCity: ""
    };
  },
  async mounted() {
    this.cities = await CitiesService.getCities();
    console.log(this.cities);
  },
  methods: {
    async addCityAction() {
      const city = { name: this.newCity, iqa: 0 };
      const idCity = await CitiesService.addCity(city);
      city.id = idCity;
      this.cities.push(city);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>