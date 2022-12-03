import axios from "axios";

const weatherAxios = axios.create({
  baseURL: "https://openweathermap.org/data/2.5/",
});

export default weatherAxios