import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { DirectionsTitle } from '../../components/DirectionsTitle';
import { Clock } from '../../components/Clock';
import { Trigger } from '../../components/Trigger';
import { ToolBar } from '../../components/ToolBar';
import { ToolBarItem } from '../../components/ToolBarItem';
import { Row } from '../../components/Row';
import { constants, texts } from '../../config';
import { formatTime, getMinutes } from '../../helpers';
import s from './Timer.styles';

class Timer extends Component {
  render() {
    const {
      currentMode,
      triggerIcon,
      timerTitle,
      isRunning,
      timerValue,
      setNextTriggerState,
      setTimerMode,
    } = this.props;

    return (
      <View style={s.container}>
        <View style={s.header}>
          <Row>
            <DirectionsTitle value={timerTitle} />
          </Row>
        </View>

        <View style={s.body}>
          <Row>
            <Clock value={formatTime(timerValue)} />
          </Row>

          <Row>
            <Trigger
              icon={triggerIcon}
              onPress={setNextTriggerState}
            />
          </Row>
        </View>

        <View style={s.footer}>
          <Row>
            <ToolBar isHidden={isRunning}>
              <ToolBarItem
                bottomText={texts.modes.focus.title}
                icon={constants.TOOLBAR_ICONS.FOCUS}
                isActive={currentMode === constants.TIMER_MODES.FOCUS}
                topText={`${getMinutes(constants.TIMERS_LENGTH.FOCUS)} min`}
                onPress={() => setTimerMode(constants.TIMER_MODES.FOCUS)}
              />

              <ToolBarItem
                bottomText={texts.modes.shortBreak.title}
                icon={constants.TOOLBAR_ICONS.SHORT_BREAK}
                isActive={currentMode === constants.TIMER_MODES.SHORT_BREAK}
                topText={`${getMinutes(constants.TIMERS_LENGTH.SHORT_BREAK)} min`}
                onPress={() => setTimerMode(constants.TIMER_MODES.SHORT_BREAK)}
              />

              <ToolBarItem
                bottomText={texts.modes.longBreak.title}
                icon={constants.TOOLBAR_ICONS.LONG_BREAK}
                isActive={currentMode === constants.TIMER_MODES.LONG_BREAK}
                topText={`${getMinutes(constants.TIMERS_LENGTH.LONG_BREAK)} min`}
                onPress={() => setTimerMode(constants.TIMER_MODES.LONG_BREAK)}
              />

              <ToolBarItem
                bottomText={texts.modes.stopWatch.title}
                icon={constants.TOOLBAR_ICONS.STOP_WATCH}
                isActive={currentMode === constants.TIMER_MODES.STOP_WATCH}
                topText="&infin; min"
                onPress={() => setTimerMode(constants.TIMER_MODES.STOP_WATCH)}
              />
            </ToolBar>
          </Row>
        </View>
      </View>
    );
  }
}

export default Timer;
