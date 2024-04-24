/* eslint-disable react/prop-types */
import { memo } from "react";

const ProgressBar = ({ percent, onCompleted }) => {
  let finalPercent = percent > 100 ? 100 : percent;

  if (percent >= 100) {
    onCompleted();
  }
  return (
    <>
      <div className="progress-bar">
        <span style={{ color: `${percent >= 49 && "white"}` }}>
          {finalPercent}%
        </span>
        <div
          className="progress"
          style={{
            // width: `${finalPercent}%`
            transform: `scaleX(${finalPercent}%)`,
            transformOrigin: "left",
          }}
        ></div>
      </div>
    </>
  );
};

export default memo(ProgressBar);
