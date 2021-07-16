export const SetTimeout = (func: () => void, timeout: number) => {
  const timer = CreateTimer();
  TimerStart(timer, timeout, false, func);
};
