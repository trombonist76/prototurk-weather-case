import React from "react";

export default function HomeSearch(props) {
  return (
      <input
        placeholder="Şehirlerde ara"
        type="text"
        onChange={props.inputHandler}
        value={props.value}
        className={props.className}
      />
  );
}
