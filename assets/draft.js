import React from "react";
import { Editor, EditorState } from "draft-js";

class Draft extends React.Component {
    constructor() {
      super();
      this.state = {editorState: EditorState.createEmpty()};
      this.onChange = (editorState) => this.setState({editorState});
    }
    componentDidMount() {
      this.refs.editor.focus();
    }

    render() {
      const {editorState} = this.state;
      return (
        <Editor
          style={{
            color: "#FFF",
            height: "100%"
          }}
          ref="editor"
          editorState={editorState}
          onChange={this.onChange}
        />
      );
    }
}

export default Draft;
