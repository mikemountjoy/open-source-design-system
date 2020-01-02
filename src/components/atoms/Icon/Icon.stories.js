/* eslint-disable react/prop-types */

import React from "react"
import { storiesOf } from "@storybook/react"
import { select, number } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import styled from "styled-components"

import { Select, Icon, colourPalette } from "index"

const options = {
  name: [
    "check",
    "times",
    "bars",
    "angle-right",
    "angle-left",
    "long-arrow-alt-up",
    "long-arrow-alt-down",
    "user-circle",
    "link",
    "unlink",
    "file",
    "upload",
    "save",
    "plus-circle",
    "lock",
    "lock-open",
    "users",
    "eye",
    "eye-slash",
    "envelope",
    "envelope-open",
    "edit",
    "search",
    "comment-dots",
  ],
  size: ["xs", "sm", "lg", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"],
  colour: ["primary", "secondary", "complimentary", "black"],
}

const IconPreview = styled.div`
  border: 2px solid ${props => props.theme.secondary.main.hex};
  max-width: 45rem;
  margin: 0 auto 2rem;
  padding: 1rem 2rem;
  text-align: center;
  background-color: ${props => props.theme.background.hex};
  border-radius: 5px;
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  width: 40%;
`

const IconOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-content: flex-start;
  justify-content: flex-start;
  text-align: left;
  > * + * {
    margin-top: 1rem;
  }
`

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const IconContainer = styled.div`
  border: 1px solid ${props => props.theme.black.tint40.hex};
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  width: 9.5%;
  min-width: 2.5rem;
  margin: 0.25%;
  opacity: 0.6;
  transition: 0.2s ease all;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`

class IconStory extends React.PureComponent {
  state = {
    name: options.name[0],
    size: "6x",
    colour: "secondary",
  }

  renderIcons = () => (
    <IconGrid>
      {options.name.map(icon => (
        <IconContainer
          theme={this.props.theme}
          key={icon}
          onClick={() => {
            this.setState({ name: icon })
          }}
        >
          <Icon name={icon} color="black" size="2x" />
        </IconContainer>
      ))}
    </IconGrid>
  )

  onSelect = (event, name) => {
    this.setState({ [name]: event.value })
  }

  arrToObject = arr =>
    arr.reduce(
      (acc, element) => ({
        ...acc,
        [element]: element,
      }),
      {},
    )

  renderCustomiseIcon = optionNames =>
    optionNames.map(option => (
      <div key={option}>
        {`Icon ${option}:`}
        <Select
          name={option}
          placeholder={`Choose ${option === "name" ? "an icon" : `a ${option}`}`}
          value={{ label: this.state[option], value: this.state[option] }}
          options={this.arrToObject(options[option])}
          onChange={event => this.onSelect(event, option)}
        />
      </div>
    ))

  render() {
    const { name, size, colour } = this.state
    return (
      <>
        <IconPreview theme={this.props.theme}>
          <IconWrapper>
            <Icon name={name} size={size} color={colour} />
          </IconWrapper>
          <IconOptions>{this.renderCustomiseIcon(["name", "size", "colour"])}</IconOptions>
        </IconPreview>
        {this.renderIcons()}
      </>
    )
  }
}

IconStory.defaultProps = {
  theme: colourPalette.examplePalette,
}

const Wrapper = styled.div`
  display: inline-block;
`
Wrapper.displayName = "Wrapper"

storiesOf("Icon", module)
  .add(
    "Icon",
    context => {
      const text = {
        description:
          "This component should be called when you want to create an icon. Most of the styling for this component is handled via it's props; but you can create a wrapper to better control it's layout.",
      }
      Object.assign(context, text)
      return (
        <Wrapper>
          <Icon
            name={select("Icon name", options.name, "check")}
            color={[select("Icon colour", options.colour, "black")]}
            size={select("Icon size", options.size, "6x")}
            onClick={action("clicked")}
            rotateDegrees={number("rotate", 0)}
          />
        </Wrapper>
      )
    },
    {
      info: {
        propTablesExclude: [Wrapper],
      },
    },
  )
  .add(
    "Available Icons",
    context => {
      const text = {
        description:
          "This is a list of icons that has already been imported from the font-awesome library. If you want to add more icons, please visit the font-awesome library for their full list of icons.",
      }
      Object.assign(context, text)
      return <IconStory />
    },
    {
      info: {
        propTablesExclude: [IconStory],
        source: false,
      },
    },
  )
