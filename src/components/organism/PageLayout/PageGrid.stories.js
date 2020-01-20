import React from "react"
import { storiesOf } from "@storybook/react"
import styled from "styled-components"
import { number, array } from "@storybook/addon-knobs"
import { ListFilter, Card, Button } from "../../../index"
import { colourPalette } from "../../../brandColours"
import { PageGrid, Column } from "./index"

const { examplePalette } = colourPalette

const stories = storiesOf("Grid", module)

const CardWrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
`
CardWrapper.displayName = "CardWrapper"

const dogList = [
  { key: "dalmations", value: "Dalmations" },
  { key: "retrievers", value: "Retrievers" },
  { key: "corgis", value: "Corgis" },
  { key: "german-shephard", value: "German Shephards" },
]

const Title = styled.h1`
  color: ${props => props.theme.primary.main.hex};
  margin-bottom: 0.5rem;
`
Title.defaultProps = {
  theme: examplePalette,
}
Title.displayName = "Title"

const Content = styled.div`
  padding-bottom: 1rem;
`
Content.displayName = "Content"

const Image = styled.img`
  width: 100%;
`
Image.displayName = "Image"

stories.add("Layout Example", () => (
  <PageGrid row={4}>
    <Column>
      <Title theme={examplePalette}>List of dog breeds</Title>
    </Column>
    <Column spanDesktop={[1, 3]} spanTabletLandscape={[1, 3]} spanTabletPortrait={[1, 4]}>
      <CardWrapper>
        <Card title="Dog types" boxShadow>
          <ListFilter items={dogList} />
        </Card>
      </CardWrapper>
    </Column>
    <Column row={[2]} spanDesktop={[4, 7]} spanTabletLandscape={[4, 9]} spanTabletPortrait={[5, 8]}>
      <Card boxShadow title="Corgis" bodyPadding>
        <Content>
          <p>
            The Pembroke Welsh Corgi is a herding dog bred to move cattle. He is smart, loyal, and
            affectionate. The dogs are 10 to 12 inches in height and 28 to 30 pounds. They have a
            foxy face and erect ears. Unlike their cousins, the Cardigan Welsh Corgis, Pembrokes do
            not have a tail. They do make wonderful house dogs and pets.
          </p>
          <Image src="https://images.unsplash.com/photo-1519098901909-b1553a1190af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2534&q=80" />
        </Content>
      </Card>
    </Column>
    <Column spanDesktop={[11, 2]} spanTabletLandscape={[4, 9]} spanTabletPortrait={[5, 8]}>
      {/* eslint-disable-next-line no-alert */}
      <Button onClick={() => window.alert("Woof Woof")}>Pet this dog</Button>
    </Column>
  </PageGrid>
))

const BackgroundColumn = styled(Column)`
  background-color: ${props => props.theme.background.hex};
  height: 100%;
`
BackgroundColumn.defaultProps = {
  theme: examplePalette,
}
BackgroundColumn.displayName = "BackgroundColumn"

const BackgroundGrid = styled(PageGrid)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`
BackgroundGrid.displayName = "BackgroundGrid"

const Background = () => {
  const columns = []
  for (let i = 1; i <= 12; i += 1) {
    columns.push(<BackgroundColumn span={[i, 1]} columnStart={i} columnSpan={1} key={i} />)
  }
  return <BackgroundGrid>{columns}</BackgroundGrid>
}
Background.displayName = "Background"

const DemoGrid = styled(PageGrid)`
  position: relative;
`
DemoGrid.displayName = "DemoGrid"

const DemoColumn = styled(Column)`
  width: 100%;
  height: 100%;
  background-color: rgba(${props => props.theme.secondary.main.RGB}, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`
DemoColumn.defaultProps = {
  theme: examplePalette,
}
DemoColumn.displayName = "DemoColumn"

const BoxNumber = styled.div`
  padding: 2rem 0;
`
BoxNumber.displayName = "BoxNumber"

stories.add("Interactive Demo", () => (
  <DemoGrid rows={number("Total rows in grid", 3)}>
    <Background />
    <DemoColumn
      row={array("Box 1 row position", ["auto", 2])}
      span={array("Box 1 column position", [1, 12])}
      spanTabletPortrait={array("Box 1 column position tablet portrait", [1, 6])}
      spanTabletLandscape={array("Box 1 column position tablet landscape", [1, 4])}
      spanDesktop={array("Box 1 column position desktop", [1, 4])}
    >
      <BoxNumber>1</BoxNumber>
    </DemoColumn>

    <DemoColumn
      row={array("Box 2 row position", ["auto", 1])}
      span={array("Box 2 column position", [1, 12])}
      spanTabletPortrait={array("Box 2 column position tablet portrait", [7, 6])}
      spanTabletLandscape={array("Box 2 column poisition tablet landscape", [5, 8])}
      spanDesktop={array("Box 2 column position desktop", [5, 4])}
    >
      <BoxNumber>2</BoxNumber>
    </DemoColumn>

    <DemoColumn
      row={array("Box 3 row position", ["auto", 1])}
      span={array("Box 3 column position", [1, 12])}
      spanTabletPortrait={array("Box 3 column position tablet portrait", [7, 6])}
      spanTabletLandscape={array("Box 3 column position tablet landscape", [5, 8])}
      spanDesktop={array("Box 3 column position desktop", [9, 4])}
    >
      <BoxNumber>3</BoxNumber>
    </DemoColumn>

    <DemoColumn
      row={array("Box 4 row position", ["auto", 1])}
      span={array("Box 4 column position", [1, 12])}
      spanTabletPortrait={array("Box 4 column position tablet portrait", [7, 6])}
      spanTabletLandscape={array("Box 4 column position tablet landscape", [5, 8])}
      spanDesktop={array("Box 4 column position desktop", [5, 8])}
    >
      <BoxNumber>4</BoxNumber>
    </DemoColumn>
  </DemoGrid>
))
