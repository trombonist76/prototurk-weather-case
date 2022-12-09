import TurkeyMap from 'turkey-map-react'

export default function HomeMap(props) {
  const clickHandler = (city) => {
    props.selectCityHandler(city.plateNumber)
  }

  return (
    <div className='w-2/3'>
        <TurkeyMap onClick={clickHandler} showTooltip hoverable customStyle={{idleColor: '#444' ,hoverColor: '#fff'}}/>
    </div> 
  )
}