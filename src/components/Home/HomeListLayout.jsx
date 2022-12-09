import HomeSearch from "./HomeSearch";
import HomeCity from "./HomeCity";
import HomeNotFound from "./HomeNotFound";

export default function HomeListLayout(props) {
  return (
    <>
      <HomeSearch
        className="w-1/3 bg-transparent border-2 border-slate-500 rounded-sm p-2 outline-none"
        value={props.inputValue}
        inputHandler={props.inputHandler}
      />
      {props.filteredCities.length > 0 ? (
        <div className="grid grid-cols-4 w-4/5 2xl:w-2/3 gap-3">
          {props.filteredCities.map((city) => (
            <HomeCity selectCityHandler={props.selectCityHandler} city={city} key={city.id} />
          ))}
        </div>
      ) : (
        <HomeNotFound clearFilter={props.clearInput} />
      )}
    </>
  );
}