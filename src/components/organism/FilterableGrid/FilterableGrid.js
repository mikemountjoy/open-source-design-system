import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { colourPalette } from "brandColours"

const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`
SearchContainer.displayName = "SearchContainer"

const Label = styled.label`
  color: ${props => props.theme.primary.main.hex};
`
Label.defaultProps = {
  theme: colourPalette.examplePalette,
}
Label.displayName = "Label"

const Search = styled.input`
  margin-left: 1rem;
  border: 1px solid ${props => props.theme.secondary.main.hex};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  color: ${props => props.theme.black.main.hex};
  ::placeholder {
    color: ${props => props.theme.black.tint80.hex};
  }
`
Search.defaultProps = {
  theme: colourPalette.examplePalette,
}
Search.displayName = "Search"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.itemsPerRow}, 1fr)`};
  grid-gap: 1rem;
  height: ${props => (props.height ? props.height : "auto")};
  overflow: auto;
`
GridContainer.displayName = "GridContainer"

// Though not used, it makes testing easier
const GridItem = styled.div``
GridItem.displayName = "GridItem"

export const NoResults = styled.span`
  color: ${props => props.theme.black.tint80.hex};
`
NoResults.defaultProps = {
  theme: colourPalette.examplePalette,
}
NoResults.displayName = "NoResults"

class FilterableGrid extends React.Component {
  state = {
    initialItems: this.props.items,
    items: this.props.items,
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.items !== prevState.initialItems) {
      return {
        initialItems: nextProps.items,
        items: nextProps.items,
      }
    }
    return null
  }

  filterItems = event => {
    const value = event.target.value.toLowerCase()
    this.setState(prevState => ({
      items: prevState.initialItems.filter(item => item.key.toLowerCase().includes(value)),
    }))
  }

  renderItems = items => {
    if (items && items.length > 0) {
      return items.map(item => <GridItem key={item.key}>{item.value}</GridItem>)
    }
    return <NoResults>{this.props.emptyMessage}</NoResults>
  }

  render() {
    const { label, itemsPerRow, height, id, className } = this.props
    return (
      <div className={className}>
        <SearchContainer>
          <Label>
            {label}
            <Search id={id} placeholder="Search" type="text" onChange={this.filterItems} />
          </Label>
        </SearchContainer>
        <GridContainer itemsPerRow={itemsPerRow} height={height}>
          {this.renderItems(this.state.items)}
        </GridContainer>
      </div>
    )
  }
}

FilterableGrid.displayName = "FilterableGrid"

FilterableGrid.propTypes = {
  itemsPerRow: PropTypes.number,
  items: PropTypes.array,
  label: PropTypes.string,
  height: PropTypes.string,
  emptyMessage: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
}

FilterableGrid.defaultProps = {
  itemsPerRow: 5,
  label: "Search",
  emptyMessage: "No results",
}

export default FilterableGrid
