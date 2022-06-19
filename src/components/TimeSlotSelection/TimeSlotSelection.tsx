import React from "react";

import { TimeSlotTile } from "@components/TimeSlotTile/TimeSlotTile";

import "./TimeSlotSelection.module.scss";

interface TimeSlotSelectionProps {
  instances: number;
}

export const TimeSlotSelection: React.FC<TimeSlotSelectionProps> = ({
  instances,
}) => {
  return (
    <div
      className="time-slot-selection__container"
      style={{
        maxHeight: "310px",
        overflowY: "scroll",
        marginTop: "7px",
        width: "230px",
        marginLeft: "-15px",
      }}
    >
      <TimeSlotTile
        time={"Pick Time"}
        backColor={"#3F3F3F"}
        fontColor={"#D2D2D2"}
        noBorder={true}
        cursorType={"default"}
      />
      {[...Array(instances)].map((e, i) => (
        <TimeSlotTile key={i} time={"10:00 AM IST"} />
      ))}
    </div>
  );
};
