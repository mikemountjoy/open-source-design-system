/**
 * FileInput
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Button from "../Button"

export const Container = styled.div`
  display: flex;
  align-items: center;
  .inputFile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  button {
    pointer-events: ${props => (props.upload ? "auto" : "none")};
  }
  .inputFile + label {
    cursor: pointer;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

class FileInput extends React.Component {
  state = { selectedFile: null }

  fileChangedHandler = event => this.setState({ selectedFile: event.target.files[0] })

  resetFile = () => this.setState({ selectedFile: null })

  handleUpload = () => this.props.handleUpload(this.state.selectedFile)

  render() {
    return (
      <Container
        upload={this.state.selectedFile}
        id={this.props.id}
        className={this.props.className}
      >
        <input
          type="file"
          onChange={this.fileChangedHandler}
          id="fileInput"
          className="inputFile"
        />
        <ButtonContainer>
          <label htmlFor="fileInput">
            <Button
              onClick={this.handleUpload}
              buttonType={this.props.theme}
              icon={this.state.selectedFile ? "upload" : "file"}
              id="uploadButton"
              type="button"
            >
              {this.state.selectedFile ? this.props.uploadMessage : this.props.chooseFileMessage}
            </Button>
          </label>
          {this.state.selectedFile && (
            <Button buttonType="ghost" icon="times" onClickIcon={this.resetFile} type="button">
              {this.state.selectedFile.name}
            </Button>
          )}
        </ButtonContainer>
      </Container>
    )
  }
}

FileInput.defaultProps = {
  chooseFileMessage: "Choose file",
  uploadMessage: "Upload file",
  theme: "outline",
}

FileInput.propTypes = {
  chooseFileMessage: PropTypes.any,
  handleUpload: PropTypes.func,
  uploadMessage: PropTypes.any,
  theme: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
}

export default FileInput
