import classNames from "classnames";

export default function HomeSwitch(props) {
  return (
    <div className="sticky top-20">
      <button className="flex items-center justify-center gap-2 bg-dark p-2 rounded-full transition-colors">
        <span
          onClick={props.toggleLayout}
          className={classNames("py-1.5 px-4 rounded-full transition-colors", {
            "bg-indigo-500": !props.isMapLayout,
          })}
        >
          Şehir Listesi
        </span>
        <span
          onClick={props.toggleLayout}
          className={classNames("py-1.5 px-4 rounded-full transition-colors", {
            "bg-indigo-500": props.isMapLayout,
          })}
        >
          Harita
        </span>
      </button>
    </div>
  );
}
