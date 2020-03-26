import React from "react";
import styled from "styled-components";

import { colourPalette } from "../../../../brandColours";

interface IStyledListContainer {
  border?: boolean;
  endingLine?: boolean;
}

const StyledListContainer = styled.ul<IStyledListContainer>`
  border: ${props => (props.border ? `1px solid ${props.theme.black.tint40.hex}` : "none")};
  border-radius: 5px;
  list-style: none;
  overflow-y: scroll;
  max-height: 25rem;
  padding: 0;
  > li:last-child {
    border-bottom: ${props => (props.endingLine ? "" : "none")};
  }
`;
StyledListContainer.defaultProps = {
  theme: colourPalette.examplePalette,
};
StyledListContainer.displayName = "StyledListContainer";

interface IListContainer extends IStyledListContainer {
  id?: string;
  className?: string;
}
const ListContainer: React.FC<IListContainer> = props => {
  const { border, children, endingLine, id, className } = props;
  const styledListContainerClassName = className ? `ListContainer ${className}` : "ListContainer";
  return (
    <StyledListContainer
      id={id}
      className={styledListContainerClassName}
      border={border}
      endingLine={endingLine}
    >
      {children}
    </StyledListContainer>
  );
};
ListContainer.displayName = "ListContainer";
ListContainer.defaultProps = {
  endingLine: true,
};

export default ListContainer;
