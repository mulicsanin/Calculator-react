import React from 'react';

import Theme from './Theme';
import MiddleCount from './MiddleCount';
import Total from './Total';
import CalcButtons from './CalcButtons';

import update from 'immutability-helper';
import { evaluate, format } from 'mathjs';

class App extends React.Component {
  state = {
    theme: 'dark',
    day: '#9496a2',
    night: '#fcffff',
    pad: '#373b46',
    btns: '#323844',
    numbers: '#fdfdff',

    total: '0',
    midCount: [],
  };
  setLight = () => {
    this.setState({
      theme: '#ffffff',

      pad: '#fafafa',
      btns: '#faf8f9',
      numbers: '#37373f',
    });
  };
  setDark = () => {
    this.setState({
      theme: '#2d313c',

      pad: '#373b46',
      btns: '#323844',
      numbers: '#fdfdff',
    });
  };
  handleClick = (e) => {
    const values = e.target.getAttribute('data-value');
    switch (values) {
      case 'clear':
        this.setState({
          midCount: [],
          total: '0',
        });
        break;
      case 'equal':
        this.calculateOperations();
        break;
      case 'back':
        let removedLast = update(this.state.midCount, {
          $splice: [[-1, 1]],
        });
        this.setState({
          midCount: removedLast,
        });
        break;
      default:
        let newOperations = update(this.state.midCount, {
          $push: [values],
        });
        this.setState({
          midCount: newOperations,
        });
        break;
    }
  };

  calculateOperations = () => {
    let result = this.state.midCount.join('');
    if (result) {
      result = evaluate(result);
      result = format(result, { precision: 14 });
      result = String(result);
      this.setState({
        total: result,
      });
    }
  };

  render() {
    return (
      <div className='section'>
        <div className='container'>
          <div
            className='calculator'
            style={{ background: `${this.state.theme}` }}
          >
            <Theme
              day={this.state.day}
              night={this.state.night}
              pad={this.state.pad}
              setLight={this.setLight}
              setDark={this.setDark}
            />
            <br />
            <br />
            <br />
            <br />
            <MiddleCount
              data={this.state.midCount}
              numbers={this.state.numbers}
            />
            <Total total={this.state.total} numbers={this.state.numbers} />
            <CalcButtons
              onClick={this.handleClick}
              pad={this.state.pad}
              btns={this.state.btns}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
