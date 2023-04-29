import React from 'react';
import '../styles/TextInput.css';

class TextInput extends React.Component {
  render() {
    const { onChange, value, isLarge, placeholder, lightmodeClassName } =
      this.props;
    let currentClassName = '';

    if (isLarge) currentClassName = 'TextInputLarge';

    return (
      <div
        className={`TextInput ${currentClassName} TextInput-${lightmodeClassName}`}
      >
        {isLarge && (
          <textarea
            className={`TextBoxLarge Text-${lightmodeClassName}`}
            onChange={onChange}
            rows="11"
            cols="25"
            value={value}
            placeholder={placeholder}
          />
        )}

        {!isLarge && (
          <input
            className={`TextBox Text-${lightmodeClassName}`}
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
