import React from 'react';
import '../styles/TextInput.css';

class TextInput extends React.Component {
  render() {
    const { onChange, value, isLarge, placeholder } = this.props;
    let currentClassName = '';

    if (isLarge) currentClassName = 'TextInputLarge';

    return (
      <div className={`TextInput ${currentClassName}`}>
        {isLarge && (
          <textarea
            className="TextBoxLarge"
            onChange={onChange}
            rows="11"
            cols="25"
            value={value}
            placeholder={placeholder}
          />
        )}

        {!isLarge && (
          <input
            className="TextBox"
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        )}
      </div>
    );
  }
}

export default TextInput;
