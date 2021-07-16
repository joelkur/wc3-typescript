import { Action, createTrigger, TriggerOptions } from ".";

export const onAnyUnitEvent = (
  { event, conditions }: TriggerOptions<playerunitevent>,
  action: Action
) =>
  event &&
  TriggerRegisterAnyUnitEventBJ(createTrigger(action, conditions), event);
