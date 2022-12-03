import weatherAxios from "./baseHTTP";

export const validateKey = async (apiKey) => {
  const result = await weatherAxios.get("weather?", {
    params: {
      lat: 0,
      lon: 0,
      appid: apiKey,
    },
  });

  console.log('result', result)
};

//https://api.openweathermap.org/data/2.5/weather?lat=0&lon=0&appid=656be5f68845e597030755e0b04ca27e
