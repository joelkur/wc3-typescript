import Unit from "../helpers/unit";

export type Conditions = (() => boolean)[];
export type Action = () => void;

export interface TriggerOptions<T> {
  event?: T;
  conditions?: (() => boolean)[];
}

export const getUnitsFromEvent = () => ({
  triggeringUnit: Unit.from(GetTriggerUnit()),
  enteringUnit: Unit.from(GetEnteringUnit()),
  dyingUnit: Unit.from(GetDyingUnit()),
  killingUnit: Unit.from(GetKillingUnit()),
});

export const createTrigger = (
  action: Action,
  conditions?: Conditions
): trigger => {
  const trg = CreateTrigger();
  if (conditions)
    conditions.forEach((cond) => TriggerAddCondition(trg, Condition(cond)));
  TriggerAddAction(trg, () => action());
  return trg;
};
