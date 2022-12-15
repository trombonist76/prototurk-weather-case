import TurkeyMap from 'turkey-map-react'

export default function HomeMap(props) {
  const clickHandler = (city) => {
    props.selectCityHandler(city.plateNumber)
  }

  return (
    <div className='w-full sm:w-3/4 lg:w-3/5'>
      <TurkeyMap onClick={clickHandler} showTooltip hoverable customStyle={{idleColor: '#444' ,hoverColor: '#fff'}}/>
    </div> 
  )
}