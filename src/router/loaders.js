import cities from "@/assets/data/cities.json";

export function cityLoader(id) {
  const city = cities.find((city) => city.id === parseInt(id));
  return city
}
