// Does not work yet, as rows do not get updated when props change
// May need static getDerivedStateFromProps

import React from "react"
import styled, { withTheme } from "styled-components"
import PropTypes from "prop-types"
import { colourPalette } from "brandColours"
import Button from "atoms/Button"
import { AgGridReact } from "ag-grid-react"
import HeaderComponents from "./HeaderComponents"
import CellRenderers from "./CellRenderers"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"

const Container = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  .ag-cell {
    overflow: visible;
  }
  .ag-cell-wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    /* 
    Limit cell value size when cell has a drag or select row checkbox, 
    otherwise overflow will not kick in and text will overflow to next cell
    */
    .ag-cell-value {
      width: 80%;
    }
  }
  &.ag-theme-balham .ag-cell-inline-editing {
    height: 100%;
  }
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.black.tint40.hex};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0%;
  display: ${props => (props.isDisabled ? "block" : "none")};
`
Overlay.defaultProps = {
  theme: colourPalette.examplePalette,
}
Overlay.displayName = "Overlay"

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  button {
    margin-right: 0.5rem;
  }
`

AgGridReact.prototype.areEquivalent = (a, b) => a === b

const frameworkComponents = {
  actionCellRenderer: CellRenderers.ActionCellRenderer,
  checkboxRenderer: CellRenderers.CheckboxRenderer,
  toggleRenderer: CellRenderers.ToggleRenderer,
  selectRenderer: CellRenderers.SelectRenderer,
  tooltipHeader: HeaderComponents.TooltipHeader,
  defaultTextEditor: CellRenderers.DefaultTextEditor,
}

export const gridOptions = {
  getRowStyle: params => ({ background: params.data.highlighted }),
}

export class WIPTableWithTheme extends React.PureComponent {
  state = { rows: this.props.rows, selectedRows: [] }

  onGridReady = params => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
  }

  addRow = defaultValues => {
    this.setState(
      state => {
        const existingKeys = state.rows.map(el => el.key)
        let newKey = 1
        if (existingKeys.length !== 0) {
          newKey = Math.max(...existingKeys) + 1
        }
        const newRow = { ...defaultValues, key: newKey }
        state.rows.push(newRow)
        return state
      },
      () => this.gridApi.setRowData(this.state.rows),
    )
  }

  onRowSelected = params => {
    this.setState(state => {
      if (params.node.isSelected()) {
        state.selectedRows.push(params.data.key)
        return state
      }
      return {
        ...state,
        selectedRows: state.selectedRows.filter(rowKey => rowKey !== params.data.key),
      }
    })
  }

  deleteRow = () => {
    this.setState(state => ({
      ...state,
      rows: state.rows.filter(row => !state.selectedRows.includes(row.key)),
    }))
  }

  renderColumns = () => {
    const { columns, isDisabled, theme } = this.props
    return columns.map(column => {
      const cellRenderer = !column.cellRendererSelector &&
        !column.cellRendererFramework && {
          cellRenderer: column.cellRenderer || "defaultTextEditor",
        }
      return {
        ...column,
        ...cellRenderer,
        sortable: true,
        filter: true,
        // only editable if it's not a custom cellRenderer and if the table is not disabled
        editable: !!(!column.cellRenderer && !column.cellRendererSelector && !isDisabled),
        cellRendererParams: {
          ...column.cellRendererParams,
          isDisabled,
          theme,
        },
        cellEditorParams: {
          ...column.cellEditorParams,
          isDisabled,
          theme,
        },
      }
    })
  }

  render() {
    const {
      addNewButtonMessage,
      deleteButtonMessage,
      displayAddNewButton,
      displayDeleteButton,
      defaultValues,
      onCellValueChanged,
      onRowDragEnd,
      onRowSelected,
      suppressDragLeaveHidesColumns,
      isDisabled,
    } = this.props
    return (
      <>
        <RowWrapper>
          {displayAddNewButton && (
            <Button onClick={() => this.addRow(defaultValues)}>{addNewButtonMessage}</Button>
          )}
          {displayDeleteButton && <Button onClick={this.deleteRow}>{deleteButtonMessage}</Button>}
        </RowWrapper>
        <Container className="ag-theme-balham">
          <AgGridReact
            {...this.props}
            rowData={this.state.rows}
            columnDefs={this.renderColumns()}
            rowDragManaged
            animateRows
            rowSelection="multiple"
            onGridReady={this.onGridReady}
            onRowDragEnd={event => onRowDragEnd(event.node.data.key, event.overIndex)}
            frameworkComponents={frameworkComponents}
            rowHeight={40}
            onRowSelected={onRowSelected || this.onRowSelected}
            onCellValueChanged={onCellValueChanged}
            gridOptions={this.props.gridOptions}
            suppressDragLeaveHidesColumns={suppressDragLeaveHidesColumns}
          />
          <Overlay isDisabled={isDisabled} />
        </Container>
      </>
    )
  }
}

WIPTableWithTheme.propTypes = {
  addNewButtonMessage: PropTypes.string,
  displayAddNewButton: PropTypes.bool,
  deleteButtonMessage: PropTypes.string,
  displayDeleteButton: PropTypes.bool,
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onCellValueChanged: PropTypes.func,
  onRowDragEnd: PropTypes.func,
  onRowSelected: PropTypes.func,
  suppressDragLeaveHidesColumns: PropTypes.bool,
  isDisabled: PropTypes.bool,
  theme: PropTypes.object,
  gridOptions: PropTypes.object,
  defaultValues: PropTypes.object,
}

WIPTableWithTheme.defaultProps = {
  displayAddNewButton: false,
  displayDeleteButton: false,
  suppressDragLeaveHidesColumns: true,
  isDisabled: false,
  theme: colourPalette.examplePalette,
  gridOptions,
}

const WIPTable = withTheme(WIPTableWithTheme)
WIPTable.displayName = "WIPTable"

export default WIPTable
