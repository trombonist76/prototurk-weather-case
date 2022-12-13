import { BallTriangle } from  'react-loader-spinner'

export default function Loading(props) {
  return (
    <div className="h-full grid place-items-center">
      <BallTriangle
        height={150}
        width={150}
        radius={5}
        color={props.color}
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
}
