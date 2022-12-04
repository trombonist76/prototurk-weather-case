import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import KeyInput from "@/components/ApiKey/KeyInput";
import { useNavigate } from "react-router-dom";
import { validateKey } from "@/services/api";
import { setKey } from "@/store/apiKeySlice";
import "react-toastify/dist/ReactToastify.css";

export default function ApiKey() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [apiKey, setApiKey] = useState("");

  const inputHandler = (event) => {
    setApiKey(event.target.value);
  };

  const errorToast = () => {
    toast.error(
      "Lütfen geçerli bir API anahtarı girin.",
      { position: toast.POSITION.TOP_RIGHT, theme:"dark", className: "bg-dark-light"}
    )
  }

  const submitHandler = async () => {
    if (!apiKey) return;

    const isValid = await validateKey(apiKey);
    if (!isValid) {
      errorToast()
      return;
    }
    dispatch(setKey(apiKey));
    navigate("/");
  };
  return (
    <div className="h-full flex items-center justify-center">
      <div className="px-4 w-full md:w-2/3 lg:w-1/3 text-center flex flex-col gap-4">
        <KeyInput
          apiKey={apiKey}
          inputHandler={inputHandler}
          submitHandler={submitHandler}
        />
        <p className="text-slate-400">
          Devam etmek için lütfen{" "}
          <b className="text-white">openweathermap.org</b> adresinden aldığınız
          API anahtarınızı belirtin.
        </p>
      </div>
      <ToastContainer/>
    </div>
  );
}
