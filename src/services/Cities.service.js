import { db } from "@/firebase";

export const CitiesService = {
  async getCities() {
    const citiesRef = db.collection("cities");
    const citiesDoc = await citiesRef.get();

    const cities = citiesDoc.docs.map((city) =>
      Object.create({ ...city.data(), id: city.id })
    );

    return cities;
  },
  async addCity(city) {
    const citiesRef = db.collection("cities");
    const result = await citiesRef.add(city);
    return result.id;
  },
};
