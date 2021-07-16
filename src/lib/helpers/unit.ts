export default class Unit {
  constructor(private unit: unit) {}

  get name(): string {
    return GetUnitName(this.unit);
  }

  get life(): number {
    return GetUnitState(this.unit, UNIT_STATE_LIFE);
  }

  set life(newLife: number) {
    SetUnitState(this.unit, UNIT_STATE_LIFE, newLife);
  }

  get maxLife(): number {
    return GetUnitState(this.unit, UNIT_STATE_MAX_LIFE);
  }

  set maxLife(newLife: number) {
    SetUnitState(this.unit, UNIT_STATE_MAX_LIFE, newLife);
  }

  get mana(): number {
    return GetUnitState(this.unit, UNIT_STATE_MANA);
  }

  set mana(newMana: number) {
    SetUnitState(this.unit, UNIT_STATE_MANA, newMana);
  }

  get maxMana(): number {
    return GetUnitState(this.unit, UNIT_STATE_MAX_MANA);
  }

  set maxMana(newMana: number) {
    SetUnitState(this.unit, UNIT_STATE_MAX_MANA, newMana);
  }

  explode() {
    ExplodeUnitBJ(this.unit);
  }

  kill() {
    KillUnit(this.unit);
  }

  isDead(): boolean {
    return IsUnitDeadBJ(this.unit);
  }

  isAlive(): boolean {
    return IsUnitAliveBJ(this.unit);
  }

  isHero(): boolean {
    return IsHeroUnitId(GetUnitTypeId(this.unit));
  }

  get typeId(): number {
    return GetUnitTypeId(this.unit);
  }

  get x(): number {
    return GetUnitX(this.unit);
  }

  get y(): number {
    return GetUnitY(this.unit);
  }

  get owner(): player {
    return GetOwningPlayer(this.unit);
  }

  static from(unit: unit) {
    return new Unit(unit);
  }
}
