import React from "react"
import { shallow, mount } from "enzyme"
import toJson from "enzyme-to-json"

import TimezoneSelect, {
  getKeyFromTimezone,
  getCountryForTimezone,
  getLabel,
  Timezone,
} from "./TimezoneSelect"

import { timezones } from "./timezones"

describe("TimezoneSelect Component Testing", () => {
  it("Should match the snapshot of <Timezone />", () => {
    const timezoneComponent = mount(
      <Timezone timezoneKey="(GMT+10:00/DST+9:00) Africa" values={["Abidjan", "Addis Ababa"]} />,
    )
    const tree = toJson(timezoneComponent)
    expect(tree).toMatchSnapshot()
  })

  it("Should handle getKeyFromTimezone for positive GMT", () => {
    const timezone = timezones.rows[200]
    const key = getKeyFromTimezone(timezone)
    expect(key).toEqual("(GMT+4:00/DST+5:00) Asia")
  })

  it("Should handle getKeyFromTimezone for negative GMT", () => {
    const timezone = timezones.rows[57]
    const key = getKeyFromTimezone(timezone)
    expect(key).toEqual("(GMT-3:00/DST-3:00) America")
  })

  it("Should handle getCountryForTimezone", () => {
    const timezone = timezones.rows[2]
    const country = getCountryForTimezone(timezone)
    expect(country).toEqual("Addis Ababa")
  })

  it("Should handle getLabel and return only the 5 first elements", () => {
    const values = ["Abidjan", "Accra", "Addis_Ababa", "Algiers", "Asmera", "Bamako", "Bangui"]
    const label = getLabel(values)
    expect(label).toEqual("Abidjan, Accra, Addis_Ababa, Algiers, Asmera")
  })

  const component = shallow(<TimezoneSelect />)
  it("Should match the snapshot of <TimezoneSelect />", () => {
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it("Should match the snapshot of <TimezoneSelect /> without formik", () => {
    const nonFormikComponent = shallow(<TimezoneSelect useFormik={false} />)
    const tree = toJson(nonFormikComponent)
    expect(tree).toMatchSnapshot()
  })
})
