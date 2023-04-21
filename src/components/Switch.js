import React from 'react';
import { CSSTransition } from 'react-transition-group';

import '../styles/Switch.css';

class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.nodeRef = React.createRef(null);

    this.state = { triggerAnimation: false, trigger: true };

    this.changeSwitch = this.changeSwitch.bind(this);
    this.changeTriggerToFalse = this.changeTriggerToFalse.bind(this);
    this.changeTriggerToTrue = this.changeTriggerToTrue.bind(this);
  }

  changeSwitch() {
    this.setState({
      triggerAnimation: this.state.trigger,
    });
  }

  changeTriggerToFalse() {
    this.setState({
      trigger: false,
    });
  }

  changeTriggerToTrue() {
    this.setState({
      trigger: true,
    });
  }

  render() {
    const { size } = this.props;
    const { triggerAnimation } = this.state;

    let switchClassNamesArray = ['', '', ''];

    if (size === 'large') {
      switchClassNamesArray[0] = 'switch-large';
      switchClassNamesArray[1] = 'switchbuttonlarge';
      switchClassNamesArray[2] = 'switchballLarge';
    }

    return (
      <div className={`Switch ${switchClassNamesArray[0]}`}>
        <div
          onClick={this.changeSwitch}
          className={`switchbutton ${switchClassNamesArray[1]}`}
        ></div>

        <CSSTransition
          timeout={1000}
          nodeRef={this.nodeRef}
          in={triggerAnimation}
          classNames={size === 'large' ? 'switchballLarge' : 'switchball'}
          onEntered={this.changeTriggerToFalse}
          onExited={this.changeTriggerToTrue}
        >
          <div
            ref={this.nodeRef}
            className={`switchball  ${switchClassNamesArray[2]}`}
          ></div>
        </CSSTransition>
      </div>
    );
  }
}

export default Switch;
