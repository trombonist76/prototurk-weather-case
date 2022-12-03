import { AiOutlineArrowRight } from "react-icons/ai";

export default function KeyInput(props) {
    
  return (
    <div className="flex h-24 items-center p-4 rounded-full overflow-hidden border-2 gap-2 text-white border-slate-500 bg-dark-light">
      <input
        className="p-6 text-2xl flex-1 outline-none bg-inherit"
        type="text"
        onChange={props.inputHandler}
      />
      <button
        onClick={props.submitHandler}
        className="rounded-full bg-indigo-500 ml-auto text-3xl w-16 h-16 grid place-items-center">
        <AiOutlineArrowRight />
      </button>
    </div>
  );
}
