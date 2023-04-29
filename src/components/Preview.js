import React from 'react';
import { formatTitle, replaceUnderscores } from '../scripts/utilities.js';
import '../styles/Preview.css';

import TextInput from './TextInput.js';

class Preview extends React.Component {
  createInputElements(inputObjectDataKeys, inputObject, title, index) {
    const { changeDataState, viewDataState, lightmodeClassName } = this.props;

    return inputObjectDataKeys.map((inputItemKey) => {
      const inputItem = inputObject.data[inputItemKey];

      return (
        <TextInput
          onChange={changeDataState(title, index, inputItemKey, 'input')}
          value={viewDataState(title, index, inputItemKey, 'input')}
          placeholder={replaceUnderscores(inputItemKey)}
          isLarge={inputItem.isLarge}
          key={inputItem.id}
          lightmodeClassName={lightmodeClassName}
        />
      );
    });
  }

  getDataElements() {
    const { data, addDataState, deleteDataState, lightmodeClassName } =
      this.props;
    const dataTitles = Object.keys(data);

    return dataTitles.map((title) => {
      let index = -1;
      const dataArray = data[title].array;
      const dataArrayEndIndex = dataArray.length - 1;
      const dataid = data[title].id;

      return (
        <div key={dataid} className={title}>
          <h2 className={`titleDataText titleDataText-${lightmodeClassName}`}>
            {formatTitle(title)}
          </h2>
          <div>
            {dataArray.length === 0 && (
              <button
                className={`buttonStyle addButton-${lightmodeClassName}`}
                onClick={addDataState(title)}
              >
                Add
              </button>
            )}

            {dataArray.map((inputObject) => {
              const inputObjectDataKeys = Object.keys(inputObject.data);
              index += 1;

              return (
                <div
                  key={inputObject.id}
                  className={`dataBox dataBox-${lightmodeClassName}`}
                >
                  {title !== 'Personal_Information' && (
                    <div className="deleteDiv">
                      <button
                        onClick={deleteDataState(title, inputObject.id)}
                        className={`deleteButton deleteButton-${lightmodeClassName}`}
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
                        className={`buttonStyle addButton-${lightmodeClassName}`}
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
