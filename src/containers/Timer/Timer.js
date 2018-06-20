import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { DirectionsTitle } from '../../components/DirectionsTitle';
import { Clock } from '../../components/Clock';
import { Trigger } from '../../components/Trigger';
import { ToolBar } from '../../components/ToolBar';
import { ToolBarItem } from '../../components/ToolBarItem';
import { Row } from '../../components/Row';
import { constants } from '../../config';
import s from './Timer.styles';

class Timer extends Component {
  state = {
    currentMode: constants.TIMER_MODES.FOCUS,
    isReady: true,
    isRunning: false,
    isStopped: false,
  };

  getCurrentTriggerIcon = () => {
    const { isReady, isRunning, isStopped } = this.state;
    const { PLAY, STOP, RESTART } = constants.TRIGGER_ICONS;

    if (isReady) {
      return PLAY;
    };

    if (isRunning) {
      return STOP;
    }

    if (isStopped) {
      return RESTART;
    }

    return '';
  };

  setCurrentMode = (nextMode) => {
    this.setState({ currentMode: nextMode });
  };

  render() {
    const { currentMode } = this.state;
    const triggerIcon = this.getCurrentTriggerIcon();

    return (
      <View style={s.container}>
        <View style={s.header}>
          <Row>
            <DirectionsTitle value="Start short break" />
          </Row>
        </View>

        <View style={s.body}>
          <Row>
            <Clock value="25:00" />
          </Row>

          <Row>
            <Trigger icon={triggerIcon} />
          </Row>
        </View>

        <View style={s.footer}>
          <Row>
            <ToolBar>
              <ToolBarItem
                bottomText="Focus"
                icon={constants.TOOLBAR_ICONS.FOCUS}
                isActive={currentMode === constants.TIMER_MODES.FOCUS}
                topText="25 min"
                onPress={() => this.setCurrentMode(constants.TIMER_MODES.FOCUS)}
              />

              <ToolBarItem
                bottomText="Short break"
                icon={constants.TOOLBAR_ICONS.SHORT_BREAK}
                isActive={currentMode === constants.TIMER_MODES.SHORT_BREAK}
                topText="5 min"
                onPress={() => this.setCurrentMode(constants.TIMER_MODES.SHORT_BREAK)}
              />

              <ToolBarItem
                bottomText="Long break"
                icon={constants.TOOLBAR_ICONS.LONG_BREAK}
                isActive={currentMode === constants.TIMER_MODES.LONG_BREAK}
                topText="30 min"
                onPress={() => this.setCurrentMode(constants.TIMER_MODES.LONG_BREAK)}
              />

              <ToolBarItem
                bottomText="Stop-watch"
                icon={constants.TOOLBAR_ICONS.STOP_WATCH}
                isActive={currentMode === constants.TIMER_MODES.STOP_WATCH}
                topText="&infin; min"
                onPress={() => this.setCurrentMode(constants.TIMER_MODES.STOP_WATCH)}
              />
            </ToolBar>
          </Row>
        </View>
      </View>
    );
  }
}

export default Timer;
