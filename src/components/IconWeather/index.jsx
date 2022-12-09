import classNames from 'classnames';
import { WeatherIcon } from 'weather-react-icons';
import 'weather-react-icons/lib/css/weather-icons.css';

export default function IconWeather(props) {
  return (
    <WeatherIcon iconId={props.iconId} 
    className={classNames("text-6xl",{
      "text-yellow-300": props.iconId === 800, 
      "text-blue-300": props.iconId === 500, 
      "text-red-300": props.iconId === 801, 
      "text-red-400": props.iconId === 802, 
      "text-blue-400": props.iconId === 803, 
      "text-indigo-400": props.iconId === 804, 
    })} 
    name="owm" night />
  )
}
