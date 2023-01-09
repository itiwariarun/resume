import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Widget = ({ name, percentage }) => {
  return (
    <>
      <CircularProgressbar
        className="w-24 h-24"
        styles={buildStyles({
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Text size
          textSize: "16px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgb(115,115,115)`,
          textColor: "#3b3a3a",
          trailColor: "#adb7c9",
        })}
        value={percentage}
        text={name}
      />
    </>
  );
};

export default Widget;
