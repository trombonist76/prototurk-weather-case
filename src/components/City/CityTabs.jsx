import classNames from "classnames";

export default function CityOptions(props) {
  
  return (
    <div className="flex items-center gap-2">
      {props.tabs.map((tab, index) => {
        return (
          <button
            onClick={() => props.setActiveTab(tab)}
            className={classNames("border-b-2", {
              "border-yellow-400": props.activeTab.name === tab.name,
              "border-transparent": props.activeTab.name !== tab.name,
            })}
            key={index}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}
