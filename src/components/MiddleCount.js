import React from 'react';

class MiddleCount extends React.Component {
  render() {
    const string = this.props.data.join('');
    return (
      <div id='MiddleCount'>
        <div className='container'>
          <div
            className='middleCount'
            style={{ color: `${this.props.numbers}` }}
          >
            {string}
          </div>
        </div>
      </div>
    );
  }
}

export default MiddleCount;
