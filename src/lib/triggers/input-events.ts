import { Action, createTrigger, TriggerOptions } from ".";

export enum MetaKey {
  NONE = 0,
  SHIFT = 1,
  CONTROL = 2,
  ALT = 4,
  WINDOWS = 8,
}
interface KeyTriggerOptions extends TriggerOptions<null> {
  event?: never;
  metakey: MetaKey;
  pressed: boolean;
  playerNumber: number;
  key: oskeytype;
}
export const onKeyEvent = (
  { conditions, metakey, pressed, playerNumber, key }: KeyTriggerOptions,
  action: Action
) =>
  BlzTriggerRegisterPlayerKeyEvent(
    createTrigger(action, conditions),
    Player(playerNumber),
    key,
    metakey,
    pressed
  );
