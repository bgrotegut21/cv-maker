import darkmodeIcon from '../icons/darkmode.svg';
import lightmodeIcon from '../icons/lightmode.svg';
import uniqid from 'uniqid';
import { cloneObject } from './utilities';

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
      isPreview: true,
      matches: window.matchMedia('(min-width: 1270px)').matches,

      data: {
        Personal_Information: {
          id: uniqid(),
          array: [
            {
              id: uniqid(),
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
  }

  changeTheme() {}

  changeView() {}

  getTemplate(title) {
    if (title === 'Education') {
      return {
        id: uniqid(),
        data: {
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
          Degree: {
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
      };
    }

    return {
      id: uniqid(),
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
    };
  }

  watchMedia(event) {
    this.setState({ matches: event.matches }, () => {
      // console.log(this.state, 'this state');
    });
  }

  componentDidMount() {
    window
      .matchMedia('(min-width: 1270px)')
      .addEventListener('change', this.watchMedia);
  }

  createDefaultObject(title, uniqeid) {}

  changeDataState(dataTitle, index, dataKey, tag) {
    function changeValue(event) {
      const data = cloneObject(this.state.data);

      data[dataTitle]['array'][index]['data'][dataKey][tag] =
        event.target.value;

      this.setState(
        {
          isPreview: this.state.isPreview,
          matches: window.matchMedia('(min-width: 1270px)').matches,
          data: data,
        },
        () => {
          // console.log(this.state, 'this dot state ');
        }
      );
    }

    const BindChangeValue = changeValue.bind(this);
    return BindChangeValue;
  }

  addDataState(dataTitle) {
    let dataTemplate = this.getTemplate(dataTitle);

    // console.log(dataTemplate, 'the current data template');

    function addData() {
      const data = cloneObject(this.state.data);
      data[dataTitle].array = [...data[dataTitle].array, dataTemplate];

      this.setState({
        isPreview: this.state.isPreview,
        matches: window.matchMedia('(min-width: 1270px)').matches,
        data: data,
      });
    }

    const BindAddData = addData.bind(this);
    return BindAddData;
  }

  deleteDataState(dataTitle, objectId) {
    function deleteData() {
      const data = cloneObject(this.state.data);
      const dataObject = data[dataTitle];

      // console.log(objectId, 'the object id');

      const updatedData = dataObject.array.filter(
        (item) => item.id !== objectId
      );

      dataObject.array = updatedData;

      this.setState(
        {
          isPreview: this.state.isPreview,
          matches: window.matchMedia('(min-width: 1270px)').matches,
          data: data,
        },
        () => {
          console.log(objectId, 'the object id');
          console.log(this.state.data, 'this dot state data');
        }
      );
    }

    const BindDeleteData = deleteData.bind(this);
    return BindDeleteData;
  }

  viewDataState(dataTitle, index, dataKey, tag) {
    // console.log(
    //   this.state.data[dataTitle]['array'][index]['data'][dataKey][tag]
    // );

    return this.state.data[dataTitle]['array'][index]['data'][dataKey][tag];
  }

  render() {
    const { data } = this.state;

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

        <div className="View">
          <Preview
            data={data}
            changeDataState={this.changeDataState}
            viewDataState={this.viewDataState}
            addDataState={this.addDataState}
            deleteDataState={this.deleteDataState}
          />

          <Postview />
        </div>
      </div>
    );
  }
}

export default App;
