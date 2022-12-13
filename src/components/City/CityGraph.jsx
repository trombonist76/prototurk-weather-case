import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  LabelList,
  ResponsiveContainer
} from "recharts";
import { getHour } from "@/utils";

export default function CityGraph(props) {

  const handleClick = (data) => {
    if(!data) return
    const [ payloadObj ] = data.activePayload
    const selectedTimeRange = payloadObj.payload
    props.selectTimeRange(selectedTimeRange)
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={props.data}
        margin={{ top: 50, right: 50, left: 50, bottom: 0 }}
        onClick={handleClick}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={props.color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={props.color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={(label) => getHour(label.dt_txt)} tick={{fontSize:12}}/>
        <Tooltip fontSize='80%' content={<></>}/>

        <Area
          type="monotone"
          isAnimationActive={false}
          dataKey={props.dataKey}
          stroke={props.color}
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)">
            <LabelList 
              dataKey={props.dataKey} 
              position="top" 
              fill="#aaa" 
              offset={15} 
              formatter={(label) => `${parseInt(label)} ${props.suffix}`} 
              fontSize='80%'>
            </LabelList>
        </Area>
      </AreaChart>
    </ResponsiveContainer>
  );
}
