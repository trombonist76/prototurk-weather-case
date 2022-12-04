import axios from "axios";

const weatherAxios = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export default weatherAxios