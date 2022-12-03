import React, { useState } from "react";
import KeyInput from "../components/KeyInput";
import { validateKey } from "../services/api";
import { setKey } from "../store/apiKeySlice";

export default function ApiKey() {
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState()

  const inputHandler = (event) => {
    setApiKey(event.target.value);
  };

  const submitHandler = async () => {
    setKey(apiKey);
    const isValid = await validateKey(apiKey)

    if(!isValid){
      console.log("valid Değil")
    }
  };
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-1/3 text-center flex flex-col gap-4">
        <KeyInput
          inputHandler={inputHandler}
          submitHandler={submitHandler}
        ></KeyInput>
        <p className="text-slate-400">
          Devam etmek için lütfen <b className="text-white">openweathermap.org</b> adresinden aldığınız
          API anahtarınızı belirtin.
        </p>
      </div>
    </div>
  );
}
