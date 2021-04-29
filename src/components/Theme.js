import React from 'react';

import { IconContext } from 'react-icons';
import { BiSun, BiMoon } from 'react-icons/bi';

class Theme extends React.Component {
  render() {
    return (
      <div className='section' id='Theme'>
        <div className='theme' style={{ background: `${this.props.pad}` }}>
          <IconContext.Provider
            value={{ color: `${this.props.day}`, padding: '3px', size: 18 }}
          >
            <div className='day' onClick={this.props.setLight}>
              <BiSun />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: `${this.props.night}`, padding: '3px', size: 18 }}
          >
            <div className='night' onClick={this.props.setDark}>
              <BiMoon />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}

export default Theme;
