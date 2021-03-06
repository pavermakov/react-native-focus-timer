export default {
  TIMER_MODES: {
    FOCUS: 0,
    SHORT_BREAK: 1,
    LONG_BREAK: 2,
    STOP_WATCH: 3,
  },

  TRIGGER_ICONS: {
    PLAY: 'ios-play',
    STOP: 'ios-close',
    RESTART: 'ios-refresh',
  },

  TOOLBAR_ICONS: {
    FOCUS: 'ios-laptop',
    SHORT_BREAK: 'ios-cafe',
    LONG_BREAK: 'ios-restaurant',
    STOP_WATCH: 'ios-stopwatch-outline',
  },

  TABBAR_ICONS: {
    FOCUS: 'ios-time-outline',
    LOG: 'ios-book-outline',
    GOAL: 'ios-school-outline',
  },

  TIMERS_LENGTH: {
    FOCUS: 25 * 60 * 1000,
    SHORT_BREAK: 5 * 60 * 1000,
    LONG_BREAK: 30 * 60 * 1000,
    STOP_WATCH: 0,
  },

  ONE_SECOND: 1000,

  STORAGE: {
    LOGS: 'focus_timer_logs',
  },

  IMAGES: {
    CONSTRUCTION: require('../assets/construction.png'),
  },
};
