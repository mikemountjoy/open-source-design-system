import React from "react"
import { shallow, mount } from "enzyme"
import toJson from "enzyme-to-json"
import { AgGridReact } from "ag-grid-react"
import "jest-styled-components"

import { WIPTableWithTheme, gridOptions } from "./WIPTable"

const columns = [
  {
    field: "firstName",
    headerName: "First Name",
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
  },
  { field: "lastName", headerName: "Last Name" },
].map(col => ({
  ...col,
  filter: true,
  sortable: true,
}))

const rows = [
  { firstName: "Teddy", lastName: "Bear", key: 1 },
  { firstName: "Arctic", lastName: "Monkeys", key: 3 },
  { firstName: "Poney Poney", lastName: "Run Run", key: 5 },
  { firstName: "Baby", lastName: "Shark", key: 2 },
]

const defaultValues = { firstName: "", lastName: "" }

const mockOnRowDragEnd = jest.fn()

const initialState = { rows, selectedRows: [] }

describe("WIPTableWithTheme Component Testing", () => {
  const component = shallow(
    <WIPTableWithTheme rows={rows} columns={columns} onRowDragEnd={mockOnRowDragEnd} />,
  )
  it("Should match the snapshot of <WIPTableWithTheme />", () => {
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it("Should handle onGridReady", () => {
    const params = {
      api: "gridApi",
      columnApi: "columnApi",
    }
    component.instance().onGridReady(params)
    expect(component.instance().gridApi).toEqual("gridApi")
    expect(component.instance().gridColumnApi).toEqual("columnApi")
  })

  it("Should handle onRowDragEnd", () => {
    const event = {
      node: {
        data: {
          key: "field",
        },
      },
      overIndex: "index",
    }
    component
      .find(AgGridReact)
      .props()
      .onRowDragEnd(event)
    expect(mockOnRowDragEnd).toHaveBeenCalledWith("field", "index")
  })

  it("getRowstyle", () => {
    const { getRowStyle } = gridOptions
    expect(getRowStyle({ data: { highlighted: "red" } })).toEqual({ background: "red" })
    expect(getRowStyle({ data: {} })).toEqual({})
  })

  it("highlights rows if specified", () => {
    const highlightComp = shallow(
      <WIPTableWithTheme
        rows={[...rows, { firstName: "Teddy", lastName: "Bear", hightlighted: "red" }]}
        columns={columns}
        onRowDragEnd={mockOnRowDragEnd}
      />,
    )
    const highlightTree = toJson(highlightComp)
    expect(highlightTree).toMatchSnapshot()
  })

  it("should render an overlay if table is disabled", () => {
    const highlightComp = mount(
      <WIPTableWithTheme
        rows={[...rows, { firstName: "Teddy", lastName: "Bear", hightlighted: "red" }]}
        columns={columns}
        onRowDragEnd={mockOnRowDragEnd}
        isDisabled
      />,
    )
    expect(highlightComp.find("Overlay")).toHaveStyleRule("display", "block")
  })

  it("should render no overlay if table is not disabled", () => {
    const highlightComp = mount(
      <WIPTableWithTheme
        rows={[...rows, { firstName: "Teddy", lastName: "Bear", hightlighted: "red" }]}
        columns={columns}
        onRowDragEnd={mockOnRowDragEnd}
      />,
    )
    expect(highlightComp.find("Overlay")).toHaveStyleRule("display", "none")
  })

  it("should add an empty row to the table", () => {
    const componentWithAddNewButton = shallow(
      <WIPTableWithTheme
        displayAddNewButton
        addNewButtonMessage="Add New"
        defaultValues={defaultValues}
        rows={rows}
        columns={columns}
        onRowDragEnd={mockOnRowDragEnd}
      />,
    )
    const gridApiParams = { api: { setRowData: jest.fn() } }
    componentWithAddNewButton
      .find("AgGridReact")
      .props()
      .onGridReady(gridApiParams)
    componentWithAddNewButton
      .findWhere(node => node.name() === "Button" && node.text() === "Add New")
      .simulate("click")
    expect(gridApiParams.api.setRowData).toHaveBeenCalledWith(rows)
  })

  it("should select and unselect rows on the table", () => {
    const selectedRow = { firstName: "Teddy", lastName: "Bear", key: 1 }
    const onRowSelectedParams = { node: { isSelected: () => true }, data: selectedRow }
    component
      .find("AgGridReact")
      .props()
      .onRowSelected(onRowSelectedParams)
    expect(component.state().selectedRows).toEqual([1])
    const onRowUnselectedParams = { ...onRowSelectedParams, node: { isSelected: () => false } }
    component
      .find("AgGridReact")
      .props()
      .onRowSelected(onRowUnselectedParams)
    expect(component.state().selectedRows).toEqual([])
  })

  it("should delete the selected rows on the table", () => {
    const componentWithDeleteButton = shallow(
      <WIPTableWithTheme
        displayDeleteButton
        deleteButtonMessage="Delete Selected"
        rows={rows}
        columns={columns}
        onRowDragEnd={mockOnRowDragEnd}
      />,
    )
    componentWithDeleteButton.setState({ ...initialState, selectedRows: [1, 3] })
    componentWithDeleteButton
      .findWhere(node => node.name() === "Button" && node.text() === "Delete Selected")
      .simulate("click")
    const nonDeletedRows = [
      { firstName: "Poney Poney", lastName: "Run Run", key: 5 },
      { firstName: "Baby", lastName: "Shark", key: 2 },
      { firstName: "", lastName: "", key: 6 },
    ]
    expect(componentWithDeleteButton.state().rows).toEqual(nonDeletedRows)
  })
})
