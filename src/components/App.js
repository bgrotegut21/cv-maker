import darkmodeIcon from '../icons/darkmode.svg';
import lightmodeIcon from '../icons/lightmode.svg';
import uniqid from 'uniqid';
import { cloneObject } from '../scripts/utilities';
import { getTemplate } from '../scripts/template.js';

import '../styles/Nav.css';
import '../styles/App.css';

import React from 'react';
import Switch from './Switch.js';
import Preview from './Preview.js';
import Postview from './Postview.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNotPreview: false,
      isLightMode: false,
      matches: window.matchMedia('(min-width: 1200px)').matches,

      data: {
        Personal_Information: {
          id: uniqid(),
          array: [
            {
              id: uniqid(),
              postviewid: uniqid(),

              data: {
                Name: {
                  input: '',
                  isLarge: false,
                  id: uniqid(),
                },
                Phone_Number: {
                  input: '',
                  isLarge: false,
                  id: uniqid(),
                },
                Email: {
                  input: '',
                  isLarge: false,
                  id: uniqid(),
                },
                Location: {
                  input: '',
                  isLarge: false,
                  id: uniqid(),
                },
                About_You: {
                  input: '',
                  isLarge: true,
                  id: uniqid(),
                },
              },
            },
          ],
        },

        Work_Experience: {
          id: uniqid(),

          array: [
            {
              id: uniqid(),
              postviewid: uniqid(),

              data: {
                Title: {
                  input: '',
                  isLarge: false,
                  id: uniqid(),
                },
                Company: {
                  input: '',
                  isLarge: false,
                  id: uniqid(),
                },
                Start_Date: {
                  input: '',
                  isLarge: false,
                  id: uniqid(),
                },
                End_Date: {
                  input: '',
                  isLarge: false,
                  id: uniqid(),
                },
                About_Your_Role: {
                  input: '',
                  isLarge: true,
                  id: uniqid(),
                },
              },
            },
          ],
        },

        Education: {
          id: uniqid(),

          array: [
            {
              id: uniqid(),
              postviewid: uniqid(),

              data: {
                Degree: {
                  input: '',
                  isLarge: false,
                  id: uniqid(),
                },
                School_Name: {
                  input: '',
                  isLarge: false,
                  id: uniqid(),
                },
                Location: {
                  input: '',
                  isLarge: false,
                  id: uniqid(),
                },

                Start_Date: {
                  input: '',
                  isLarge: false,
                  id: uniqid(),
                },
                End_Date: {
                  input: '',
                  isLarge: false,
                  id: uniqid(),
                },
                About_Your_Subject: {
                  input: '',
                  isLarge: true,
                  id: uniqid(),
                },
              },
            },
          ],
        },
      },
    };

    this.changeTheme = this.changeTheme.bind(this);
    this.changeView = this.changeView.bind(this);
    this.watchMedia = this.watchMedia.bind(this);
    this.changeDataState = this.changeDataState.bind(this);
    this.viewDataState = this.viewDataState.bind(this);
    this.addDataState = this.addDataState.bind(this);
    this.deleteDataState = this.deleteDataState.bind(this);
    this.setBool = this.setBool.bind(this);
  }

  changeTheme() {}

  changeView() {}

  watchMedia(event) {
    this.setState({ matches: event.matches }, () => {
      if (this.state.matches) {
        this.setBool('isNotPreview', false)();
      }
    });
  }

  componentDidMount() {
    window
      .matchMedia('(min-width: 1200px)')
      .addEventListener('change', this.watchMedia);
  }

  createDefaultObject(title, uniqeid) {}

  changeDataState(dataTitle, index, dataKey, tag) {
    function changeValue(event) {
      const clonedState = cloneObject(this.state);
      const data = cloneObject(this.state.data);

      data[dataTitle]['array'][index]['data'][dataKey][tag] =
        event.target.value;

      clonedState.data = data;
      this.setState(clonedState);
    }

    const BindChangeValue = changeValue.bind(this);
    return BindChangeValue;
  }

  addDataState(dataTitle) {
    let dataTemplate = getTemplate(dataTitle);

    function addData() {
      const clonedState = cloneObject(this.state);
      const data = cloneObject(this.state.data);
      data[dataTitle].array = [...data[dataTitle].array, dataTemplate];
      clonedState.data = data;
      this.setState(clonedState);
    }

    const BindAddData = addData.bind(this);
    return BindAddData;
  }

  deleteDataState(dataTitle, objectId) {
    function deleteData() {
      const clonedState = cloneObject(this.state);
      const data = cloneObject(this.state.data);
      const dataObject = data[dataTitle];

      const updatedData = dataObject.array.filter(
        (item) => item.id !== objectId
      );

      dataObject.array = updatedData;

      clonedState.data = data;

      this.setState(clonedState);
    }

    const BindDeleteData = deleteData.bind(this);
    return BindDeleteData;
  }

  viewDataState(dataTitle, index, dataKey, tag) {
    return this.state.data[dataTitle]['array'][index]['data'][dataKey][tag];
  }

  setBool(datapoint, bool) {
    function changeBool() {
      const clonedState = cloneObject(this.state);
      clonedState[datapoint] = bool;
      this.setState(clonedState);
    }

    const bindChangePreview = changeBool.bind(this);
    return bindChangePreview;
  }

  render() {
    const { data } = this.state;

    let mode = '';

    this.state.isLightMode ? (mode = 'Light') : (mode = '');

    return (
      <div className="App">
        <nav className={`Navigation Navigation-${mode}`}>
          <div className="topNav">
            <div className="themeNav">
              <img
                className={`icon icon-${mode}`}
                src={darkmodeIcon}
                alt="darkmode"
              />

              <Switch
                fireTriggerOnTrue={this.setBool('isLightMode', true)}
                fireTriggerOnFalse={this.setBool('isLightMode', false)}
                lightmodeClassName={mode}
              />
              <img
                className={`icon icon-${mode}`}
                src={lightmodeIcon}
                alt="darkmode"
              />
            </div>

            <h1 className="titleText">CV MAKER</h1>
          </div>

          {!this.state.matches && (
            <div className="bottomNav">
              <h2 className="editText">EDIT</h2>
              <Switch
                fireTriggerOnTrue={this.setBool('isNotPreview', true)}
                fireTriggerOnFalse={this.setBool('isNotPreview', false)}
                size="large"
                lightmodeClassName={mode}
              />
              <h2 className="editText"> PREVIEW</h2>
            </div>
          )}
        </nav>

        <div className={`View View-${mode}`}>
          {!this.state.isNotPreview && (
            <Preview
              data={data}
              changeDataState={this.changeDataState}
              viewDataState={this.viewDataState}
              addDataState={this.addDataState}
              deleteDataState={this.deleteDataState}
              lightmodeClassName={mode}
            />
          )}

          {this.state.isNotPreview && (
            <Postview lightmodeClassName={mode} data={data} />
          )}
          {this.state.matches && (
            <Postview lightmodeClassName={mode} data={data} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
