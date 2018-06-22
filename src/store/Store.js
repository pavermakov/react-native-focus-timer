import React, { Component } from 'react';
import { screens, constants, texts } from '../config';

const initialState = {
  currentScreen: screens.timer,
};

const timerProps = {
  currentMode: constants.TIMER_MODES.FOCUS,
  isReady: true,
  isRunning: false,
  isStopped: false,
  triggerIcon: constants.TRIGGER_ICONS.PLAY,
  timerTitle: texts.modes.focus.start,
  timerValue: constants.TIMERS_LENGTH.FOCUS,
};

const StoreContext = React.createContext(initialState);

class Store extends Component {
  setCurrentScreen = (nextScreen) => {
    if (this.state.currentScreen.title === nextScreen.title) {
      return;
    }

    this.setState({ currentScreen: nextScreen });
  };

  setTimerMode = (nextMode) => {
    this.setState((prevState) => {
      return {
        timerProps: {
          ...prevState.timerProps,
          currentMode: nextMode,
          triggerIcon: constants.TRIGGER_ICONS.PLAY,
        },
      };
    }, this.initNextTimer);
  };

  initNextTimer = () => {
    this.setState((prevState) => {
      return {
        timerProps: {
          ...prevState.timerProps,
          timerTitle: this.getNextTimerTitle(),
          timerValue: this.getNextTimerValue(),
        },
      };
    });
  };

  getNextTimerTitle = () => {
    const { currentMode, isReady, isRunning } = this.state.timerProps;
    const { FOCUS, SHORT_BREAK, LONG_BREAK, STOP_WATCH } = constants.TIMER_MODES;

    if (currentMode === FOCUS) {
      if (isReady) {
        return texts.modes.focus.process;
      }

      if (isRunning) {
        return texts.modes.cancelTimer;
      }

      return texts.modes.focus.start;
    }

    if (currentMode === SHORT_BREAK) {
      if (isReady) {
        return texts.modes.shortBreak.process;
      }

      if (isRunning) {
        return texts.modes.cancelTimer;
      }

      return texts.modes.shortBreak.start;
    }

    if (currentMode === LONG_BREAK) {
      if (isReady) {
        return texts.modes.longBreak.process;
      }

      if (isRunning) {
        return texts.modes.cancelTimer;
      }

      return texts.modes.longBreak.start;
    }

    if (currentMode === STOP_WATCH) {
      if (isReady) {
        return texts.modes.stopWatch.process;
      }

      if (isRunning) {
        return texts.modes.stopWatch.finish;
      }

      return texts.modes.stopWatch.start;
    }

    return '';
  };

  getNextTimerValue = () => {
    const { currentMode } = this.state.timerProps;
    const { FOCUS, SHORT_BREAK, LONG_BREAK, STOP_WATCH } = constants.TIMER_MODES;

    switch (currentMode) {
      case FOCUS:
        return constants.TIMERS_LENGTH.FOCUS;

      case SHORT_BREAK:
        return constants.TIMERS_LENGTH.SHORT_BREAK;

      case LONG_BREAK:
        return constants.TIMERS_LENGTH.LONG_BREAK;

      case STOP_WATCH:
        return constants.TIMERS_LENGTH.STOP_WATCH;
    }
  };

  setNextTriggerState = () => {
    const { isReady, isRunning, isStopped } = this.state.timerProps;
    const { PLAY, STOP, RESTART } = constants.TRIGGER_ICONS;
    const nextTitle = this.getNextTimerTitle();

    if (isReady) {
      this.setState((prevState) => {
        return {
          timerProps: {
            ...prevState.timerProps,
            isReady: false,
            isRunning: true,
            isStopped: false,
            triggerIcon: STOP,
            timerTitle: nextTitle,
          },
        };
      });

      return;
    }

    if (isRunning) {
      this.setState((prevState) => {
        return {
          timerProps: {
            ...prevState.timerProps,
            isReady: false,
            isRunning: false,
            isStopped: true,
            triggerIcon: RESTART,
            timerTitle: nextTitle,
          },
        };
      });

      return;
    }

    if (isStopped) {
      this.setState((prevState) => {
        return {
          timerProps: {
            ...prevState.timerProps,
            isReady: true,
            isRunning: false,
            isStopped: false,
            triggerIcon: PLAY,
            timerTitle: nextTitle,
          },
        };
      });

      return;
    }
  };

  // resetTriggerState = () => {
  //   this.setState((prevState) => {
  //     return {
  //       ...prevState.timerProps,
        

  //     }
  //   })
  // };

  state = {
    ...initialState,
    timerProps: {
      ...timerProps,
      setTimerMode: this.setTimerMode,
      setNextTriggerState: this.setNextTriggerState,
    },
    setCurrentScreen: this.setCurrentScreen,
  };

  render() {
    return (
      <StoreContext.Provider value={this.state}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export { Store, StoreContext };