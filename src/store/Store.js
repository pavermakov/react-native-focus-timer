import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { screens, constants, texts, sounds } from '../config';

const initialState = {
  currentScreen: screens.timer,
};

const timerProps = {
  currentMode: constants.TIMER_MODES.FOCUS,
  isReady: true,
  isRunning: false,
  isStopped: false,
  isFinished: false,
  triggerIcon: constants.TRIGGER_ICONS.PLAY,
  timerTitle: texts.modes.focus.start,
  timerValue: constants.TIMERS_LENGTH.FOCUS,
};

const logProps = {
  focusTotal: 0,
  shortBreakTotal: 0,
  longBreakTotal: 0,
  stopWatchTotal: 0,
};

const StoreContext = React.createContext(initialState);
const timerIntervalId = null;

class Store extends Component {
  componentDidMount() {
    this.readExistingLogs();
  }

  componentWillUnmount() {
    this.clearTimerInterval();
  }

  readExistingLogs = () => {
    AsyncStorage.getItem(constants.STORAGE.LOGS)
      .then((data) => {
        if (!data || Object.keys(data) === 0) {
          return;
        }

        this.setState({ logProps: JSON.parse(data) });
      })
      .catch(console.log)
  };

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
          isReady: true,
          isRunning: false,
          isStopped: false,
        },
      };
    }, this.initCurrentTimer);
  };

  initCurrentTimer = () => {
    this.setState((prevState) => {
      return {
        timerProps: {
          ...prevState.timerProps,
          ...this.getDefaultTimerData(),
        },
      };
    });
  };

  getDefaultTimerData = () => {
    let timerTitle = '';
    let timerValue = 0;

    const { currentMode } = this.state.timerProps;
    const { FOCUS, SHORT_BREAK, LONG_BREAK, STOP_WATCH } = constants.TIMER_MODES;

    switch (currentMode) {
      case FOCUS:
        timerTitle = texts.modes.focus.start;
        timerValue = constants.TIMERS_LENGTH.FOCUS;
        break;

      case SHORT_BREAK:
        timerTitle = texts.modes.shortBreak.start;
        timerValue = constants.TIMERS_LENGTH.SHORT_BREAK;
        break;

      case LONG_BREAK:
        timerTitle = texts.modes.longBreak.start;
        timerValue = constants.TIMERS_LENGTH.LONG_BREAK;
        break;

      case STOP_WATCH:
        timerTitle = texts.modes.stopWatch.start;
        timerValue = constants.TIMERS_LENGTH.STOP_WATCH;
        break;
    }

    return { timerTitle, timerValue };
  };

  getDefaultTimerTitle = () => {
    const { currentMode } = this.state.timerProps;
    const { FOCUS, SHORT_BREAK, LONG_BREAK, STOP_WATCH } = constants.TIMER_MODES;

    switch (currentMode) {
      case FOCUS:
        return texts.modes.focus.start;
      case SHORT_BREAK:
        return texts.modes.shortBreak.start;
      case LONG_BREAK:
        return texts.modes.longBreak.start;
      case STOP_WATCH:
        return texts.modes.stopWatch.start;
    }
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
        return texts.modes.finishTimer;
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
    const nextValue = this.getNextTimerValue();

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
            timerValue: nextValue,
          },
        };
      }, this.startTimer);

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
      }, () => {
        if (this.state.timerProps.currentMode === constants.TIMER_MODES.STOP_WATCH) {
          this.updateLogs();
        }

        this.clearTimerInterval();
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
            timerValue: nextValue,
          },
        };
      }, this.initCurrentTimer);

      return;
    }
  };

  startTimer = () => {
    this.clearTimerInterval();
    timerIntervalId = setInterval(this.tickTimer, constants.ONE_SECOND);
  };

  tickTimer = () => {
    const { currentMode } = this.state.timerProps;
    const direction = currentMode === constants.TIMER_MODES.STOP_WATCH ? 1 : -1;

    this.setState((prevState) => {
      return {
        timerProps: {
          ...prevState.timerProps,
          timerValue: prevState.timerProps.timerValue + (constants.ONE_SECOND * direction),
        },
      };
    }, this.checkTimer);
  };

  checkTimer = () => {
    if (this.state.timerProps.timerValue > 0) {
      return;
    }

    this.finishTimer();
  };

  finishTimer = () => {
    this.clearTimerInterval();
    sounds.bell && sounds.bell.play();

    this.setState((prevState) => {
      return {
        timerProps: {
          ...prevState.timerProps,
          isReady: false,
          isRunning: false,
          isStopped: true,
          triggerIcon: constants.TRIGGER_ICONS.RESTART,
          timerValue: 0,
          timerTitle: texts.modes.finishTimer,
        },
      };
    }, this.updateLogs);
  };

  updateLogs = () => {
    const { currentMode } = this.state.timerProps;
    const { FOCUS, SHORT_BREAK, LONG_BREAK, STOP_WATCH } = constants.TIMER_MODES;

    if (currentMode === FOCUS) {
      return this.setState((prevState) => {
        return {
          logProps: {
            ...prevState.logProps,
            focusTotal: prevState.logProps.focusTotal + 1,
          },
        };
      }, this.saveLogs);
    }

    if (currentMode === SHORT_BREAK) {
      return this.setState((prevState) => {
        return {
          logProps: {
            ...prevState.logProps,
            shortBreakTotal: prevState.logProps.shortBreakTotal + 1,
          },
        };
      }, this.saveLogs);
    }

    if (currentMode === LONG_BREAK) {
      return this.setState((prevState) => {
        return {
          logProps: {
            ...prevState.logProps,
            longBreakTotal: prevState.logProps.longBreakTotal + 1,
          },
        };
      }, this.saveLogs);
    }

    if (currentMode === STOP_WATCH) {
      return this.setState((prevState) => {
        return {
          logProps: {
            ...prevState.logProps,
            stopWatchTotal: prevState.logProps.stopWatchTotal + 1,
          },
        };
      }, this.saveLogs);
    }
  };

  saveLogs = () => {
    AsyncStorage.setItem(constants.STORAGE.LOGS, JSON.stringify(this.state.logProps))
      .catch(console.log);
  };

  clearTimerInterval = () => {
    clearInterval(timerIntervalId);
  };

  state = {
    ...initialState,
    timerProps: {
      ...timerProps,
      setTimerMode: this.setTimerMode,
      setNextTriggerState: this.setNextTriggerState,
    },
    logProps,
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
