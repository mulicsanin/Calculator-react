import React from 'react';

class Total extends React.Component {
  render() {
    return (
      <div id='Total'>
        <div className='container'>
          <div className='total' style={{ color: `${this.props.numbers}` }}>
            {this.props.total}
          </div>
        </div>
      </div>
    );
  }
}

export default Total;
