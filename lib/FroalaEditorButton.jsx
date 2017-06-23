import React from 'react';
import FroalaEditorFunctionality from './FroalaEditorFunctionality.jsx';

class FroalaEditorButton extends FroalaEditorFunctionality {

  render () {
    return (
      <button ref='el'>{this.props.children}</button>
    );
  }
}

module.exports = FroalaEditorButton;