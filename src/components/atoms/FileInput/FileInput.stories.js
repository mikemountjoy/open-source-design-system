import React from "react"
import { storiesOf } from "@storybook/react"

import { text, select } from "@storybook/addon-knobs"

import { FileInput } from "index"

const themeDropdown = {
  default: "default",
  ghost: "ghost",
  outline: "outline",
}

const FileInputWrapper = () => (
  <div>
    <FileInput
      handleUpload={() => console.warn("Uploading file...")} // eslint-disable-line no-console
      uploadMessage={text("Upload Message", "Upload")}
      chooseFileMessage={text("Choose File Message", "Choose file...")}
      buttonType={select("button type", themeDropdown, "outline")}
    />
  </div>
)

storiesOf("FileInput", module).add("Logo or file input", () => <FileInputWrapper />)
