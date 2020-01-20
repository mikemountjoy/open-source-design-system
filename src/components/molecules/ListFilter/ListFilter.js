import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ListContainer, ListItem } from "../List"
import { colourPalette } from "../../../brandColours"

const SearchWrapper = styled.li`
  border-bottom: 1px solid ${props => props.theme.primary.light.hex};
`
SearchWrapper.defaultProps = {
  theme: colourPalette.examplePalette,
}
SearchWrapper.displayName = "SearchWrapper"

const Search = styled.input`
  border: none;
  width: 100%;
  font-size: 1rem;
  background-color: transparent;
  padding: 0.5rem 1rem;
  ::placeholder {
    color: ${props => props.theme.black.tint80.hex};
  }
`
Search.defaultProps = {
  theme: colourPalette.examplePalette,
}
Search.displayName = "Search"

const NoResults = styled.span`
  color: ${props => props.theme.black.tint80.hex};
`
NoResults.defaultProps = {
  theme: colourPalette.examplePalette,
}
NoResults.displayName = "NoResults"

class ListFilter extends React.PureComponent {
  state = {
    value: "",
  }

  filterList = event => {
    const { value } = event.target
    this.setState({
      value,
    })
  }

  renderItems = () => {
    const { padding, customErrorMessage, items } = this.props
    const error = (
      <ListItem padding={this.props.padding}>
        {customErrorMessage || <NoResults>No results</NoResults>}
      </ListItem>
    )
    if (!items) {
      return error
    }
    const result = items
      .filter(item => item.key.toLowerCase().includes(this.state.value.toLowerCase()))
      .map(item => (
        <ListItem padding={padding} key={item.key}>
          {item.value}
        </ListItem>
      ))
    return result.length >= 1 ? result : error
  }

  componentDidUpdate = prevProps => {
    if (this.props.items !== prevProps.items) {
      this.resetSearch()
    }
  }

  resetSearch = () => {
    this.setState({ value: "" })
  }

  render() {
    return (
      <ListContainer
        endingLine={this.props.endingLine}
        border={this.props.border}
        id={this.props.id}
        className={this.props.className}
      >
        <SearchWrapper>
          <Search
            placeholder="Search"
            type="text"
            value={this.state.value}
            onChange={this.filterList}
          />
        </SearchWrapper>
        {this.renderItems()}
      </ListContainer>
    )
  }
}

ListFilter.propTypes = {
  items: PropTypes.array,
  endingLine: PropTypes.bool,
  border: PropTypes.bool,
  padding: PropTypes.bool,
  customErrorMessage: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
}

export default ListFilter
