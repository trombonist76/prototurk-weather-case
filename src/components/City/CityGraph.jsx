import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  LabelList,
  ResponsiveContainer
} from "recharts";
import { getHour } from "@/utils";
import { useEffect } from "react";
import useMobile from "@/hooks/useMobile";

export default function CityGraph(props) {
  const isMobile = useMobile()
  const handleClick = (data) => {
    if (!data) return;
    const [payloadObj] = data.activePayload;
    const selectedTimeRange = payloadObj.payload;
    props.selectTimeRange(selectedTimeRange);
  };

  useEffect(() => {
    props.selectTimeRange(props.data.at(0));
  }, [props.data]);

  return (
    <ResponsiveContainer width="100%" height={isMobile ? 250 : 400}>
      <AreaChart
        data={props.data}
        margin={{ top: 20, right: 20, left: 20, bottom: 0 }}
        onClick={handleClick}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={props.color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={props.color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey={(label) => getHour(label.dt_txt)}
          tick={{ fontSize: 12 }}
        />
        <Tooltip fontSize="80%" content={<></>} />

        <Area
          type="monotone"
          isAnimationActive={false}
          dataKey={props.dataKey}
          stroke={props.color}
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)"
        >
          <LabelList
            dataKey={props.dataKey}
            position="top"
            fill="#aaa"
            offset={15}
            formatter={(label) => `${parseInt(label)} ${props.suffix}`}
            fontSize="80%"
          ></LabelList>
        </Area>
      </AreaChart>
    </ResponsiveContainer>
  );
}
