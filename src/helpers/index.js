export function formatTime(milliseconds) {
  const minutes = getMinutes(milliseconds);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);

  return `${minutes === 0 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export function getMinutes(milliseconds) {
  return minutes = Math.floor(milliseconds / (60 * 1000));
}