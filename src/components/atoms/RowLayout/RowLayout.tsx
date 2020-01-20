import React from "react";
import styled from "styled-components";

interface IStyledRowLayout {
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
}

const StyledRowLayout = styled.div<IStyledRowLayout>`
  display: flex;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : "flex-start")};
  align-items: ${props => (props.alignItems ? props.alignItems : "flex-start")};
  flex-wrap: ${props => (props.flexWrap ? props.flexWrap : "wrap")};
  > * + * {
    margin-left: 1rem;
  }
`;
StyledRowLayout.displayName = "StyledRowLayout";

interface IRowLayout extends IStyledRowLayout {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

const RowLayout: React.SFC<IRowLayout> = ({
  id,
  className,
  children,
  justifyContent,
  alignItems,
  flexWrap,
}) => (
  <StyledRowLayout
    id={id}
    className={className}
    justifyContent={justifyContent}
    alignItems={alignItems}
    flexWrap={flexWrap}
  >
    {children}
  </StyledRowLayout>
);
RowLayout.displayName = "RowLayout";

export default RowLayout;
