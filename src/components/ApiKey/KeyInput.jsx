import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function KeyInput(props) {
  
  return (
    <div className="flex h-16 md:h-24 items-center p-3 rounded-full border-2 gap-2 text-white border-slate-500 bg-dark-light text-xs md:text-xl">
      <input
        className="h-full px-3 bg-transparent flex-1 outline-none text-lg sm:text-2xl tracking-widest"
        placeholder="Api anahtarını yazın"
        type="text"
        value={props.apiKey}
        onChange={props.inputHandler}
      />
      <button
        disabled={!props.apiKey}
        onClick={props.submitHandler}
        className="ml-auto grid place-items-center cursor-pointer disabled:cursor-not-allowed rounded-full bg-indigo-500 transition-colors disabled:bg-indigo-400">
        <IconContext.Provider value={{size: '1.5em', style:{margin: '1em'}}}>
          <AiOutlineArrowRight/>
        </IconContext.Provider>
      </button>
    </div>
  );
}
