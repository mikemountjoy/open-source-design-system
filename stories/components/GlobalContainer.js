import React from "react"

import RowLayout from "atoms/RowLayout"
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

export { GlobalContainer }
