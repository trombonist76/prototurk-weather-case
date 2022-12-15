import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CityDropdown from "./CityDropdown";

export default function CityHeader() {
  const navigate = useNavigate()
  const returnBackHandler = () => {
    navigate("/")
  }

  return (
    <div className="flex items-center justify-between h-24 bg-dark-light lg:px-20 px-2">
      <button onClick={returnBackHandler} className="flex gap-2 items-center">
        <AiOutlineArrowLeft />
        Geri Dön
      </button>
      <CityDropdown/>
    </div>
  );
}
