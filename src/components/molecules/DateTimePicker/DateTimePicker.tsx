import React from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styled from "styled-components";

const Container = styled.div`
  * input {
    width: 180px;
    font-size: 13px;
  }
`;
Container.displayName = "DateTimePickerContainer";

export interface IDateTimePicker extends Omit<ReactDatePickerProps, "maxDate" | "minDate"> {
  selectedDate?: Date | null;
  minDate: string | number | Date;
  maxDate: string | number | Date;
}
export const DateTimePicker: React.FunctionComponent<IDateTimePicker> = props => {
  const { selectedDate, onChange, showTimeSelect, minDate, maxDate, ...others } = props;

  return (
    <Container className="DateTimePicker">
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        showTimeSelect={showTimeSelect}
        showYearDropdown
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="do MMM yyyy HH:mm"
        timeCaption="time"
        minDate={new Date(minDate)}
        maxDate={new Date(maxDate)}
        {...others}
      />
    </Container>
  );
};

DateTimePicker.displayName = "DateTimePicker";

DateTimePicker.defaultProps = {
  showTimeSelect: true,
};
