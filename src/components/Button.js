import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div
        className='btn'
        style={{ background: `${this.props.btns}`, color: this.props.clr }}
        onClick={this.props.onClick}
        data-value={this.props.value}
      >
        {this.props.character}
      </div>
    );
  }
}

export default Button;
