import IconWeather from "@/components/IconWeather"

export default function CityCard(props) {
  const max = parseInt(props.max)
  const min = parseInt(props.min)
  return (
    <div className='flex flex-col gap-4 items-center hover:bg-slate-700 p-6 rounded-md flex-1'>
        <span className='font-bold'>{props.day}</span>
        <IconWeather iconId={props.iconId}/>
        <div className='flex gap-2 text-sm'>
            <span>{max} 'C</span>
            <span className='text-slate-500'>{min} 'C</span>
        </div>
    </div>
  )
}
