import weatherAxios from "./baseHTTP";

export const validateKey = async (apiKey) => {
  try {
    const result = await weatherAxios.get("weather?", {
      params: {
        lat: 0,
        lon: 0,
        appid: apiKey
      },
    });
    const isValid = result.data.cod === 200;
    return isValid;
  } catch (error) {
    return false;
  }
};

export async function fetchWeatherData(city, apiKey){
  const result = await weatherAxios.get("forecast?",{
    params: {
      lat: city.latitude,
      lon: city.longitude,
      appid: apiKey,
      units: "metric",
      lang: "tr"
    },
  })

  return result.data
}
