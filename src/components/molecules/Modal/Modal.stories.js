import React from "react"

import { storiesOf } from "@storybook/react"

import { Modal, RowLayout, Button } from "../../.."

storiesOf("Modals", module).add("Default Modal", () => (
  <div>
    <h1>this is a test for the modal</h1>
    <hr />
    <p>testing again</p>
    <p>testing again</p>
    <p>testing again</p>
    <RowLayout>
      <Modal label="Modal 1">
        {closeModal => <Button onClick={closeModal}>close modal</Button>}
      </Modal>
      <Modal label="Modal 2">
        {() => (
          <div>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
          </div>
        )}
      </Modal>
    </RowLayout>
  </div>
))
