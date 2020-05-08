<template>
  <div>
    <div>
      <b-card :title="city.name" :class="color">
        <b-card-text>Qualité de l'air : {{ city.iqa }}</b-card-text>
      </b-card>
    </div>
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
      color: ""
    };
  },
  async mounted() {
    const infosCity = await AirQualityService.getAirQuality(this.city.name);

    this.city.iqa = infosCity.aqi;

    if (this.city.iqa <= 30) this.color = "pollution-faible";
    if (this.city.iqa > 30 && this.city.iqa <= 50)
      this.color = "pollution-medium";
    if (this.city.iqa > 50) this.color = "pollution-forte";
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
</style>