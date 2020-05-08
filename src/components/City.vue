<template>
  <div>
    <b-card :title="city.name" :class="color + ' cityCard'">
      <b-card-text v-if="!loading">Qualité de l'air : {{ city.iqa }}</b-card-text>
      <b-button @click="deleteCityAction" variant="dark">Supprimer</b-button>
      <b-spinner v-if="loading" label="Spinning"></b-spinner>
    </b-card>
  </div>
</template>

<script>
import { AirQualityService } from "@/services/AirQuality.service";

export default {
  props: {
    city: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      color: "",
      loading: false
    };
  },
  async mounted() {
    this.loading = true;
    const infosCity = await AirQualityService.getAirQuality(this.city.name);
    this.loading = false;

    this.city.iqa = infosCity.aqi;

    if (this.city.iqa <= 30) this.color = "pollution-faible";
    if (this.city.iqa > 30 && this.city.iqa <= 50)
      this.color = "pollution-medium";
    if (this.city.iqa > 50) this.color = "pollution-forte";
  },
  methods: {
    deleteCityAction() {
      this.$emit("deleteCity", this.city);
    }
  }
};
</script>

<style lang="scss" scoped>
.pollution-faible {
  background: rgb(9, 141, 9);
  color: white;
}

.pollution-medium {
  background: rgb(248, 162, 3);
  color: white;
}

.pollution-forte {
  background: red;
  color: white;
}

.cityCard {
  margin-bottom: 2em;
}
</style>