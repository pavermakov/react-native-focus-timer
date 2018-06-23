import React from 'react';
import { TimerScreen } from '../screens/TimerScreen';
import { LogScreen } from '../screens/LogScreen';

export default {
  timer: {
    title: "Timer",
    component: <TimerScreen />,
  },
  log: {
    title: "Log",
    component: <LogScreen />,
  },
  goals: {
    title: "Goals",
  },
};
