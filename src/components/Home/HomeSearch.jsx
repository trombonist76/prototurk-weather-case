import React from "react";

export default function HomeSearch(props) {
  return (
      <input
        placeholder="Şehirlerde ara"
        type="text"
        onChange={props.inputHandler}
        defaultValue={props.value}
        className={props.className}
      />
  );
}
