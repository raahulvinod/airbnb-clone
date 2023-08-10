'use client';

import { DateRange, Range, RangeKeyDict } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalenderProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disableDates?: Date[];
}

const Calender: React.FC<CalenderProps> = ({
  value,
  onChange,
  disableDates,
}) => {
  return (
    <DateRange
      rangeColors={['#262626']}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disableDates}
    />
  );
};

export default Calender;
