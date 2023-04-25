import React from 'react';
import { formatTitle, removeSpaces, replaceUnderscores } from './utilities.js';
import '../styles/Preview.css';

import TextInput from './TextInput.js';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  createInputElements(inputObjectDataKeys, inputObject, title, index) {
    const { changeDataState, viewDataState } = this.props;

    return inputObjectDataKeys.map((inputItemKey) => {
      const inputItem = inputObject.data[inputItemKey];

      return (
        <TextInput
          onChange={changeDataState(title, index, inputItemKey, 'input')}
          value={viewDataState(title, index, inputItemKey, 'input')}
          placeholder={replaceUnderscores(inputItemKey)}
          isLarge={inputItem.isLarge}
          key={inputItem.id}
        />
      );
    });
  }

  getDataElements() {
    const { data, addDataState, deleteDataState } = this.props;
    const dataTitles = Object.keys(data);

    // console.log(dataTitles, 'the current data titles');

    return dataTitles.map((title) => {
      let index = -1;
      const dataArray = data[title].array;
      const dataArrayEndIndex = dataArray.length - 1;
      const dataid = data[title].id;

      return (
        <div key={dataid} className={title}>
          <h2 className="titleDataText">{formatTitle(title)}</h2>
          <div>
            {dataArray.length === 0 && (
              <button className="addButton" onClick={addDataState(title)}>
                Add
              </button>
            )}

            {dataArray.map((inputObject) => {
              // console.log(inputObject.data, 'the input object');

              const inputObjectDataKeys = Object.keys(inputObject.data);
              index += 1;

              return (
                <div key={inputObject.id} className="dataBox">
                  {title !== 'Personal_Information' && (
                    <div className="deleteDiv">
                      <button
                        onClick={deleteDataState(title, inputObject.id)}
                        className="deleteButton"
                      >
                        X
                      </button>
                    </div>
                  )}

                  {this.createInputElements(
                    inputObjectDataKeys,
                    inputObject,
                    title,
                    index
                  )}

                  {index === dataArrayEndIndex &&
                    title !== 'Personal_Information' && (
                      <button
                        className="addButton"
                        onClick={addDataState(title)}
                      >
                        Add
                      </button>
                    )}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="Preview">{this.getDataElements()}</div>;
  }
}

export default Preview;
