import { constants } from '../config';

export function formatTime(milliseconds) {
  const minutes = getMinutes(milliseconds);
  const seconds = ((milliseconds % 60000) / constants.ONE_SECOND).toFixed(0);

  return `${minutes === 0 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export function getMinutes(milliseconds) {
  return minutes = Math.floor(milliseconds / (60 * constants.ONE_SECOND));
}
