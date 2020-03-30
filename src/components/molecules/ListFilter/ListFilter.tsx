import React from "react";
import styled from "styled-components";
import { ListContainer, ListItem } from "../List";
import { colourPalette } from "../../../brandColours";

const isString = (value: string | JSX.Element): value is string =>
  (value as string).length !== undefined;

const isJSXElement = (value: string | JSX.Element): value is JSX.Element =>
  (value as JSX.Element).props !== undefined;

const SearchWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.primary.light.hex};
`;
SearchWrapper.defaultProps = {
  theme: colourPalette.examplePalette,
};
SearchWrapper.displayName = "SearchWrapper";

const Search = styled.input`
  border: none;
  width: 100%;
  font-size: 1rem;
  background-color: transparent;
  padding: 0.5rem 1rem;
  margin: 0.55rem 0;
  ::placeholder {
    color: ${props => props.theme.black.tint80.hex};
  }
`;
Search.defaultProps = {
  theme: colourPalette.examplePalette,
};
Search.displayName = "Search";

const NoResults = styled.span`
  color: ${props => props.theme.black.tint80.hex};
`;
NoResults.defaultProps = {
  theme: colourPalette.examplePalette,
};
NoResults.displayName = "NoResults";

export interface IListFilterItems {
  key: string;
  value: JSX.Element | string;
}

interface IListFilter {
  items: IListFilterItems[];
  endingLine?: boolean;
  border?: boolean;
  padding?: boolean;
  customErrorMessage?: React.ReactNode;
  id?: string;
  className?: string;
}

class ListFilter extends React.PureComponent<IListFilter> {
  state = {
    value: "",
  };

  filterList = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    this.setState({
      value,
    });
  };

  renderItems = () => {
    const { padding, customErrorMessage, items } = this.props;
    const error = (
      <ListItem padding={this.props.padding}>
        {customErrorMessage || <NoResults>No results</NoResults>}
      </ListItem>
    );
    if (!items) {
      return error;
    }
    const result = items
      .filter(item => item.key.toLowerCase().includes(this.state.value.toLowerCase()))
      .sort((item1, item2) => {
        if (isString(item1.value) && isString(item2.value)) {
          return item1.value.toLowerCase() > item2.value.toLowerCase() ? 1 : -1;
        } else if (isJSXElement(item1.value) && isJSXElement(item2.value)) {
          const item1Text = item1.value.props.children;
          const item2Text = item1.value.props.children;
          if (typeof item1Text === "string" && typeof item2Text === "string") {
            return item1Text.toLowerCase() > item2Text.toLowerCase() ? 1 : -1;
          }
        }
        return 1;
      })
      .map(item => (
        <ListItem padding={padding} key={item.key}>
          {item.value}
        </ListItem>
      ));
    return result.length >= 1 ? result : error;
  };

  componentDidUpdate = (prevProps: IListFilter) => {
    if (this.props.items !== prevProps.items) {
      this.resetSearch();
    }
  };

  resetSearch = () => {
    this.setState({ value: "" });
  };

  render() {
    return (
      <>
        <SearchWrapper>
          <Search
            className="ListFilter__Search-"
            placeholder="Search"
            type="text"
            value={this.state.value}
            onChange={this.filterList}
          />
        </SearchWrapper>
        <ListContainer
          endingLine={this.props.endingLine}
          border={this.props.border}
          id={this.props.id}
          className={this.props.className}
        >
          {this.renderItems()}
        </ListContainer>
      </>
    );
  }
}

export default ListFilter;
