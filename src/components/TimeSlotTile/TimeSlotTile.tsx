import React from "react";

// @ts-ignore
import style from "./TimeSlotTile.module.scss";

interface TimeSlotProps {
  time: string;
  backColor?: string;
  fontColor?: string;
  noBorder?: boolean;
  cursorType?: string;
}

export const TimeSlotTile: React.FC<TimeSlotProps> = ({
  time,
  backColor,
  fontColor,
  noBorder,
  cursorType,
}) => {
  return (
    <div
      className={style["time-slot__container"]}
      style={{
        color: fontColor,
        backgroundColor: backColor,
        border: noBorder ? "none" : "",
        cursor: cursorType,
      }}
    >
      {time}
    </div>
  );
};
