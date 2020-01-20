import React from "react"
import PropTypes from "prop-types"
import RowLayout from "../../components/atoms/RowLayout"
import { Header } from "./Header"
import { Body } from "./Body"
import { Paragraphs } from "./Paragraphs"
import { List } from "./List"

const GlobalContainer = props => {
  const { title, componentName, description, dos, donts, children } = props
  return (
    <div>
      <Header title={title} componentName={componentName} />
      <Body>
        <Paragraphs heading="Description" paragraphs={description} />
        <RowLayout justifyContent="space-between">
          <List heading="Do's" list={dos} width="45%" />
          <List heading="Don'ts" list={donts} width="45%" />
        </RowLayout>
        {children}
      </Body>
    </div>
  )
}

GlobalContainer.propTypes = {
  title: PropTypes.string,
  componentName: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  dos: PropTypes.array,
  donts: PropTypes.array,
  children: PropTypes.node,
}

export { GlobalContainer }
