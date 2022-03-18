import React from 'react';

import { TimeSlotTile } from '@components/TimeSlotTile/TimeSlotTile';

import './TimeSlotSelection.scss';

interface TimeSlotSelectionProps {
  instances: number;
}

export const TimeSlotSelection: React.FC<TimeSlotSelectionProps> = ({ instances }) => {
  return (
    <div className="time-slot-selection__container">
      <TimeSlotTile
        time={'Set Duration'}
        backColor={'#3F3F3F'}
        fontColor={'#D2D2D2'}
        noBorder={true}
        cursorType={'default'}
      />
      {[...Array(instances)].map((e, i) => (
        <TimeSlotTile key={i} time={'10:00 AM IST'} />
      ))}
    </div>
  );
};
