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