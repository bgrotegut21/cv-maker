import darkmodeIcon from '../icons/darkmode.svg';
import lightmodeIcon from '../icons/lightmode.svg';

import '../styles/Nav.css';
import '../styles/App.css';

import React from 'react';
import Switch from './Switch.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPreview: true,
      matches: window.matchMedia('(min-width: 900px)').matches,
    };

    this.changeTheme = this.changeTheme.bind(this);
    this.changeView = this.changeView.bind(this);
    this.watchMedia = this.watchMedia.bind(this);
  }

  changeTheme() {}

  changeView() {}

  watchMedia(event) {
    this.setState({ matches: event.matches }, () => {
      console.log(this.state, 'this state');
    });
  }

  componentDidMount() {
    window
      .matchMedia('(min-width: 900px)')
      .addEventListener('change', this.watchMedia);
  }

  render() {
    return (
      <div className="App">
        <nav className="Navigation">
          <div className="topNav">
            <div className="themeNav">
              <img className="icon" src={darkmodeIcon} alt="darkmode" />

              <Switch fireEvent={this.changeTheme} />
              <img className="icon" src={lightmodeIcon} alt="darkmode" />
            </div>

            <h1 className="titleText">CV MAKER</h1>
          </div>

          {!this.state.matches && (
            <div className="bottomNav">
              <h2 className="editText">EDIT</h2>
              <Switch size="large" fireEvent={this.changeView} />
              <h2 className="editText"> PREVIEW</h2>
            </div>
          )}
        </nav>

        <div className="View"></div>
      </div>
    );
  }
}

export default App;
