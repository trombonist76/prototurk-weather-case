import IconWeather from "@/components/IconWeather"
import classNames from "classnames"

export default function CityCard(props) {
  const max = parseInt(props.max)
  const min = parseInt(props.min)
  return (
    <div onClick={props.setSelectedDay} className={classNames(
      "w-36 lg:flex-auto flex mb-4 flex-shrink-0 float-left flex-col gap-4 items-center hover:bg-slate-700 transition-colors cursor-pointer p-6 rounded-md",
      {
        "bg-slate-700": props.isActive
      }
    )}>
        <span className='font-bold'>{props.day}</span>
        <IconWeather className={"text-4xl sm:text-6xl"} iconId={props.iconId}/>
        <div className='flex gap-2 text-xs sm:text-sm'>
            <span>{max} °C</span>
            <span className='text-slate-500'>{min} °C</span>
        </div>
    </div>
  )
}
