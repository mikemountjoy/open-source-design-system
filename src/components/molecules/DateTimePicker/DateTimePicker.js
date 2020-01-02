import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  * input {
    width: 180px;
    font-size: 13px;
  }
`
Container.displayName = "DateTimePickerContainer"

const DateTimePicker = props => {
  const { selectedDate, onChange, showTimeSelect, minDate, maxDate, ...others } = props

  return (
    <Container>
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
  )
}

DateTimePicker.displayName = "DateTimePicker"

DateTimePicker.defaultProps = {
  showTimeSelect: true,
}

DateTimePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  showTimeSelect: PropTypes.bool,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
}

export default DateTimePicker
