import React from "react";

export default function HomeSearch(props) {
  return (
      <input
        value={props.value}
        onChange={props.inputHandler}
        placeholder="Şehirlerde ara"
        type="text"
        {...props}
      />
  );
}
