import weatherAxios from "./baseHTTP";

export const validateKey = async (apiKey) => {
  try {
    const result = await weatherAxios.get("weather?", {
      params: {
        lat: 0,
        lon: 0,
        appid: apiKey,
      },
    });
    const isValid = result.data.cod === 200;
    return isValid;
  } catch (error) {
    return false;
  }
};
