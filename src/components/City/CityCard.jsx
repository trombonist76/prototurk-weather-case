import IconWeather from "@/components/IconWeather"
import classNames from "classnames"

export default function CityCard(props) {
  const max = parseInt(props.max)
  const min = parseInt(props.min)
  return (
    <div onClick={props.setSelectedDay} className={classNames(
      "flex flex-col gap-4 items-center hover:bg-slate-700 cursor-pointer p-6 rounded-md flex-1",
      {
        "bg-slate-700": props.isActive
      }
    )}>
        <span className='font-bold'>{props.day}</span>
        <IconWeather iconId={props.iconId}/>
        <div className='flex gap-2 text-sm'>
            <span>{max} °C</span>
            <span className='text-slate-500'>{min} °C</span>
        </div>
    </div>
  )
}
