import React, { Component } from 'react';
export default class GetImageButton extends Component {
  render() {
    return (
      <div>
        <button type="submit" onClick={this.props.fetchRoverImage}>Get Rover Image</button>
      </div>
    )
  }
}
