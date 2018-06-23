import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ToolBar } from '../../components/ToolBar';
import { ToolBarItem } from '../../components/ToolBarItem';
import { Row } from '../../components/Row';
import { constants, texts } from '../../config';
import s from './Log.styles';

class Log extends Component {
  render() {
    const { focusTotal, shortBreakTotal, longBreakTotal, stopWatchTotal } = this.props;

    return (
      <View style={s.container}>
        <Row>
          <Text style={s.header}>{texts.progressLog}</Text>
        </Row>

        <Row>
          <ToolBar>
            <ToolBarItem
              bottomText="Focus"
              icon={constants.TOOLBAR_ICONS.FOCUS}
              topText={focusTotal}
            />

            <ToolBarItem
              bottomText="Short break"
              icon={constants.TOOLBAR_ICONS.SHORT_BREAK}
              topText={shortBreakTotal}
            />

            <ToolBarItem
              bottomText="Long break"
              icon={constants.TOOLBAR_ICONS.LONG_BREAK}
              topText={longBreakTotal}
            />

            <ToolBarItem
              bottomText="Stop-watch"
              icon={constants.TOOLBAR_ICONS.STOP_WATCH}
              topText={stopWatchTotal}
            />
          </ToolBar>
        </Row>
      </View>
    );
  }
}

export default Log;
