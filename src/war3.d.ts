declare interface handle {
  handle: never;
}
declare interface agent extends handle {
  agent: never;
}
declare interface event extends agent {
  event: never;
}
declare interface player extends agent {
  player: never;
}
declare interface widget extends agent {
  widget: never;
}
declare interface unit extends widget {
  unit: never;
}
declare interface destructable extends widget {
  destructable: never;
}
declare interface item extends widget {
  item: never;
}
declare interface ability extends agent {
  ability: never;
}
declare interface buff extends ability {
  buff: never;
}
declare interface force extends agent {
  force: never;
}
declare interface group extends agent {
  group: never;
}
declare interface trigger extends agent {
  trigger: never;
}
declare interface triggercondition extends agent {
  triggercondition: never;
}
declare interface triggeraction extends handle {
  triggeraction: never;
}
declare interface timer extends agent {
  timer: never;
}
declare interface location extends agent {
  location: never;
}
declare interface region extends agent {
  region: never;
}
declare interface rect extends agent {
  rect: never;
}
declare interface boolexpr extends agent {
  boolexpr: never;
}
declare interface sound extends agent {
  sound: never;
}
declare interface conditionfunc extends boolexpr {
  conditionfunc: never;
}
declare interface filterfunc extends boolexpr {
  filterfunc: never;
}
declare interface unitpool extends handle {
  unitpool: never;
}
declare interface itempool extends handle {
  itempool: never;
}
declare interface race extends handle {
  race: never;
}
declare interface alliancetype extends handle {
  alliancetype: never;
}
declare interface racepreference extends handle {
  racepreference: never;
}
declare interface gamestate extends handle {
  gamestate: never;
}
declare interface igamestate extends gamestate {
  igamestate: never;
}
declare interface fgamestate extends gamestate {
  fgamestate: never;
}
declare interface playerstate extends handle {
  playerstate: never;
}
declare interface playerscore extends handle {
  playerscore: never;
}
declare interface playergameresult extends handle {
  playergameresult: never;
}
declare interface unitstate extends handle {
  unitstate: never;
}
declare interface aidifficulty extends handle {
  aidifficulty: never;
}
declare interface eventid extends handle {
  eventid: never;
}
declare interface gameevent extends eventid {
  gameevent: never;
}
declare interface playerevent extends eventid {
  playerevent: never;
}
declare interface playerunitevent extends eventid {
  playerunitevent: never;
}
declare interface unitevent extends eventid {
  unitevent: never;
}
declare interface limitop extends eventid {
  limitop: never;
}
declare interface widgetevent extends eventid {
  widgetevent: never;
}
declare interface dialogevent extends eventid {
  dialogevent: never;
}
declare interface unittype extends handle {
  unittype: never;
}
declare interface gamespeed extends handle {
  gamespeed: never;
}
declare interface gamedifficulty extends handle {
  gamedifficulty: never;
}
declare interface gametype extends handle {
  gametype: never;
}
declare interface mapflag extends handle {
  mapflag: never;
}
declare interface mapvisibility extends handle {
  mapvisibility: never;
}
declare interface mapsetting extends handle {
  mapsetting: never;
}
declare interface mapdensity extends handle {
  mapdensity: never;
}
declare interface mapcontrol extends handle {
  mapcontrol: never;
}
declare interface minimapicon extends handle {
  minimapicon: never;
}
declare interface playerslotstate extends handle {
  playerslotstate: never;
}
declare interface volumegroup extends handle {
  volumegroup: never;
}
declare interface camerafield extends handle {
  camerafield: never;
}
declare interface camerasetup extends handle {
  camerasetup: never;
}
declare interface playercolor extends handle {
  playercolor: never;
}
declare interface placement extends handle {
  placement: never;
}
declare interface startlocprio extends handle {
  startlocprio: never;
}
declare interface raritycontrol extends handle {
  raritycontrol: never;
}
declare interface blendmode extends handle {
  blendmode: never;
}
declare interface texmapflags extends handle {
  texmapflags: never;
}
declare interface effect extends agent {
  effect: never;
}
declare interface effecttype extends handle {
  effecttype: never;
}
declare interface weathereffect extends handle {
  weathereffect: never;
}
declare interface terraindeformation extends handle {
  terraindeformation: never;
}
declare interface fogstate extends handle {
  fogstate: never;
}
declare interface fogmodifier extends agent {
  fogmodifier: never;
}
declare interface dialog extends agent {
  dialog: never;
}
declare interface button extends agent {
  button: never;
}
declare interface quest extends agent {
  quest: never;
}
declare interface questitem extends agent {
  questitem: never;
}
declare interface defeatcondition extends agent {
  defeatcondition: never;
}
declare interface timerdialog extends agent {
  timerdialog: never;
}
declare interface leaderboard extends agent {
  leaderboard: never;
}
declare interface multiboard extends agent {
  multiboard: never;
}
declare interface multiboarditem extends agent {
  multiboarditem: never;
}
declare interface trackable extends agent {
  trackable: never;
}
declare interface gamecache extends agent {
  gamecache: never;
}
declare interface version extends handle {
  version: never;
}
declare interface itemtype extends handle {
  itemtype: never;
}
declare interface texttag extends handle {
  texttag: never;
}
declare interface attacktype extends handle {
  attacktype: never;
}
declare interface damagetype extends handle {
  damagetype: never;
}
declare interface weapontype extends handle {
  weapontype: never;
}
declare interface soundtype extends handle {
  soundtype: never;
}
declare interface lightning extends handle {
  lightning: never;
}
declare interface pathingtype extends handle {
  pathingtype: never;
}
declare interface mousebuttontype extends handle {
  mousebuttontype: never;
}
declare interface animtype extends handle {
  animtype: never;
}
declare interface subanimtype extends handle {
  subanimtype: never;
}
declare interface image extends handle {
  image: never;
}
declare interface ubersplat extends handle {
  ubersplat: never;
}
declare interface hashtable extends agent {
  hashtable: never;
}
declare interface framehandle extends handle {
  framehandle: never;
}
declare interface originframetype extends handle {
  originframetype: never;
}
declare interface framepointtype extends handle {
  framepointtype: never;
}
declare interface textaligntype extends handle {
  textaligntype: never;
}
declare interface frameeventtype extends handle {
  frameeventtype: never;
}
declare interface oskeytype extends handle {
  oskeytype: never;
}
declare interface abilityintegerfield extends handle {
  abilityintegerfield: never;
}
declare interface abilityrealfield extends handle {
  abilityrealfield: never;
}
declare interface abilitybooleanfield extends handle {
  abilitybooleanfield: never;
}
declare interface abilitystringfield extends handle {
  abilitystringfield: never;
}
declare interface abilityintegerlevelfield extends handle {
  abilityintegerlevelfield: never;
}
declare interface abilityreallevelfield extends handle {
  abilityreallevelfield: never;
}
declare interface abilitybooleanlevelfield extends handle {
  abilitybooleanlevelfield: never;
}
declare interface abilitystringlevelfield extends handle {
  abilitystringlevelfield: never;
}
declare interface abilityintegerlevelarrayfield extends handle {
  abilityintegerlevelarrayfield: never;
}
declare interface abilityreallevelarrayfield extends handle {
  abilityreallevelarrayfield: never;
}
declare interface abilitybooleanlevelarrayfield extends handle {
  abilitybooleanlevelarrayfield: never;
}
declare interface abilitystringlevelarrayfield extends handle {
  abilitystringlevelarrayfield: never;
}
declare interface unitintegerfield extends handle {
  unitintegerfield: never;
}
declare interface unitrealfield extends handle {
  unitrealfield: never;
}
declare interface unitbooleanfield extends handle {
  unitbooleanfield: never;
}
declare interface unitstringfield extends handle {
  unitstringfield: never;
}
declare interface unitweaponintegerfield extends handle {
  unitweaponintegerfield: never;
}
declare interface unitweaponrealfield extends handle {
  unitweaponrealfield: never;
}
declare interface unitweaponbooleanfield extends handle {
  unitweaponbooleanfield: never;
}
declare interface unitweaponstringfield extends handle {
  unitweaponstringfield: never;
}
declare interface itemintegerfield extends handle {
  itemintegerfield: never;
}
declare interface itemrealfield extends handle {
  itemrealfield: never;
}
declare interface itembooleanfield extends handle {
  itembooleanfield: never;
}
declare interface itemstringfield extends handle {
  itemstringfield: never;
}
declare interface movetype extends handle {
  movetype: never;
}
declare interface targetflag extends handle {
  targetflag: never;
}
declare interface armortype extends handle {
  armortype: never;
}
declare interface heroattribute extends handle {
  heroattribute: never;
}
declare interface defensetype extends handle {
  defensetype: never;
}
declare interface regentype extends handle {
  regentype: never;
}
declare interface unitcategory extends handle {
  unitcategory: never;
}
declare interface pathingflag extends handle {
  pathingflag: never;
}
declare interface commandbuttoneffect extends handle {
  commandbuttoneffect: never;
}
declare const ConvertRace: (i: number) => race;
declare const ConvertAllianceType: (i: number) => alliancetype;
declare const ConvertRacePref: (i: number) => racepreference;
declare const ConvertIGameState: (i: number) => igamestate;
declare const ConvertFGameState: (i: number) => fgamestate;
declare const ConvertPlayerState: (i: number) => playerstate;
declare const ConvertPlayerScore: (i: number) => playerscore;
declare const ConvertPlayerGameResult: (i: number) => playergameresult;
declare const ConvertUnitState: (i: number) => unitstate;
declare const ConvertAIDifficulty: (i: number) => aidifficulty;
declare const ConvertGameEvent: (i: number) => gameevent;
declare const ConvertPlayerEvent: (i: number) => playerevent;
declare const ConvertPlayerUnitEvent: (i: number) => playerunitevent;
declare const ConvertWidgetEvent: (i: number) => widgetevent;
declare const ConvertDialogEvent: (i: number) => dialogevent;
declare const ConvertUnitEvent: (i: number) => unitevent;
declare const ConvertLimitOp: (i: number) => limitop;
declare const ConvertUnitType: (i: number) => unittype;
declare const ConvertGameSpeed: (i: number) => gamespeed;
declare const ConvertPlacement: (i: number) => placement;
declare const ConvertStartLocPrio: (i: number) => startlocprio;
declare const ConvertGameDifficulty: (i: number) => gamedifficulty;
declare const ConvertGameType: (i: number) => gametype;
declare const ConvertMapFlag: (i: number) => mapflag;
declare const ConvertMapVisibility: (i: number) => mapvisibility;
declare const ConvertMapSetting: (i: number) => mapsetting;
declare const ConvertMapDensity: (i: number) => mapdensity;
declare const ConvertMapControl: (i: number) => mapcontrol;
declare const ConvertPlayerColor: (i: number) => playercolor;
declare const ConvertPlayerSlotState: (i: number) => playerslotstate;
declare const ConvertVolumeGroup: (i: number) => volumegroup;
declare const ConvertCameraField: (i: number) => camerafield;
declare const ConvertBlendMode: (i: number) => blendmode;
declare const ConvertRarityControl: (i: number) => raritycontrol;
declare const ConvertTexMapFlags: (i: number) => texmapflags;
declare const ConvertFogState: (i: number) => fogstate;
declare const ConvertEffectType: (i: number) => effecttype;
declare const ConvertVersion: (i: number) => version;
declare const ConvertItemType: (i: number) => itemtype;
declare const ConvertAttackType: (i: number) => attacktype;
declare const ConvertDamageType: (i: number) => damagetype;
declare const ConvertWeaponType: (i: number) => weapontype;
declare const ConvertSoundType: (i: number) => soundtype;
declare const ConvertPathingType: (i: number) => pathingtype;
declare const ConvertMouseButtonType: (i: number) => mousebuttontype;
declare const ConvertAnimType: (i: number) => animtype;
declare const ConvertSubAnimType: (i: number) => subanimtype;
declare const ConvertOriginFrameType: (i: number) => originframetype;
declare const ConvertFramePointType: (i: number) => framepointtype;
declare const ConvertTextAlignType: (i: number) => textaligntype;
declare const ConvertFrameEventType: (i: number) => frameeventtype;
declare const ConvertOsKeyType: (i: number) => oskeytype;
declare const ConvertAbilityIntegerField: (i: number) => abilityintegerfield;
declare const ConvertAbilityRealField: (i: number) => abilityrealfield;
declare const ConvertAbilityBooleanField: (i: number) => abilitybooleanfield;
declare const ConvertAbilityStringField: (i: number) => abilitystringfield;
declare const ConvertAbilityIntegerLevelField: (
  i: number
) => abilityintegerlevelfield;
declare const ConvertAbilityRealLevelField: (
  i: number
) => abilityreallevelfield;
declare const ConvertAbilityBooleanLevelField: (
  i: number
) => abilitybooleanlevelfield;
declare const ConvertAbilityStringLevelField: (
  i: number
) => abilitystringlevelfield;
declare const ConvertAbilityIntegerLevelArrayField: (
  i: number
) => abilityintegerlevelarrayfield;
declare const ConvertAbilityRealLevelArrayField: (
  i: number
) => abilityreallevelarrayfield;
declare const ConvertAbilityBooleanLevelArrayField: (
  i: number
) => abilitybooleanlevelarrayfield;
declare const ConvertAbilityStringLevelArrayField: (
  i: number
) => abilitystringlevelarrayfield;
declare const ConvertUnitIntegerField: (i: number) => unitintegerfield;
declare const ConvertUnitRealField: (i: number) => unitrealfield;
declare const ConvertUnitBooleanField: (i: number) => unitbooleanfield;
declare const ConvertUnitStringField: (i: number) => unitstringfield;
declare const ConvertUnitWeaponIntegerField: (
  i: number
) => unitweaponintegerfield;
declare const ConvertUnitWeaponRealField: (i: number) => unitweaponrealfield;
declare const ConvertUnitWeaponBooleanField: (
  i: number
) => unitweaponbooleanfield;
declare const ConvertUnitWeaponStringField: (
  i: number
) => unitweaponstringfield;
declare const ConvertItemIntegerField: (i: number) => itemintegerfield;
declare const ConvertItemRealField: (i: number) => itemrealfield;
declare const ConvertItemBooleanField: (i: number) => itembooleanfield;
declare const ConvertItemStringField: (i: number) => itemstringfield;
declare const ConvertMoveType: (i: number) => movetype;
declare const ConvertTargetFlag: (i: number) => targetflag;
declare const ConvertArmorType: (i: number) => armortype;
declare const ConvertHeroAttribute: (i: number) => heroattribute;
declare const ConvertDefenseType: (i: number) => defensetype;
declare const ConvertRegenType: (i: number) => regentype;
declare const ConvertUnitCategory: (i: number) => unitcategory;
declare const ConvertPathingFlag: (i: number) => pathingflag;
declare const OrderId: (orderIdString: string) => number;
declare const OrderId2String: (orderId: number) => string;
declare const UnitId: (unitIdString: string) => number;
declare const UnitId2String: (unitId: number) => string;
declare const AbilityId: (abilityIdString: string) => number;
declare const AbilityId2String: (abilityId: number) => string;
declare const GetObjectName: (objectId: number) => string;
declare const GetBJMaxPlayers: () => number;
declare const GetBJPlayerNeutralVictim: () => number;
declare const GetBJPlayerNeutralExtra: () => number;
declare const GetBJMaxPlayerSlots: () => number;
declare const GetPlayerNeutralPassive: () => number;
declare const GetPlayerNeutralAggressive: () => number;
declare const FALSE: boolean;
declare const TRUE: boolean;
declare const JASS_MAX_ARRAY_SIZE: number;
declare const PLAYER_NEUTRAL_PASSIVE: number;
declare const PLAYER_NEUTRAL_AGGRESSIVE: number;
declare const PLAYER_COLOR_RED: playercolor;
declare const PLAYER_COLOR_BLUE: playercolor;
declare const PLAYER_COLOR_CYAN: playercolor;
declare const PLAYER_COLOR_PURPLE: playercolor;
declare const PLAYER_COLOR_YELLOW: playercolor;
declare const PLAYER_COLOR_ORANGE: playercolor;
declare const PLAYER_COLOR_GREEN: playercolor;
declare const PLAYER_COLOR_PINK: playercolor;
declare const PLAYER_COLOR_LIGHT_GRAY: playercolor;
declare const PLAYER_COLOR_LIGHT_BLUE: playercolor;
declare const PLAYER_COLOR_AQUA: playercolor;
declare const PLAYER_COLOR_BROWN: playercolor;
declare const PLAYER_COLOR_MAROON: playercolor;
declare const PLAYER_COLOR_NAVY: playercolor;
declare const PLAYER_COLOR_TURQUOISE: playercolor;
declare const PLAYER_COLOR_VIOLET: playercolor;
declare const PLAYER_COLOR_WHEAT: playercolor;
declare const PLAYER_COLOR_PEACH: playercolor;
declare const PLAYER_COLOR_MINT: playercolor;
declare const PLAYER_COLOR_LAVENDER: playercolor;
declare const PLAYER_COLOR_COAL: playercolor;
declare const PLAYER_COLOR_SNOW: playercolor;
declare const PLAYER_COLOR_EMERALD: playercolor;
declare const PLAYER_COLOR_PEANUT: playercolor;
declare const RACE_HUMAN: race;
declare const RACE_ORC: race;
declare const RACE_UNDEAD: race;
declare const RACE_NIGHTELF: race;
declare const RACE_DEMON: race;
declare const RACE_OTHER: race;
declare const PLAYER_GAME_RESULT_VICTORY: playergameresult;
declare const PLAYER_GAME_RESULT_DEFEAT: playergameresult;
declare const PLAYER_GAME_RESULT_TIE: playergameresult;
declare const PLAYER_GAME_RESULT_NEUTRAL: playergameresult;
declare const ALLIANCE_PASSIVE: alliancetype;
declare const ALLIANCE_HELP_REQUEST: alliancetype;
declare const ALLIANCE_HELP_RESPONSE: alliancetype;
declare const ALLIANCE_SHARED_XP: alliancetype;
declare const ALLIANCE_SHARED_SPELLS: alliancetype;
declare const ALLIANCE_SHARED_VISION: alliancetype;
declare const ALLIANCE_SHARED_CONTROL: alliancetype;
declare const ALLIANCE_SHARED_ADVANCED_CONTROL: alliancetype;
declare const ALLIANCE_RESCUABLE: alliancetype;
declare const ALLIANCE_SHARED_VISION_FORCED: alliancetype;
declare const VERSION_REIGN_OF_CHAOS: version;
declare const VERSION_FROZEN_THRONE: version;
declare const ATTACK_TYPE_NORMAL: attacktype;
declare const ATTACK_TYPE_MELEE: attacktype;
declare const ATTACK_TYPE_PIERCE: attacktype;
declare const ATTACK_TYPE_SIEGE: attacktype;
declare const ATTACK_TYPE_MAGIC: attacktype;
declare const ATTACK_TYPE_CHAOS: attacktype;
declare const ATTACK_TYPE_HERO: attacktype;
declare const DAMAGE_TYPE_UNKNOWN: damagetype;
declare const DAMAGE_TYPE_NORMAL: damagetype;
declare const DAMAGE_TYPE_ENHANCED: damagetype;
declare const DAMAGE_TYPE_FIRE: damagetype;
declare const DAMAGE_TYPE_COLD: damagetype;
declare const DAMAGE_TYPE_LIGHTNING: damagetype;
declare const DAMAGE_TYPE_POISON: damagetype;
declare const DAMAGE_TYPE_DISEASE: damagetype;
declare const DAMAGE_TYPE_DIVINE: damagetype;
declare const DAMAGE_TYPE_MAGIC: damagetype;
declare const DAMAGE_TYPE_SONIC: damagetype;
declare const DAMAGE_TYPE_ACID: damagetype;
declare const DAMAGE_TYPE_FORCE: damagetype;
declare const DAMAGE_TYPE_DEATH: damagetype;
declare const DAMAGE_TYPE_MIND: damagetype;
declare const DAMAGE_TYPE_PLANT: damagetype;
declare const DAMAGE_TYPE_DEFENSIVE: damagetype;
declare const DAMAGE_TYPE_DEMOLITION: damagetype;
declare const DAMAGE_TYPE_SLOW_POISON: damagetype;
declare const DAMAGE_TYPE_SPIRIT_LINK: damagetype;
declare const DAMAGE_TYPE_SHADOW_STRIKE: damagetype;
declare const DAMAGE_TYPE_UNIVERSAL: damagetype;
declare const WEAPON_TYPE_WHOKNOWS: weapontype;
declare const WEAPON_TYPE_METAL_LIGHT_CHOP: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_CHOP: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_CHOP: weapontype;
declare const WEAPON_TYPE_METAL_LIGHT_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_BASH: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_BASH: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_STAB: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_STAB: weapontype;
declare const WEAPON_TYPE_WOOD_LIGHT_SLICE: weapontype;
declare const WEAPON_TYPE_WOOD_MEDIUM_SLICE: weapontype;
declare const WEAPON_TYPE_WOOD_HEAVY_SLICE: weapontype;
declare const WEAPON_TYPE_WOOD_LIGHT_BASH: weapontype;
declare const WEAPON_TYPE_WOOD_MEDIUM_BASH: weapontype;
declare const WEAPON_TYPE_WOOD_HEAVY_BASH: weapontype;
declare const WEAPON_TYPE_WOOD_LIGHT_STAB: weapontype;
declare const WEAPON_TYPE_WOOD_MEDIUM_STAB: weapontype;
declare const WEAPON_TYPE_CLAW_LIGHT_SLICE: weapontype;
declare const WEAPON_TYPE_CLAW_MEDIUM_SLICE: weapontype;
declare const WEAPON_TYPE_CLAW_HEAVY_SLICE: weapontype;
declare const WEAPON_TYPE_AXE_MEDIUM_CHOP: weapontype;
declare const WEAPON_TYPE_ROCK_HEAVY_BASH: weapontype;
declare const PATHING_TYPE_ANY: pathingtype;
declare const PATHING_TYPE_WALKABILITY: pathingtype;
declare const PATHING_TYPE_FLYABILITY: pathingtype;
declare const PATHING_TYPE_BUILDABILITY: pathingtype;
declare const PATHING_TYPE_PEONHARVESTPATHING: pathingtype;
declare const PATHING_TYPE_BLIGHTPATHING: pathingtype;
declare const PATHING_TYPE_FLOATABILITY: pathingtype;
declare const PATHING_TYPE_AMPHIBIOUSPATHING: pathingtype;
declare const MOUSE_BUTTON_TYPE_LEFT: mousebuttontype;
declare const MOUSE_BUTTON_TYPE_MIDDLE: mousebuttontype;
declare const MOUSE_BUTTON_TYPE_RIGHT: mousebuttontype;
declare const ANIM_TYPE_BIRTH: animtype;
declare const ANIM_TYPE_DEATH: animtype;
declare const ANIM_TYPE_DECAY: animtype;
declare const ANIM_TYPE_DISSIPATE: animtype;
declare const ANIM_TYPE_STAND: animtype;
declare const ANIM_TYPE_WALK: animtype;
declare const ANIM_TYPE_ATTACK: animtype;
declare const ANIM_TYPE_MORPH: animtype;
declare const ANIM_TYPE_SLEEP: animtype;
declare const ANIM_TYPE_SPELL: animtype;
declare const ANIM_TYPE_PORTRAIT: animtype;
declare const SUBANIM_TYPE_ROOTED: subanimtype;
declare const SUBANIM_TYPE_ALTERNATE_EX: subanimtype;
declare const SUBANIM_TYPE_LOOPING: subanimtype;
declare const SUBANIM_TYPE_SLAM: subanimtype;
declare const SUBANIM_TYPE_THROW: subanimtype;
declare const SUBANIM_TYPE_SPIKED: subanimtype;
declare const SUBANIM_TYPE_FAST: subanimtype;
declare const SUBANIM_TYPE_SPIN: subanimtype;
declare const SUBANIM_TYPE_READY: subanimtype;
declare const SUBANIM_TYPE_CHANNEL: subanimtype;
declare const SUBANIM_TYPE_DEFEND: subanimtype;
declare const SUBANIM_TYPE_VICTORY: subanimtype;
declare const SUBANIM_TYPE_TURN: subanimtype;
declare const SUBANIM_TYPE_LEFT: subanimtype;
declare const SUBANIM_TYPE_RIGHT: subanimtype;
declare const SUBANIM_TYPE_FIRE: subanimtype;
declare const SUBANIM_TYPE_FLESH: subanimtype;
declare const SUBANIM_TYPE_HIT: subanimtype;
declare const SUBANIM_TYPE_WOUNDED: subanimtype;
declare const SUBANIM_TYPE_LIGHT: subanimtype;
declare const SUBANIM_TYPE_MODERATE: subanimtype;
declare const SUBANIM_TYPE_SEVERE: subanimtype;
declare const SUBANIM_TYPE_CRITICAL: subanimtype;
declare const SUBANIM_TYPE_COMPLETE: subanimtype;
declare const SUBANIM_TYPE_GOLD: subanimtype;
declare const SUBANIM_TYPE_LUMBER: subanimtype;
declare const SUBANIM_TYPE_WORK: subanimtype;
declare const SUBANIM_TYPE_TALK: subanimtype;
declare const SUBANIM_TYPE_FIRST: subanimtype;
declare const SUBANIM_TYPE_SECOND: subanimtype;
declare const SUBANIM_TYPE_THIRD: subanimtype;
declare const SUBANIM_TYPE_FOURTH: subanimtype;
declare const SUBANIM_TYPE_FIFTH: subanimtype;
declare const SUBANIM_TYPE_ONE: subanimtype;
declare const SUBANIM_TYPE_TWO: subanimtype;
declare const SUBANIM_TYPE_THREE: subanimtype;
declare const SUBANIM_TYPE_FOUR: subanimtype;
declare const SUBANIM_TYPE_FIVE: subanimtype;
declare const SUBANIM_TYPE_SMALL: subanimtype;
declare const SUBANIM_TYPE_MEDIUM: subanimtype;
declare const SUBANIM_TYPE_LARGE: subanimtype;
declare const SUBANIM_TYPE_UPGRADE: subanimtype;
declare const SUBANIM_TYPE_DRAIN: subanimtype;
declare const SUBANIM_TYPE_FILL: subanimtype;
declare const SUBANIM_TYPE_CHAINLIGHTNING: subanimtype;
declare const SUBANIM_TYPE_EATTREE: subanimtype;
declare const SUBANIM_TYPE_PUKE: subanimtype;
declare const SUBANIM_TYPE_FLAIL: subanimtype;
declare const SUBANIM_TYPE_OFF: subanimtype;
declare const SUBANIM_TYPE_SWIM: subanimtype;
declare const SUBANIM_TYPE_ENTANGLE: subanimtype;
declare const SUBANIM_TYPE_BERSERK: subanimtype;
declare const RACE_PREF_HUMAN: racepreference;
declare const RACE_PREF_ORC: racepreference;
declare const RACE_PREF_NIGHTELF: racepreference;
declare const RACE_PREF_UNDEAD: racepreference;
declare const RACE_PREF_DEMON: racepreference;
declare const RACE_PREF_RANDOM: racepreference;
declare const RACE_PREF_USER_SELECTABLE: racepreference;
declare const MAP_CONTROL_USER: mapcontrol;
declare const MAP_CONTROL_COMPUTER: mapcontrol;
declare const MAP_CONTROL_RESCUABLE: mapcontrol;
declare const MAP_CONTROL_NEUTRAL: mapcontrol;
declare const MAP_CONTROL_CREEP: mapcontrol;
declare const MAP_CONTROL_NONE: mapcontrol;
declare const GAME_TYPE_MELEE: gametype;
declare const GAME_TYPE_FFA: gametype;
declare const GAME_TYPE_USE_MAP_SETTINGS: gametype;
declare const GAME_TYPE_BLIZ: gametype;
declare const GAME_TYPE_ONE_ON_ONE: gametype;
declare const GAME_TYPE_TWO_TEAM_PLAY: gametype;
declare const GAME_TYPE_THREE_TEAM_PLAY: gametype;
declare const GAME_TYPE_FOUR_TEAM_PLAY: gametype;
declare const MAP_FOG_HIDE_TERRAIN: mapflag;
declare const MAP_FOG_MAP_EXPLORED: mapflag;
declare const MAP_FOG_ALWAYS_VISIBLE: mapflag;
declare const MAP_USE_HANDICAPS: mapflag;
declare const MAP_OBSERVERS: mapflag;
declare const MAP_OBSERVERS_ON_DEATH: mapflag;
declare const MAP_FIXED_COLORS: mapflag;
declare const MAP_LOCK_RESOURCE_TRADING: mapflag;
declare const MAP_RESOURCE_TRADING_ALLIES_ONLY: mapflag;
declare const MAP_LOCK_ALLIANCE_CHANGES: mapflag;
declare const MAP_ALLIANCE_CHANGES_HIDDEN: mapflag;
declare const MAP_CHEATS: mapflag;
declare const MAP_CHEATS_HIDDEN: mapflag;
declare const MAP_LOCK_SPEED: mapflag;
declare const MAP_LOCK_RANDOM_SEED: mapflag;
declare const MAP_SHARED_ADVANCED_CONTROL: mapflag;
declare const MAP_RANDOM_HERO: mapflag;
declare const MAP_RANDOM_RACES: mapflag;
declare const MAP_RELOADED: mapflag;
declare const MAP_PLACEMENT_RANDOM: placement;
declare const MAP_PLACEMENT_FIXED: placement;
declare const MAP_PLACEMENT_USE_MAP_SETTINGS: placement;
declare const MAP_PLACEMENT_TEAMS_TOGETHER: placement;
declare const MAP_LOC_PRIO_LOW: startlocprio;
declare const MAP_LOC_PRIO_HIGH: startlocprio;
declare const MAP_LOC_PRIO_NOT: startlocprio;
declare const MAP_DENSITY_NONE: mapdensity;
declare const MAP_DENSITY_LIGHT: mapdensity;
declare const MAP_DENSITY_MEDIUM: mapdensity;
declare const MAP_DENSITY_HEAVY: mapdensity;
declare const MAP_DIFFICULTY_EASY: gamedifficulty;
declare const MAP_DIFFICULTY_NORMAL: gamedifficulty;
declare const MAP_DIFFICULTY_HARD: gamedifficulty;
declare const MAP_DIFFICULTY_INSANE: gamedifficulty;
declare const MAP_SPEED_SLOWEST: gamespeed;
declare const MAP_SPEED_SLOW: gamespeed;
declare const MAP_SPEED_NORMAL: gamespeed;
declare const MAP_SPEED_FAST: gamespeed;
declare const MAP_SPEED_FASTEST: gamespeed;
declare const PLAYER_SLOT_STATE_EMPTY: playerslotstate;
declare const PLAYER_SLOT_STATE_PLAYING: playerslotstate;
declare const PLAYER_SLOT_STATE_LEFT: playerslotstate;
declare const SOUND_VOLUMEGROUP_UNITMOVEMENT: volumegroup;
declare const SOUND_VOLUMEGROUP_UNITSOUNDS: volumegroup;
declare const SOUND_VOLUMEGROUP_COMBAT: volumegroup;
declare const SOUND_VOLUMEGROUP_SPELLS: volumegroup;
declare const SOUND_VOLUMEGROUP_UI: volumegroup;
declare const SOUND_VOLUMEGROUP_MUSIC: volumegroup;
declare const SOUND_VOLUMEGROUP_AMBIENTSOUNDS: volumegroup;
declare const SOUND_VOLUMEGROUP_FIRE: volumegroup;
declare const GAME_STATE_DIVINE_INTERVENTION: igamestate;
declare const GAME_STATE_DISCONNECTED: igamestate;
declare const GAME_STATE_TIME_OF_DAY: fgamestate;
declare const PLAYER_STATE_GAME_RESULT: playerstate;
declare const PLAYER_STATE_RESOURCE_GOLD: playerstate;
declare const PLAYER_STATE_RESOURCE_LUMBER: playerstate;
declare const PLAYER_STATE_RESOURCE_HERO_TOKENS: playerstate;
declare const PLAYER_STATE_RESOURCE_FOOD_CAP: playerstate;
declare const PLAYER_STATE_RESOURCE_FOOD_USED: playerstate;
declare const PLAYER_STATE_FOOD_CAP_CEILING: playerstate;
declare const PLAYER_STATE_GIVES_BOUNTY: playerstate;
declare const PLAYER_STATE_ALLIED_VICTORY: playerstate;
declare const PLAYER_STATE_PLACED: playerstate;
declare const PLAYER_STATE_OBSERVER_ON_DEATH: playerstate;
declare const PLAYER_STATE_OBSERVER: playerstate;
declare const PLAYER_STATE_UNFOLLOWABLE: playerstate;
declare const PLAYER_STATE_GOLD_UPKEEP_RATE: playerstate;
declare const PLAYER_STATE_LUMBER_UPKEEP_RATE: playerstate;
declare const PLAYER_STATE_GOLD_GATHERED: playerstate;
declare const PLAYER_STATE_LUMBER_GATHERED: playerstate;
declare const PLAYER_STATE_NO_CREEP_SLEEP: playerstate;
declare const UNIT_STATE_LIFE: unitstate;
declare const UNIT_STATE_MAX_LIFE: unitstate;
declare const UNIT_STATE_MANA: unitstate;
declare const UNIT_STATE_MAX_MANA: unitstate;
declare const AI_DIFFICULTY_NEWBIE: aidifficulty;
declare const AI_DIFFICULTY_NORMAL: aidifficulty;
declare const AI_DIFFICULTY_INSANE: aidifficulty;
declare const PLAYER_SCORE_UNITS_TRAINED: playerscore;
declare const PLAYER_SCORE_UNITS_KILLED: playerscore;
declare const PLAYER_SCORE_STRUCT_BUILT: playerscore;
declare const PLAYER_SCORE_STRUCT_RAZED: playerscore;
declare const PLAYER_SCORE_TECH_PERCENT: playerscore;
declare const PLAYER_SCORE_FOOD_MAXPROD: playerscore;
declare const PLAYER_SCORE_FOOD_MAXUSED: playerscore;
declare const PLAYER_SCORE_HEROES_KILLED: playerscore;
declare const PLAYER_SCORE_ITEMS_GAINED: playerscore;
declare const PLAYER_SCORE_MERCS_HIRED: playerscore;
declare const PLAYER_SCORE_GOLD_MINED_TOTAL: playerscore;
declare const PLAYER_SCORE_GOLD_MINED_UPKEEP: playerscore;
declare const PLAYER_SCORE_GOLD_LOST_UPKEEP: playerscore;
declare const PLAYER_SCORE_GOLD_LOST_TAX: playerscore;
declare const PLAYER_SCORE_GOLD_GIVEN: playerscore;
declare const PLAYER_SCORE_GOLD_RECEIVED: playerscore;
declare const PLAYER_SCORE_LUMBER_TOTAL: playerscore;
declare const PLAYER_SCORE_LUMBER_LOST_UPKEEP: playerscore;
declare const PLAYER_SCORE_LUMBER_LOST_TAX: playerscore;
declare const PLAYER_SCORE_LUMBER_GIVEN: playerscore;
declare const PLAYER_SCORE_LUMBER_RECEIVED: playerscore;
declare const PLAYER_SCORE_UNIT_TOTAL: playerscore;
declare const PLAYER_SCORE_HERO_TOTAL: playerscore;
declare const PLAYER_SCORE_RESOURCE_TOTAL: playerscore;
declare const PLAYER_SCORE_TOTAL: playerscore;
declare const EVENT_GAME_VICTORY: gameevent;
declare const EVENT_GAME_END_LEVEL: gameevent;
declare const EVENT_GAME_VARIABLE_LIMIT: gameevent;
declare const EVENT_GAME_STATE_LIMIT: gameevent;
declare const EVENT_GAME_TIMER_EXPIRED: gameevent;
declare const EVENT_GAME_ENTER_REGION: gameevent;
declare const EVENT_GAME_LEAVE_REGION: gameevent;
declare const EVENT_GAME_TRACKABLE_HIT: gameevent;
declare const EVENT_GAME_TRACKABLE_TRACK: gameevent;
declare const EVENT_GAME_SHOW_SKILL: gameevent;
declare const EVENT_GAME_BUILD_SUBMENU: gameevent;
declare const EVENT_PLAYER_STATE_LIMIT: playerevent;
declare const EVENT_PLAYER_ALLIANCE_CHANGED: playerevent;
declare const EVENT_PLAYER_DEFEAT: playerevent;
declare const EVENT_PLAYER_VICTORY: playerevent;
declare const EVENT_PLAYER_LEAVE: playerevent;
declare const EVENT_PLAYER_CHAT: playerevent;
declare const EVENT_PLAYER_END_CINEMATIC: playerevent;
declare const EVENT_PLAYER_UNIT_ATTACKED: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESCUED: playerunitevent;
declare const EVENT_PLAYER_UNIT_DEATH: playerunitevent;
declare const EVENT_PLAYER_UNIT_DECAY: playerunitevent;
declare const EVENT_PLAYER_UNIT_DETECTED: playerunitevent;
declare const EVENT_PLAYER_UNIT_HIDDEN: playerunitevent;
declare const EVENT_PLAYER_UNIT_SELECTED: playerunitevent;
declare const EVENT_PLAYER_UNIT_DESELECTED: playerunitevent;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_UPGRADE_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_UPGRADE_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_UPGRADE_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_TRAIN_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_TRAIN_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_TRAIN_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESEARCH_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESEARCH_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESEARCH_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER: playerunitevent;
declare const EVENT_PLAYER_HERO_LEVEL: playerunitevent;
declare const EVENT_PLAYER_HERO_SKILL: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVABLE: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVE_START: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVE_CANCEL: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVE_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_SUMMON: playerunitevent;
declare const EVENT_PLAYER_UNIT_DROP_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_PICKUP_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_USE_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_LOADED: playerunitevent;
declare const EVENT_PLAYER_UNIT_DAMAGED: playerunitevent;
declare const EVENT_PLAYER_UNIT_DAMAGING: playerunitevent;
declare const EVENT_UNIT_DAMAGED: unitevent;
declare const EVENT_UNIT_DAMAGING: unitevent;
declare const EVENT_UNIT_DEATH: unitevent;
declare const EVENT_UNIT_DECAY: unitevent;
declare const EVENT_UNIT_DETECTED: unitevent;
declare const EVENT_UNIT_HIDDEN: unitevent;
declare const EVENT_UNIT_SELECTED: unitevent;
declare const EVENT_UNIT_DESELECTED: unitevent;
declare const EVENT_UNIT_STATE_LIMIT: unitevent;
declare const EVENT_UNIT_ACQUIRED_TARGET: unitevent;
declare const EVENT_UNIT_TARGET_IN_RANGE: unitevent;
declare const EVENT_UNIT_ATTACKED: unitevent;
declare const EVENT_UNIT_RESCUED: unitevent;
declare const EVENT_UNIT_CONSTRUCT_CANCEL: unitevent;
declare const EVENT_UNIT_CONSTRUCT_FINISH: unitevent;
declare const EVENT_UNIT_UPGRADE_START: unitevent;
declare const EVENT_UNIT_UPGRADE_CANCEL: unitevent;
declare const EVENT_UNIT_UPGRADE_FINISH: unitevent;
declare const EVENT_UNIT_TRAIN_START: unitevent;
declare const EVENT_UNIT_TRAIN_CANCEL: unitevent;
declare const EVENT_UNIT_TRAIN_FINISH: unitevent;
declare const EVENT_UNIT_RESEARCH_START: unitevent;
declare const EVENT_UNIT_RESEARCH_CANCEL: unitevent;
declare const EVENT_UNIT_RESEARCH_FINISH: unitevent;
declare const EVENT_UNIT_ISSUED_ORDER: unitevent;
declare const EVENT_UNIT_ISSUED_POINT_ORDER: unitevent;
declare const EVENT_UNIT_ISSUED_TARGET_ORDER: unitevent;
declare const EVENT_UNIT_HERO_LEVEL: unitevent;
declare const EVENT_UNIT_HERO_SKILL: unitevent;
declare const EVENT_UNIT_HERO_REVIVABLE: unitevent;
declare const EVENT_UNIT_HERO_REVIVE_START: unitevent;
declare const EVENT_UNIT_HERO_REVIVE_CANCEL: unitevent;
declare const EVENT_UNIT_HERO_REVIVE_FINISH: unitevent;
declare const EVENT_UNIT_SUMMON: unitevent;
declare const EVENT_UNIT_DROP_ITEM: unitevent;
declare const EVENT_UNIT_PICKUP_ITEM: unitevent;
declare const EVENT_UNIT_USE_ITEM: unitevent;
declare const EVENT_UNIT_LOADED: unitevent;
declare const EVENT_WIDGET_DEATH: widgetevent;
declare const EVENT_DIALOG_BUTTON_CLICK: dialogevent;
declare const EVENT_DIALOG_CLICK: dialogevent;
declare const EVENT_GAME_LOADED: gameevent;
declare const EVENT_GAME_TOURNAMENT_FINISH_SOON: gameevent;
declare const EVENT_GAME_TOURNAMENT_FINISH_NOW: gameevent;
declare const EVENT_GAME_SAVE: gameevent;
declare const EVENT_GAME_CUSTOM_UI_FRAME: gameevent;
declare const EVENT_PLAYER_ARROW_LEFT_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_LEFT_UP: playerevent;
declare const EVENT_PLAYER_ARROW_RIGHT_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_RIGHT_UP: playerevent;
declare const EVENT_PLAYER_ARROW_DOWN_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_DOWN_UP: playerevent;
declare const EVENT_PLAYER_ARROW_UP_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_UP_UP: playerevent;
declare const EVENT_PLAYER_MOUSE_DOWN: playerevent;
declare const EVENT_PLAYER_MOUSE_UP: playerevent;
declare const EVENT_PLAYER_MOUSE_MOVE: playerevent;
declare const EVENT_PLAYER_SYNC_DATA: playerevent;
declare const EVENT_PLAYER_KEY: playerevent;
declare const EVENT_PLAYER_KEY_DOWN: playerevent;
declare const EVENT_PLAYER_KEY_UP: playerevent;
declare const EVENT_PLAYER_UNIT_SELL: playerunitevent;
declare const EVENT_PLAYER_UNIT_CHANGE_OWNER: playerunitevent;
declare const EVENT_PLAYER_UNIT_SELL_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_CHANNEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_CAST: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_EFFECT: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_ENDCAST: playerunitevent;
declare const EVENT_PLAYER_UNIT_PAWN_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_STACK_ITEM: playerunitevent;
declare const EVENT_UNIT_SELL: unitevent;
declare const EVENT_UNIT_CHANGE_OWNER: unitevent;
declare const EVENT_UNIT_SELL_ITEM: unitevent;
declare const EVENT_UNIT_SPELL_CHANNEL: unitevent;
declare const EVENT_UNIT_SPELL_CAST: unitevent;
declare const EVENT_UNIT_SPELL_EFFECT: unitevent;
declare const EVENT_UNIT_SPELL_FINISH: unitevent;
declare const EVENT_UNIT_SPELL_ENDCAST: unitevent;
declare const EVENT_UNIT_PAWN_ITEM: unitevent;
declare const EVENT_UNIT_STACK_ITEM: unitevent;
declare const LESS_THAN: limitop;
declare const LESS_THAN_OR_EQUAL: limitop;
declare const EQUAL: limitop;
declare const GREATER_THAN_OR_EQUAL: limitop;
declare const GREATER_THAN: limitop;
declare const NOT_EQUAL: limitop;
declare const UNIT_TYPE_HERO: unittype;
declare const UNIT_TYPE_DEAD: unittype;
declare const UNIT_TYPE_STRUCTURE: unittype;
declare const UNIT_TYPE_FLYING: unittype;
declare const UNIT_TYPE_GROUND: unittype;
declare const UNIT_TYPE_ATTACKS_FLYING: unittype;
declare const UNIT_TYPE_ATTACKS_GROUND: unittype;
declare const UNIT_TYPE_MELEE_ATTACKER: unittype;
declare const UNIT_TYPE_RANGED_ATTACKER: unittype;
declare const UNIT_TYPE_GIANT: unittype;
declare const UNIT_TYPE_SUMMONED: unittype;
declare const UNIT_TYPE_STUNNED: unittype;
declare const UNIT_TYPE_PLAGUED: unittype;
declare const UNIT_TYPE_SNARED: unittype;
declare const UNIT_TYPE_UNDEAD: unittype;
declare const UNIT_TYPE_MECHANICAL: unittype;
declare const UNIT_TYPE_PEON: unittype;
declare const UNIT_TYPE_SAPPER: unittype;
declare const UNIT_TYPE_TOWNHALL: unittype;
declare const UNIT_TYPE_ANCIENT: unittype;
declare const UNIT_TYPE_TAUREN: unittype;
declare const UNIT_TYPE_POISONED: unittype;
declare const UNIT_TYPE_POLYMORPHED: unittype;
declare const UNIT_TYPE_SLEEPING: unittype;
declare const UNIT_TYPE_RESISTANT: unittype;
declare const UNIT_TYPE_ETHEREAL: unittype;
declare const UNIT_TYPE_MAGIC_IMMUNE: unittype;
declare const ITEM_TYPE_PERMANENT: itemtype;
declare const ITEM_TYPE_CHARGED: itemtype;
declare const ITEM_TYPE_POWERUP: itemtype;
declare const ITEM_TYPE_ARTIFACT: itemtype;
declare const ITEM_TYPE_PURCHASABLE: itemtype;
declare const ITEM_TYPE_CAMPAIGN: itemtype;
declare const ITEM_TYPE_MISCELLANEOUS: itemtype;
declare const ITEM_TYPE_UNKNOWN: itemtype;
declare const ITEM_TYPE_ANY: itemtype;
declare const ITEM_TYPE_TOME: itemtype;
declare const CAMERA_FIELD_TARGET_DISTANCE: camerafield;
declare const CAMERA_FIELD_FARZ: camerafield;
declare const CAMERA_FIELD_ANGLE_OF_ATTACK: camerafield;
declare const CAMERA_FIELD_FIELD_OF_VIEW: camerafield;
declare const CAMERA_FIELD_ROLL: camerafield;
declare const CAMERA_FIELD_ROTATION: camerafield;
declare const CAMERA_FIELD_ZOFFSET: camerafield;
declare const CAMERA_FIELD_NEARZ: camerafield;
declare const CAMERA_FIELD_LOCAL_PITCH: camerafield;
declare const CAMERA_FIELD_LOCAL_YAW: camerafield;
declare const CAMERA_FIELD_LOCAL_ROLL: camerafield;
declare const BLEND_MODE_NONE: blendmode;
declare const BLEND_MODE_DONT_CARE: blendmode;
declare const BLEND_MODE_KEYALPHA: blendmode;
declare const BLEND_MODE_BLEND: blendmode;
declare const BLEND_MODE_ADDITIVE: blendmode;
declare const BLEND_MODE_MODULATE: blendmode;
declare const BLEND_MODE_MODULATE_2X: blendmode;
declare const RARITY_FREQUENT: raritycontrol;
declare const RARITY_RARE: raritycontrol;
declare const TEXMAP_FLAG_NONE: texmapflags;
declare const TEXMAP_FLAG_WRAP_U: texmapflags;
declare const TEXMAP_FLAG_WRAP_V: texmapflags;
declare const TEXMAP_FLAG_WRAP_UV: texmapflags;
declare const FOG_OF_WAR_MASKED: fogstate;
declare const FOG_OF_WAR_FOGGED: fogstate;
declare const FOG_OF_WAR_VISIBLE: fogstate;
declare const CAMERA_MARGIN_LEFT: number;
declare const CAMERA_MARGIN_RIGHT: number;
declare const CAMERA_MARGIN_TOP: number;
declare const CAMERA_MARGIN_BOTTOM: number;
declare const EFFECT_TYPE_EFFECT: effecttype;
declare const EFFECT_TYPE_TARGET: effecttype;
declare const EFFECT_TYPE_CASTER: effecttype;
declare const EFFECT_TYPE_SPECIAL: effecttype;
declare const EFFECT_TYPE_AREA_EFFECT: effecttype;
declare const EFFECT_TYPE_MISSILE: effecttype;
declare const EFFECT_TYPE_LIGHTNING: effecttype;
declare const SOUND_TYPE_EFFECT: soundtype;
declare const SOUND_TYPE_EFFECT_LOOPED: soundtype;
declare const ORIGIN_FRAME_GAME_UI: originframetype;
declare const ORIGIN_FRAME_COMMAND_BUTTON: originframetype;
declare const ORIGIN_FRAME_HERO_BAR: originframetype;
declare const ORIGIN_FRAME_HERO_BUTTON: originframetype;
declare const ORIGIN_FRAME_HERO_HP_BAR: originframetype;
declare const ORIGIN_FRAME_HERO_MANA_BAR: originframetype;
declare const ORIGIN_FRAME_HERO_BUTTON_INDICATOR: originframetype;
declare const ORIGIN_FRAME_ITEM_BUTTON: originframetype;
declare const ORIGIN_FRAME_MINIMAP: originframetype;
declare const ORIGIN_FRAME_MINIMAP_BUTTON: originframetype;
declare const ORIGIN_FRAME_SYSTEM_BUTTON: originframetype;
declare const ORIGIN_FRAME_TOOLTIP: originframetype;
declare const ORIGIN_FRAME_UBERTOOLTIP: originframetype;
declare const ORIGIN_FRAME_CHAT_MSG: originframetype;
declare const ORIGIN_FRAME_UNIT_MSG: originframetype;
declare const ORIGIN_FRAME_TOP_MSG: originframetype;
declare const ORIGIN_FRAME_PORTRAIT: originframetype;
declare const ORIGIN_FRAME_WORLD_FRAME: originframetype;
declare const ORIGIN_FRAME_SIMPLE_UI_PARENT: originframetype;
declare const ORIGIN_FRAME_PORTRAIT_HP_TEXT: originframetype;
declare const ORIGIN_FRAME_PORTRAIT_MANA_TEXT: originframetype;
declare const ORIGIN_FRAME_UNIT_PANEL_BUFF_BAR: originframetype;
declare const ORIGIN_FRAME_UNIT_PANEL_BUFF_BAR_LABEL: originframetype;
declare const FRAMEPOINT_TOPLEFT: framepointtype;
declare const FRAMEPOINT_TOP: framepointtype;
declare const FRAMEPOINT_TOPRIGHT: framepointtype;
declare const FRAMEPOINT_LEFT: framepointtype;
declare const FRAMEPOINT_CENTER: framepointtype;
declare const FRAMEPOINT_RIGHT: framepointtype;
declare const FRAMEPOINT_BOTTOMLEFT: framepointtype;
declare const FRAMEPOINT_BOTTOM: framepointtype;
declare const FRAMEPOINT_BOTTOMRIGHT: framepointtype;
declare const TEXT_JUSTIFY_TOP: textaligntype;
declare const TEXT_JUSTIFY_MIDDLE: textaligntype;
declare const TEXT_JUSTIFY_BOTTOM: textaligntype;
declare const TEXT_JUSTIFY_LEFT: textaligntype;
declare const TEXT_JUSTIFY_CENTER: textaligntype;
declare const TEXT_JUSTIFY_RIGHT: textaligntype;
declare const FRAMEEVENT_CONTROL_CLICK: frameeventtype;
declare const FRAMEEVENT_MOUSE_ENTER: frameeventtype;
declare const FRAMEEVENT_MOUSE_LEAVE: frameeventtype;
declare const FRAMEEVENT_MOUSE_UP: frameeventtype;
declare const FRAMEEVENT_MOUSE_DOWN: frameeventtype;
declare const FRAMEEVENT_MOUSE_WHEEL: frameeventtype;
declare const FRAMEEVENT_CHECKBOX_CHECKED: frameeventtype;
declare const FRAMEEVENT_CHECKBOX_UNCHECKED: frameeventtype;
declare const FRAMEEVENT_EDITBOX_TEXT_CHANGED: frameeventtype;
declare const FRAMEEVENT_POPUPMENU_ITEM_CHANGED: frameeventtype;
declare const FRAMEEVENT_MOUSE_DOUBLECLICK: frameeventtype;
declare const FRAMEEVENT_SPRITE_ANIM_UPDATE: frameeventtype;
declare const FRAMEEVENT_SLIDER_VALUE_CHANGED: frameeventtype;
declare const FRAMEEVENT_DIALOG_CANCEL: frameeventtype;
declare const FRAMEEVENT_DIALOG_ACCEPT: frameeventtype;
declare const FRAMEEVENT_EDITBOX_ENTER: frameeventtype;
declare const OSKEY_BACKSPACE: oskeytype;
declare const OSKEY_TAB: oskeytype;
declare const OSKEY_CLEAR: oskeytype;
declare const OSKEY_RETURN: oskeytype;
declare const OSKEY_SHIFT: oskeytype;
declare const OSKEY_CONTROL: oskeytype;
declare const OSKEY_ALT: oskeytype;
declare const OSKEY_PAUSE: oskeytype;
declare const OSKEY_CAPSLOCK: oskeytype;
declare const OSKEY_KANA: oskeytype;
declare const OSKEY_HANGUL: oskeytype;
declare const OSKEY_JUNJA: oskeytype;
declare const OSKEY_FINAL: oskeytype;
declare const OSKEY_HANJA: oskeytype;
declare const OSKEY_KANJI: oskeytype;
declare const OSKEY_ESCAPE: oskeytype;
declare const OSKEY_CONVERT: oskeytype;
declare const OSKEY_NONCONVERT: oskeytype;
declare const OSKEY_ACCEPT: oskeytype;
declare const OSKEY_MODECHANGE: oskeytype;
declare const OSKEY_SPACE: oskeytype;
declare const OSKEY_PAGEUP: oskeytype;
declare const OSKEY_PAGEDOWN: oskeytype;
declare const OSKEY_END: oskeytype;
declare const OSKEY_HOME: oskeytype;
declare const OSKEY_LEFT: oskeytype;
declare const OSKEY_UP: oskeytype;
declare const OSKEY_RIGHT: oskeytype;
declare const OSKEY_DOWN: oskeytype;
declare const OSKEY_SELECT: oskeytype;
declare const OSKEY_PRINT: oskeytype;
declare const OSKEY_EXECUTE: oskeytype;
declare const OSKEY_PRINTSCREEN: oskeytype;
declare const OSKEY_INSERT: oskeytype;
declare const OSKEY_DELETE: oskeytype;
declare const OSKEY_HELP: oskeytype;
declare const OSKEY_0: oskeytype;
declare const OSKEY_1: oskeytype;
declare const OSKEY_2: oskeytype;
declare const OSKEY_3: oskeytype;
declare const OSKEY_4: oskeytype;
declare const OSKEY_5: oskeytype;
declare const OSKEY_6: oskeytype;
declare const OSKEY_7: oskeytype;
declare const OSKEY_8: oskeytype;
declare const OSKEY_9: oskeytype;
declare const OSKEY_A: oskeytype;
declare const OSKEY_B: oskeytype;
declare const OSKEY_C: oskeytype;
declare const OSKEY_D: oskeytype;
declare const OSKEY_E: oskeytype;
declare const OSKEY_F: oskeytype;
declare const OSKEY_G: oskeytype;
declare const OSKEY_H: oskeytype;
declare const OSKEY_I: oskeytype;
declare const OSKEY_J: oskeytype;
declare const OSKEY_K: oskeytype;
declare const OSKEY_L: oskeytype;
declare const OSKEY_M: oskeytype;
declare const OSKEY_N: oskeytype;
declare const OSKEY_O: oskeytype;
declare const OSKEY_P: oskeytype;
declare const OSKEY_Q: oskeytype;
declare const OSKEY_R: oskeytype;
declare const OSKEY_S: oskeytype;
declare const OSKEY_T: oskeytype;
declare const OSKEY_U: oskeytype;
declare const OSKEY_V: oskeytype;
declare const OSKEY_W: oskeytype;
declare const OSKEY_X: oskeytype;
declare const OSKEY_Y: oskeytype;
declare const OSKEY_Z: oskeytype;
declare const OSKEY_LMETA: oskeytype;
declare const OSKEY_RMETA: oskeytype;
declare const OSKEY_APPS: oskeytype;
declare const OSKEY_SLEEP: oskeytype;
declare const OSKEY_NUMPAD0: oskeytype;
declare const OSKEY_NUMPAD1: oskeytype;
declare const OSKEY_NUMPAD2: oskeytype;
declare const OSKEY_NUMPAD3: oskeytype;
declare const OSKEY_NUMPAD4: oskeytype;
declare const OSKEY_NUMPAD5: oskeytype;
declare const OSKEY_NUMPAD6: oskeytype;
declare const OSKEY_NUMPAD7: oskeytype;
declare const OSKEY_NUMPAD8: oskeytype;
declare const OSKEY_NUMPAD9: oskeytype;
declare const OSKEY_MULTIPLY: oskeytype;
declare const OSKEY_ADD: oskeytype;
declare const OSKEY_SEPARATOR: oskeytype;
declare const OSKEY_SUBTRACT: oskeytype;
declare const OSKEY_DECIMAL: oskeytype;
declare const OSKEY_DIVIDE: oskeytype;
declare const OSKEY_F1: oskeytype;
declare const OSKEY_F2: oskeytype;
declare const OSKEY_F3: oskeytype;
declare const OSKEY_F4: oskeytype;
declare const OSKEY_F5: oskeytype;
declare const OSKEY_F6: oskeytype;
declare const OSKEY_F7: oskeytype;
declare const OSKEY_F8: oskeytype;
declare const OSKEY_F9: oskeytype;
declare const OSKEY_F10: oskeytype;
declare const OSKEY_F11: oskeytype;
declare const OSKEY_F12: oskeytype;
declare const OSKEY_F13: oskeytype;
declare const OSKEY_F14: oskeytype;
declare const OSKEY_F15: oskeytype;
declare const OSKEY_F16: oskeytype;
declare const OSKEY_F17: oskeytype;
declare const OSKEY_F18: oskeytype;
declare const OSKEY_F19: oskeytype;
declare const OSKEY_F20: oskeytype;
declare const OSKEY_F21: oskeytype;
declare const OSKEY_F22: oskeytype;
declare const OSKEY_F23: oskeytype;
declare const OSKEY_F24: oskeytype;
declare const OSKEY_NUMLOCK: oskeytype;
declare const OSKEY_SCROLLLOCK: oskeytype;
declare const OSKEY_OEM_NEC_EQUAL: oskeytype;
declare const OSKEY_OEM_FJ_JISHO: oskeytype;
declare const OSKEY_OEM_FJ_MASSHOU: oskeytype;
declare const OSKEY_OEM_FJ_TOUROKU: oskeytype;
declare const OSKEY_OEM_FJ_LOYA: oskeytype;
declare const OSKEY_OEM_FJ_ROYA: oskeytype;
declare const OSKEY_LSHIFT: oskeytype;
declare const OSKEY_RSHIFT: oskeytype;
declare const OSKEY_LCONTROL: oskeytype;
declare const OSKEY_RCONTROL: oskeytype;
declare const OSKEY_LALT: oskeytype;
declare const OSKEY_RALT: oskeytype;
declare const OSKEY_BROWSER_BACK: oskeytype;
declare const OSKEY_BROWSER_FORWARD: oskeytype;
declare const OSKEY_BROWSER_REFRESH: oskeytype;
declare const OSKEY_BROWSER_STOP: oskeytype;
declare const OSKEY_BROWSER_SEARCH: oskeytype;
declare const OSKEY_BROWSER_FAVORITES: oskeytype;
declare const OSKEY_BROWSER_HOME: oskeytype;
declare const OSKEY_VOLUME_MUTE: oskeytype;
declare const OSKEY_VOLUME_DOWN: oskeytype;
declare const OSKEY_VOLUME_UP: oskeytype;
declare const OSKEY_MEDIA_NEXT_TRACK: oskeytype;
declare const OSKEY_MEDIA_PREV_TRACK: oskeytype;
declare const OSKEY_MEDIA_STOP: oskeytype;
declare const OSKEY_MEDIA_PLAY_PAUSE: oskeytype;
declare const OSKEY_LAUNCH_MAIL: oskeytype;
declare const OSKEY_LAUNCH_MEDIA_SELECT: oskeytype;
declare const OSKEY_LAUNCH_APP1: oskeytype;
declare const OSKEY_LAUNCH_APP2: oskeytype;
declare const OSKEY_OEM_1: oskeytype;
declare const OSKEY_OEM_PLUS: oskeytype;
declare const OSKEY_OEM_COMMA: oskeytype;
declare const OSKEY_OEM_MINUS: oskeytype;
declare const OSKEY_OEM_PERIOD: oskeytype;
declare const OSKEY_OEM_2: oskeytype;
declare const OSKEY_OEM_3: oskeytype;
declare const OSKEY_OEM_4: oskeytype;
declare const OSKEY_OEM_5: oskeytype;
declare const OSKEY_OEM_6: oskeytype;
declare const OSKEY_OEM_7: oskeytype;
declare const OSKEY_OEM_8: oskeytype;
declare const OSKEY_OEM_AX: oskeytype;
declare const OSKEY_OEM_102: oskeytype;
declare const OSKEY_ICO_HELP: oskeytype;
declare const OSKEY_ICO_00: oskeytype;
declare const OSKEY_PROCESSKEY: oskeytype;
declare const OSKEY_ICO_CLEAR: oskeytype;
declare const OSKEY_PACKET: oskeytype;
declare const OSKEY_OEM_RESET: oskeytype;
declare const OSKEY_OEM_JUMP: oskeytype;
declare const OSKEY_OEM_PA1: oskeytype;
declare const OSKEY_OEM_PA2: oskeytype;
declare const OSKEY_OEM_PA3: oskeytype;
declare const OSKEY_OEM_WSCTRL: oskeytype;
declare const OSKEY_OEM_CUSEL: oskeytype;
declare const OSKEY_OEM_ATTN: oskeytype;
declare const OSKEY_OEM_FINISH: oskeytype;
declare const OSKEY_OEM_COPY: oskeytype;
declare const OSKEY_OEM_AUTO: oskeytype;
declare const OSKEY_OEM_ENLW: oskeytype;
declare const OSKEY_OEM_BACKTAB: oskeytype;
declare const OSKEY_ATTN: oskeytype;
declare const OSKEY_CRSEL: oskeytype;
declare const OSKEY_EXSEL: oskeytype;
declare const OSKEY_EREOF: oskeytype;
declare const OSKEY_PLAY: oskeytype;
declare const OSKEY_ZOOM: oskeytype;
declare const OSKEY_NONAME: oskeytype;
declare const OSKEY_PA1: oskeytype;
declare const OSKEY_OEM_CLEAR: oskeytype;
declare const ABILITY_IF_BUTTON_POSITION_NORMAL_X: abilityintegerfield;
declare const ABILITY_IF_BUTTON_POSITION_NORMAL_Y: abilityintegerfield;
declare const ABILITY_IF_BUTTON_POSITION_ACTIVATED_X: abilityintegerfield;
declare const ABILITY_IF_BUTTON_POSITION_ACTIVATED_Y: abilityintegerfield;
declare const ABILITY_IF_BUTTON_POSITION_RESEARCH_X: abilityintegerfield;
declare const ABILITY_IF_BUTTON_POSITION_RESEARCH_Y: abilityintegerfield;
declare const ABILITY_IF_MISSILE_SPEED: abilityintegerfield;
declare const ABILITY_IF_TARGET_ATTACHMENTS: abilityintegerfield;
declare const ABILITY_IF_CASTER_ATTACHMENTS: abilityintegerfield;
declare const ABILITY_IF_PRIORITY: abilityintegerfield;
declare const ABILITY_IF_LEVELS: abilityintegerfield;
declare const ABILITY_IF_REQUIRED_LEVEL: abilityintegerfield;
declare const ABILITY_IF_LEVEL_SKIP_REQUIREMENT: abilityintegerfield;
declare const ABILITY_BF_HERO_ABILITY: abilitybooleanfield;
declare const ABILITY_BF_ITEM_ABILITY: abilitybooleanfield;
declare const ABILITY_BF_CHECK_DEPENDENCIES: abilitybooleanfield;
declare const ABILITY_RF_ARF_MISSILE_ARC: abilityrealfield;
declare const ABILITY_SF_NAME: abilitystringfield;
declare const ABILITY_SF_ICON_ACTIVATED: abilitystringfield;
declare const ABILITY_SF_ICON_RESEARCH: abilitystringfield;
declare const ABILITY_SF_EFFECT_SOUND: abilitystringfield;
declare const ABILITY_SF_EFFECT_SOUND_LOOPING: abilitystringfield;
declare const ABILITY_ILF_MANA_COST: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_WAVES: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_SHARDS: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_UNITS_TELEPORTED: abilityintegerlevelfield;
declare const ABILITY_ILF_SUMMONED_UNIT_COUNT_HWE2: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_IMAGES: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_UAN1: abilityintegerlevelfield;
declare const ABILITY_ILF_MORPHING_FLAGS: abilityintegerlevelfield;
declare const ABILITY_ILF_STRENGTH_BONUS_NRG5: abilityintegerlevelfield;
declare const ABILITY_ILF_DEFENSE_BONUS_NRG6: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_TARGETS_HIT: abilityintegerlevelfield;
declare const ABILITY_ILF_DETECTION_TYPE_OFS1: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_OSF2: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_EFN1: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_HRE1: abilityintegerlevelfield;
declare const ABILITY_ILF_STACK_FLAGS: abilityintegerlevelfield;
declare const ABILITY_ILF_MINIMUM_NUMBER_OF_UNITS: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_NDP3: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_UNITS_CREATED_NRC2: abilityintegerlevelfield;
declare const ABILITY_ILF_SHIELD_LIFE: abilityintegerlevelfield;
declare const ABILITY_ILF_MANA_LOSS_AMS4: abilityintegerlevelfield;
declare const ABILITY_ILF_GOLD_PER_INTERVAL_BGM1: abilityintegerlevelfield;
declare const ABILITY_ILF_MAX_NUMBER_OF_MINERS: abilityintegerlevelfield;
declare const ABILITY_ILF_CARGO_CAPACITY: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_DEV3: abilityintegerlevelfield;
declare const ABILITY_ILF_MAX_CREEP_LEVEL_DEV1: abilityintegerlevelfield;
declare const ABILITY_ILF_GOLD_PER_INTERVAL_EGM1: abilityintegerlevelfield;
declare const ABILITY_ILF_DEFENSE_REDUCTION: abilityintegerlevelfield;
declare const ABILITY_ILF_DETECTION_TYPE_FLA1: abilityintegerlevelfield;
declare const ABILITY_ILF_FLARE_COUNT: abilityintegerlevelfield;
declare const ABILITY_ILF_MAX_GOLD: abilityintegerlevelfield;
declare const ABILITY_ILF_MINING_CAPACITY: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_GYD1: abilityintegerlevelfield;
declare const ABILITY_ILF_DAMAGE_TO_TREE: abilityintegerlevelfield;
declare const ABILITY_ILF_LUMBER_CAPACITY: abilityintegerlevelfield;
declare const ABILITY_ILF_GOLD_CAPACITY: abilityintegerlevelfield;
declare const ABILITY_ILF_DEFENSE_INCREASE_INF2: abilityintegerlevelfield;
declare const ABILITY_ILF_INTERACTION_TYPE: abilityintegerlevelfield;
declare const ABILITY_ILF_GOLD_COST_NDT1: abilityintegerlevelfield;
declare const ABILITY_ILF_LUMBER_COST_NDT2: abilityintegerlevelfield;
declare const ABILITY_ILF_DETECTION_TYPE_NDT3: abilityintegerlevelfield;
declare const ABILITY_ILF_STACKING_TYPE_POI4: abilityintegerlevelfield;
declare const ABILITY_ILF_STACKING_TYPE_POA5: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_PLY1: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_POS1: abilityintegerlevelfield;
declare const ABILITY_ILF_MOVEMENT_UPDATE_FREQUENCY_PRG1: abilityintegerlevelfield;
declare const ABILITY_ILF_ATTACK_UPDATE_FREQUENCY_PRG2: abilityintegerlevelfield;
declare const ABILITY_ILF_MANA_LOSS_PRG6: abilityintegerlevelfield;
declare const ABILITY_ILF_UNITS_SUMMONED_TYPE_ONE: abilityintegerlevelfield;
declare const ABILITY_ILF_UNITS_SUMMONED_TYPE_TWO: abilityintegerlevelfield;
declare const ABILITY_ILF_MAX_UNITS_SUMMONED: abilityintegerlevelfield;
declare const ABILITY_ILF_ALLOW_WHEN_FULL_REJ3: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_UNITS_CHARGED_TO_CASTER: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_UNITS_AFFECTED: abilityintegerlevelfield;
declare const ABILITY_ILF_DEFENSE_INCREASE_ROA2: abilityintegerlevelfield;
declare const ABILITY_ILF_MAX_UNITS_ROA7: abilityintegerlevelfield;
declare const ABILITY_ILF_ROOTED_WEAPONS: abilityintegerlevelfield;
declare const ABILITY_ILF_UPROOTED_WEAPONS: abilityintegerlevelfield;
declare const ABILITY_ILF_UPROOTED_DEFENSE_TYPE: abilityintegerlevelfield;
declare const ABILITY_ILF_ACCUMULATION_STEP: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_OWLS: abilityintegerlevelfield;
declare const ABILITY_ILF_STACKING_TYPE_SPO4: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_UNITS: abilityintegerlevelfield;
declare const ABILITY_ILF_SPIDER_CAPACITY: abilityintegerlevelfield;
declare const ABILITY_ILF_INTERVALS_BEFORE_CHANGING_TREES: abilityintegerlevelfield;
declare const ABILITY_ILF_AGILITY_BONUS: abilityintegerlevelfield;
declare const ABILITY_ILF_INTELLIGENCE_BONUS: abilityintegerlevelfield;
declare const ABILITY_ILF_STRENGTH_BONUS_ISTR: abilityintegerlevelfield;
declare const ABILITY_ILF_ATTACK_BONUS: abilityintegerlevelfield;
declare const ABILITY_ILF_DEFENSE_BONUS_IDEF: abilityintegerlevelfield;
declare const ABILITY_ILF_SUMMON_1_AMOUNT: abilityintegerlevelfield;
declare const ABILITY_ILF_SUMMON_2_AMOUNT: abilityintegerlevelfield;
declare const ABILITY_ILF_EXPERIENCE_GAINED: abilityintegerlevelfield;
declare const ABILITY_ILF_HIT_POINTS_GAINED_IHPG: abilityintegerlevelfield;
declare const ABILITY_ILF_MANA_POINTS_GAINED_IMPG: abilityintegerlevelfield;
declare const ABILITY_ILF_HIT_POINTS_GAINED_IHP2: abilityintegerlevelfield;
declare const ABILITY_ILF_MANA_POINTS_GAINED_IMP2: abilityintegerlevelfield;
declare const ABILITY_ILF_DAMAGE_BONUS_DICE: abilityintegerlevelfield;
declare const ABILITY_ILF_ARMOR_PENALTY_IARP: abilityintegerlevelfield;
declare const ABILITY_ILF_ENABLED_ATTACK_INDEX_IOB5: abilityintegerlevelfield;
declare const ABILITY_ILF_LEVELS_GAINED: abilityintegerlevelfield;
declare const ABILITY_ILF_MAX_LIFE_GAINED: abilityintegerlevelfield;
declare const ABILITY_ILF_MAX_MANA_GAINED: abilityintegerlevelfield;
declare const ABILITY_ILF_GOLD_GIVEN: abilityintegerlevelfield;
declare const ABILITY_ILF_LUMBER_GIVEN: abilityintegerlevelfield;
declare const ABILITY_ILF_DETECTION_TYPE_IFA1: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_ICRE: abilityintegerlevelfield;
declare const ABILITY_ILF_MOVEMENT_SPEED_BONUS: abilityintegerlevelfield;
declare const ABILITY_ILF_HIT_POINTS_REGENERATED_PER_SECOND: abilityintegerlevelfield;
declare const ABILITY_ILF_SIGHT_RANGE_BONUS: abilityintegerlevelfield;
declare const ABILITY_ILF_DAMAGE_PER_DURATION: abilityintegerlevelfield;
declare const ABILITY_ILF_MANA_USED_PER_SECOND: abilityintegerlevelfield;
declare const ABILITY_ILF_EXTRA_MANA_REQUIRED: abilityintegerlevelfield;
declare const ABILITY_ILF_DETECTION_RADIUS_IDET: abilityintegerlevelfield;
declare const ABILITY_ILF_MANA_LOSS_PER_UNIT_IDIM: abilityintegerlevelfield;
declare const ABILITY_ILF_DAMAGE_TO_SUMMONED_UNITS_IDID: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_IREC: abilityintegerlevelfield;
declare const ABILITY_ILF_DELAY_AFTER_DEATH_SECONDS: abilityintegerlevelfield;
declare const ABILITY_ILF_RESTORED_LIFE: abilityintegerlevelfield;
declare const ABILITY_ILF_RESTORED_MANA__1_FOR_CURRENT: abilityintegerlevelfield;
declare const ABILITY_ILF_HIT_POINTS_RESTORED: abilityintegerlevelfield;
declare const ABILITY_ILF_MANA_POINTS_RESTORED: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_ITPM: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_CAD1: abilityintegerlevelfield;
declare const ABILITY_ILF_TERRAIN_DEFORMATION_DURATION_MS: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_UNITS: abilityintegerlevelfield;
declare const ABILITY_ILF_DETECTION_TYPE_DET1: abilityintegerlevelfield;
declare const ABILITY_ILF_GOLD_COST_PER_STRUCTURE: abilityintegerlevelfield;
declare const ABILITY_ILF_LUMBER_COST_PER_USE: abilityintegerlevelfield;
declare const ABILITY_ILF_DETECTION_TYPE_NSP3: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_SWARM_UNITS: abilityintegerlevelfield;
declare const ABILITY_ILF_MAX_SWARM_UNITS_PER_TARGET: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NBA2: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_NCH1: abilityintegerlevelfield;
declare const ABILITY_ILF_ATTACKS_PREVENTED: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_EFK3: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_ESV1: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_EXH1: abilityintegerlevelfield;
declare const ABILITY_ILF_ITEM_CAPACITY: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_SPL2: abilityintegerlevelfield;
declare const ABILITY_ILF_ALLOW_WHEN_FULL_IRL3: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_DISPELLED_UNITS: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_LURES: abilityintegerlevelfield;
declare const ABILITY_ILF_NEW_TIME_OF_DAY_HOUR: abilityintegerlevelfield;
declare const ABILITY_ILF_NEW_TIME_OF_DAY_MINUTE: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_UNITS_CREATED_MEC1: abilityintegerlevelfield;
declare const ABILITY_ILF_MINIMUM_SPELLS: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_SPELLS: abilityintegerlevelfield;
declare const ABILITY_ILF_DISABLED_ATTACK_INDEX: abilityintegerlevelfield;
declare const ABILITY_ILF_ENABLED_ATTACK_INDEX_GRA4: abilityintegerlevelfield;
declare const ABILITY_ILF_MAXIMUM_ATTACKS: abilityintegerlevelfield;
declare const ABILITY_ILF_BUILDING_TYPES_ALLOWED_NPR1: abilityintegerlevelfield;
declare const ABILITY_ILF_BUILDING_TYPES_ALLOWED_NSA1: abilityintegerlevelfield;
declare const ABILITY_ILF_ATTACK_MODIFICATION: abilityintegerlevelfield;
declare const ABILITY_ILF_SUMMONED_UNIT_COUNT_NPA5: abilityintegerlevelfield;
declare const ABILITY_ILF_UPGRADE_LEVELS: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NDO2: abilityintegerlevelfield;
declare const ABILITY_ILF_BEASTS_PER_SECOND: abilityintegerlevelfield;
declare const ABILITY_ILF_TARGET_TYPE: abilityintegerlevelfield;
declare const ABILITY_ILF_OPTIONS: abilityintegerlevelfield;
declare const ABILITY_ILF_ARMOR_PENALTY_NAB3: abilityintegerlevelfield;
declare const ABILITY_ILF_WAVE_COUNT_NHS6: abilityintegerlevelfield;
declare const ABILITY_ILF_MAX_CREEP_LEVEL_NTM3: abilityintegerlevelfield;
declare const ABILITY_ILF_MISSILE_COUNT: abilityintegerlevelfield;
declare const ABILITY_ILF_SPLIT_ATTACK_COUNT: abilityintegerlevelfield;
declare const ABILITY_ILF_GENERATION_COUNT: abilityintegerlevelfield;
declare const ABILITY_ILF_ROCK_RING_COUNT: abilityintegerlevelfield;
declare const ABILITY_ILF_WAVE_COUNT_NVC2: abilityintegerlevelfield;
declare const ABILITY_ILF_PREFER_HOSTILES_TAU1: abilityintegerlevelfield;
declare const ABILITY_ILF_PREFER_FRIENDLIES_TAU2: abilityintegerlevelfield;
declare const ABILITY_ILF_MAX_UNITS_TAU3: abilityintegerlevelfield;
declare const ABILITY_ILF_NUMBER_OF_PULSES: abilityintegerlevelfield;
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_HWE1: abilityintegerlevelfield;
declare const ABILITY_ILF_SUMMONED_UNIT_UIN4: abilityintegerlevelfield;
declare const ABILITY_ILF_SUMMONED_UNIT_OSF1: abilityintegerlevelfield;
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_EFNU: abilityintegerlevelfield;
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_NBAU: abilityintegerlevelfield;
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_NTOU: abilityintegerlevelfield;
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_ESVU: abilityintegerlevelfield;
declare const ABILITY_ILF_SUMMONED_UNIT_TYPES: abilityintegerlevelfield;
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_NDOU: abilityintegerlevelfield;
declare const ABILITY_ILF_ALTERNATE_FORM_UNIT_EMEU: abilityintegerlevelfield;
declare const ABILITY_ILF_PLAGUE_WARD_UNIT_TYPE: abilityintegerlevelfield;
declare const ABILITY_ILF_ALLOWED_UNIT_TYPE_BTL1: abilityintegerlevelfield;
declare const ABILITY_ILF_NEW_UNIT_TYPE: abilityintegerlevelfield;
declare const ABILITY_ILF_RESULTING_UNIT_TYPE_ENT1: abilityintegerlevelfield;
declare const ABILITY_ILF_CORPSE_UNIT_TYPE: abilityintegerlevelfield;
declare const ABILITY_ILF_ALLOWED_UNIT_TYPE_LOA1: abilityintegerlevelfield;
declare const ABILITY_ILF_UNIT_TYPE_FOR_LIMIT_CHECK: abilityintegerlevelfield;
declare const ABILITY_ILF_WARD_UNIT_TYPE_STAU: abilityintegerlevelfield;
declare const ABILITY_ILF_EFFECT_ABILITY: abilityintegerlevelfield;
declare const ABILITY_ILF_CONVERSION_UNIT: abilityintegerlevelfield;
declare const ABILITY_ILF_UNIT_TO_PRESERVE: abilityintegerlevelfield;
declare const ABILITY_ILF_UNIT_TYPE_ALLOWED: abilityintegerlevelfield;
declare const ABILITY_ILF_SWARM_UNIT_TYPE: abilityintegerlevelfield;
declare const ABILITY_ILF_RESULTING_UNIT_TYPE_COAU: abilityintegerlevelfield;
declare const ABILITY_ILF_UNIT_TYPE_EXHU: abilityintegerlevelfield;
declare const ABILITY_ILF_WARD_UNIT_TYPE_HWDU: abilityintegerlevelfield;
declare const ABILITY_ILF_LURE_UNIT_TYPE: abilityintegerlevelfield;
declare const ABILITY_ILF_UNIT_TYPE_IPMU: abilityintegerlevelfield;
declare const ABILITY_ILF_FACTORY_UNIT_ID: abilityintegerlevelfield;
declare const ABILITY_ILF_SPAWN_UNIT_ID_NFYU: abilityintegerlevelfield;
declare const ABILITY_ILF_DESTRUCTIBLE_ID: abilityintegerlevelfield;
declare const ABILITY_ILF_UPGRADE_TYPE: abilityintegerlevelfield;
declare const ABILITY_RLF_CASTING_TIME: abilityreallevelfield;
declare const ABILITY_RLF_DURATION_NORMAL: abilityreallevelfield;
declare const ABILITY_RLF_DURATION_HERO: abilityreallevelfield;
declare const ABILITY_RLF_COOLDOWN: abilityreallevelfield;
declare const ABILITY_RLF_AREA_OF_EFFECT: abilityreallevelfield;
declare const ABILITY_RLF_CAST_RANGE: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_HBZ2: abilityreallevelfield;
declare const ABILITY_RLF_BUILDING_REDUCTION_HBZ4: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_HBZ5: abilityreallevelfield;
declare const ABILITY_RLF_MAXIMUM_DAMAGE_PER_WAVE: abilityreallevelfield;
declare const ABILITY_RLF_MANA_REGENERATION_INCREASE: abilityreallevelfield;
declare const ABILITY_RLF_CASTING_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_OWW1: abilityreallevelfield;
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_OWW2: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_CRITICAL_STRIKE: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_OCR2: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_BONUS_OCR3: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_EVADE_OCR4: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_DEALT_PERCENT_OMI2: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_TAKEN_PERCENT_OMI3: abilityreallevelfield;
declare const ABILITY_RLF_ANIMATION_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_TRANSITION_TIME: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OWK2: abilityreallevelfield;
declare const ABILITY_RLF_BACKSTAB_DAMAGE: abilityreallevelfield;
declare const ABILITY_RLF_AMOUNT_HEALED_DAMAGED_UDC1: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_CONVERTED_TO_MANA: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_CONVERTED_TO_LIFE: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_UAU1: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_REGENERATION_INCREASE_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_EVADE_EEV1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_INTERVAL: abilityreallevelfield;
declare const ABILITY_RLF_MANA_DRAINED_PER_SECOND_EIM2: abilityreallevelfield;
declare const ABILITY_RLF_BUFFER_MANA_REQUIRED: abilityreallevelfield;
declare const ABILITY_RLF_MAX_MANA_DRAINED: abilityreallevelfield;
declare const ABILITY_RLF_BOLT_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_BOLT_LIFETIME: abilityreallevelfield;
declare const ABILITY_RLF_ALTITUDE_ADJUSTMENT_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_LANDING_DELAY_TIME: abilityreallevelfield;
declare const ABILITY_RLF_ALTERNATE_FORM_HIT_POINT_BONUS: abilityreallevelfield;
declare const ABILITY_RLF_MOVE_SPEED_BONUS_INFO_PANEL_ONLY: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_BONUS_INFO_PANEL_ONLY: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_REGENERATION_RATE_PER_SECOND: abilityreallevelfield;
declare const ABILITY_RLF_STUN_DURATION_USL1: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_DAMAGE_STOLEN_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_UCS1: abilityreallevelfield;
declare const ABILITY_RLF_MAX_DAMAGE_UCS2: abilityreallevelfield;
declare const ABILITY_RLF_DISTANCE_UCS3: abilityreallevelfield;
declare const ABILITY_RLF_FINAL_AREA_UCS4: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_UIN1: abilityreallevelfield;
declare const ABILITY_RLF_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_IMPACT_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_TARGET_OCL1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_REDUCTION_PER_TARGET: abilityreallevelfield;
declare const ABILITY_RLF_EFFECT_DELAY_OEQ1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_TO_BUILDINGS: abilityreallevelfield;
declare const ABILITY_RLF_UNITS_SLOWED_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_FINAL_AREA_OEQ4: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_EER1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_DEALT_TO_ATTACKERS: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_HEALED: abilityreallevelfield;
declare const ABILITY_RLF_HEAL_INTERVAL: abilityreallevelfield;
declare const ABILITY_RLF_BUILDING_REDUCTION_ETQ3: abilityreallevelfield;
declare const ABILITY_RLF_INITIAL_IMMUNITY_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_MAX_LIFE_DRAINED_PER_SECOND_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_BUILDING_REDUCTION_UDD2: abilityreallevelfield;
declare const ABILITY_RLF_ARMOR_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_ARMOR_BONUS_UFA2: abilityreallevelfield;
declare const ABILITY_RLF_AREA_OF_EFFECT_DAMAGE: abilityreallevelfield;
declare const ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_UFN2: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_BONUS_HFA1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_DEALT_ESF1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_INTERVAL_ESF2: abilityreallevelfield;
declare const ABILITY_RLF_BUILDING_REDUCTION_ESF3: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_BONUS_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_DEFENSE_BONUS_HAV1: abilityreallevelfield;
declare const ABILITY_RLF_HIT_POINT_BONUS: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_BONUS_HAV3: abilityreallevelfield;
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_HAV4: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_BASH: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_HBH2: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_BONUS_HBH3: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_MISS_HBH4: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_HTB1: abilityreallevelfield;
declare const ABILITY_RLF_AOE_DAMAGE: abilityreallevelfield;
declare const ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_HTC2: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HTC3: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HTC4: abilityreallevelfield;
declare const ABILITY_RLF_ARMOR_BONUS_HAD1: abilityreallevelfield;
declare const ABILITY_RLF_AMOUNT_HEALED_DAMAGED_HHB1: abilityreallevelfield;
declare const ABILITY_RLF_EXTRA_DAMAGE_HCA1: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_HCA2: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_HCA3: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OAE1: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_OAE2: abilityreallevelfield;
declare const ABILITY_RLF_REINCARNATION_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_OSH1: abilityreallevelfield;
declare const ABILITY_RLF_MAXIMUM_DAMAGE_OSH2: abilityreallevelfield;
declare const ABILITY_RLF_DISTANCE_OSH3: abilityreallevelfield;
declare const ABILITY_RLF_FINAL_AREA_OSH4: abilityreallevelfield;
declare const ABILITY_RLF_GRAPHIC_DELAY_NFD1: abilityreallevelfield;
declare const ABILITY_RLF_GRAPHIC_DURATION_NFD2: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_NFD3: abilityreallevelfield;
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_AMS1: abilityreallevelfield;
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_AMS2: abilityreallevelfield;
declare const ABILITY_RLF_AURA_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_APL2: abilityreallevelfield;
declare const ABILITY_RLF_DURATION_OF_PLAGUE_WARD: abilityreallevelfield;
declare const ABILITY_RLF_AMOUNT_OF_HIT_POINTS_REGENERATED: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_DAMAGE_INCREASE_AKB1: abilityreallevelfield;
declare const ABILITY_RLF_MANA_LOSS_ADM1: abilityreallevelfield;
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_ADM2: abilityreallevelfield;
declare const ABILITY_RLF_EXPANSION_AMOUNT: abilityreallevelfield;
declare const ABILITY_RLF_INTERVAL_DURATION_BGM2: abilityreallevelfield;
declare const ABILITY_RLF_RADIUS_OF_MINING_RING: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_BLO1: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_BLO2: abilityreallevelfield;
declare const ABILITY_RLF_SCALING_FACTOR: abilityreallevelfield;
declare const ABILITY_RLF_HIT_POINTS_PER_SECOND_CAN1: abilityreallevelfield;
declare const ABILITY_RLF_MAX_HIT_POINTS: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_DEV2: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_UPDATE_FREQUENCY_CHD1: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_UPDATE_FREQUENCY_CHD2: abilityreallevelfield;
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_CHD3: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_CRI1: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_CRI2: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_REDUCTION_CRI3: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_MISS_CRS: abilityreallevelfield;
declare const ABILITY_RLF_FULL_DAMAGE_RADIUS_DDA1: abilityreallevelfield;
declare const ABILITY_RLF_FULL_DAMAGE_AMOUNT_DDA2: abilityreallevelfield;
declare const ABILITY_RLF_PARTIAL_DAMAGE_RADIUS: abilityreallevelfield;
declare const ABILITY_RLF_PARTIAL_DAMAGE_AMOUNT: abilityreallevelfield;
declare const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_SDS1: abilityreallevelfield;
declare const ABILITY_RLF_MAX_DAMAGE_UCO5: abilityreallevelfield;
declare const ABILITY_RLF_MOVE_SPEED_BONUS_UCO6: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_TAKEN_PERCENT_DEF1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_DEALT_PERCENT_DEF2: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_DEF3: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_DEF4: abilityreallevelfield;
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_DEF5: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_DEFLECT: abilityreallevelfield;
declare const ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_PIERCING: abilityreallevelfield;
declare const ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_SPELLS: abilityreallevelfield;
declare const ABILITY_RLF_RIP_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_EAT_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_HIT_POINTS_GAINED_EAT3: abilityreallevelfield;
declare const ABILITY_RLF_AIR_UNIT_LOWER_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_AIR_UNIT_HEIGHT: abilityreallevelfield;
declare const ABILITY_RLF_MELEE_ATTACK_RANGE: abilityreallevelfield;
declare const ABILITY_RLF_INTERVAL_DURATION_EGM2: abilityreallevelfield;
declare const ABILITY_RLF_EFFECT_DELAY_FLA2: abilityreallevelfield;
declare const ABILITY_RLF_MINING_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_RADIUS_OF_GRAVESTONES: abilityreallevelfield;
declare const ABILITY_RLF_RADIUS_OF_CORPSES: abilityreallevelfield;
declare const ABILITY_RLF_HIT_POINTS_GAINED_HEA1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_INCREASE_PERCENT_INF1: abilityreallevelfield;
declare const ABILITY_RLF_AUTOCAST_RANGE: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_REGEN_RATE: abilityreallevelfield;
declare const ABILITY_RLF_GRAPHIC_DELAY_LIT1: abilityreallevelfield;
declare const ABILITY_RLF_GRAPHIC_DURATION_LIT2: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_LSH1: abilityreallevelfield;
declare const ABILITY_RLF_MANA_GAINED: abilityreallevelfield;
declare const ABILITY_RLF_HIT_POINTS_GAINED_MBT2: abilityreallevelfield;
declare const ABILITY_RLF_AUTOCAST_REQUIREMENT: abilityreallevelfield;
declare const ABILITY_RLF_WATER_HEIGHT: abilityreallevelfield;
declare const ABILITY_RLF_ACTIVATION_DELAY_MIN1: abilityreallevelfield;
declare const ABILITY_RLF_INVISIBILITY_TRANSITION_TIME: abilityreallevelfield;
declare const ABILITY_RLF_ACTIVATION_RADIUS: abilityreallevelfield;
declare const ABILITY_RLF_AMOUNT_REGENERATED: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_POI1: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_POI2: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POI3: abilityreallevelfield;
declare const ABILITY_RLF_EXTRA_DAMAGE_POA1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_POA2: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_POA3: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POA4: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_AMPLIFICATION: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_STOMP_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_DEALT_WAR2: abilityreallevelfield;
declare const ABILITY_RLF_FULL_DAMAGE_RADIUS_WAR3: abilityreallevelfield;
declare const ABILITY_RLF_HALF_DAMAGE_RADIUS_WAR4: abilityreallevelfield;
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_PRG3: abilityreallevelfield;
declare const ABILITY_RLF_UNIT_PAUSE_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_HERO_PAUSE_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_HIT_POINTS_GAINED_REJ1: abilityreallevelfield;
declare const ABILITY_RLF_MANA_POINTS_GAINED_REJ2: abilityreallevelfield;
declare const ABILITY_RLF_MINIMUM_LIFE_REQUIRED: abilityreallevelfield;
declare const ABILITY_RLF_MINIMUM_MANA_REQUIRED: abilityreallevelfield;
declare const ABILITY_RLF_REPAIR_COST_RATIO: abilityreallevelfield;
declare const ABILITY_RLF_REPAIR_TIME_RATIO: abilityreallevelfield;
declare const ABILITY_RLF_POWERBUILD_COST: abilityreallevelfield;
declare const ABILITY_RLF_POWERBUILD_RATE: abilityreallevelfield;
declare const ABILITY_RLF_NAVAL_RANGE_BONUS: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_INCREASE_PERCENT_ROA1: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_REGENERATION_RATE: abilityreallevelfield;
declare const ABILITY_RLF_MANA_REGEN: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_INCREASE: abilityreallevelfield;
declare const ABILITY_RLF_SALVAGE_COST_RATIO: abilityreallevelfield;
declare const ABILITY_RLF_IN_FLIGHT_SIGHT_RADIUS: abilityreallevelfield;
declare const ABILITY_RLF_HOVERING_SIGHT_RADIUS: abilityreallevelfield;
declare const ABILITY_RLF_HOVERING_HEIGHT: abilityreallevelfield;
declare const ABILITY_RLF_DURATION_OF_OWLS: abilityreallevelfield;
declare const ABILITY_RLF_FADE_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_DAY_NIGHT_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_ACTION_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SLO1: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_SLO2: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_SPO1: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SPO2: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_SPO3: abilityreallevelfield;
declare const ABILITY_RLF_ACTIVATION_DELAY_STA1: abilityreallevelfield;
declare const ABILITY_RLF_DETECTION_RADIUS_STA2: abilityreallevelfield;
declare const ABILITY_RLF_DETONATION_RADIUS: abilityreallevelfield;
declare const ABILITY_RLF_STUN_DURATION_STA4: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_BONUS_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_UHF2: abilityreallevelfield;
declare const ABILITY_RLF_LUMBER_PER_INTERVAL: abilityreallevelfield;
declare const ABILITY_RLF_ART_ATTACHMENT_HEIGHT: abilityreallevelfield;
declare const ABILITY_RLF_TELEPORT_AREA_WIDTH: abilityreallevelfield;
declare const ABILITY_RLF_TELEPORT_AREA_HEIGHT: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_STOLEN_PER_ATTACK: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_BONUS_IDAM: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_HIT_UNITS_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_HIT_HEROS_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_HIT_SUMMONS_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_DELAY_FOR_TARGET_EFFECT: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_DEALT_PERCENT_OF_NORMAL: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_RECEIVED_MULTIPLIER: abilityreallevelfield;
declare const ABILITY_RLF_MANA_REGENERATION_BONUS_AS_FRACTION_OF_NORMAL: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_ISPI: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_IDPS: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_DAMAGE_INCREASE_CAC1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_COR1: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_ISX1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_WRS1: abilityreallevelfield;
declare const ABILITY_RLF_TERRAIN_DEFORMATION_AMPLITUDE: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_CTC1: abilityreallevelfield;
declare const ABILITY_RLF_EXTRA_DAMAGE_TO_TARGET: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_CTC3: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_CTC4: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_CTB1: abilityreallevelfield;
declare const ABILITY_RLF_CASTING_DELAY_SECONDS: abilityreallevelfield;
declare const ABILITY_RLF_MANA_LOSS_PER_UNIT_DTN1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_DTN2: abilityreallevelfield;
declare const ABILITY_RLF_TRANSITION_TIME_SECONDS: abilityreallevelfield;
declare const ABILITY_RLF_MANA_DRAINED_PER_SECOND_NMR1: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_REDUCE_DAMAGE_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_MINIMUM_DAMAGE: abilityreallevelfield;
declare const ABILITY_RLF_IGNORED_DAMAGE: abilityreallevelfield;
declare const ABILITY_RLF_FULL_DAMAGE_DEALT: abilityreallevelfield;
declare const ABILITY_RLF_FULL_DAMAGE_INTERVAL: abilityreallevelfield;
declare const ABILITY_RLF_HALF_DAMAGE_DEALT: abilityreallevelfield;
declare const ABILITY_RLF_HALF_DAMAGE_INTERVAL: abilityreallevelfield;
declare const ABILITY_RLF_BUILDING_REDUCTION_HFS5: abilityreallevelfield;
declare const ABILITY_RLF_MAXIMUM_DAMAGE_HFS6: abilityreallevelfield;
declare const ABILITY_RLF_MANA_PER_HIT_POINT: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_ABSORBED_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_WAVE_DISTANCE: abilityreallevelfield;
declare const ABILITY_RLF_WAVE_TIME_SECONDS: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_DEALT_UIM3: abilityreallevelfield;
declare const ABILITY_RLF_AIR_TIME_SECONDS_UIM4: abilityreallevelfield;
declare const ABILITY_RLF_UNIT_RELEASE_INTERVAL_SECONDS: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_RETURN_FACTOR: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_RETURN_THRESHOLD: abilityreallevelfield;
declare const ABILITY_RLF_RETURNED_DAMAGE_FACTOR: abilityreallevelfield;
declare const ABILITY_RLF_RECEIVED_DAMAGE_FACTOR: abilityreallevelfield;
declare const ABILITY_RLF_DEFENSE_BONUS_UTS3: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_BONUS_NBA1: abilityreallevelfield;
declare const ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NBA3: abilityreallevelfield;
declare const ABILITY_RLF_MANA_PER_SUMMONED_HITPOINT: abilityreallevelfield;
declare const ABILITY_RLF_CHARGE_FOR_CURRENT_LIFE: abilityreallevelfield;
declare const ABILITY_RLF_HIT_POINTS_DRAINED: abilityreallevelfield;
declare const ABILITY_RLF_MANA_POINTS_DRAINED: abilityreallevelfield;
declare const ABILITY_RLF_DRAIN_INTERVAL_SECONDS: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_TRANSFERRED_PER_SECOND: abilityreallevelfield;
declare const ABILITY_RLF_MANA_TRANSFERRED_PER_SECOND: abilityreallevelfield;
declare const ABILITY_RLF_BONUS_LIFE_FACTOR: abilityreallevelfield;
declare const ABILITY_RLF_BONUS_LIFE_DECAY: abilityreallevelfield;
declare const ABILITY_RLF_BONUS_MANA_FACTOR: abilityreallevelfield;
declare const ABILITY_RLF_BONUS_MANA_DECAY: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_MISS_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_MODIFIER: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_MODIFIER: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_TDG1: abilityreallevelfield;
declare const ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_TDG2: abilityreallevelfield;
declare const ABILITY_RLF_MEDIUM_DAMAGE_PER_SECOND: abilityreallevelfield;
declare const ABILITY_RLF_SMALL_DAMAGE_RADIUS_TDG4: abilityreallevelfield;
declare const ABILITY_RLF_SMALL_DAMAGE_PER_SECOND: abilityreallevelfield;
declare const ABILITY_RLF_AIR_TIME_SECONDS_TSP1: abilityreallevelfield;
declare const ABILITY_RLF_MINIMUM_HIT_INTERVAL_SECONDS: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_NBF5: abilityreallevelfield;
declare const ABILITY_RLF_MAXIMUM_RANGE: abilityreallevelfield;
declare const ABILITY_RLF_MINIMUM_RANGE: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_TARGET_EFK1: abilityreallevelfield;
declare const ABILITY_RLF_MAXIMUM_TOTAL_DAMAGE: abilityreallevelfield;
declare const ABILITY_RLF_MAXIMUM_SPEED_ADJUSTMENT: abilityreallevelfield;
declare const ABILITY_RLF_DECAYING_DAMAGE: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_ESH2: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_ESH3: abilityreallevelfield;
declare const ABILITY_RLF_DECAY_POWER: abilityreallevelfield;
declare const ABILITY_RLF_INITIAL_DAMAGE_ESH5: abilityreallevelfield;
declare const ABILITY_RLF_MAXIMUM_LIFE_ABSORBED: abilityreallevelfield;
declare const ABILITY_RLF_MAXIMUM_MANA_ABSORBED: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_BSK1: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_BSK2: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_TAKEN_INCREASE: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_PER_UNIT: abilityreallevelfield;
declare const ABILITY_RLF_MANA_PER_UNIT: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_PER_BUFF: abilityreallevelfield;
declare const ABILITY_RLF_MANA_PER_BUFF: abilityreallevelfield;
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_DVM5: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_BONUS_FAK1: abilityreallevelfield;
declare const ABILITY_RLF_MEDIUM_DAMAGE_FACTOR_FAK2: abilityreallevelfield;
declare const ABILITY_RLF_SMALL_DAMAGE_FACTOR_FAK3: abilityreallevelfield;
declare const ABILITY_RLF_FULL_DAMAGE_RADIUS_FAK4: abilityreallevelfield;
declare const ABILITY_RLF_HALF_DAMAGE_RADIUS_FAK5: abilityreallevelfield;
declare const ABILITY_RLF_EXTRA_DAMAGE_PER_SECOND: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_LIQ2: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_LIQ3: abilityreallevelfield;
declare const ABILITY_RLF_MAGIC_DAMAGE_FACTOR: abilityreallevelfield;
declare const ABILITY_RLF_UNIT_DAMAGE_PER_MANA_POINT: abilityreallevelfield;
declare const ABILITY_RLF_HERO_DAMAGE_PER_MANA_POINT: abilityreallevelfield;
declare const ABILITY_RLF_UNIT_MAXIMUM_DAMAGE: abilityreallevelfield;
declare const ABILITY_RLF_HERO_MAXIMUM_DAMAGE: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_COOLDOWN: abilityreallevelfield;
declare const ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_SPL1: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_REGENERATED: abilityreallevelfield;
declare const ABILITY_RLF_MANA_REGENERATED: abilityreallevelfield;
declare const ABILITY_RLF_MANA_LOSS_PER_UNIT_IDC1: abilityreallevelfield;
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_IDC2: abilityreallevelfield;
declare const ABILITY_RLF_ACTIVATION_DELAY_IMO2: abilityreallevelfield;
declare const ABILITY_RLF_LURE_INTERVAL_SECONDS: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_BONUS_ISR1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_REDUCTION_ISR2: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_BONUS_IPV1: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_STEAL_AMOUNT: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_RESTORED_FACTOR: abilityreallevelfield;
declare const ABILITY_RLF_MANA_RESTORED_FACTOR: abilityreallevelfield;
declare const ABILITY_RLF_ATTACH_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_REMOVE_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_HERO_REGENERATION_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_UNIT_REGENERATION_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_NSA4: abilityreallevelfield;
declare const ABILITY_RLF_HIT_POINTS_PER_SECOND_NSA5: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_IXS1: abilityreallevelfield;
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_IXS2: abilityreallevelfield;
declare const ABILITY_RLF_SUMMONED_UNIT_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_SHIELD_COOLDOWN_TIME: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_NDO1: abilityreallevelfield;
declare const ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NDO3: abilityreallevelfield;
declare const ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_FLK1: abilityreallevelfield;
declare const ABILITY_RLF_SMALL_DAMAGE_RADIUS_FLK2: abilityreallevelfield;
declare const ABILITY_RLF_FULL_DAMAGE_AMOUNT_FLK3: abilityreallevelfield;
declare const ABILITY_RLF_MEDIUM_DAMAGE_AMOUNT: abilityreallevelfield;
declare const ABILITY_RLF_SMALL_DAMAGE_AMOUNT: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HBN1: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HBN2: abilityreallevelfield;
declare const ABILITY_RLF_MAX_MANA_DRAINED_UNITS: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_RATIO_UNITS_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_MAX_MANA_DRAINED_HEROS: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_RATIO_HEROS_PERCENT: abilityreallevelfield;
declare const ABILITY_RLF_SUMMONED_DAMAGE: abilityreallevelfield;
declare const ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_NCA1: abilityreallevelfield;
declare const ABILITY_RLF_INITIAL_DAMAGE_PXF1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_PXF2: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PER_SECOND_MLS1: abilityreallevelfield;
declare const ABILITY_RLF_BEAST_COLLISION_RADIUS: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_AMOUNT_NST3: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_RADIUS: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_FOLLOW_THROUGH_TIME: abilityreallevelfield;
declare const ABILITY_RLF_ART_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NAB1: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NAB2: abilityreallevelfield;
declare const ABILITY_RLF_PRIMARY_DAMAGE: abilityreallevelfield;
declare const ABILITY_RLF_SECONDARY_DAMAGE: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_INTERVAL_NAB6: abilityreallevelfield;
declare const ABILITY_RLF_GOLD_COST_FACTOR: abilityreallevelfield;
declare const ABILITY_RLF_LUMBER_COST_FACTOR: abilityreallevelfield;
declare const ABILITY_RLF_MOVE_SPEED_BONUS_NEG1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_BONUS_NEG2: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_AMOUNT_NCS1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_INTERVAL_NCS2: abilityreallevelfield;
declare const ABILITY_RLF_MAX_DAMAGE_NCS4: abilityreallevelfield;
declare const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NCS5: abilityreallevelfield;
declare const ABILITY_RLF_EFFECT_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_SPAWN_INTERVAL_NSY1: abilityreallevelfield;
declare const ABILITY_RLF_SPAWN_UNIT_DURATION: abilityreallevelfield;
declare const ABILITY_RLF_SPAWN_UNIT_OFFSET: abilityreallevelfield;
declare const ABILITY_RLF_LEASH_RANGE_NSY5: abilityreallevelfield;
declare const ABILITY_RLF_SPAWN_INTERVAL_NFY1: abilityreallevelfield;
declare const ABILITY_RLF_LEASH_RANGE_NFY2: abilityreallevelfield;
declare const ABILITY_RLF_CHANCE_TO_DEMOLISH: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_BUILDINGS: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_UNITS: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_HEROES: abilityreallevelfield;
declare const ABILITY_RLF_BONUS_DAMAGE_MULTIPLIER: abilityreallevelfield;
declare const ABILITY_RLF_DEATH_DAMAGE_FULL_AMOUNT: abilityreallevelfield;
declare const ABILITY_RLF_DEATH_DAMAGE_FULL_AREA: abilityreallevelfield;
declare const ABILITY_RLF_DEATH_DAMAGE_HALF_AMOUNT: abilityreallevelfield;
declare const ABILITY_RLF_DEATH_DAMAGE_HALF_AREA: abilityreallevelfield;
declare const ABILITY_RLF_DEATH_DAMAGE_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_AMOUNT_NSO1: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PERIOD: abilityreallevelfield;
declare const ABILITY_RLF_DAMAGE_PENALTY: abilityreallevelfield;
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NSO4: abilityreallevelfield;
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NSO5: abilityreallevelfield;
declare const ABILITY_RLF_SPLIT_DELAY: abilityreallevelfield;
declare const ABILITY_RLF_MAX_HITPOINT_FACTOR: abilityreallevelfield;
declare const ABILITY_RLF_LIFE_DURATION_SPLIT_BONUS: abilityreallevelfield;
declare const ABILITY_RLF_WAVE_INTERVAL: abilityreallevelfield;
declare const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NVC4: abilityreallevelfield;
declare const ABILITY_RLF_FULL_DAMAGE_AMOUNT_NVC5: abilityreallevelfield;
declare const ABILITY_RLF_HALF_DAMAGE_FACTOR: abilityreallevelfield;
declare const ABILITY_RLF_INTERVAL_BETWEEN_PULSES: abilityreallevelfield;
declare const ABILITY_BLF_PERCENT_BONUS_HAB2: abilitybooleanlevelfield;
declare const ABILITY_BLF_USE_TELEPORT_CLUSTERING_HMT3: abilitybooleanlevelfield;
declare const ABILITY_BLF_NEVER_MISS_OCR5: abilitybooleanlevelfield;
declare const ABILITY_BLF_EXCLUDE_ITEM_DAMAGE: abilitybooleanlevelfield;
declare const ABILITY_BLF_BACKSTAB_DAMAGE: abilitybooleanlevelfield;
declare const ABILITY_BLF_INHERIT_UPGRADES_UAN3: abilitybooleanlevelfield;
declare const ABILITY_BLF_MANA_CONVERSION_AS_PERCENT: abilitybooleanlevelfield;
declare const ABILITY_BLF_LIFE_CONVERSION_AS_PERCENT: abilitybooleanlevelfield;
declare const ABILITY_BLF_LEAVE_TARGET_ALIVE: abilitybooleanlevelfield;
declare const ABILITY_BLF_PERCENT_BONUS_UAU3: abilitybooleanlevelfield;
declare const ABILITY_BLF_DAMAGE_IS_PERCENT_RECEIVED: abilitybooleanlevelfield;
declare const ABILITY_BLF_MELEE_BONUS: abilitybooleanlevelfield;
declare const ABILITY_BLF_RANGED_BONUS: abilitybooleanlevelfield;
declare const ABILITY_BLF_FLAT_BONUS: abilitybooleanlevelfield;
declare const ABILITY_BLF_NEVER_MISS_HBH5: abilitybooleanlevelfield;
declare const ABILITY_BLF_PERCENT_BONUS_HAD2: abilitybooleanlevelfield;
declare const ABILITY_BLF_CAN_DEACTIVATE: abilitybooleanlevelfield;
declare const ABILITY_BLF_RAISED_UNITS_ARE_INVULNERABLE: abilitybooleanlevelfield;
declare const ABILITY_BLF_PERCENTAGE_OAR2: abilitybooleanlevelfield;
declare const ABILITY_BLF_SUMMON_BUSY_UNITS: abilitybooleanlevelfield;
declare const ABILITY_BLF_CREATES_BLIGHT: abilitybooleanlevelfield;
declare const ABILITY_BLF_EXPLODES_ON_DEATH: abilitybooleanlevelfield;
declare const ABILITY_BLF_ALWAYS_AUTOCAST_FAE2: abilitybooleanlevelfield;
declare const ABILITY_BLF_REGENERATE_ONLY_AT_NIGHT: abilitybooleanlevelfield;
declare const ABILITY_BLF_SHOW_SELECT_UNIT_BUTTON: abilitybooleanlevelfield;
declare const ABILITY_BLF_SHOW_UNIT_INDICATOR: abilitybooleanlevelfield;
declare const ABILITY_BLF_CHARGE_OWNING_PLAYER: abilitybooleanlevelfield;
declare const ABILITY_BLF_PERCENTAGE_ARM2: abilitybooleanlevelfield;
declare const ABILITY_BLF_TARGET_IS_INVULNERABLE: abilitybooleanlevelfield;
declare const ABILITY_BLF_TARGET_IS_MAGIC_IMMUNE: abilitybooleanlevelfield;
declare const ABILITY_BLF_KILL_ON_CASTER_DEATH: abilitybooleanlevelfield;
declare const ABILITY_BLF_NO_TARGET_REQUIRED_REJ4: abilitybooleanlevelfield;
declare const ABILITY_BLF_ACCEPTS_GOLD: abilitybooleanlevelfield;
declare const ABILITY_BLF_ACCEPTS_LUMBER: abilitybooleanlevelfield;
declare const ABILITY_BLF_PREFER_HOSTILES_ROA5: abilitybooleanlevelfield;
declare const ABILITY_BLF_PREFER_FRIENDLIES_ROA6: abilitybooleanlevelfield;
declare const ABILITY_BLF_ROOTED_TURNING: abilitybooleanlevelfield;
declare const ABILITY_BLF_ALWAYS_AUTOCAST_SLO3: abilitybooleanlevelfield;
declare const ABILITY_BLF_HIDE_BUTTON: abilitybooleanlevelfield;
declare const ABILITY_BLF_USE_TELEPORT_CLUSTERING_ITP2: abilitybooleanlevelfield;
declare const ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS: abilitybooleanlevelfield;
declare const ABILITY_BLF_DOES_NOT_BLOCK_BUILDINGS: abilitybooleanlevelfield;
declare const ABILITY_BLF_AUTO_ACQUIRE_ATTACK_TARGETS: abilitybooleanlevelfield;
declare const ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS_GHO2: abilitybooleanlevelfield;
declare const ABILITY_BLF_DO_NOT_BLOCK_BUILDINGS: abilitybooleanlevelfield;
declare const ABILITY_BLF_INCLUDE_RANGED_DAMAGE: abilitybooleanlevelfield;
declare const ABILITY_BLF_INCLUDE_MELEE_DAMAGE: abilitybooleanlevelfield;
declare const ABILITY_BLF_MOVE_TO_PARTNER: abilitybooleanlevelfield;
declare const ABILITY_BLF_CAN_BE_DISPELLED: abilitybooleanlevelfield;
declare const ABILITY_BLF_IGNORE_FRIENDLY_BUFFS: abilitybooleanlevelfield;
declare const ABILITY_BLF_DROP_ITEMS_ON_DEATH: abilitybooleanlevelfield;
declare const ABILITY_BLF_CAN_USE_ITEMS: abilitybooleanlevelfield;
declare const ABILITY_BLF_CAN_GET_ITEMS: abilitybooleanlevelfield;
declare const ABILITY_BLF_CAN_DROP_ITEMS: abilitybooleanlevelfield;
declare const ABILITY_BLF_REPAIRS_ALLOWED: abilitybooleanlevelfield;
declare const ABILITY_BLF_CASTER_ONLY_SPLASH: abilitybooleanlevelfield;
declare const ABILITY_BLF_NO_TARGET_REQUIRED_IRL4: abilitybooleanlevelfield;
declare const ABILITY_BLF_DISPEL_ON_ATTACK: abilitybooleanlevelfield;
declare const ABILITY_BLF_AMOUNT_IS_RAW_VALUE: abilitybooleanlevelfield;
declare const ABILITY_BLF_SHARED_SPELL_COOLDOWN: abilitybooleanlevelfield;
declare const ABILITY_BLF_SLEEP_ONCE: abilitybooleanlevelfield;
declare const ABILITY_BLF_ALLOW_ON_ANY_PLAYER_SLOT: abilitybooleanlevelfield;
declare const ABILITY_BLF_DISABLE_OTHER_ABILITIES: abilitybooleanlevelfield;
declare const ABILITY_BLF_ALLOW_BOUNTY: abilitybooleanlevelfield;
declare const ABILITY_SLF_ICON_NORMAL: abilitystringlevelfield;
declare const ABILITY_SLF_CASTER: abilitystringlevelfield;
declare const ABILITY_SLF_TARGET: abilitystringlevelfield;
declare const ABILITY_SLF_SPECIAL: abilitystringlevelfield;
declare const ABILITY_SLF_EFFECT: abilitystringlevelfield;
declare const ABILITY_SLF_AREA_EFFECT: abilitystringlevelfield;
declare const ABILITY_SLF_LIGHTNING_EFFECTS: abilitystringlevelfield;
declare const ABILITY_SLF_MISSILE_ART: abilitystringlevelfield;
declare const ABILITY_SLF_TOOLTIP_LEARN: abilitystringlevelfield;
declare const ABILITY_SLF_TOOLTIP_LEARN_EXTENDED: abilitystringlevelfield;
declare const ABILITY_SLF_TOOLTIP_NORMAL: abilitystringlevelfield;
declare const ABILITY_SLF_TOOLTIP_TURN_OFF: abilitystringlevelfield;
declare const ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED: abilitystringlevelfield;
declare const ABILITY_SLF_TOOLTIP_TURN_OFF_EXTENDED: abilitystringlevelfield;
declare const ABILITY_SLF_NORMAL_FORM_UNIT_EME1: abilitystringlevelfield;
declare const ABILITY_SLF_SPAWNED_UNITS: abilitystringlevelfield;
declare const ABILITY_SLF_ABILITY_FOR_UNIT_CREATION: abilitystringlevelfield;
declare const ABILITY_SLF_NORMAL_FORM_UNIT_MIL1: abilitystringlevelfield;
declare const ABILITY_SLF_ALTERNATE_FORM_UNIT_MIL2: abilitystringlevelfield;
declare const ABILITY_SLF_BASE_ORDER_ID_ANS5: abilitystringlevelfield;
declare const ABILITY_SLF_MORPH_UNITS_GROUND: abilitystringlevelfield;
declare const ABILITY_SLF_MORPH_UNITS_AIR: abilitystringlevelfield;
declare const ABILITY_SLF_MORPH_UNITS_AMPHIBIOUS: abilitystringlevelfield;
declare const ABILITY_SLF_MORPH_UNITS_WATER: abilitystringlevelfield;
declare const ABILITY_SLF_UNIT_TYPE_ONE: abilitystringlevelfield;
declare const ABILITY_SLF_UNIT_TYPE_TWO: abilitystringlevelfield;
declare const ABILITY_SLF_UNIT_TYPE_SOD2: abilitystringlevelfield;
declare const ABILITY_SLF_SUMMON_1_UNIT_TYPE: abilitystringlevelfield;
declare const ABILITY_SLF_SUMMON_2_UNIT_TYPE: abilitystringlevelfield;
declare const ABILITY_SLF_RACE_TO_CONVERT: abilitystringlevelfield;
declare const ABILITY_SLF_PARTNER_UNIT_TYPE: abilitystringlevelfield;
declare const ABILITY_SLF_PARTNER_UNIT_TYPE_ONE: abilitystringlevelfield;
declare const ABILITY_SLF_PARTNER_UNIT_TYPE_TWO: abilitystringlevelfield;
declare const ABILITY_SLF_REQUIRED_UNIT_TYPE: abilitystringlevelfield;
declare const ABILITY_SLF_CONVERTED_UNIT_TYPE: abilitystringlevelfield;
declare const ABILITY_SLF_SPELL_LIST: abilitystringlevelfield;
declare const ABILITY_SLF_BASE_ORDER_ID_SPB5: abilitystringlevelfield;
declare const ABILITY_SLF_BASE_ORDER_ID_NCL6: abilitystringlevelfield;
declare const ABILITY_SLF_ABILITY_UPGRADE_1: abilitystringlevelfield;
declare const ABILITY_SLF_ABILITY_UPGRADE_2: abilitystringlevelfield;
declare const ABILITY_SLF_ABILITY_UPGRADE_3: abilitystringlevelfield;
declare const ABILITY_SLF_ABILITY_UPGRADE_4: abilitystringlevelfield;
declare const ABILITY_SLF_SPAWN_UNIT_ID_NSY2: abilitystringlevelfield;
declare const ITEM_IF_LEVEL: itemintegerfield;
declare const ITEM_IF_NUMBER_OF_CHARGES: itemintegerfield;
declare const ITEM_IF_COOLDOWN_GROUP: itemintegerfield;
declare const ITEM_IF_MAX_HIT_POINTS: itemintegerfield;
declare const ITEM_IF_HIT_POINTS: itemintegerfield;
declare const ITEM_IF_PRIORITY: itemintegerfield;
declare const ITEM_IF_ARMOR_TYPE: itemintegerfield;
declare const ITEM_IF_TINTING_COLOR_RED: itemintegerfield;
declare const ITEM_IF_TINTING_COLOR_GREEN: itemintegerfield;
declare const ITEM_IF_TINTING_COLOR_BLUE: itemintegerfield;
declare const ITEM_IF_TINTING_COLOR_ALPHA: itemintegerfield;
declare const ITEM_RF_SCALING_VALUE: itemrealfield;
declare const ITEM_BF_DROPPED_WHEN_CARRIER_DIES: itembooleanfield;
declare const ITEM_BF_CAN_BE_DROPPED: itembooleanfield;
declare const ITEM_BF_PERISHABLE: itembooleanfield;
declare const ITEM_BF_INCLUDE_AS_RANDOM_CHOICE: itembooleanfield;
declare const ITEM_BF_USE_AUTOMATICALLY_WHEN_ACQUIRED: itembooleanfield;
declare const ITEM_BF_CAN_BE_SOLD_TO_MERCHANTS: itembooleanfield;
declare const ITEM_BF_ACTIVELY_USED: itembooleanfield;
declare const ITEM_SF_MODEL_USED: itemstringfield;
declare const UNIT_IF_DEFENSE_TYPE: unitintegerfield;
declare const UNIT_IF_ARMOR_TYPE: unitintegerfield;
declare const UNIT_IF_LOOPING_FADE_IN_RATE: unitintegerfield;
declare const UNIT_IF_LOOPING_FADE_OUT_RATE: unitintegerfield;
declare const UNIT_IF_AGILITY: unitintegerfield;
declare const UNIT_IF_INTELLIGENCE: unitintegerfield;
declare const UNIT_IF_STRENGTH: unitintegerfield;
declare const UNIT_IF_AGILITY_PERMANENT: unitintegerfield;
declare const UNIT_IF_INTELLIGENCE_PERMANENT: unitintegerfield;
declare const UNIT_IF_STRENGTH_PERMANENT: unitintegerfield;
declare const UNIT_IF_AGILITY_WITH_BONUS: unitintegerfield;
declare const UNIT_IF_INTELLIGENCE_WITH_BONUS: unitintegerfield;
declare const UNIT_IF_STRENGTH_WITH_BONUS: unitintegerfield;
declare const UNIT_IF_GOLD_BOUNTY_AWARDED_NUMBER_OF_DICE: unitintegerfield;
declare const UNIT_IF_GOLD_BOUNTY_AWARDED_BASE: unitintegerfield;
declare const UNIT_IF_GOLD_BOUNTY_AWARDED_SIDES_PER_DIE: unitintegerfield;
declare const UNIT_IF_LUMBER_BOUNTY_AWARDED_NUMBER_OF_DICE: unitintegerfield;
declare const UNIT_IF_LUMBER_BOUNTY_AWARDED_BASE: unitintegerfield;
declare const UNIT_IF_LUMBER_BOUNTY_AWARDED_SIDES_PER_DIE: unitintegerfield;
declare const UNIT_IF_LEVEL: unitintegerfield;
declare const UNIT_IF_FORMATION_RANK: unitintegerfield;
declare const UNIT_IF_ORIENTATION_INTERPOLATION: unitintegerfield;
declare const UNIT_IF_ELEVATION_SAMPLE_POINTS: unitintegerfield;
declare const UNIT_IF_TINTING_COLOR_RED: unitintegerfield;
declare const UNIT_IF_TINTING_COLOR_GREEN: unitintegerfield;
declare const UNIT_IF_TINTING_COLOR_BLUE: unitintegerfield;
declare const UNIT_IF_TINTING_COLOR_ALPHA: unitintegerfield;
declare const UNIT_IF_MOVE_TYPE: unitintegerfield;
declare const UNIT_IF_TARGETED_AS: unitintegerfield;
declare const UNIT_IF_UNIT_CLASSIFICATION: unitintegerfield;
declare const UNIT_IF_HIT_POINTS_REGENERATION_TYPE: unitintegerfield;
declare const UNIT_IF_PLACEMENT_PREVENTED_BY: unitintegerfield;
declare const UNIT_IF_PRIMARY_ATTRIBUTE: unitintegerfield;
declare const UNIT_RF_STRENGTH_PER_LEVEL: unitrealfield;
declare const UNIT_RF_AGILITY_PER_LEVEL: unitrealfield;
declare const UNIT_RF_INTELLIGENCE_PER_LEVEL: unitrealfield;
declare const UNIT_RF_HIT_POINTS_REGENERATION_RATE: unitrealfield;
declare const UNIT_RF_MANA_REGENERATION: unitrealfield;
declare const UNIT_RF_DEATH_TIME: unitrealfield;
declare const UNIT_RF_FLY_HEIGHT: unitrealfield;
declare const UNIT_RF_TURN_RATE: unitrealfield;
declare const UNIT_RF_ELEVATION_SAMPLE_RADIUS: unitrealfield;
declare const UNIT_RF_FOG_OF_WAR_SAMPLE_RADIUS: unitrealfield;
declare const UNIT_RF_MAXIMUM_PITCH_ANGLE_DEGREES: unitrealfield;
declare const UNIT_RF_MAXIMUM_ROLL_ANGLE_DEGREES: unitrealfield;
declare const UNIT_RF_SCALING_VALUE: unitrealfield;
declare const UNIT_RF_ANIMATION_RUN_SPEED: unitrealfield;
declare const UNIT_RF_SELECTION_SCALE: unitrealfield;
declare const UNIT_RF_SELECTION_CIRCLE_HEIGHT: unitrealfield;
declare const UNIT_RF_SHADOW_IMAGE_HEIGHT: unitrealfield;
declare const UNIT_RF_SHADOW_IMAGE_WIDTH: unitrealfield;
declare const UNIT_RF_SHADOW_IMAGE_CENTER_X: unitrealfield;
declare const UNIT_RF_SHADOW_IMAGE_CENTER_Y: unitrealfield;
declare const UNIT_RF_ANIMATION_WALK_SPEED: unitrealfield;
declare const UNIT_RF_DEFENSE: unitrealfield;
declare const UNIT_RF_SIGHT_RADIUS: unitrealfield;
declare const UNIT_RF_PRIORITY: unitrealfield;
declare const UNIT_RF_SPEED: unitrealfield;
declare const UNIT_RF_OCCLUDER_HEIGHT: unitrealfield;
declare const UNIT_RF_HP: unitrealfield;
declare const UNIT_RF_MANA: unitrealfield;
declare const UNIT_RF_ACQUISITION_RANGE: unitrealfield;
declare const UNIT_RF_CAST_BACK_SWING: unitrealfield;
declare const UNIT_RF_CAST_POINT: unitrealfield;
declare const UNIT_RF_MINIMUM_ATTACK_RANGE: unitrealfield;
declare const UNIT_BF_RAISABLE: unitbooleanfield;
declare const UNIT_BF_DECAYABLE: unitbooleanfield;
declare const UNIT_BF_IS_A_BUILDING: unitbooleanfield;
declare const UNIT_BF_USE_EXTENDED_LINE_OF_SIGHT: unitbooleanfield;
declare const UNIT_BF_NEUTRAL_BUILDING_SHOWS_MINIMAP_ICON: unitbooleanfield;
declare const UNIT_BF_HERO_HIDE_HERO_INTERFACE_ICON: unitbooleanfield;
declare const UNIT_BF_HERO_HIDE_HERO_MINIMAP_DISPLAY: unitbooleanfield;
declare const UNIT_BF_HERO_HIDE_HERO_DEATH_MESSAGE: unitbooleanfield;
declare const UNIT_BF_HIDE_MINIMAP_DISPLAY: unitbooleanfield;
declare const UNIT_BF_SCALE_PROJECTILES: unitbooleanfield;
declare const UNIT_BF_SELECTION_CIRCLE_ON_WATER: unitbooleanfield;
declare const UNIT_BF_HAS_WATER_SHADOW: unitbooleanfield;
declare const UNIT_SF_NAME: unitstringfield;
declare const UNIT_SF_PROPER_NAMES: unitstringfield;
declare const UNIT_SF_GROUND_TEXTURE: unitstringfield;
declare const UNIT_SF_SHADOW_IMAGE_UNIT: unitstringfield;
declare const UNIT_WEAPON_IF_ATTACK_DAMAGE_NUMBER_OF_DICE: unitweaponintegerfield;
declare const UNIT_WEAPON_IF_ATTACK_DAMAGE_BASE: unitweaponintegerfield;
declare const UNIT_WEAPON_IF_ATTACK_DAMAGE_SIDES_PER_DIE: unitweaponintegerfield;
declare const UNIT_WEAPON_IF_ATTACK_MAXIMUM_NUMBER_OF_TARGETS: unitweaponintegerfield;
declare const UNIT_WEAPON_IF_ATTACK_ATTACK_TYPE: unitweaponintegerfield;
declare const UNIT_WEAPON_IF_ATTACK_WEAPON_SOUND: unitweaponintegerfield;
declare const UNIT_WEAPON_IF_ATTACK_AREA_OF_EFFECT_TARGETS: unitweaponintegerfield;
declare const UNIT_WEAPON_IF_ATTACK_TARGETS_ALLOWED: unitweaponintegerfield;
declare const UNIT_WEAPON_RF_ATTACK_BACKSWING_POINT: unitweaponrealfield;
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_POINT: unitweaponrealfield;
declare const UNIT_WEAPON_RF_ATTACK_BASE_COOLDOWN: unitweaponrealfield;
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_LOSS_FACTOR: unitweaponrealfield;
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_MEDIUM: unitweaponrealfield;
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_SMALL: unitweaponrealfield;
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_DISTANCE: unitweaponrealfield;
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_RADIUS: unitweaponrealfield;
declare const UNIT_WEAPON_RF_ATTACK_PROJECTILE_SPEED: unitweaponrealfield;
declare const UNIT_WEAPON_RF_ATTACK_PROJECTILE_ARC: unitweaponrealfield;
declare const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_FULL_DAMAGE: unitweaponrealfield;
declare const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_MEDIUM_DAMAGE: unitweaponrealfield;
declare const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_SMALL_DAMAGE: unitweaponrealfield;
declare const UNIT_WEAPON_RF_ATTACK_RANGE: unitweaponrealfield;
declare const UNIT_WEAPON_BF_ATTACK_SHOW_UI: unitweaponbooleanfield;
declare const UNIT_WEAPON_BF_ATTACKS_ENABLED: unitweaponbooleanfield;
declare const UNIT_WEAPON_BF_ATTACK_PROJECTILE_HOMING_ENABLED: unitweaponbooleanfield;
declare const UNIT_WEAPON_SF_ATTACK_PROJECTILE_ART: unitweaponstringfield;
declare const MOVE_TYPE_UNKNOWN: movetype;
declare const MOVE_TYPE_FOOT: movetype;
declare const MOVE_TYPE_FLY: movetype;
declare const MOVE_TYPE_HORSE: movetype;
declare const MOVE_TYPE_HOVER: movetype;
declare const MOVE_TYPE_FLOAT: movetype;
declare const MOVE_TYPE_AMPHIBIOUS: movetype;
declare const MOVE_TYPE_UNBUILDABLE: movetype;
declare const TARGET_FLAG_NONE: targetflag;
declare const TARGET_FLAG_GROUND: targetflag;
declare const TARGET_FLAG_AIR: targetflag;
declare const TARGET_FLAG_STRUCTURE: targetflag;
declare const TARGET_FLAG_WARD: targetflag;
declare const TARGET_FLAG_ITEM: targetflag;
declare const TARGET_FLAG_TREE: targetflag;
declare const TARGET_FLAG_WALL: targetflag;
declare const TARGET_FLAG_DEBRIS: targetflag;
declare const TARGET_FLAG_DECORATION: targetflag;
declare const TARGET_FLAG_BRIDGE: targetflag;
declare const DEFENSE_TYPE_LIGHT: defensetype;
declare const DEFENSE_TYPE_MEDIUM: defensetype;
declare const DEFENSE_TYPE_LARGE: defensetype;
declare const DEFENSE_TYPE_FORT: defensetype;
declare const DEFENSE_TYPE_NORMAL: defensetype;
declare const DEFENSE_TYPE_HERO: defensetype;
declare const DEFENSE_TYPE_DIVINE: defensetype;
declare const DEFENSE_TYPE_NONE: defensetype;
declare const HERO_ATTRIBUTE_STR: heroattribute;
declare const HERO_ATTRIBUTE_INT: heroattribute;
declare const HERO_ATTRIBUTE_AGI: heroattribute;
declare const ARMOR_TYPE_WHOKNOWS: armortype;
declare const ARMOR_TYPE_FLESH: armortype;
declare const ARMOR_TYPE_METAL: armortype;
declare const ARMOR_TYPE_WOOD: armortype;
declare const ARMOR_TYPE_ETHREAL: armortype;
declare const ARMOR_TYPE_STONE: armortype;
declare const REGENERATION_TYPE_NONE: regentype;
declare const REGENERATION_TYPE_ALWAYS: regentype;
declare const REGENERATION_TYPE_BLIGHT: regentype;
declare const REGENERATION_TYPE_DAY: regentype;
declare const REGENERATION_TYPE_NIGHT: regentype;
declare const UNIT_CATEGORY_GIANT: unitcategory;
declare const UNIT_CATEGORY_UNDEAD: unitcategory;
declare const UNIT_CATEGORY_SUMMONED: unitcategory;
declare const UNIT_CATEGORY_MECHANICAL: unitcategory;
declare const UNIT_CATEGORY_PEON: unitcategory;
declare const UNIT_CATEGORY_SAPPER: unitcategory;
declare const UNIT_CATEGORY_TOWNHALL: unitcategory;
declare const UNIT_CATEGORY_ANCIENT: unitcategory;
declare const UNIT_CATEGORY_NEUTRAL: unitcategory;
declare const UNIT_CATEGORY_WARD: unitcategory;
declare const UNIT_CATEGORY_STANDON: unitcategory;
declare const UNIT_CATEGORY_TAUREN: unitcategory;
declare const PATHING_FLAG_UNWALKABLE: pathingflag;
declare const PATHING_FLAG_UNFLYABLE: pathingflag;
declare const PATHING_FLAG_UNBUILDABLE: pathingflag;
declare const PATHING_FLAG_UNPEONHARVEST: pathingflag;
declare const PATHING_FLAG_BLIGHTED: pathingflag;
declare const PATHING_FLAG_UNFLOATABLE: pathingflag;
declare const PATHING_FLAG_UNAMPHIBIOUS: pathingflag;
declare const PATHING_FLAG_UNITEMPLACABLE: pathingflag;
declare const Deg2Rad: (degrees: number) => number;
declare const Rad2Deg: (radians: number) => number;
declare const Sin: (radians: number) => number;
declare const Cos: (radians: number) => number;
declare const Tan: (radians: number) => number;
declare const Asin: (y: number) => number;
declare const Acos: (x: number) => number;
declare const Atan: (x: number) => number;
declare const Atan2: (y: number, x: number) => number;
declare const SquareRoot: (x: number) => number;
declare const Pow: (x: number, power: number) => number;
declare const MathRound: (r: number) => number;
declare const I2R: (i: number) => number;
declare const R2I: (r: number) => number;
declare const I2S: (i: number) => string;
declare const R2S: (r: number) => string;
declare const R2SW: (r: number, width: number, precision: number) => string;
declare const S2I: (s: string) => number;
declare const S2R: (s: string) => number;
declare const GetHandleId: (h: number) => number;
declare const SubString: (source: string, start: number, end: number) => string;
declare const StringLength: (s: string) => number;
declare const StringCase: (source: string, upper: boolean) => string;
declare const StringHash: (s: string) => number;
declare const GetLocalizedString: (source: string) => string;
declare const GetLocalizedHotkey: (source: string) => number;
declare const SetMapName: (name: string) => void;
declare const SetMapDescription: (description: string) => void;
declare const SetTeams: (teamcount: number) => void;
declare const SetPlayers: (playercount: number) => void;
declare const DefineStartLocation: (
  whichStartLoc: number,
  x: number,
  y: number
) => void;
declare const DefineStartLocationLoc: (
  whichStartLoc: number,
  whichLocation: location
) => void;
declare const SetStartLocPrioCount: (
  whichStartLoc: number,
  prioSlotCount: number
) => void;
declare const SetStartLocPrio: (
  whichStartLoc: number,
  prioSlotIndex: number,
  otherStartLocIndex: number,
  priority: startlocprio
) => void;
declare const GetStartLocPrioSlot: (
  whichStartLoc: number,
  prioSlotIndex: number
) => number;
declare const GetStartLocPrio: (
  whichStartLoc: number,
  prioSlotIndex: number
) => startlocprio;
declare const SetEnemyStartLocPrioCount: (
  whichStartLoc: number,
  prioSlotCount: number
) => void;
declare const SetEnemyStartLocPrio: (
  whichStartLoc: number,
  prioSlotIndex: number,
  otherStartLocIndex: number,
  priority: startlocprio
) => void;
declare const SetGameTypeSupported: (
  whichGameType: gametype,
  value: boolean
) => void;
declare const SetMapFlag: (whichMapFlag: mapflag, value: boolean) => void;
declare const SetGamePlacement: (whichPlacementType: placement) => void;
declare const SetGameSpeed: (whichspeed: gamespeed) => void;
declare const SetGameDifficulty: (whichdifficulty: gamedifficulty) => void;
declare const SetResourceDensity: (whichdensity: mapdensity) => void;
declare const SetCreatureDensity: (whichdensity: mapdensity) => void;
declare const GetTeams: () => number;
declare const GetPlayers: () => number;
declare const IsGameTypeSupported: (whichGameType: gametype) => boolean;
declare const GetGameTypeSelected: () => gametype;
declare const IsMapFlagSet: (whichMapFlag: mapflag) => boolean;
declare const GetGamePlacement: () => placement;
declare const GetGameSpeed: () => gamespeed;
declare const GetGameDifficulty: () => gamedifficulty;
declare const GetResourceDensity: () => mapdensity;
declare const GetCreatureDensity: () => mapdensity;
declare const GetStartLocationX: (whichStartLocation: number) => number;
declare const GetStartLocationY: (whichStartLocation: number) => number;
declare const GetStartLocationLoc: (whichStartLocation: number) => location;
declare const SetPlayerTeam: (whichPlayer: player, whichTeam: number) => void;
declare const SetPlayerStartLocation: (
  whichPlayer: player,
  startLocIndex: number
) => void;
declare const ForcePlayerStartLocation: (
  whichPlayer: player,
  startLocIndex: number
) => void;
declare const SetPlayerColor: (whichPlayer: player, color: playercolor) => void;
declare const SetPlayerAlliance: (
  sourcePlayer: player,
  otherPlayer: player,
  whichAllianceSetting: alliancetype,
  value: boolean
) => void;
declare const SetPlayerTaxRate: (
  sourcePlayer: player,
  otherPlayer: player,
  whichResource: playerstate,
  rate: number
) => void;
declare const SetPlayerRacePreference: (
  whichPlayer: player,
  whichRacePreference: racepreference
) => void;
declare const SetPlayerRaceSelectable: (
  whichPlayer: player,
  value: boolean
) => void;
declare const SetPlayerController: (
  whichPlayer: player,
  controlType: mapcontrol
) => void;
declare const SetPlayerName: (whichPlayer: player, name: string) => void;
declare const SetPlayerOnScoreScreen: (
  whichPlayer: player,
  flag: boolean
) => void;
declare const GetPlayerTeam: (whichPlayer: player) => number;
declare const GetPlayerStartLocation: (whichPlayer: player) => number;
declare const GetPlayerColor: (whichPlayer: player) => playercolor;
declare const GetPlayerSelectable: (whichPlayer: player) => boolean;
declare const GetPlayerController: (whichPlayer: player) => mapcontrol;
declare const GetPlayerSlotState: (whichPlayer: player) => playerslotstate;
declare const GetPlayerTaxRate: (
  sourcePlayer: player,
  otherPlayer: player,
  whichResource: playerstate
) => number;
declare const IsPlayerRacePrefSet: (
  whichPlayer: player,
  pref: racepreference
) => boolean;
declare const GetPlayerName: (whichPlayer: player) => string;
declare const CreateTimer: () => timer;
declare const DestroyTimer: (whichTimer: timer) => void;
declare const TimerStart: (
  whichTimer: timer,
  timeout: number,
  periodic: boolean,
  handlerFunc: () => void
) => void;
declare const TimerGetElapsed: (whichTimer: timer) => number;
declare const TimerGetRemaining: (whichTimer: timer) => number;
declare const TimerGetTimeout: (whichTimer: timer) => number;
declare const PauseTimer: (whichTimer: timer) => void;
declare const ResumeTimer: (whichTimer: timer) => void;
declare const GetExpiredTimer: () => timer;
declare const CreateGroup: () => group;
declare const DestroyGroup: (whichGroup: group) => void;
declare const GroupAddUnit: (whichGroup: group, whichUnit: unit) => boolean;
declare const GroupRemoveUnit: (whichGroup: group, whichUnit: unit) => boolean;
declare const BlzGroupAddGroupFast: (
  whichGroup: group,
  addGroup: group
) => number;
declare const BlzGroupRemoveGroupFast: (
  whichGroup: group,
  removeGroup: group
) => number;
declare const GroupClear: (whichGroup: group) => void;
declare const BlzGroupGetSize: (whichGroup: group) => number;
declare const BlzGroupUnitAt: (whichGroup: group, index: number) => unit;
declare const GroupEnumUnitsOfType: (
  whichGroup: group,
  unitname: string,
  filter: () => boolean
) => void;
declare const GroupEnumUnitsOfPlayer: (
  whichGroup: group,
  whichPlayer: player,
  filter: () => boolean
) => void;
declare const GroupEnumUnitsOfTypeCounted: (
  whichGroup: group,
  unitname: string,
  filter: () => boolean,
  countLimit: number
) => void;
declare const GroupEnumUnitsInRect: (
  whichGroup: group,
  r: rect,
  filter: () => boolean
) => void;
declare const GroupEnumUnitsInRectCounted: (
  whichGroup: group,
  r: rect,
  filter: () => boolean,
  countLimit: number
) => void;
declare const GroupEnumUnitsInRange: (
  whichGroup: group,
  x: number,
  y: number,
  radius: number,
  filter: () => boolean
) => void;
declare const GroupEnumUnitsInRangeOfLoc: (
  whichGroup: group,
  whichLocation: location,
  radius: number,
  filter: () => boolean
) => void;
declare const GroupEnumUnitsInRangeCounted: (
  whichGroup: group,
  x: number,
  y: number,
  radius: number,
  filter: () => boolean,
  countLimit: number
) => void;
declare const GroupEnumUnitsInRangeOfLocCounted: (
  whichGroup: group,
  whichLocation: location,
  radius: number,
  filter: () => boolean,
  countLimit: number
) => void;
declare const GroupEnumUnitsSelected: (
  whichGroup: group,
  whichPlayer: player,
  filter: () => boolean
) => void;
declare const GroupImmediateOrder: (
  whichGroup: group,
  order: string
) => boolean;
declare const GroupImmediateOrderById: (
  whichGroup: group,
  order: number
) => boolean;
declare const GroupPointOrder: (
  whichGroup: group,
  order: string,
  x: number,
  y: number
) => boolean;
declare const GroupPointOrderLoc: (
  whichGroup: group,
  order: string,
  whichLocation: location
) => boolean;
declare const GroupPointOrderById: (
  whichGroup: group,
  order: number,
  x: number,
  y: number
) => boolean;
declare const GroupPointOrderByIdLoc: (
  whichGroup: group,
  order: number,
  whichLocation: location
) => boolean;
declare const GroupTargetOrder: (
  whichGroup: group,
  order: string,
  targetWidget: widget
) => boolean;
declare const GroupTargetOrderById: (
  whichGroup: group,
  order: number,
  targetWidget: widget
) => boolean;
declare const ForGroup: (whichGroup: group, callback: () => void) => void;
declare const FirstOfGroup: (whichGroup: group) => unit;
declare const CreateForce: () => force;
declare const DestroyForce: (whichForce: force) => void;
declare const ForceAddPlayer: (whichForce: force, whichPlayer: player) => void;
declare const ForceRemovePlayer: (
  whichForce: force,
  whichPlayer: player
) => void;
declare const BlzForceHasPlayer: (
  whichForce: force,
  whichPlayer: player
) => boolean;
declare const ForceClear: (whichForce: force) => void;
declare const ForceEnumPlayers: (
  whichForce: force,
  filter: () => boolean
) => void;
declare const ForceEnumPlayersCounted: (
  whichForce: force,
  filter: () => boolean,
  countLimit: number
) => void;
declare const ForceEnumAllies: (
  whichForce: force,
  whichPlayer: player,
  filter: () => boolean
) => void;
declare const ForceEnumEnemies: (
  whichForce: force,
  whichPlayer: player,
  filter: () => boolean
) => void;
declare const ForForce: (whichForce: force, callback: () => void) => void;
declare const Rect: (
  minx: number,
  miny: number,
  maxx: number,
  maxy: number
) => rect;
declare const RectFromLoc: (min: location, max: location) => rect;
declare const RemoveRect: (whichRect: rect) => void;
declare const SetRect: (
  whichRect: rect,
  minx: number,
  miny: number,
  maxx: number,
  maxy: number
) => void;
declare const SetRectFromLoc: (
  whichRect: rect,
  min: location,
  max: location
) => void;
declare const MoveRectTo: (
  whichRect: rect,
  newCenterX: number,
  newCenterY: number
) => void;
declare const MoveRectToLoc: (whichRect: rect, newCenterLoc: location) => void;
declare const GetRectCenterX: (whichRect: rect) => number;
declare const GetRectCenterY: (whichRect: rect) => number;
declare const GetRectMinX: (whichRect: rect) => number;
declare const GetRectMinY: (whichRect: rect) => number;
declare const GetRectMaxX: (whichRect: rect) => number;
declare const GetRectMaxY: (whichRect: rect) => number;
declare const CreateRegion: () => region;
declare const RemoveRegion: (whichRegion: region) => void;
declare const RegionAddRect: (whichRegion: region, r: rect) => void;
declare const RegionClearRect: (whichRegion: region, r: rect) => void;
declare const RegionAddCell: (
  whichRegion: region,
  x: number,
  y: number
) => void;
declare const RegionAddCellAtLoc: (
  whichRegion: region,
  whichLocation: location
) => void;
declare const RegionClearCell: (
  whichRegion: region,
  x: number,
  y: number
) => void;
declare const RegionClearCellAtLoc: (
  whichRegion: region,
  whichLocation: location
) => void;
declare const Location: (x: number, y: number) => location;
declare const RemoveLocation: (whichLocation: location) => void;
declare const MoveLocation: (
  whichLocation: location,
  newX: number,
  newY: number
) => void;
declare const GetLocationX: (whichLocation: location) => number;
declare const GetLocationY: (whichLocation: location) => number;
declare const GetLocationZ: (whichLocation: location) => number;
declare const IsUnitInRegion: (whichRegion: region, whichUnit: unit) => boolean;
declare const IsPointInRegion: (
  whichRegion: region,
  x: number,
  y: number
) => boolean;
declare const IsLocationInRegion: (
  whichRegion: region,
  whichLocation: location
) => boolean;
declare const GetWorldBounds: () => rect;
declare const CreateTrigger: () => trigger;
declare const DestroyTrigger: (whichTrigger: trigger) => void;
declare const ResetTrigger: (whichTrigger: trigger) => void;
declare const EnableTrigger: (whichTrigger: trigger) => void;
declare const DisableTrigger: (whichTrigger: trigger) => void;
declare const IsTriggerEnabled: (whichTrigger: trigger) => boolean;
declare const TriggerWaitOnSleeps: (
  whichTrigger: trigger,
  flag: boolean
) => void;
declare const IsTriggerWaitOnSleeps: (whichTrigger: trigger) => boolean;
declare const GetFilterUnit: () => unit;
declare const GetEnumUnit: () => unit;
declare const GetFilterDestructable: () => destructable;
declare const GetEnumDestructable: () => destructable;
declare const GetFilterItem: () => item;
declare const GetEnumItem: () => item;
declare const ParseTags: (taggedString: string) => string;
declare const GetFilterPlayer: () => player;
declare const GetEnumPlayer: () => player;
declare const GetTriggeringTrigger: () => trigger;
declare const GetTriggerEventId: () => eventid;
declare const GetTriggerEvalCount: (whichTrigger: trigger) => number;
declare const GetTriggerExecCount: (whichTrigger: trigger) => number;
declare const ExecuteFunc: (funcName: string) => void;
declare const And: (
  operandA: () => boolean,
  operandB: () => boolean
) => boolexpr;
declare const Or: (
  operandA: () => boolean,
  operandB: () => boolean
) => boolexpr;
declare const Not: (operand: () => boolean) => boolexpr;
declare const Condition: (func: () => void) => () => boolean;
declare const DestroyCondition: (c: () => boolean) => void;
declare const Filter: (func: () => void) => filterfunc;
declare const DestroyFilter: (f: () => boolean) => void;
declare const DestroyBoolExpr: (e: () => boolean) => void;
declare const TriggerRegisterVariableEvent: (
  whichTrigger: trigger,
  varName: string,
  opcode: limitop,
  limitval: number
) => event;
declare const TriggerRegisterTimerEvent: (
  whichTrigger: trigger,
  timeout: number,
  periodic: boolean
) => event;
declare const TriggerRegisterTimerExpireEvent: (
  whichTrigger: trigger,
  t: timer
) => event;
declare const TriggerRegisterGameStateEvent: (
  whichTrigger: trigger,
  whichState: gamestate,
  opcode: limitop,
  limitval: number
) => event;
declare const TriggerRegisterDialogEvent: (
  whichTrigger: trigger,
  whichDialog: dialog
) => event;
declare const TriggerRegisterDialogButtonEvent: (
  whichTrigger: trigger,
  whichButton: button
) => event;
declare const GetEventGameState: () => gamestate;
declare const TriggerRegisterGameEvent: (
  whichTrigger: trigger,
  whichGameEvent: gameevent
) => event;
declare const GetWinningPlayer: () => player;
declare const TriggerRegisterEnterRegion: (
  whichTrigger: trigger,
  whichRegion: region,
  filter: () => boolean
) => event;
declare const GetTriggeringRegion: () => region;
declare const GetEnteringUnit: () => unit;
declare const TriggerRegisterLeaveRegion: (
  whichTrigger: trigger,
  whichRegion: region,
  filter: () => boolean
) => event;
declare const GetLeavingUnit: () => unit;
declare const TriggerRegisterTrackableHitEvent: (
  whichTrigger: trigger,
  t: trackable
) => event;
declare const TriggerRegisterTrackableTrackEvent: (
  whichTrigger: trigger,
  t: trackable
) => event;
declare const TriggerRegisterCommandEvent: (
  whichTrigger: trigger,
  whichAbility: number,
  order: string
) => event;
declare const TriggerRegisterUpgradeCommandEvent: (
  whichTrigger: trigger,
  whichUpgrade: number
) => event;
declare const GetTriggeringTrackable: () => trackable;
declare const GetClickedButton: () => button;
declare const GetClickedDialog: () => dialog;
declare const GetTournamentFinishSoonTimeRemaining: () => number;
declare const GetTournamentFinishNowRule: () => number;
declare const GetTournamentFinishNowPlayer: () => player;
declare const GetTournamentScore: (whichPlayer: player) => number;
declare const GetSaveBasicFilename: () => string;
declare const TriggerRegisterPlayerEvent: (
  whichTrigger: trigger,
  whichPlayer: player,
  whichPlayerEvent: playerevent
) => event;
declare const GetTriggerPlayer: () => player;
declare const TriggerRegisterPlayerUnitEvent: (
  whichTrigger: trigger,
  whichPlayer: player,
  whichPlayerUnitEvent: playerunitevent,
  filter: () => boolean
) => event;
declare const GetLevelingUnit: () => unit;
declare const GetLearningUnit: () => unit;
declare const GetLearnedSkill: () => number;
declare const GetLearnedSkillLevel: () => number;
declare const GetRevivableUnit: () => unit;
declare const GetRevivingUnit: () => unit;
declare const GetAttacker: () => unit;
declare const GetRescuer: () => unit;
declare const GetDyingUnit: () => unit;
declare const GetKillingUnit: () => unit;
declare const GetDecayingUnit: () => unit;
declare const GetConstructingStructure: () => unit;
declare const GetCancelledStructure: () => unit;
declare const GetConstructedStructure: () => unit;
declare const GetResearchingUnit: () => unit;
declare const GetResearched: () => number;
declare const GetTrainedUnitType: () => number;
declare const GetTrainedUnit: () => unit;
declare const GetDetectedUnit: () => unit;
declare const GetSummoningUnit: () => unit;
declare const GetSummonedUnit: () => unit;
declare const GetTransportUnit: () => unit;
declare const GetLoadedUnit: () => unit;
declare const GetSellingUnit: () => unit;
declare const GetSoldUnit: () => unit;
declare const GetBuyingUnit: () => unit;
declare const GetSoldItem: () => item;
declare const GetChangingUnit: () => unit;
declare const GetChangingUnitPrevOwner: () => player;
declare const GetManipulatingUnit: () => unit;
declare const GetManipulatedItem: () => item;
declare const BlzGetAbsorbingItem: () => item;
declare const BlzGetManipulatedItemWasAbsorbed: () => boolean;
declare const BlzGetStackingItemSource: () => item;
declare const BlzGetStackingItemTarget: () => item;
declare const BlzGetStackingItemTargetPreviousCharges: () => number;
declare const GetOrderedUnit: () => unit;
declare const GetIssuedOrderId: () => number;
declare const GetOrderPointX: () => number;
declare const GetOrderPointY: () => number;
declare const GetOrderPointLoc: () => location;
declare const GetOrderTarget: () => widget;
declare const GetOrderTargetDestructable: () => destructable;
declare const GetOrderTargetItem: () => item;
declare const GetOrderTargetUnit: () => unit;
declare const GetSpellAbilityUnit: () => unit;
declare const GetSpellAbilityId: () => number;
declare const GetSpellAbility: () => ability;
declare const GetSpellTargetLoc: () => location;
declare const GetSpellTargetX: () => number;
declare const GetSpellTargetY: () => number;
declare const GetSpellTargetDestructable: () => destructable;
declare const GetSpellTargetItem: () => item;
declare const GetSpellTargetUnit: () => unit;
declare const TriggerRegisterPlayerAllianceChange: (
  whichTrigger: trigger,
  whichPlayer: player,
  whichAlliance: alliancetype
) => event;
declare const TriggerRegisterPlayerStateEvent: (
  whichTrigger: trigger,
  whichPlayer: player,
  whichState: playerstate,
  opcode: limitop,
  limitval: number
) => event;
declare const GetEventPlayerState: () => playerstate;
declare const TriggerRegisterPlayerChatEvent: (
  whichTrigger: trigger,
  whichPlayer: player,
  chatMessageToDetect: string,
  exactMatchOnly: boolean
) => event;
declare const GetEventPlayerChatString: () => string;
declare const GetEventPlayerChatStringMatched: () => string;
declare const TriggerRegisterDeathEvent: (
  whichTrigger: trigger,
  whichWidget: widget
) => event;
declare const GetTriggerUnit: () => unit;
declare const TriggerRegisterUnitStateEvent: (
  whichTrigger: trigger,
  whichUnit: unit,
  whichState: unitstate,
  opcode: limitop,
  limitval: number
) => event;
declare const GetEventUnitState: () => unitstate;
declare const TriggerRegisterUnitEvent: (
  whichTrigger: trigger,
  whichUnit: unit,
  whichEvent: unitevent
) => event;
declare const GetEventDamage: () => number;
declare const GetEventDamageSource: () => unit;
declare const GetEventDetectingPlayer: () => player;
declare const TriggerRegisterFilterUnitEvent: (
  whichTrigger: trigger,
  whichUnit: unit,
  whichEvent: unitevent,
  filter: () => boolean
) => event;
declare const GetEventTargetUnit: () => unit;
declare const TriggerRegisterUnitInRange: (
  whichTrigger: trigger,
  whichUnit: unit,
  range: number,
  filter: () => boolean
) => event;
declare const TriggerAddCondition: (
  whichTrigger: trigger,
  condition: () => boolean
) => triggercondition;
declare const TriggerRemoveCondition: (
  whichTrigger: trigger,
  whichCondition: () => boolean
) => void;
declare const TriggerClearConditions: (whichTrigger: trigger) => void;
declare const TriggerAddAction: (
  whichTrigger: trigger,
  actionFunc: () => void
) => triggeraction;
declare const TriggerRemoveAction: (
  whichTrigger: trigger,
  whichAction: () => void
) => void;
declare const TriggerClearActions: (whichTrigger: trigger) => void;
declare const TriggerSleepAction: (timeout: number) => void;
declare const TriggerWaitForSound: (s: sound, offset: number) => void;
declare const TriggerEvaluate: (whichTrigger: trigger) => boolean;
declare const TriggerExecute: (whichTrigger: trigger) => void;
declare const TriggerExecuteWait: (whichTrigger: trigger) => void;
declare const TriggerSyncStart: () => void;
declare const TriggerSyncReady: () => void;
declare const GetWidgetLife: (whichWidget: widget) => number;
declare const SetWidgetLife: (whichWidget: widget, newLife: number) => void;
declare const GetWidgetX: (whichWidget: widget) => number;
declare const GetWidgetY: (whichWidget: widget) => number;
declare const GetTriggerWidget: () => widget;
declare const CreateDestructable: (
  objectid: number,
  x: number,
  y: number,
  face: number,
  scale: number,
  variation: number
) => destructable;
declare const CreateDestructableZ: (
  objectid: number,
  x: number,
  y: number,
  z: number,
  face: number,
  scale: number,
  variation: number
) => destructable;
declare const CreateDeadDestructable: (
  objectid: number,
  x: number,
  y: number,
  face: number,
  scale: number,
  variation: number
) => destructable;
declare const CreateDeadDestructableZ: (
  objectid: number,
  x: number,
  y: number,
  z: number,
  face: number,
  scale: number,
  variation: number
) => destructable;
declare const RemoveDestructable: (d: destructable) => void;
declare const KillDestructable: (d: destructable) => void;
declare const SetDestructableInvulnerable: (
  d: destructable,
  flag: boolean
) => void;
declare const IsDestructableInvulnerable: (d: destructable) => boolean;
declare const EnumDestructablesInRect: (
  r: rect,
  filter: () => boolean,
  actionFunc: () => void
) => void;
declare const GetDestructableTypeId: (d: destructable) => number;
declare const GetDestructableX: (d: destructable) => number;
declare const GetDestructableY: (d: destructable) => number;
declare const SetDestructableLife: (d: destructable, life: number) => void;
declare const GetDestructableLife: (d: destructable) => number;
declare const SetDestructableMaxLife: (d: destructable, max: number) => void;
declare const GetDestructableMaxLife: (d: destructable) => number;
declare const DestructableRestoreLife: (
  d: destructable,
  life: number,
  birth: boolean
) => void;
declare const QueueDestructableAnimation: (
  d: destructable,
  whichAnimation: string
) => void;
declare const SetDestructableAnimation: (
  d: destructable,
  whichAnimation: string
) => void;
declare const SetDestructableAnimationSpeed: (
  d: destructable,
  speedFactor: number
) => void;
declare const ShowDestructable: (d: destructable, flag: boolean) => void;
declare const GetDestructableOccluderHeight: (d: destructable) => number;
declare const SetDestructableOccluderHeight: (
  d: destructable,
  height: number
) => void;
declare const GetDestructableName: (d: destructable) => string;
declare const GetTriggerDestructable: () => destructable;
declare const CreateItem: (itemid: number, x: number, y: number) => item;
declare const RemoveItem: (whichItem: item) => void;
declare const GetItemPlayer: (whichItem: item) => player;
declare const GetItemTypeId: (i: item) => number;
declare const GetItemX: (i: item) => number;
declare const GetItemY: (i: item) => number;
declare const SetItemPosition: (i: item, x: number, y: number) => void;
declare const SetItemDropOnDeath: (whichItem: item, flag: boolean) => void;
declare const SetItemDroppable: (i: item, flag: boolean) => void;
declare const SetItemPawnable: (i: item, flag: boolean) => void;
declare const SetItemPlayer: (
  whichItem: item,
  whichPlayer: player,
  changeColor: boolean
) => void;
declare const SetItemInvulnerable: (whichItem: item, flag: boolean) => void;
declare const IsItemInvulnerable: (whichItem: item) => boolean;
declare const SetItemVisible: (whichItem: item, show: boolean) => void;
declare const IsItemVisible: (whichItem: item) => boolean;
declare const IsItemOwned: (whichItem: item) => boolean;
declare const IsItemPowerup: (whichItem: item) => boolean;
declare const IsItemSellable: (whichItem: item) => boolean;
declare const IsItemPawnable: (whichItem: item) => boolean;
declare const IsItemIdPowerup: (itemId: number) => boolean;
declare const IsItemIdSellable: (itemId: number) => boolean;
declare const IsItemIdPawnable: (itemId: number) => boolean;
declare const EnumItemsInRect: (
  r: rect,
  filter: () => boolean,
  actionFunc: () => void
) => void;
declare const GetItemLevel: (whichItem: item) => number;
declare const GetItemType: (whichItem: item) => itemtype;
declare const SetItemDropID: (whichItem: item, unitId: number) => void;
declare const GetItemName: (whichItem: item) => string;
declare const GetItemCharges: (whichItem: item) => number;
declare const SetItemCharges: (whichItem: item, charges: number) => void;
declare const GetItemUserData: (whichItem: item) => number;
declare const SetItemUserData: (whichItem: item, data: number) => void;
declare const CreateUnit: (
  id: player,
  unitid: number,
  x: number,
  y: number,
  face: number
) => unit;
declare const CreateUnitByName: (
  whichPlayer: player,
  unitname: string,
  x: number,
  y: number,
  face: number
) => unit;
declare const CreateUnitAtLoc: (
  id: player,
  unitid: number,
  whichLocation: location,
  face: number
) => unit;
declare const CreateUnitAtLocByName: (
  id: player,
  unitname: string,
  whichLocation: location,
  face: number
) => unit;
declare const CreateCorpse: (
  whichPlayer: player,
  unitid: number,
  x: number,
  y: number,
  face: number
) => unit;
declare const KillUnit: (whichUnit: unit) => void;
declare const RemoveUnit: (whichUnit: unit) => void;
declare const ShowUnit: (whichUnit: unit, show: boolean) => void;
declare const SetUnitState: (
  whichUnit: unit,
  whichUnitState: unitstate,
  newVal: number
) => void;
declare const SetUnitX: (whichUnit: unit, newX: number) => void;
declare const SetUnitY: (whichUnit: unit, newY: number) => void;
declare const SetUnitPosition: (
  whichUnit: unit,
  newX: number,
  newY: number
) => void;
declare const SetUnitPositionLoc: (
  whichUnit: unit,
  whichLocation: location
) => void;
declare const SetUnitFacing: (whichUnit: unit, facingAngle: number) => void;
declare const SetUnitFacingTimed: (
  whichUnit: unit,
  facingAngle: number,
  duration: number
) => void;
declare const SetUnitMoveSpeed: (whichUnit: unit, newSpeed: number) => void;
declare const SetUnitFlyHeight: (
  whichUnit: unit,
  newHeight: number,
  rate: number
) => void;
declare const SetUnitTurnSpeed: (whichUnit: unit, newTurnSpeed: number) => void;
declare const SetUnitPropWindow: (
  whichUnit: unit,
  newPropWindowAngle: number
) => void;
declare const SetUnitAcquireRange: (
  whichUnit: unit,
  newAcquireRange: number
) => void;
declare const SetUnitCreepGuard: (whichUnit: unit, creepGuard: boolean) => void;
declare const GetUnitAcquireRange: (whichUnit: unit) => number;
declare const GetUnitTurnSpeed: (whichUnit: unit) => number;
declare const GetUnitPropWindow: (whichUnit: unit) => number;
declare const GetUnitFlyHeight: (whichUnit: unit) => number;
declare const GetUnitDefaultAcquireRange: (whichUnit: unit) => number;
declare const GetUnitDefaultTurnSpeed: (whichUnit: unit) => number;
declare const GetUnitDefaultPropWindow: (whichUnit: unit) => number;
declare const GetUnitDefaultFlyHeight: (whichUnit: unit) => number;
declare const SetUnitOwner: (
  whichUnit: unit,
  whichPlayer: player,
  changeColor: boolean
) => void;
declare const SetUnitColor: (whichUnit: unit, whichColor: playercolor) => void;
declare const SetUnitScale: (
  whichUnit: unit,
  scaleX: number,
  scaleY: number,
  scaleZ: number
) => void;
declare const SetUnitTimeScale: (whichUnit: unit, timeScale: number) => void;
declare const SetUnitBlendTime: (whichUnit: unit, blendTime: number) => void;
declare const SetUnitVertexColor: (
  whichUnit: unit,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const QueueUnitAnimation: (
  whichUnit: unit,
  whichAnimation: string
) => void;
declare const SetUnitAnimation: (
  whichUnit: unit,
  whichAnimation: string
) => void;
declare const SetUnitAnimationByIndex: (
  whichUnit: unit,
  whichAnimation: number
) => void;
declare const SetUnitAnimationWithRarity: (
  whichUnit: unit,
  whichAnimation: string,
  rarity: raritycontrol
) => void;
declare const AddUnitAnimationProperties: (
  whichUnit: unit,
  animProperties: string,
  add: boolean
) => void;
declare const SetUnitLookAt: (
  whichUnit: unit,
  whichBone: string,
  lookAtTarget: unit,
  offsetX: number,
  offsetY: number,
  offsetZ: number
) => void;
declare const ResetUnitLookAt: (whichUnit: unit) => void;
declare const SetUnitRescuable: (
  whichUnit: unit,
  byWhichPlayer: player,
  flag: boolean
) => void;
declare const SetUnitRescueRange: (whichUnit: unit, range: number) => void;
declare const SetHeroStr: (
  whichHero: unit,
  newStr: number,
  permanent: boolean
) => void;
declare const SetHeroAgi: (
  whichHero: unit,
  newAgi: number,
  permanent: boolean
) => void;
declare const SetHeroInt: (
  whichHero: unit,
  newInt: number,
  permanent: boolean
) => void;
declare const GetHeroStr: (whichHero: unit, includeBonuses: boolean) => number;
declare const GetHeroAgi: (whichHero: unit, includeBonuses: boolean) => number;
declare const GetHeroInt: (whichHero: unit, includeBonuses: boolean) => number;
declare const UnitStripHeroLevel: (
  whichHero: unit,
  howManyLevels: number
) => boolean;
declare const GetHeroXP: (whichHero: unit) => number;
declare const SetHeroXP: (
  whichHero: unit,
  newXpVal: number,
  showEyeCandy: boolean
) => void;
declare const GetHeroSkillPoints: (whichHero: unit) => number;
declare const UnitModifySkillPoints: (
  whichHero: unit,
  skillPointDelta: number
) => boolean;
declare const AddHeroXP: (
  whichHero: unit,
  xpToAdd: number,
  showEyeCandy: boolean
) => void;
declare const SetHeroLevel: (
  whichHero: unit,
  level: number,
  showEyeCandy: boolean
) => void;
declare const GetHeroLevel: (whichHero: unit) => number;
declare const GetUnitLevel: (whichUnit: unit) => number;
declare const GetHeroProperName: (whichHero: unit) => string;
declare const SuspendHeroXP: (whichHero: unit, flag: boolean) => void;
declare const IsSuspendedXP: (whichHero: unit) => boolean;
declare const SelectHeroSkill: (whichHero: unit, abilcode: number) => void;
declare const GetUnitAbilityLevel: (
  whichUnit: unit,
  abilcode: number
) => number;
declare const DecUnitAbilityLevel: (
  whichUnit: unit,
  abilcode: number
) => number;
declare const IncUnitAbilityLevel: (
  whichUnit: unit,
  abilcode: number
) => number;
declare const SetUnitAbilityLevel: (
  whichUnit: unit,
  abilcode: number,
  level: number
) => number;
declare const ReviveHero: (
  whichHero: unit,
  x: number,
  y: number,
  doEyecandy: boolean
) => boolean;
declare const ReviveHeroLoc: (
  whichHero: unit,
  loc: location,
  doEyecandy: boolean
) => boolean;
declare const SetUnitExploded: (whichUnit: unit, exploded: boolean) => void;
declare const SetUnitInvulnerable: (whichUnit: unit, flag: boolean) => void;
declare const PauseUnit: (whichUnit: unit, flag: boolean) => void;
declare const IsUnitPaused: (whichHero: unit) => boolean;
declare const SetUnitPathing: (whichUnit: unit, flag: boolean) => void;
declare const ClearSelection: () => void;
declare const SelectUnit: (whichUnit: unit, flag: boolean) => void;
declare const GetUnitPointValue: (whichUnit: unit) => number;
declare const GetUnitPointValueByType: (unitType: number) => number;
declare const UnitAddItem: (whichUnit: unit, whichItem: item) => boolean;
declare const UnitAddItemById: (whichUnit: unit, itemId: number) => item;
declare const UnitAddItemToSlotById: (
  whichUnit: unit,
  itemId: number,
  itemSlot: number
) => boolean;
declare const UnitRemoveItem: (whichUnit: unit, whichItem: item) => void;
declare const UnitRemoveItemFromSlot: (
  whichUnit: unit,
  itemSlot: number
) => item;
declare const UnitHasItem: (whichUnit: unit, whichItem: item) => boolean;
declare const UnitItemInSlot: (whichUnit: unit, itemSlot: number) => item;
declare const UnitInventorySize: (whichUnit: unit) => number;
declare const UnitDropItemPoint: (
  whichUnit: unit,
  whichItem: item,
  x: number,
  y: number
) => boolean;
declare const UnitDropItemSlot: (
  whichUnit: unit,
  whichItem: item,
  slot: number
) => boolean;
declare const UnitDropItemTarget: (
  whichUnit: unit,
  whichItem: item,
  target: widget
) => boolean;
declare const UnitUseItem: (whichUnit: unit, whichItem: item) => boolean;
declare const UnitUseItemPoint: (
  whichUnit: unit,
  whichItem: item,
  x: number,
  y: number
) => boolean;
declare const UnitUseItemTarget: (
  whichUnit: unit,
  whichItem: item,
  target: widget
) => boolean;
declare const GetUnitX: (whichUnit: unit) => number;
declare const GetUnitY: (whichUnit: unit) => number;
declare const GetUnitLoc: (whichUnit: unit) => location;
declare const GetUnitFacing: (whichUnit: unit) => number;
declare const GetUnitMoveSpeed: (whichUnit: unit) => number;
declare const GetUnitDefaultMoveSpeed: (whichUnit: unit) => number;
declare const GetUnitState: (
  whichUnit: unit,
  whichUnitState: unitstate
) => number;
declare const GetOwningPlayer: (whichUnit: unit) => player;
declare const GetUnitTypeId: (whichUnit: unit) => number;
declare const GetUnitRace: (whichUnit: unit) => race;
declare const GetUnitName: (whichUnit: unit) => string;
declare const GetUnitFoodUsed: (whichUnit: unit) => number;
declare const GetUnitFoodMade: (whichUnit: unit) => number;
declare const GetFoodMade: (unitId: number) => number;
declare const GetFoodUsed: (unitId: number) => number;
declare const SetUnitUseFood: (whichUnit: unit, useFood: boolean) => void;
declare const GetUnitRallyPoint: (whichUnit: unit) => location;
declare const GetUnitRallyUnit: (whichUnit: unit) => unit;
declare const GetUnitRallyDestructable: (whichUnit: unit) => destructable;
declare const IsUnitInGroup: (whichUnit: unit, whichGroup: group) => boolean;
declare const IsUnitInForce: (whichUnit: unit, whichForce: force) => boolean;
declare const IsUnitOwnedByPlayer: (
  whichUnit: unit,
  whichPlayer: player
) => boolean;
declare const IsUnitAlly: (whichUnit: unit, whichPlayer: player) => boolean;
declare const IsUnitEnemy: (whichUnit: unit, whichPlayer: player) => boolean;
declare const IsUnitVisible: (whichUnit: unit, whichPlayer: player) => boolean;
declare const IsUnitDetected: (whichUnit: unit, whichPlayer: player) => boolean;
declare const IsUnitInvisible: (
  whichUnit: unit,
  whichPlayer: player
) => boolean;
declare const IsUnitFogged: (whichUnit: unit, whichPlayer: player) => boolean;
declare const IsUnitMasked: (whichUnit: unit, whichPlayer: player) => boolean;
declare const IsUnitSelected: (whichUnit: unit, whichPlayer: player) => boolean;
declare const IsUnitRace: (whichUnit: unit, whichRace: race) => boolean;
declare const IsUnitType: (whichUnit: unit, whichUnitType: unittype) => boolean;
declare const IsUnit: (whichUnit: unit, whichSpecifiedUnit: unit) => boolean;
declare const IsUnitInRange: (
  whichUnit: unit,
  otherUnit: unit,
  distance: number
) => boolean;
declare const IsUnitInRangeXY: (
  whichUnit: unit,
  x: number,
  y: number,
  distance: number
) => boolean;
declare const IsUnitInRangeLoc: (
  whichUnit: unit,
  whichLocation: location,
  distance: number
) => boolean;
declare const IsUnitHidden: (whichUnit: unit) => boolean;
declare const IsUnitIllusion: (whichUnit: unit) => boolean;
declare const IsUnitInTransport: (
  whichUnit: unit,
  whichTransport: unit
) => boolean;
declare const IsUnitLoaded: (whichUnit: unit) => boolean;
declare const IsHeroUnitId: (unitId: number) => boolean;
declare const IsUnitIdType: (
  unitId: number,
  whichUnitType: unittype
) => boolean;
declare const UnitShareVision: (
  whichUnit: unit,
  whichPlayer: player,
  share: boolean
) => void;
declare const UnitSuspendDecay: (whichUnit: unit, suspend: boolean) => void;
declare const UnitAddType: (
  whichUnit: unit,
  whichUnitType: unittype
) => boolean;
declare const UnitRemoveType: (
  whichUnit: unit,
  whichUnitType: unittype
) => boolean;
declare const UnitAddAbility: (whichUnit: unit, abilityId: number) => boolean;
declare const UnitRemoveAbility: (
  whichUnit: unit,
  abilityId: number
) => boolean;
declare const UnitMakeAbilityPermanent: (
  whichUnit: unit,
  permanent: boolean,
  abilityId: number
) => boolean;
declare const UnitRemoveBuffs: (
  whichUnit: unit,
  removePositive: boolean,
  removeNegative: boolean
) => void;
declare const UnitRemoveBuffsEx: (
  whichUnit: unit,
  removePositive: boolean,
  removeNegative: boolean,
  magic: boolean,
  physical: boolean,
  timedLife: boolean,
  aura: boolean,
  autoDispel: boolean
) => void;
declare const UnitHasBuffsEx: (
  whichUnit: unit,
  removePositive: boolean,
  removeNegative: boolean,
  magic: boolean,
  physical: boolean,
  timedLife: boolean,
  aura: boolean,
  autoDispel: boolean
) => boolean;
declare const UnitCountBuffsEx: (
  whichUnit: unit,
  removePositive: boolean,
  removeNegative: boolean,
  magic: boolean,
  physical: boolean,
  timedLife: boolean,
  aura: boolean,
  autoDispel: boolean
) => number;
declare const UnitAddSleep: (whichUnit: unit, add: boolean) => void;
declare const UnitCanSleep: (whichUnit: unit) => boolean;
declare const UnitAddSleepPerm: (whichUnit: unit, add: boolean) => void;
declare const UnitCanSleepPerm: (whichUnit: unit) => boolean;
declare const UnitIsSleeping: (whichUnit: unit) => boolean;
declare const UnitWakeUp: (whichUnit: unit) => void;
declare const UnitApplyTimedLife: (
  whichUnit: unit,
  buffId: number,
  duration: number
) => void;
declare const UnitIgnoreAlarm: (whichUnit: unit, flag: boolean) => boolean;
declare const UnitIgnoreAlarmToggled: (whichUnit: unit) => boolean;
declare const UnitResetCooldown: (whichUnit: unit) => void;
declare const UnitSetConstructionProgress: (
  whichUnit: unit,
  constructionPercentage: number
) => void;
declare const UnitSetUpgradeProgress: (
  whichUnit: unit,
  upgradePercentage: number
) => void;
declare const UnitPauseTimedLife: (whichUnit: unit, flag: boolean) => void;
declare const UnitSetUsesAltIcon: (whichUnit: unit, flag: boolean) => void;
declare const UnitDamagePoint: (
  whichUnit: unit,
  delay: number,
  radius: number,
  x: number,
  y: number,
  amount: number,
  attack: boolean,
  ranged: boolean,
  attackType: attacktype,
  damageType: damagetype,
  weaponType: weapontype
) => boolean;
declare const UnitDamageTarget: (
  whichUnit: unit,
  target: widget,
  amount: number,
  attack: boolean,
  ranged: boolean,
  attackType: attacktype,
  damageType: damagetype,
  weaponType: weapontype
) => boolean;
declare const IssueImmediateOrder: (whichUnit: unit, order: string) => boolean;
declare const IssueImmediateOrderById: (
  whichUnit: unit,
  order: number
) => boolean;
declare const IssuePointOrder: (
  whichUnit: unit,
  order: string,
  x: number,
  y: number
) => boolean;
declare const IssuePointOrderLoc: (
  whichUnit: unit,
  order: string,
  whichLocation: location
) => boolean;
declare const IssuePointOrderById: (
  whichUnit: unit,
  order: number,
  x: number,
  y: number
) => boolean;
declare const IssuePointOrderByIdLoc: (
  whichUnit: unit,
  order: number,
  whichLocation: location
) => boolean;
declare const IssueTargetOrder: (
  whichUnit: unit,
  order: string,
  targetWidget: widget
) => boolean;
declare const IssueTargetOrderById: (
  whichUnit: unit,
  order: number,
  targetWidget: widget
) => boolean;
declare const IssueInstantPointOrder: (
  whichUnit: unit,
  order: string,
  x: number,
  y: number,
  instantTargetWidget: widget
) => boolean;
declare const IssueInstantPointOrderById: (
  whichUnit: unit,
  order: number,
  x: number,
  y: number,
  instantTargetWidget: widget
) => boolean;
declare const IssueInstantTargetOrder: (
  whichUnit: unit,
  order: string,
  targetWidget: widget,
  instantTargetWidget: widget
) => boolean;
declare const IssueInstantTargetOrderById: (
  whichUnit: unit,
  order: number,
  targetWidget: widget,
  instantTargetWidget: widget
) => boolean;
declare const IssueBuildOrder: (
  whichPeon: unit,
  unitToBuild: string,
  x: number,
  y: number
) => boolean;
declare const IssueBuildOrderById: (
  whichPeon: unit,
  unitId: number,
  x: number,
  y: number
) => boolean;
declare const IssueNeutralImmediateOrder: (
  forWhichPlayer: player,
  neutralStructure: unit,
  unitToBuild: string
) => boolean;
declare const IssueNeutralImmediateOrderById: (
  forWhichPlayer: player,
  neutralStructure: unit,
  unitId: number
) => boolean;
declare const IssueNeutralPointOrder: (
  forWhichPlayer: player,
  neutralStructure: unit,
  unitToBuild: string,
  x: number,
  y: number
) => boolean;
declare const IssueNeutralPointOrderById: (
  forWhichPlayer: player,
  neutralStructure: unit,
  unitId: number,
  x: number,
  y: number
) => boolean;
declare const IssueNeutralTargetOrder: (
  forWhichPlayer: player,
  neutralStructure: unit,
  unitToBuild: string,
  target: widget
) => boolean;
declare const IssueNeutralTargetOrderById: (
  forWhichPlayer: player,
  neutralStructure: unit,
  unitId: number,
  target: widget
) => boolean;
declare const GetUnitCurrentOrder: (whichUnit: unit) => number;
declare const SetResourceAmount: (whichUnit: unit, amount: number) => void;
declare const AddResourceAmount: (whichUnit: unit, amount: number) => void;
declare const GetResourceAmount: (whichUnit: unit) => number;
declare const WaygateGetDestinationX: (waygate: unit) => number;
declare const WaygateGetDestinationY: (waygate: unit) => number;
declare const WaygateSetDestination: (
  waygate: unit,
  x: number,
  y: number
) => void;
declare const WaygateActivate: (waygate: unit, activate: boolean) => void;
declare const WaygateIsActive: (waygate: unit) => boolean;
declare const AddItemToAllStock: (
  itemId: number,
  currentStock: number,
  stockMax: number
) => void;
declare const AddItemToStock: (
  whichUnit: unit,
  itemId: number,
  currentStock: number,
  stockMax: number
) => void;
declare const AddUnitToAllStock: (
  unitId: number,
  currentStock: number,
  stockMax: number
) => void;
declare const AddUnitToStock: (
  whichUnit: unit,
  unitId: number,
  currentStock: number,
  stockMax: number
) => void;
declare const RemoveItemFromAllStock: (itemId: number) => void;
declare const RemoveItemFromStock: (whichUnit: unit, itemId: number) => void;
declare const RemoveUnitFromAllStock: (unitId: number) => void;
declare const RemoveUnitFromStock: (whichUnit: unit, unitId: number) => void;
declare const SetAllItemTypeSlots: (slots: number) => void;
declare const SetAllUnitTypeSlots: (slots: number) => void;
declare const SetItemTypeSlots: (whichUnit: unit, slots: number) => void;
declare const SetUnitTypeSlots: (whichUnit: unit, slots: number) => void;
declare const GetUnitUserData: (whichUnit: unit) => number;
declare const SetUnitUserData: (whichUnit: unit, data: number) => void;
declare const Player: (number: number) => player;
declare const GetLocalPlayer: () => player;
declare const IsPlayerAlly: (
  whichPlayer: player,
  otherPlayer: player
) => boolean;
declare const IsPlayerEnemy: (
  whichPlayer: player,
  otherPlayer: player
) => boolean;
declare const IsPlayerInForce: (
  whichPlayer: player,
  whichForce: force
) => boolean;
declare const IsPlayerObserver: (whichPlayer: player) => boolean;
declare const IsVisibleToPlayer: (
  x: number,
  y: number,
  whichPlayer: player
) => boolean;
declare const IsLocationVisibleToPlayer: (
  whichLocation: location,
  whichPlayer: player
) => boolean;
declare const IsFoggedToPlayer: (
  x: number,
  y: number,
  whichPlayer: player
) => boolean;
declare const IsLocationFoggedToPlayer: (
  whichLocation: location,
  whichPlayer: player
) => boolean;
declare const IsMaskedToPlayer: (
  x: number,
  y: number,
  whichPlayer: player
) => boolean;
declare const IsLocationMaskedToPlayer: (
  whichLocation: location,
  whichPlayer: player
) => boolean;
declare const GetPlayerRace: (whichPlayer: player) => race;
declare const GetPlayerId: (whichPlayer: player) => number;
declare const GetPlayerUnitCount: (
  whichPlayer: player,
  includeIncomplete: boolean
) => number;
declare const GetPlayerTypedUnitCount: (
  whichPlayer: player,
  unitName: string,
  includeIncomplete: boolean,
  includeUpgrades: boolean
) => number;
declare const GetPlayerStructureCount: (
  whichPlayer: player,
  includeIncomplete: boolean
) => number;
declare const GetPlayerState: (
  whichPlayer: player,
  whichPlayerState: playerstate
) => number;
declare const GetPlayerScore: (
  whichPlayer: player,
  whichPlayerScore: playerscore
) => number;
declare const GetPlayerAlliance: (
  sourcePlayer: player,
  otherPlayer: player,
  whichAllianceSetting: alliancetype
) => boolean;
declare const GetPlayerHandicap: (whichPlayer: player) => number;
declare const GetPlayerHandicapXP: (whichPlayer: player) => number;
declare const GetPlayerHandicapReviveTime: (whichPlayer: player) => number;
declare const GetPlayerHandicapDamage: (whichPlayer: player) => number;
declare const SetPlayerHandicap: (
  whichPlayer: player,
  handicap: number
) => void;
declare const SetPlayerHandicapXP: (
  whichPlayer: player,
  handicap: number
) => void;
declare const SetPlayerHandicapReviveTime: (
  whichPlayer: player,
  handicap: number
) => void;
declare const SetPlayerHandicapDamage: (
  whichPlayer: player,
  handicap: number
) => void;
declare const SetPlayerTechMaxAllowed: (
  whichPlayer: player,
  techid: number,
  maximum: number
) => void;
declare const GetPlayerTechMaxAllowed: (
  whichPlayer: player,
  techid: number
) => number;
declare const AddPlayerTechResearched: (
  whichPlayer: player,
  techid: number,
  levels: number
) => void;
declare const SetPlayerTechResearched: (
  whichPlayer: player,
  techid: number,
  setToLevel: number
) => void;
declare const GetPlayerTechResearched: (
  whichPlayer: player,
  techid: number,
  specificonly: boolean
) => boolean;
declare const GetPlayerTechCount: (
  whichPlayer: player,
  techid: number,
  specificonly: boolean
) => number;
declare const SetPlayerUnitsOwner: (
  whichPlayer: player,
  newOwner: number
) => void;
declare const CripplePlayer: (
  whichPlayer: player,
  toWhichPlayers: force,
  flag: boolean
) => void;
declare const SetPlayerAbilityAvailable: (
  whichPlayer: player,
  abilid: number,
  avail: boolean
) => void;
declare const SetPlayerState: (
  whichPlayer: player,
  whichPlayerState: playerstate,
  value: number
) => void;
declare const RemovePlayer: (
  whichPlayer: player,
  gameResult: playergameresult
) => void;
declare const CachePlayerHeroData: (whichPlayer: player) => void;
declare const SetFogStateRect: (
  forWhichPlayer: player,
  whichState: fogstate,
  where: rect,
  useSharedVision: boolean
) => void;
declare const SetFogStateRadius: (
  forWhichPlayer: player,
  whichState: fogstate,
  centerx: number,
  centerY: number,
  radius: number,
  useSharedVision: boolean
) => void;
declare const SetFogStateRadiusLoc: (
  forWhichPlayer: player,
  whichState: fogstate,
  center: location,
  radius: number,
  useSharedVision: boolean
) => void;
declare const FogMaskEnable: (enable: boolean) => void;
declare const IsFogMaskEnabled: () => boolean;
declare const FogEnable: (enable: boolean) => void;
declare const IsFogEnabled: () => boolean;
declare const CreateFogModifierRect: (
  forWhichPlayer: player,
  whichState: fogstate,
  where: rect,
  useSharedVision: boolean,
  afterUnits: boolean
) => fogmodifier;
declare const CreateFogModifierRadius: (
  forWhichPlayer: player,
  whichState: fogstate,
  centerx: number,
  centerY: number,
  radius: number,
  useSharedVision: boolean,
  afterUnits: boolean
) => fogmodifier;
declare const CreateFogModifierRadiusLoc: (
  forWhichPlayer: player,
  whichState: fogstate,
  center: location,
  radius: number,
  useSharedVision: boolean,
  afterUnits: boolean
) => fogmodifier;
declare const DestroyFogModifier: (whichFogModifier: fogmodifier) => void;
declare const FogModifierStart: (whichFogModifier: fogmodifier) => void;
declare const FogModifierStop: (whichFogModifier: fogmodifier) => void;
declare const VersionGet: () => version;
declare const VersionCompatible: (whichVersion: version) => boolean;
declare const VersionSupported: (whichVersion: version) => boolean;
declare const EndGame: (doScoreScreen: boolean) => void;
declare const ChangeLevel: (newLevel: string, doScoreScreen: boolean) => void;
declare const RestartGame: (doScoreScreen: boolean) => void;
declare const ReloadGame: () => void;
declare const SetCampaignMenuRace: (r: race) => void;
declare const SetCampaignMenuRaceEx: (campaignIndex: number) => void;
declare const ForceCampaignSelectScreen: () => void;
declare const LoadGame: (saveFileName: string, doScoreScreen: boolean) => void;
declare const SaveGame: (saveFileName: string) => void;
declare const RenameSaveDirectory: (
  sourceDirName: string,
  destDirName: string
) => boolean;
declare const RemoveSaveDirectory: (sourceDirName: string) => boolean;
declare const CopySaveGame: (
  sourceSaveName: string,
  destSaveName: string
) => boolean;
declare const SaveGameExists: (saveName: string) => boolean;
declare const SetMaxCheckpointSaves: (maxCheckpointSaves: number) => void;
declare const SaveGameCheckpoint: (
  saveFileName: string,
  showWindow: boolean
) => void;
declare const SyncSelections: () => void;
declare const SetFloatGameState: (
  whichFloatGameState: fgamestate,
  value: number
) => void;
declare const GetFloatGameState: (whichFloatGameState: fgamestate) => number;
declare const SetIntegerGameState: (
  whichIntegerGameState: igamestate,
  value: number
) => void;
declare const GetIntegerGameState: (
  whichIntegerGameState: igamestate
) => number;
declare const SetTutorialCleared: (cleared: boolean) => void;
declare const SetMissionAvailable: (
  campaignNumber: number,
  missionNumber: number,
  available: boolean
) => void;
declare const SetCampaignAvailable: (
  campaignNumber: number,
  available: boolean
) => void;
declare const SetOpCinematicAvailable: (
  campaignNumber: number,
  available: boolean
) => void;
declare const SetEdCinematicAvailable: (
  campaignNumber: number,
  available: boolean
) => void;
declare const GetDefaultDifficulty: () => gamedifficulty;
declare const SetDefaultDifficulty: (g: gamedifficulty) => void;
declare const SetCustomCampaignButtonVisible: (
  whichButton: number,
  visible: boolean
) => void;
declare const GetCustomCampaignButtonVisible: (whichButton: number) => boolean;
declare const DoNotSaveReplay: () => void;
declare const DialogCreate: () => dialog;
declare const DialogDestroy: (whichDialog: dialog) => void;
declare const DialogClear: (whichDialog: dialog) => void;
declare const DialogSetMessage: (
  whichDialog: dialog,
  messageText: string
) => void;
declare const DialogAddButton: (
  whichDialog: dialog,
  buttonText: string,
  hotkey: number
) => button;
declare const DialogAddQuitButton: (
  whichDialog: dialog,
  doScoreScreen: boolean,
  buttonText: string,
  hotkey: number
) => button;
declare const DialogDisplay: (
  whichPlayer: player,
  whichDialog: dialog,
  flag: boolean
) => void;
declare const ReloadGameCachesFromDisk: () => boolean;
declare const InitGameCache: (campaignFile: string) => gamecache;
declare const SaveGameCache: (whichCache: gamecache) => boolean;
declare const StoreInteger: (
  cache: gamecache,
  missionKey: string,
  key: string,
  value: number
) => void;
declare const StoreReal: (
  cache: gamecache,
  missionKey: string,
  key: string,
  value: number
) => void;
declare const StoreBoolean: (
  cache: gamecache,
  missionKey: string,
  key: string,
  value: boolean
) => void;
declare const StoreUnit: (
  cache: gamecache,
  missionKey: string,
  key: string,
  whichUnit: unit
) => boolean;
declare const StoreString: (
  cache: gamecache,
  missionKey: string,
  key: string,
  value: string
) => boolean;
declare const SyncStoredInteger: (
  cache: gamecache,
  missionKey: string,
  key: string
) => void;
declare const SyncStoredReal: (
  cache: gamecache,
  missionKey: string,
  key: string
) => void;
declare const SyncStoredBoolean: (
  cache: gamecache,
  missionKey: string,
  key: string
) => void;
declare const SyncStoredUnit: (
  cache: gamecache,
  missionKey: string,
  key: string
) => void;
declare const SyncStoredString: (
  cache: gamecache,
  missionKey: string,
  key: string
) => void;
declare const HaveStoredInteger: (
  cache: gamecache,
  missionKey: string,
  key: string
) => boolean;
declare const HaveStoredReal: (
  cache: gamecache,
  missionKey: string,
  key: string
) => boolean;
declare const HaveStoredBoolean: (
  cache: gamecache,
  missionKey: string,
  key: string
) => boolean;
declare const HaveStoredUnit: (
  cache: gamecache,
  missionKey: string,
  key: string
) => boolean;
declare const HaveStoredString: (
  cache: gamecache,
  missionKey: string,
  key: string
) => boolean;
declare const FlushGameCache: (cache: gamecache) => void;
declare const FlushStoredMission: (
  cache: gamecache,
  missionKey: string
) => void;
declare const FlushStoredInteger: (
  cache: gamecache,
  missionKey: string,
  key: string
) => void;
declare const FlushStoredReal: (
  cache: gamecache,
  missionKey: string,
  key: string
) => void;
declare const FlushStoredBoolean: (
  cache: gamecache,
  missionKey: string,
  key: string
) => void;
declare const FlushStoredUnit: (
  cache: gamecache,
  missionKey: string,
  key: string
) => void;
declare const FlushStoredString: (
  cache: gamecache,
  missionKey: string,
  key: string
) => void;
declare const GetStoredInteger: (
  cache: gamecache,
  missionKey: string,
  key: string
) => number;
declare const GetStoredReal: (
  cache: gamecache,
  missionKey: string,
  key: string
) => number;
declare const GetStoredBoolean: (
  cache: gamecache,
  missionKey: string,
  key: string
) => boolean;
declare const GetStoredString: (
  cache: gamecache,
  missionKey: string,
  key: string
) => string;
declare const RestoreUnit: (
  cache: gamecache,
  missionKey: string,
  key: string,
  forWhichPlayer: player,
  x: number,
  y: number,
  facing: number
) => unit;
declare const InitHashtable: () => hashtable;
declare const SaveInteger: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  value: number
) => void;
declare const SaveReal: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  value: number
) => void;
declare const SaveBoolean: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  value: boolean
) => void;
declare const SaveStr: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  value: string
) => boolean;
declare const SavePlayerHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichPlayer: player
) => boolean;
declare const SaveWidgetHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichWidget: widget
) => boolean;
declare const SaveDestructableHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichDestructable: destructable
) => boolean;
declare const SaveItemHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichItem: item
) => boolean;
declare const SaveUnitHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichUnit: unit
) => boolean;
declare const SaveAbilityHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichAbility: ability
) => boolean;
declare const SaveTimerHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichTimer: timer
) => boolean;
declare const SaveTriggerHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichTrigger: trigger
) => boolean;
declare const SaveTriggerConditionHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichTriggercondition: () => boolean
) => boolean;
declare const SaveTriggerActionHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichTriggeraction: () => void
) => boolean;
declare const SaveTriggerEventHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichEvent: event
) => boolean;
declare const SaveForceHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichForce: force
) => boolean;
declare const SaveGroupHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichGroup: group
) => boolean;
declare const SaveLocationHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichLocation: location
) => boolean;
declare const SaveRectHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichRect: rect
) => boolean;
declare const SaveBooleanExprHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichBoolexpr: () => boolean
) => boolean;
declare const SaveSoundHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichSound: sound
) => boolean;
declare const SaveEffectHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichEffect: effect
) => boolean;
declare const SaveUnitPoolHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichUnitpool: unitpool
) => boolean;
declare const SaveItemPoolHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichItempool: itempool
) => boolean;
declare const SaveQuestHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichQuest: quest
) => boolean;
declare const SaveQuestItemHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichQuestitem: questitem
) => boolean;
declare const SaveDefeatConditionHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichDefeatcondition: defeatcondition
) => boolean;
declare const SaveTimerDialogHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichTimerdialog: timerdialog
) => boolean;
declare const SaveLeaderboardHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichLeaderboard: leaderboard
) => boolean;
declare const SaveMultiboardHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichMultiboard: multiboard
) => boolean;
declare const SaveMultiboardItemHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichMultiboarditem: multiboarditem
) => boolean;
declare const SaveTrackableHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichTrackable: trackable
) => boolean;
declare const SaveDialogHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichDialog: dialog
) => boolean;
declare const SaveButtonHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichButton: button
) => boolean;
declare const SaveTextTagHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichTexttag: texttag
) => boolean;
declare const SaveLightningHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichLightning: lightning
) => boolean;
declare const SaveImageHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichImage: image
) => boolean;
declare const SaveUbersplatHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichUbersplat: ubersplat
) => boolean;
declare const SaveRegionHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichRegion: region
) => boolean;
declare const SaveFogStateHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichFogState: fogstate
) => boolean;
declare const SaveFogModifierHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichFogModifier: fogmodifier
) => boolean;
declare const SaveAgentHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichAgent: agent
) => boolean;
declare const SaveHashtableHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichHashtable: hashtable
) => boolean;
declare const SaveFrameHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number,
  whichFrameHandle: framehandle
) => boolean;
declare const LoadInteger: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => number;
declare const LoadReal: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => number;
declare const LoadBoolean: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => boolean;
declare const LoadStr: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => string;
declare const LoadPlayerHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => player;
declare const LoadWidgetHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => widget;
declare const LoadDestructableHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => destructable;
declare const LoadItemHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => item;
declare const LoadUnitHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => unit;
declare const LoadAbilityHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => ability;
declare const LoadTimerHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => timer;
declare const LoadTriggerHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => trigger;
declare const LoadTriggerConditionHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => triggercondition;
declare const LoadTriggerActionHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => triggeraction;
declare const LoadTriggerEventHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => event;
declare const LoadForceHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => force;
declare const LoadGroupHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => group;
declare const LoadLocationHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => location;
declare const LoadRectHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => rect;
declare const LoadBooleanExprHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => boolexpr;
declare const LoadSoundHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => sound;
declare const LoadEffectHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => effect;
declare const LoadUnitPoolHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => unitpool;
declare const LoadItemPoolHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => itempool;
declare const LoadQuestHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => quest;
declare const LoadQuestItemHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => questitem;
declare const LoadDefeatConditionHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => defeatcondition;
declare const LoadTimerDialogHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => timerdialog;
declare const LoadLeaderboardHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => leaderboard;
declare const LoadMultiboardHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => multiboard;
declare const LoadMultiboardItemHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => multiboarditem;
declare const LoadTrackableHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => trackable;
declare const LoadDialogHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => dialog;
declare const LoadButtonHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => button;
declare const LoadTextTagHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => texttag;
declare const LoadLightningHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => lightning;
declare const LoadImageHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => image;
declare const LoadUbersplatHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => ubersplat;
declare const LoadRegionHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => region;
declare const LoadFogStateHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => fogstate;
declare const LoadFogModifierHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => fogmodifier;
declare const LoadHashtableHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => hashtable;
declare const LoadFrameHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => framehandle;
declare const HaveSavedInteger: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => boolean;
declare const HaveSavedReal: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => boolean;
declare const HaveSavedBoolean: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => boolean;
declare const HaveSavedString: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => boolean;
declare const HaveSavedHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => boolean;
declare const RemoveSavedInteger: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => void;
declare const RemoveSavedReal: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => void;
declare const RemoveSavedBoolean: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => void;
declare const RemoveSavedString: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => void;
declare const RemoveSavedHandle: (
  table: hashtable,
  parentKey: number,
  childKey: number
) => void;
declare const FlushParentHashtable: (table: hashtable) => void;
declare const FlushChildHashtable: (
  table: hashtable,
  parentKey: number
) => void;
declare const GetRandomInt: (lowBound: number, highBound: number) => number;
declare const GetRandomReal: (lowBound: number, highBound: number) => number;
declare const CreateUnitPool: () => unitpool;
declare const DestroyUnitPool: (whichPool: unitpool) => void;
declare const UnitPoolAddUnitType: (
  whichPool: unitpool,
  unitId: number,
  weight: number
) => void;
declare const UnitPoolRemoveUnitType: (
  whichPool: unitpool,
  unitId: number
) => void;
declare const PlaceRandomUnit: (
  whichPool: unitpool,
  forWhichPlayer: player,
  x: number,
  y: number,
  facing: number
) => unit;
declare const CreateItemPool: () => itempool;
declare const DestroyItemPool: (whichItemPool: itempool) => void;
declare const ItemPoolAddItemType: (
  whichItemPool: itempool,
  itemId: number,
  weight: number
) => void;
declare const ItemPoolRemoveItemType: (
  whichItemPool: itempool,
  itemId: number
) => void;
declare const PlaceRandomItem: (
  whichItemPool: itempool,
  x: number,
  y: number
) => item;
declare const ChooseRandomCreep: (level: number) => number;
declare const ChooseRandomNPBuilding: () => number;
declare const ChooseRandomItem: (level: number) => number;
declare const ChooseRandomItemEx: (
  whichType: itemtype,
  level: number
) => number;
declare const SetRandomSeed: (seed: number) => void;
declare const SetTerrainFog: (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
) => void;
declare const ResetTerrainFog: () => void;
declare const SetUnitFog: (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
) => void;
declare const SetTerrainFogEx: (
  style: number,
  zstart: number,
  zend: number,
  density: number,
  red: number,
  green: number,
  blue: number
) => void;
declare const DisplayTextToPlayer: (
  toPlayer: player,
  x: number,
  y: number,
  message: string
) => void;
declare const DisplayTimedTextToPlayer: (
  toPlayer: player,
  x: number,
  y: number,
  duration: number,
  message: string
) => void;
declare const DisplayTimedTextFromPlayer: (
  toPlayer: player,
  x: number,
  y: number,
  duration: number,
  message: string
) => void;
declare const ClearTextMessages: () => void;
declare const SetDayNightModels: (
  terrainDNCFile: string,
  unitDNCFile: string
) => void;
declare const SetPortraitLight: (portraitDNCFile: string) => void;
declare const SetSkyModel: (skyModelFile: string) => void;
declare const EnableUserControl: (b: boolean) => void;
declare const EnableUserUI: (b: boolean) => void;
declare const SuspendTimeOfDay: (b: boolean) => void;
declare const SetTimeOfDayScale: (r: number) => void;
declare const GetTimeOfDayScale: () => number;
declare const ShowInterface: (flag: boolean, fadeDuration: number) => void;
declare const PauseGame: (flag: boolean) => void;
declare const UnitAddIndicator: (
  whichUnit: unit,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const AddIndicator: (
  whichWidget: widget,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const PingMinimap: (x: number, y: number, duration: number) => void;
declare const PingMinimapEx: (
  x: number,
  y: number,
  duration: number,
  red: number,
  green: number,
  blue: number,
  extraEffects: boolean
) => void;
declare const CreateMinimapIconOnUnit: (
  whichUnit: unit,
  red: number,
  green: number,
  blue: number,
  pingPath: string,
  fogVisibility: fogstate
) => minimapicon;
declare const CreateMinimapIconAtLoc: (
  where: location,
  red: number,
  green: number,
  blue: number,
  pingPath: string,
  fogVisibility: fogstate
) => minimapicon;
declare const CreateMinimapIcon: (
  x: number,
  y: number,
  red: number,
  green: number,
  blue: number,
  pingPath: string,
  fogVisibility: fogstate
) => minimapicon;
declare const SkinManagerGetLocalPath: (key: string) => string;
declare const DestroyMinimapIcon: (pingId: minimapicon) => void;
declare const SetMinimapIconVisible: (
  whichMinimapIcon: minimapicon,
  visible: boolean
) => void;
declare const SetMinimapIconOrphanDestroy: (
  whichMinimapIcon: minimapicon,
  doDestroy: boolean
) => void;
declare const EnableOcclusion: (flag: boolean) => void;
declare const SetIntroShotText: (introText: string) => void;
declare const SetIntroShotModel: (introModelPath: string) => void;
declare const EnableWorldFogBoundary: (b: boolean) => void;
declare const PlayModelCinematic: (modelName: string) => void;
declare const PlayCinematic: (movieName: string) => void;
declare const ForceUIKey: (key: string) => void;
declare const ForceUICancel: () => void;
declare const DisplayLoadDialog: () => void;
declare const SetAltMinimapIcon: (iconPath: string) => void;
declare const DisableRestartMission: (flag: boolean) => void;
declare const CreateTextTag: () => texttag;
declare const DestroyTextTag: (t: texttag) => void;
declare const SetTextTagText: (t: texttag, s: string, height: number) => void;
declare const SetTextTagPos: (
  t: texttag,
  x: number,
  y: number,
  heightOffset: number
) => void;
declare const SetTextTagPosUnit: (
  t: texttag,
  whichUnit: unit,
  heightOffset: number
) => void;
declare const SetTextTagColor: (
  t: texttag,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const SetTextTagVelocity: (
  t: texttag,
  xvel: number,
  yvel: number
) => void;
declare const SetTextTagVisibility: (t: texttag, flag: boolean) => void;
declare const SetTextTagSuspended: (t: texttag, flag: boolean) => void;
declare const SetTextTagPermanent: (t: texttag, flag: boolean) => void;
declare const SetTextTagAge: (t: texttag, age: number) => void;
declare const SetTextTagLifespan: (t: texttag, lifespan: number) => void;
declare const SetTextTagFadepoint: (t: texttag, fadepoint: number) => void;
declare const SetReservedLocalHeroButtons: (reserved: number) => void;
declare const GetAllyColorFilterState: () => number;
declare const SetAllyColorFilterState: (state: number) => void;
declare const GetCreepCampFilterState: () => boolean;
declare const SetCreepCampFilterState: (state: boolean) => void;
declare const EnableMinimapFilterButtons: (
  enableAlly: boolean,
  enableCreep: boolean
) => void;
declare const EnableDragSelect: (state: boolean, ui: boolean) => void;
declare const EnablePreSelect: (state: boolean, ui: boolean) => void;
declare const EnableSelect: (state: boolean, ui: boolean) => void;
declare const CreateTrackable: (
  trackableModelPath: string,
  x: number,
  y: number,
  facing: number
) => trackable;
declare const CreateQuest: () => quest;
declare const DestroyQuest: (whichQuest: quest) => void;
declare const QuestSetTitle: (whichQuest: quest, title: string) => void;
declare const QuestSetDescription: (
  whichQuest: quest,
  description: string
) => void;
declare const QuestSetIconPath: (whichQuest: quest, iconPath: string) => void;
declare const QuestSetRequired: (whichQuest: quest, required: boolean) => void;
declare const QuestSetCompleted: (
  whichQuest: quest,
  completed: boolean
) => void;
declare const QuestSetDiscovered: (
  whichQuest: quest,
  discovered: boolean
) => void;
declare const QuestSetFailed: (whichQuest: quest, failed: boolean) => void;
declare const QuestSetEnabled: (whichQuest: quest, enabled: boolean) => void;
declare const IsQuestRequired: (whichQuest: quest) => boolean;
declare const IsQuestCompleted: (whichQuest: quest) => boolean;
declare const IsQuestDiscovered: (whichQuest: quest) => boolean;
declare const IsQuestFailed: (whichQuest: quest) => boolean;
declare const IsQuestEnabled: (whichQuest: quest) => boolean;
declare const QuestCreateItem: (whichQuest: quest) => questitem;
declare const QuestItemSetDescription: (
  whichQuestItem: questitem,
  description: string
) => void;
declare const QuestItemSetCompleted: (
  whichQuestItem: questitem,
  completed: boolean
) => void;
declare const IsQuestItemCompleted: (whichQuestItem: questitem) => boolean;
declare const CreateDefeatCondition: () => defeatcondition;
declare const DestroyDefeatCondition: (whichCondition: defeatcondition) => void;
declare const DefeatConditionSetDescription: (
  whichCondition: defeatcondition,
  description: string
) => void;
declare const FlashQuestDialogButton: () => void;
declare const ForceQuestDialogUpdate: () => void;
declare const CreateTimerDialog: (t: timer) => timerdialog;
declare const DestroyTimerDialog: (whichDialog: timerdialog) => void;
declare const TimerDialogSetTitle: (
  whichDialog: timerdialog,
  title: string
) => void;
declare const TimerDialogSetTitleColor: (
  whichDialog: timerdialog,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const TimerDialogSetTimeColor: (
  whichDialog: timerdialog,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const TimerDialogSetSpeed: (
  whichDialog: timerdialog,
  speedMultFactor: number
) => void;
declare const TimerDialogDisplay: (
  whichDialog: timerdialog,
  display: boolean
) => void;
declare const IsTimerDialogDisplayed: (whichDialog: timerdialog) => boolean;
declare const TimerDialogSetRealTimeRemaining: (
  whichDialog: timerdialog,
  timeRemaining: number
) => void;
declare const CreateLeaderboard: () => leaderboard;
declare const DestroyLeaderboard: (lb: leaderboard) => void;
declare const LeaderboardDisplay: (lb: leaderboard, show: boolean) => void;
declare const IsLeaderboardDisplayed: (lb: leaderboard) => boolean;
declare const LeaderboardGetItemCount: (lb: leaderboard) => number;
declare const LeaderboardSetSizeByItemCount: (
  lb: leaderboard,
  count: number
) => void;
declare const LeaderboardAddItem: (
  lb: leaderboard,
  label: string,
  value: number,
  p: player
) => void;
declare const LeaderboardRemoveItem: (lb: leaderboard, index: number) => void;
declare const LeaderboardRemovePlayerItem: (lb: leaderboard, p: player) => void;
declare const LeaderboardClear: (lb: leaderboard) => void;
declare const LeaderboardSortItemsByValue: (
  lb: leaderboard,
  ascending: boolean
) => void;
declare const LeaderboardSortItemsByPlayer: (
  lb: leaderboard,
  ascending: boolean
) => void;
declare const LeaderboardSortItemsByLabel: (
  lb: leaderboard,
  ascending: boolean
) => void;
declare const LeaderboardHasPlayerItem: (lb: leaderboard, p: player) => boolean;
declare const LeaderboardGetPlayerIndex: (lb: leaderboard, p: player) => number;
declare const LeaderboardSetLabel: (lb: leaderboard, label: string) => void;
declare const LeaderboardGetLabelText: (lb: leaderboard) => string;
declare const PlayerSetLeaderboard: (toPlayer: player, lb: leaderboard) => void;
declare const PlayerGetLeaderboard: (toPlayer: player) => leaderboard;
declare const LeaderboardSetLabelColor: (
  lb: leaderboard,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const LeaderboardSetValueColor: (
  lb: leaderboard,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const LeaderboardSetStyle: (
  lb: leaderboard,
  showLabel: boolean,
  showNames: boolean,
  showValues: boolean,
  showIcons: boolean
) => void;
declare const LeaderboardSetItemValue: (
  lb: leaderboard,
  whichItem: number,
  val: number
) => void;
declare const LeaderboardSetItemLabel: (
  lb: leaderboard,
  whichItem: number,
  val: string
) => void;
declare const LeaderboardSetItemStyle: (
  lb: leaderboard,
  whichItem: number,
  showLabel: boolean,
  showValue: boolean,
  showIcon: boolean
) => void;
declare const LeaderboardSetItemLabelColor: (
  lb: leaderboard,
  whichItem: number,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const LeaderboardSetItemValueColor: (
  lb: leaderboard,
  whichItem: number,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const CreateMultiboard: () => multiboard;
declare const DestroyMultiboard: (lb: multiboard) => void;
declare const MultiboardDisplay: (lb: multiboard, show: boolean) => void;
declare const IsMultiboardDisplayed: (lb: multiboard) => boolean;
declare const MultiboardMinimize: (lb: multiboard, minimize: boolean) => void;
declare const IsMultiboardMinimized: (lb: multiboard) => boolean;
declare const MultiboardClear: (lb: multiboard) => void;
declare const MultiboardSetTitleText: (lb: multiboard, label: string) => void;
declare const MultiboardGetTitleText: (lb: multiboard) => string;
declare const MultiboardSetTitleTextColor: (
  lb: multiboard,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const MultiboardGetRowCount: (lb: multiboard) => number;
declare const MultiboardGetColumnCount: (lb: multiboard) => number;
declare const MultiboardSetColumnCount: (lb: multiboard, count: number) => void;
declare const MultiboardSetRowCount: (lb: multiboard, count: number) => void;
declare const MultiboardSetItemsStyle: (
  lb: multiboard,
  showValues: boolean,
  showIcons: boolean
) => void;
declare const MultiboardSetItemsValue: (lb: multiboard, value: string) => void;
declare const MultiboardSetItemsValueColor: (
  lb: multiboard,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const MultiboardSetItemsWidth: (lb: multiboard, width: number) => void;
declare const MultiboardSetItemsIcon: (
  lb: multiboard,
  iconPath: string
) => void;
declare const MultiboardGetItem: (
  lb: multiboard,
  row: number,
  column: number
) => multiboarditem;
declare const MultiboardReleaseItem: (mbi: multiboarditem) => void;
declare const MultiboardSetItemStyle: (
  mbi: multiboarditem,
  showValue: boolean,
  showIcon: boolean
) => void;
declare const MultiboardSetItemValue: (
  mbi: multiboarditem,
  val: string
) => void;
declare const MultiboardSetItemValueColor: (
  mbi: multiboarditem,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const MultiboardSetItemWidth: (
  mbi: multiboarditem,
  width: number
) => void;
declare const MultiboardSetItemIcon: (
  mbi: multiboarditem,
  iconFileName: string
) => void;
declare const MultiboardSuppressDisplay: (flag: boolean) => void;
declare const SetCameraPosition: (x: number, y: number) => void;
declare const SetCameraQuickPosition: (x: number, y: number) => void;
declare const SetCameraBounds: (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number
) => void;
declare const StopCamera: () => void;
declare const ResetToGameCamera: (duration: number) => void;
declare const PanCameraTo: (x: number, y: number) => void;
declare const PanCameraToTimed: (
  x: number,
  y: number,
  duration: number
) => void;
declare const PanCameraToWithZ: (
  x: number,
  y: number,
  zOffsetDest: number
) => void;
declare const PanCameraToTimedWithZ: (
  x: number,
  y: number,
  zOffsetDest: number,
  duration: number
) => void;
declare const SetCinematicCamera: (cameraModelFile: string) => void;
declare const SetCameraRotateMode: (
  x: number,
  y: number,
  radiansToSweep: number,
  duration: number
) => void;
declare const SetCameraField: (
  whichField: camerafield,
  value: number,
  duration: number
) => void;
declare const AdjustCameraField: (
  whichField: camerafield,
  offset: number,
  duration: number
) => void;
declare const SetCameraTargetController: (
  whichUnit: unit,
  xoffset: number,
  yoffset: number,
  inheritOrientation: boolean
) => void;
declare const SetCameraOrientController: (
  whichUnit: unit,
  xoffset: number,
  yoffset: number
) => void;
declare const CreateCameraSetup: () => camerasetup;
declare const CameraSetupSetField: (
  whichSetup: camerasetup,
  whichField: camerafield,
  value: number,
  duration: number
) => void;
declare const CameraSetupGetField: (
  whichSetup: camerasetup,
  whichField: camerafield
) => number;
declare const CameraSetupSetDestPosition: (
  whichSetup: camerasetup,
  x: number,
  y: number,
  duration: number
) => void;
declare const CameraSetupGetDestPositionLoc: (
  whichSetup: camerasetup
) => location;
declare const CameraSetupGetDestPositionX: (whichSetup: camerasetup) => number;
declare const CameraSetupGetDestPositionY: (whichSetup: camerasetup) => number;
declare const CameraSetupApply: (
  whichSetup: camerasetup,
  doPan: boolean,
  panTimed: boolean
) => void;
declare const CameraSetupApplyWithZ: (
  whichSetup: camerasetup,
  zDestOffset: number
) => void;
declare const CameraSetupApplyForceDuration: (
  whichSetup: camerasetup,
  doPan: boolean,
  forceDuration: number
) => void;
declare const CameraSetupApplyForceDurationWithZ: (
  whichSetup: camerasetup,
  zDestOffset: number,
  forceDuration: number
) => void;
declare const BlzCameraSetupSetLabel: (
  whichSetup: camerasetup,
  label: string
) => void;
declare const BlzCameraSetupGetLabel: (whichSetup: camerasetup) => string;
declare const CameraSetTargetNoise: (mag: number, velocity: number) => void;
declare const CameraSetSourceNoise: (mag: number, velocity: number) => void;
declare const CameraSetTargetNoiseEx: (
  mag: number,
  velocity: number,
  vertOnly: boolean
) => void;
declare const CameraSetSourceNoiseEx: (
  mag: number,
  velocity: number,
  vertOnly: boolean
) => void;
declare const CameraSetSmoothingFactor: (factor: number) => void;
declare const CameraSetFocalDistance: (distance: number) => void;
declare const CameraSetDepthOfFieldScale: (scale: number) => void;
declare const SetCineFilterTexture: (filename: string) => void;
declare const SetCineFilterBlendMode: (whichMode: blendmode) => void;
declare const SetCineFilterTexMapFlags: (whichFlags: texmapflags) => void;
declare const SetCineFilterStartUV: (
  minu: number,
  minv: number,
  maxu: number,
  maxv: number
) => void;
declare const SetCineFilterEndUV: (
  minu: number,
  minv: number,
  maxu: number,
  maxv: number
) => void;
declare const SetCineFilterStartColor: (
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const SetCineFilterEndColor: (
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const SetCineFilterDuration: (duration: number) => void;
declare const DisplayCineFilter: (flag: boolean) => void;
declare const IsCineFilterDisplayed: () => boolean;
declare const SetCinematicScene: (
  portraitUnitId: number,
  color: playercolor,
  speakerTitle: string,
  text: string,
  sceneDuration: number,
  voiceoverDuration: number
) => void;
declare const EndCinematicScene: () => void;
declare const ForceCinematicSubtitles: (flag: boolean) => void;
declare const SetCinematicAudio: (cinematicAudio: boolean) => void;
declare const GetCameraMargin: (whichMargin: number) => number;
declare const GetCameraBoundMinX: () => number;
declare const GetCameraBoundMinY: () => number;
declare const GetCameraBoundMaxX: () => number;
declare const GetCameraBoundMaxY: () => number;
declare const GetCameraField: (whichField: camerafield) => number;
declare const GetCameraTargetPositionX: () => number;
declare const GetCameraTargetPositionY: () => number;
declare const GetCameraTargetPositionZ: () => number;
declare const GetCameraTargetPositionLoc: () => location;
declare const GetCameraEyePositionX: () => number;
declare const GetCameraEyePositionY: () => number;
declare const GetCameraEyePositionZ: () => number;
declare const GetCameraEyePositionLoc: () => location;
declare const NewSoundEnvironment: (environmentName: string) => void;
declare const CreateSound: (
  fileName: string,
  looping: boolean,
  is3D: boolean,
  stopwhenoutofrange: boolean,
  fadeInRate: number,
  fadeOutRate: number,
  eaxSetting: string
) => sound;
declare const CreateSoundFilenameWithLabel: (
  fileName: string,
  looping: boolean,
  is3D: boolean,
  stopwhenoutofrange: boolean,
  fadeInRate: number,
  fadeOutRate: number,
  SLKEntryName: string
) => sound;
declare const CreateSoundFromLabel: (
  soundLabel: string,
  looping: boolean,
  is3D: boolean,
  stopwhenoutofrange: boolean,
  fadeInRate: number,
  fadeOutRate: number
) => sound;
declare const CreateMIDISound: (
  soundLabel: string,
  fadeInRate: number,
  fadeOutRate: number
) => sound;
declare const SetSoundParamsFromLabel: (
  soundHandle: sound,
  soundLabel: string
) => void;
declare const SetSoundDistanceCutoff: (
  soundHandle: sound,
  cutoff: number
) => void;
declare const SetSoundChannel: (soundHandle: sound, channel: number) => void;
declare const SetSoundVolume: (soundHandle: sound, volume: number) => void;
declare const SetSoundPitch: (soundHandle: sound, pitch: number) => void;
declare const SetSoundPlayPosition: (
  soundHandle: sound,
  millisecs: number
) => void;
declare const SetSoundDistances: (
  soundHandle: sound,
  minDist: number,
  maxDist: number
) => void;
declare const SetSoundConeAngles: (
  soundHandle: sound,
  inside: number,
  outside: number,
  outsideVolume: number
) => void;
declare const SetSoundConeOrientation: (
  soundHandle: sound,
  x: number,
  y: number,
  z: number
) => void;
declare const SetSoundPosition: (
  soundHandle: sound,
  x: number,
  y: number,
  z: number
) => void;
declare const SetSoundVelocity: (
  soundHandle: sound,
  x: number,
  y: number,
  z: number
) => void;
declare const AttachSoundToUnit: (soundHandle: sound, whichUnit: unit) => void;
declare const StartSound: (soundHandle: sound) => void;
declare const StopSound: (
  soundHandle: sound,
  killWhenDone: boolean,
  fadeOut: boolean
) => void;
declare const KillSoundWhenDone: (soundHandle: sound) => void;
declare const SetMapMusic: (
  musicName: string,
  random: boolean,
  index: number
) => void;
declare const ClearMapMusic: () => void;
declare const PlayMusic: (musicName: string) => void;
declare const PlayMusicEx: (
  musicName: string,
  frommsecs: number,
  fadeinmsecs: number
) => void;
declare const StopMusic: (fadeOut: boolean) => void;
declare const ResumeMusic: () => void;
declare const PlayThematicMusic: (musicFileName: string) => void;
declare const PlayThematicMusicEx: (
  musicFileName: string,
  frommsecs: number
) => void;
declare const EndThematicMusic: () => void;
declare const SetMusicVolume: (volume: number) => void;
declare const SetMusicPlayPosition: (millisecs: number) => void;
declare const SetThematicMusicVolume: (volume: number) => void;
declare const SetThematicMusicPlayPosition: (millisecs: number) => void;
declare const SetSoundDuration: (soundHandle: sound, duration: number) => void;
declare const GetSoundDuration: (soundHandle: sound) => number;
declare const GetSoundFileDuration: (musicFileName: string) => number;
declare const VolumeGroupSetVolume: (
  vgroup: volumegroup,
  scale: number
) => void;
declare const VolumeGroupReset: () => void;
declare const GetSoundIsPlaying: (soundHandle: sound) => boolean;
declare const GetSoundIsLoading: (soundHandle: sound) => boolean;
declare const RegisterStackedSound: (
  soundHandle: sound,
  byPosition: boolean,
  rectwidth: number,
  rectheight: number
) => void;
declare const UnregisterStackedSound: (
  soundHandle: sound,
  byPosition: boolean,
  rectwidth: number,
  rectheight: number
) => void;
declare const SetSoundFacialAnimationLabel: (
  soundHandle: sound,
  animationLabel: string
) => boolean;
declare const SetSoundFacialAnimationGroupLabel: (
  soundHandle: sound,
  groupLabel: string
) => boolean;
declare const SetSoundFacialAnimationSetFilepath: (
  soundHandle: sound,
  animationSetFilepath: string
) => boolean;
declare const SetDialogueSpeakerNameKey: (
  soundHandle: sound,
  speakerName: string
) => boolean;
declare const GetDialogueSpeakerNameKey: (soundHandle: sound) => string;
declare const SetDialogueTextKey: (
  soundHandle: sound,
  dialogueText: string
) => boolean;
declare const GetDialogueTextKey: (soundHandle: sound) => string;
declare const AddWeatherEffect: (
  where: rect,
  effectID: number
) => weathereffect;
declare const RemoveWeatherEffect: (whichEffect: weathereffect) => void;
declare const EnableWeatherEffect: (
  whichEffect: weathereffect,
  enable: boolean
) => void;
declare const TerrainDeformCrater: (
  x: number,
  y: number,
  radius: number,
  depth: number,
  duration: number,
  permanent: boolean
) => terraindeformation;
declare const TerrainDeformRipple: (
  x: number,
  y: number,
  radius: number,
  depth: number,
  duration: number,
  count: number,
  spaceWaves: number,
  timeWaves: number,
  radiusStartPct: number,
  limitNeg: boolean
) => terraindeformation;
declare const TerrainDeformWave: (
  x: number,
  y: number,
  dirX: number,
  dirY: number,
  distance: number,
  speed: number,
  radius: number,
  depth: number,
  trailTime: number,
  count: number
) => terraindeformation;
declare const TerrainDeformRandom: (
  x: number,
  y: number,
  radius: number,
  minDelta: number,
  maxDelta: number,
  duration: number,
  updateInterval: number
) => terraindeformation;
declare const TerrainDeformStop: (
  deformation: terraindeformation,
  duration: number
) => void;
declare const TerrainDeformStopAll: () => void;
declare const AddSpecialEffect: (
  modelName: string,
  x: number,
  y: number
) => effect;
declare const AddSpecialEffectLoc: (
  modelName: string,
  where: location
) => effect;
declare const AddSpecialEffectTarget: (
  modelName: string,
  targetWidget: widget,
  attachPointName: string
) => effect;
declare const DestroyEffect: (whichEffect: effect) => void;
declare const AddSpellEffect: (
  abilityString: string,
  t: effecttype,
  x: number,
  y: number
) => effect;
declare const AddSpellEffectLoc: (
  abilityString: string,
  t: effecttype,
  where: location
) => effect;
declare const AddSpellEffectById: (
  abilityId: number,
  t: effecttype,
  x: number,
  y: number
) => effect;
declare const AddSpellEffectByIdLoc: (
  abilityId: number,
  t: effecttype,
  where: location
) => effect;
declare const AddSpellEffectTarget: (
  modelName: string,
  t: effecttype,
  targetWidget: widget,
  attachPoint: string
) => effect;
declare const AddSpellEffectTargetById: (
  abilityId: number,
  t: effecttype,
  targetWidget: widget,
  attachPoint: string
) => effect;
declare const AddLightning: (
  codeName: string,
  checkVisibility: boolean,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => lightning;
declare const AddLightningEx: (
  codeName: string,
  checkVisibility: boolean,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
) => lightning;
declare const DestroyLightning: (whichBolt: lightning) => boolean;
declare const MoveLightning: (
  whichBolt: lightning,
  checkVisibility: boolean,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => boolean;
declare const MoveLightningEx: (
  whichBolt: lightning,
  checkVisibility: boolean,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
) => boolean;
declare const GetLightningColorA: (whichBolt: lightning) => number;
declare const GetLightningColorR: (whichBolt: lightning) => number;
declare const GetLightningColorG: (whichBolt: lightning) => number;
declare const GetLightningColorB: (whichBolt: lightning) => number;
declare const SetLightningColor: (
  whichBolt: lightning,
  r: number,
  g: number,
  b: number,
  a: number
) => boolean;
declare const GetAbilityEffect: (
  abilityString: string,
  t: effecttype,
  index: number
) => string;
declare const GetAbilityEffectById: (
  abilityId: number,
  t: effecttype,
  index: number
) => string;
declare const GetAbilitySound: (abilityString: string, t: soundtype) => string;
declare const GetAbilitySoundById: (abilityId: number, t: soundtype) => string;
declare const GetTerrainCliffLevel: (x: number, y: number) => number;
declare const SetWaterBaseColor: (
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const SetWaterDeforms: (val: boolean) => void;
declare const GetTerrainType: (x: number, y: number) => number;
declare const GetTerrainVariance: (x: number, y: number) => number;
declare const SetTerrainType: (
  x: number,
  y: number,
  terrainType: number,
  variation: number,
  area: number,
  shape: number
) => void;
declare const IsTerrainPathable: (
  x: number,
  y: number,
  t: pathingtype
) => boolean;
declare const SetTerrainPathable: (
  x: number,
  y: number,
  t: pathingtype,
  flag: boolean
) => void;
declare const CreateImage: (
  file: string,
  sizeX: number,
  sizeY: number,
  sizeZ: number,
  posX: number,
  posY: number,
  posZ: number,
  originX: number,
  originY: number,
  originZ: number,
  imageType: number
) => image;
declare const DestroyImage: (whichImage: image) => void;
declare const ShowImage: (whichImage: image, flag: boolean) => void;
declare const SetImageConstantHeight: (
  whichImage: image,
  flag: boolean,
  height: number
) => void;
declare const SetImagePosition: (
  whichImage: image,
  x: number,
  y: number,
  z: number
) => void;
declare const SetImageColor: (
  whichImage: image,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const SetImageRender: (whichImage: image, flag: boolean) => void;
declare const SetImageRenderAlways: (whichImage: image, flag: boolean) => void;
declare const SetImageAboveWater: (
  whichImage: image,
  flag: boolean,
  useWaterAlpha: boolean
) => void;
declare const SetImageType: (whichImage: image, imageType: number) => void;
declare const CreateUbersplat: (
  x: number,
  y: number,
  name: string,
  red: number,
  green: number,
  blue: number,
  alpha: number,
  forcePaused: boolean,
  noBirthTime: boolean
) => ubersplat;
declare const DestroyUbersplat: (whichSplat: ubersplat) => void;
declare const ResetUbersplat: (whichSplat: ubersplat) => void;
declare const FinishUbersplat: (whichSplat: ubersplat) => void;
declare const ShowUbersplat: (whichSplat: ubersplat, flag: boolean) => void;
declare const SetUbersplatRender: (
  whichSplat: ubersplat,
  flag: boolean
) => void;
declare const SetUbersplatRenderAlways: (
  whichSplat: ubersplat,
  flag: boolean
) => void;
declare const SetBlight: (
  whichPlayer: player,
  x: number,
  y: number,
  radius: number,
  addBlight: boolean
) => void;
declare const SetBlightRect: (
  whichPlayer: player,
  r: rect,
  addBlight: boolean
) => void;
declare const SetBlightPoint: (
  whichPlayer: player,
  x: number,
  y: number,
  addBlight: boolean
) => void;
declare const SetBlightLoc: (
  whichPlayer: player,
  whichLocation: location,
  radius: number,
  addBlight: boolean
) => void;
declare const CreateBlightedGoldmine: (
  id: player,
  x: number,
  y: number,
  face: number
) => unit;
declare const IsPointBlighted: (x: number, y: number) => boolean;
declare const SetDoodadAnimation: (
  x: number,
  y: number,
  radius: number,
  doodadID: number,
  nearestOnly: boolean,
  animName: string,
  animRandom: boolean
) => void;
declare const SetDoodadAnimationRect: (
  r: rect,
  doodadID: number,
  animName: string,
  animRandom: boolean
) => void;
declare const StartMeleeAI: (num: player, script: string) => void;
declare const StartCampaignAI: (num: player, script: string) => void;
declare const CommandAI: (num: player, command: number, data: number) => void;
declare const PauseCompAI: (p: player, pause: boolean) => void;
declare const GetAIDifficulty: (num: player) => aidifficulty;
declare const RemoveGuardPosition: (hUnit: unit) => void;
declare const RecycleGuardPosition: (hUnit: unit) => void;
declare const RemoveAllGuardPositions: (num: player) => void;
declare const Cheat: (cheatStr: string) => void;
declare const IsNoVictoryCheat: () => boolean;
declare const IsNoDefeatCheat: () => boolean;
declare const Preload: (filename: string) => void;
declare const PreloadEnd: (timeout: number) => void;
declare const PreloadStart: () => void;
declare const PreloadRefresh: () => void;
declare const PreloadEndEx: () => void;
declare const PreloadGenClear: () => void;
declare const PreloadGenStart: () => void;
declare const PreloadGenEnd: (filename: string) => void;
declare const Preloader: (filename: string) => void;
declare const BlzHideCinematicPanels: (enable: boolean) => void;
declare const AutomationSetTestType: (testType: string) => void;
declare const AutomationTestStart: (testName: string) => void;
declare const AutomationTestEnd: () => void;
declare const AutomationTestingFinished: () => void;
declare const BlzGetTriggerPlayerMouseX: () => number;
declare const BlzGetTriggerPlayerMouseY: () => number;
declare const BlzGetTriggerPlayerMousePosition: () => location;
declare const BlzGetTriggerPlayerMouseButton: () => mousebuttontype;
declare const BlzSetAbilityTooltip: (
  abilCode: number,
  tooltip: string,
  level: number
) => void;
declare const BlzSetAbilityActivatedTooltip: (
  abilCode: number,
  tooltip: string,
  level: number
) => void;
declare const BlzSetAbilityExtendedTooltip: (
  abilCode: number,
  extendedTooltip: string,
  level: number
) => void;
declare const BlzSetAbilityActivatedExtendedTooltip: (
  abilCode: number,
  extendedTooltip: string,
  level: number
) => void;
declare const BlzSetAbilityResearchTooltip: (
  abilCode: number,
  researchTooltip: string,
  level: number
) => void;
declare const BlzSetAbilityResearchExtendedTooltip: (
  abilCode: number,
  researchExtendedTooltip: string,
  level: number
) => void;
declare const BlzGetAbilityTooltip: (abilCode: number, level: number) => string;
declare const BlzGetAbilityActivatedTooltip: (
  abilCode: number,
  level: number
) => string;
declare const BlzGetAbilityExtendedTooltip: (
  abilCode: number,
  level: number
) => string;
declare const BlzGetAbilityActivatedExtendedTooltip: (
  abilCode: number,
  level: number
) => string;
declare const BlzGetAbilityResearchTooltip: (
  abilCode: number,
  level: number
) => string;
declare const BlzGetAbilityResearchExtendedTooltip: (
  abilCode: number,
  level: number
) => string;
declare const BlzSetAbilityIcon: (abilCode: number, iconPath: string) => void;
declare const BlzGetAbilityIcon: (abilCode: number) => string;
declare const BlzSetAbilityActivatedIcon: (
  abilCode: number,
  iconPath: string
) => void;
declare const BlzGetAbilityActivatedIcon: (abilCode: number) => string;
declare const BlzGetAbilityPosX: (abilCode: number) => number;
declare const BlzGetAbilityPosY: (abilCode: number) => number;
declare const BlzSetAbilityPosX: (abilCode: number, x: number) => void;
declare const BlzSetAbilityPosY: (abilCode: number, y: number) => void;
declare const BlzGetAbilityActivatedPosX: (abilCode: number) => number;
declare const BlzGetAbilityActivatedPosY: (abilCode: number) => number;
declare const BlzSetAbilityActivatedPosX: (abilCode: number, x: number) => void;
declare const BlzSetAbilityActivatedPosY: (abilCode: number, y: number) => void;
declare const BlzGetUnitMaxHP: (whichUnit: unit) => number;
declare const BlzSetUnitMaxHP: (whichUnit: unit, hp: number) => void;
declare const BlzGetUnitMaxMana: (whichUnit: unit) => number;
declare const BlzSetUnitMaxMana: (whichUnit: unit, mana: number) => void;
declare const BlzSetItemName: (whichItem: item, name: string) => void;
declare const BlzSetItemDescription: (
  whichItem: item,
  description: string
) => void;
declare const BlzGetItemDescription: (whichItem: item) => string;
declare const BlzSetItemTooltip: (whichItem: item, tooltip: string) => void;
declare const BlzGetItemTooltip: (whichItem: item) => string;
declare const BlzSetItemExtendedTooltip: (
  whichItem: item,
  extendedTooltip: string
) => void;
declare const BlzGetItemExtendedTooltip: (whichItem: item) => string;
declare const BlzSetItemIconPath: (whichItem: item, iconPath: string) => void;
declare const BlzGetItemIconPath: (whichItem: item) => string;
declare const BlzSetUnitName: (whichUnit: unit, name: string) => void;
declare const BlzSetHeroProperName: (
  whichUnit: unit,
  heroProperName: string
) => void;
declare const BlzGetUnitBaseDamage: (
  whichUnit: unit,
  weaponIndex: number
) => number;
declare const BlzSetUnitBaseDamage: (
  whichUnit: unit,
  baseDamage: number,
  weaponIndex: number
) => void;
declare const BlzGetUnitDiceNumber: (
  whichUnit: unit,
  weaponIndex: number
) => number;
declare const BlzSetUnitDiceNumber: (
  whichUnit: unit,
  diceNumber: number,
  weaponIndex: number
) => void;
declare const BlzGetUnitDiceSides: (
  whichUnit: unit,
  weaponIndex: number
) => number;
declare const BlzSetUnitDiceSides: (
  whichUnit: unit,
  diceSides: number,
  weaponIndex: number
) => void;
declare const BlzGetUnitAttackCooldown: (
  whichUnit: unit,
  weaponIndex: number
) => number;
declare const BlzSetUnitAttackCooldown: (
  whichUnit: unit,
  cooldown: number,
  weaponIndex: number
) => void;
declare const BlzSetSpecialEffectColorByPlayer: (
  whichEffect: effect,
  whichPlayer: player
) => void;
declare const BlzSetSpecialEffectColor: (
  whichEffect: effect,
  r: number,
  g: number,
  b: number
) => void;
declare const BlzSetSpecialEffectAlpha: (
  whichEffect: effect,
  alpha: number
) => void;
declare const BlzSetSpecialEffectScale: (
  whichEffect: effect,
  scale: number
) => void;
declare const BlzSetSpecialEffectPosition: (
  whichEffect: effect,
  x: number,
  y: number,
  z: number
) => void;
declare const BlzSetSpecialEffectHeight: (
  whichEffect: effect,
  height: number
) => void;
declare const BlzSetSpecialEffectTimeScale: (
  whichEffect: effect,
  timeScale: number
) => void;
declare const BlzSetSpecialEffectTime: (
  whichEffect: effect,
  time: number
) => void;
declare const BlzSetSpecialEffectOrientation: (
  whichEffect: effect,
  yaw: number,
  pitch: number,
  roll: number
) => void;
declare const BlzSetSpecialEffectYaw: (
  whichEffect: effect,
  yaw: number
) => void;
declare const BlzSetSpecialEffectPitch: (
  whichEffect: effect,
  pitch: number
) => void;
declare const BlzSetSpecialEffectRoll: (
  whichEffect: effect,
  roll: number
) => void;
declare const BlzSetSpecialEffectX: (whichEffect: effect, x: number) => void;
declare const BlzSetSpecialEffectY: (whichEffect: effect, y: number) => void;
declare const BlzSetSpecialEffectZ: (whichEffect: effect, z: number) => void;
declare const BlzSetSpecialEffectPositionLoc: (
  whichEffect: effect,
  loc: location
) => void;
declare const BlzGetLocalSpecialEffectX: (whichEffect: effect) => number;
declare const BlzGetLocalSpecialEffectY: (whichEffect: effect) => number;
declare const BlzGetLocalSpecialEffectZ: (whichEffect: effect) => number;
declare const BlzSpecialEffectClearSubAnimations: (whichEffect: effect) => void;
declare const BlzSpecialEffectRemoveSubAnimation: (
  whichEffect: effect,
  whichSubAnim: subanimtype
) => void;
declare const BlzSpecialEffectAddSubAnimation: (
  whichEffect: effect,
  whichSubAnim: subanimtype
) => void;
declare const BlzPlaySpecialEffect: (
  whichEffect: effect,
  whichAnim: animtype
) => void;
declare const BlzPlaySpecialEffectWithTimeScale: (
  whichEffect: effect,
  whichAnim: animtype,
  timeScale: number
) => void;
declare const BlzGetAnimName: (whichAnim: animtype) => string;
declare const BlzGetUnitArmor: (whichUnit: unit) => number;
declare const BlzSetUnitArmor: (whichUnit: unit, armorAmount: number) => void;
declare const BlzUnitHideAbility: (
  whichUnit: unit,
  abilId: number,
  flag: boolean
) => void;
declare const BlzUnitDisableAbility: (
  whichUnit: unit,
  abilId: number,
  flag: boolean,
  hideUI: boolean
) => void;
declare const BlzUnitCancelTimedLife: (whichUnit: unit) => void;
declare const BlzIsUnitSelectable: (whichUnit: unit) => boolean;
declare const BlzIsUnitInvulnerable: (whichUnit: unit) => boolean;
declare const BlzUnitInterruptAttack: (whichUnit: unit) => void;
declare const BlzGetUnitCollisionSize: (whichUnit: unit) => number;
declare const BlzGetAbilityManaCost: (abilId: number, level: number) => number;
declare const BlzGetAbilityCooldown: (abilId: number, level: number) => number;
declare const BlzSetUnitAbilityCooldown: (
  whichUnit: unit,
  abilId: number,
  level: number,
  cooldown: number
) => void;
declare const BlzGetUnitAbilityCooldown: (
  whichUnit: unit,
  abilId: number,
  level: number
) => number;
declare const BlzGetUnitAbilityCooldownRemaining: (
  whichUnit: unit,
  abilId: number
) => number;
declare const BlzEndUnitAbilityCooldown: (
  whichUnit: unit,
  abilCode: number
) => void;
declare const BlzStartUnitAbilityCooldown: (
  whichUnit: unit,
  abilCode: number,
  cooldown: number
) => void;
declare const BlzGetUnitAbilityManaCost: (
  whichUnit: unit,
  abilId: number,
  level: number
) => number;
declare const BlzSetUnitAbilityManaCost: (
  whichUnit: unit,
  abilId: number,
  level: number,
  manaCost: number
) => void;
declare const BlzGetLocalUnitZ: (whichUnit: unit) => number;
declare const BlzDecPlayerTechResearched: (
  whichPlayer: player,
  techid: number,
  levels: number
) => void;
declare const BlzSetEventDamage: (damage: number) => void;
declare const BlzGetEventDamageTarget: () => unit;
declare const BlzGetEventAttackType: () => attacktype;
declare const BlzGetEventDamageType: () => damagetype;
declare const BlzGetEventWeaponType: () => weapontype;
declare const BlzSetEventAttackType: (attackType: attacktype) => boolean;
declare const BlzSetEventDamageType: (damageType: damagetype) => boolean;
declare const BlzSetEventWeaponType: (weaponType: weapontype) => boolean;
declare const BlzGetEventIsAttack: () => boolean;
declare const RequestExtraIntegerData: (
  dataType: number,
  whichPlayer: player,
  param1: string,
  param2: string,
  param3: boolean,
  param4: number,
  param5: number,
  param6: number
) => number;
declare const RequestExtraBooleanData: (
  dataType: number,
  whichPlayer: player,
  param1: string,
  param2: string,
  param3: boolean,
  param4: number,
  param5: number,
  param6: number
) => boolean;
declare const RequestExtraStringData: (
  dataType: number,
  whichPlayer: player,
  param1: string,
  param2: string,
  param3: boolean,
  param4: number,
  param5: number,
  param6: number
) => string;
declare const RequestExtraRealData: (
  dataType: number,
  whichPlayer: player,
  param1: string,
  param2: string,
  param3: boolean,
  param4: number,
  param5: number,
  param6: number
) => number;
declare const BlzGetUnitZ: (whichUnit: unit) => number;
declare const BlzEnableSelections: (
  enableSelection: boolean,
  enableSelectionCircle: boolean
) => void;
declare const BlzIsSelectionEnabled: () => boolean;
declare const BlzIsSelectionCircleEnabled: () => boolean;
declare const BlzCameraSetupApplyForceDurationSmooth: (
  whichSetup: camerasetup,
  doPan: boolean,
  forcedDuration: number,
  easeInDuration: number,
  easeOutDuration: number,
  smoothFactor: number
) => void;
declare const BlzEnableTargetIndicator: (enable: boolean) => void;
declare const BlzIsTargetIndicatorEnabled: () => boolean;
declare const BlzShowTerrain: (show: boolean) => void;
declare const BlzShowSkyBox: (show: boolean) => void;
declare const BlzStartRecording: (fps: number) => void;
declare const BlzEndRecording: () => void;
declare const BlzShowUnitTeamGlow: (whichUnit: unit, show: boolean) => void;
declare const BlzGetOriginFrame: (
  frameType: originframetype,
  index: number
) => framehandle;
declare const BlzEnableUIAutoPosition: (enable: boolean) => void;
declare const BlzHideOriginFrames: (enable: boolean) => void;
declare const BlzConvertColor: (
  a: number,
  r: number,
  g: number,
  b: number
) => number;
declare const BlzLoadTOCFile: (TOCFile: string) => boolean;
declare const BlzCreateFrame: (
  name: string,
  owner: framehandle,
  priority: number,
  createContext: number
) => framehandle;
declare const BlzCreateSimpleFrame: (
  name: string,
  owner: framehandle,
  createContext: number
) => framehandle;
declare const BlzCreateFrameByType: (
  typeName: string,
  name: string,
  owner: framehandle,
  inherits: string,
  createContext: number
) => framehandle;
declare const BlzDestroyFrame: (frame: framehandle) => void;
declare const BlzFrameSetPoint: (
  frame: framehandle,
  point: framepointtype,
  relative: framehandle,
  relativePoint: framepointtype,
  x: number,
  y: number
) => void;
declare const BlzFrameSetAbsPoint: (
  frame: framehandle,
  point: framepointtype,
  x: number,
  y: number
) => void;
declare const BlzFrameClearAllPoints: (frame: framehandle) => void;
declare const BlzFrameSetAllPoints: (
  frame: framehandle,
  relative: framehandle
) => void;
declare const BlzFrameSetVisible: (
  frame: framehandle,
  visible: boolean
) => void;
declare const BlzFrameIsVisible: (frame: framehandle) => boolean;
declare const BlzGetFrameByName: (
  name: string,
  createContext: number
) => framehandle;
declare const BlzFrameGetName: (frame: framehandle) => string;
declare const BlzFrameClick: (frame: framehandle) => void;
declare const BlzFrameSetText: (frame: framehandle, text: string) => void;
declare const BlzFrameGetText: (frame: framehandle) => string;
declare const BlzFrameAddText: (frame: framehandle, text: string) => void;
declare const BlzFrameSetTextSizeLimit: (
  frame: framehandle,
  size: number
) => void;
declare const BlzFrameGetTextSizeLimit: (frame: framehandle) => number;
declare const BlzFrameSetTextColor: (frame: framehandle, color: number) => void;
declare const BlzFrameSetFocus: (frame: framehandle, flag: boolean) => void;
declare const BlzFrameSetModel: (
  frame: framehandle,
  modelFile: string,
  cameraIndex: number
) => void;
declare const BlzFrameSetEnable: (frame: framehandle, enabled: boolean) => void;
declare const BlzFrameGetEnable: (frame: framehandle) => boolean;
declare const BlzFrameSetAlpha: (frame: framehandle, alpha: number) => void;
declare const BlzFrameGetAlpha: (frame: framehandle) => number;
declare const BlzFrameSetSpriteAnimate: (
  frame: framehandle,
  primaryProp: number,
  flags: number
) => void;
declare const BlzFrameSetTexture: (
  frame: framehandle,
  texFile: string,
  flag: number,
  blend: boolean
) => void;
declare const BlzFrameSetScale: (frame: framehandle, scale: number) => void;
declare const BlzFrameSetTooltip: (
  frame: framehandle,
  tooltip: framehandle
) => void;
declare const BlzFrameCageMouse: (frame: framehandle, enable: boolean) => void;
declare const BlzFrameSetValue: (frame: framehandle, value: number) => void;
declare const BlzFrameGetValue: (frame: framehandle) => number;
declare const BlzFrameSetMinMaxValue: (
  frame: framehandle,
  minValue: number,
  maxValue: number
) => void;
declare const BlzFrameSetStepSize: (
  frame: framehandle,
  stepSize: number
) => void;
declare const BlzFrameSetSize: (
  frame: framehandle,
  width: number,
  height: number
) => void;
declare const BlzFrameSetVertexColor: (
  frame: framehandle,
  color: number
) => void;
declare const BlzFrameSetLevel: (frame: framehandle, level: number) => void;
declare const BlzFrameSetParent: (
  frame: framehandle,
  parent: framehandle
) => void;
declare const BlzFrameGetParent: (frame: framehandle) => framehandle;
declare const BlzFrameGetHeight: (frame: framehandle) => number;
declare const BlzFrameGetWidth: (frame: framehandle) => number;
declare const BlzFrameSetFont: (
  frame: framehandle,
  fileName: string,
  height: number,
  flags: number
) => void;
declare const BlzFrameSetTextAlignment: (
  frame: framehandle,
  vert: textaligntype,
  horz: textaligntype
) => void;
declare const BlzFrameGetChildrenCount: (frame: framehandle) => number;
declare const BlzFrameGetChild: (
  frame: framehandle,
  index: number
) => framehandle;
declare const BlzTriggerRegisterFrameEvent: (
  whichTrigger: trigger,
  frame: framehandle,
  eventId: frameeventtype
) => event;
declare const BlzGetTriggerFrame: () => framehandle;
declare const BlzGetTriggerFrameEvent: () => frameeventtype;
declare const BlzGetTriggerFrameValue: () => number;
declare const BlzGetTriggerFrameText: () => string;
declare const BlzTriggerRegisterPlayerSyncEvent: (
  whichTrigger: trigger,
  whichPlayer: player,
  prefix: string,
  fromServer: boolean
) => event;
declare const BlzSendSyncData: (prefix: string, data: string) => boolean;
declare const BlzGetTriggerSyncPrefix: () => string;
declare const BlzGetTriggerSyncData: () => string;
declare const BlzTriggerRegisterPlayerKeyEvent: (
  whichTrigger: trigger,
  whichPlayer: player,
  key: oskeytype,
  metaKey: number,
  keyDown: boolean
) => event;
declare const BlzGetTriggerPlayerKey: () => oskeytype;
declare const BlzGetTriggerPlayerMetaKey: () => number;
declare const BlzGetTriggerPlayerIsKeyDown: () => boolean;
declare const BlzEnableCursor: (enable: boolean) => void;
declare const BlzSetMousePos: (x: number, y: number) => void;
declare const BlzGetLocalClientWidth: () => number;
declare const BlzGetLocalClientHeight: () => number;
declare const BlzIsLocalClientActive: () => boolean;
declare const BlzGetMouseFocusUnit: () => unit;
declare const BlzChangeMinimapTerrainTex: (texFile: string) => boolean;
declare const BlzGetLocale: () => string;
declare const BlzGetSpecialEffectScale: (whichEffect: effect) => number;
declare const BlzSetSpecialEffectMatrixScale: (
  whichEffect: effect,
  x: number,
  y: number,
  z: number
) => void;
declare const BlzResetSpecialEffectMatrix: (whichEffect: effect) => void;
declare const BlzGetUnitAbility: (whichUnit: unit, abilId: number) => ability;
declare const BlzGetUnitAbilityByIndex: (
  whichUnit: unit,
  index: number
) => ability;
declare const BlzDisplayChatMessage: (
  whichPlayer: player,
  recipient: number,
  message: string
) => void;
declare const BlzPauseUnitEx: (whichUnit: unit, flag: boolean) => void;
declare const BlzSetUnitFacingEx: (
  whichUnit: unit,
  facingAngle: number
) => void;
declare const CreateCommandButtonEffect: (
  abilityId: number,
  order: string
) => commandbuttoneffect;
declare const CreateUpgradeCommandButtonEffect: (
  whichUprgade: number
) => commandbuttoneffect;
declare const CreateLearnCommandButtonEffect: (
  abilityId: number
) => commandbuttoneffect;
declare const DestroyCommandButtonEffect: (
  whichEffect: commandbuttoneffect
) => void;
declare const BlzBitOr: (x: number, y: number) => number;
declare const BlzBitAnd: (x: number, y: number) => number;
declare const BlzBitXor: (x: number, y: number) => number;
declare const BlzGetAbilityBooleanField: (
  whichAbility: ability,
  whichField: abilitybooleanfield
) => boolean;
declare const BlzGetAbilityIntegerField: (
  whichAbility: ability,
  whichField: abilityintegerfield
) => number;
declare const BlzGetAbilityRealField: (
  whichAbility: ability,
  whichField: abilityrealfield
) => number;
declare const BlzGetAbilityStringField: (
  whichAbility: ability,
  whichField: abilitystringfield
) => string;
declare const BlzGetAbilityBooleanLevelField: (
  whichAbility: ability,
  whichField: abilitybooleanlevelfield,
  level: number
) => boolean;
declare const BlzGetAbilityIntegerLevelField: (
  whichAbility: ability,
  whichField: abilityintegerlevelfield,
  level: number
) => number;
declare const BlzGetAbilityRealLevelField: (
  whichAbility: ability,
  whichField: abilityreallevelfield,
  level: number
) => number;
declare const BlzGetAbilityStringLevelField: (
  whichAbility: ability,
  whichField: abilitystringlevelfield,
  level: number
) => string;
declare const BlzGetAbilityBooleanLevelArrayField: (
  whichAbility: ability,
  whichField: abilitybooleanlevelarrayfield,
  level: number,
  index: number
) => boolean;
declare const BlzGetAbilityIntegerLevelArrayField: (
  whichAbility: ability,
  whichField: abilityintegerlevelarrayfield,
  level: number,
  index: number
) => number;
declare const BlzGetAbilityRealLevelArrayField: (
  whichAbility: ability,
  whichField: abilityreallevelarrayfield,
  level: number,
  index: number
) => number;
declare const BlzGetAbilityStringLevelArrayField: (
  whichAbility: ability,
  whichField: abilitystringlevelarrayfield,
  level: number,
  index: number
) => string;
declare const BlzSetAbilityBooleanField: (
  whichAbility: ability,
  whichField: abilitybooleanfield,
  value: boolean
) => boolean;
declare const BlzSetAbilityIntegerField: (
  whichAbility: ability,
  whichField: abilityintegerfield,
  value: number
) => boolean;
declare const BlzSetAbilityRealField: (
  whichAbility: ability,
  whichField: abilityrealfield,
  value: number
) => boolean;
declare const BlzSetAbilityStringField: (
  whichAbility: ability,
  whichField: abilitystringfield,
  value: string
) => boolean;
declare const BlzSetAbilityBooleanLevelField: (
  whichAbility: ability,
  whichField: abilitybooleanlevelfield,
  level: number,
  value: boolean
) => boolean;
declare const BlzSetAbilityIntegerLevelField: (
  whichAbility: ability,
  whichField: abilityintegerlevelfield,
  level: number,
  value: number
) => boolean;
declare const BlzSetAbilityRealLevelField: (
  whichAbility: ability,
  whichField: abilityreallevelfield,
  level: number,
  value: number
) => boolean;
declare const BlzSetAbilityStringLevelField: (
  whichAbility: ability,
  whichField: abilitystringlevelfield,
  level: number,
  value: string
) => boolean;
declare const BlzSetAbilityBooleanLevelArrayField: (
  whichAbility: ability,
  whichField: abilitybooleanlevelarrayfield,
  level: number,
  index: number,
  value: boolean
) => boolean;
declare const BlzSetAbilityIntegerLevelArrayField: (
  whichAbility: ability,
  whichField: abilityintegerlevelarrayfield,
  level: number,
  index: number,
  value: number
) => boolean;
declare const BlzSetAbilityRealLevelArrayField: (
  whichAbility: ability,
  whichField: abilityreallevelarrayfield,
  level: number,
  index: number,
  value: number
) => boolean;
declare const BlzSetAbilityStringLevelArrayField: (
  whichAbility: ability,
  whichField: abilitystringlevelarrayfield,
  level: number,
  index: number,
  value: string
) => boolean;
declare const BlzAddAbilityBooleanLevelArrayField: (
  whichAbility: ability,
  whichField: abilitybooleanlevelarrayfield,
  level: number,
  value: boolean
) => boolean;
declare const BlzAddAbilityIntegerLevelArrayField: (
  whichAbility: ability,
  whichField: abilityintegerlevelarrayfield,
  level: number,
  value: number
) => boolean;
declare const BlzAddAbilityRealLevelArrayField: (
  whichAbility: ability,
  whichField: abilityreallevelarrayfield,
  level: number,
  value: number
) => boolean;
declare const BlzAddAbilityStringLevelArrayField: (
  whichAbility: ability,
  whichField: abilitystringlevelarrayfield,
  level: number,
  value: string
) => boolean;
declare const BlzRemoveAbilityBooleanLevelArrayField: (
  whichAbility: ability,
  whichField: abilitybooleanlevelarrayfield,
  level: number,
  value: boolean
) => boolean;
declare const BlzRemoveAbilityIntegerLevelArrayField: (
  whichAbility: ability,
  whichField: abilityintegerlevelarrayfield,
  level: number,
  value: number
) => boolean;
declare const BlzRemoveAbilityRealLevelArrayField: (
  whichAbility: ability,
  whichField: abilityreallevelarrayfield,
  level: number,
  value: number
) => boolean;
declare const BlzRemoveAbilityStringLevelArrayField: (
  whichAbility: ability,
  whichField: abilitystringlevelarrayfield,
  level: number,
  value: string
) => boolean;
declare const BlzGetItemAbilityByIndex: (
  whichItem: item,
  index: number
) => ability;
declare const BlzGetItemAbility: (whichItem: item, abilCode: number) => ability;
declare const BlzItemAddAbility: (whichItem: item, abilCode: number) => boolean;
declare const BlzGetItemBooleanField: (
  whichItem: item,
  whichField: itembooleanfield
) => boolean;
declare const BlzGetItemIntegerField: (
  whichItem: item,
  whichField: itemintegerfield
) => number;
declare const BlzGetItemRealField: (
  whichItem: item,
  whichField: itemrealfield
) => number;
declare const BlzGetItemStringField: (
  whichItem: item,
  whichField: itemstringfield
) => string;
declare const BlzSetItemBooleanField: (
  whichItem: item,
  whichField: itembooleanfield,
  value: boolean
) => boolean;
declare const BlzSetItemIntegerField: (
  whichItem: item,
  whichField: itemintegerfield,
  value: number
) => boolean;
declare const BlzSetItemRealField: (
  whichItem: item,
  whichField: itemrealfield,
  value: number
) => boolean;
declare const BlzSetItemStringField: (
  whichItem: item,
  whichField: itemstringfield,
  value: string
) => boolean;
declare const BlzItemRemoveAbility: (
  whichItem: item,
  abilCode: number
) => boolean;
declare const BlzGetUnitBooleanField: (
  whichUnit: unit,
  whichField: unitbooleanfield
) => boolean;
declare const BlzGetUnitIntegerField: (
  whichUnit: unit,
  whichField: unitintegerfield
) => number;
declare const BlzGetUnitRealField: (
  whichUnit: unit,
  whichField: unitrealfield
) => number;
declare const BlzGetUnitStringField: (
  whichUnit: unit,
  whichField: unitstringfield
) => string;
declare const BlzSetUnitBooleanField: (
  whichUnit: unit,
  whichField: unitbooleanfield,
  value: boolean
) => boolean;
declare const BlzSetUnitIntegerField: (
  whichUnit: unit,
  whichField: unitintegerfield,
  value: number
) => boolean;
declare const BlzSetUnitRealField: (
  whichUnit: unit,
  whichField: unitrealfield,
  value: number
) => boolean;
declare const BlzSetUnitStringField: (
  whichUnit: unit,
  whichField: unitstringfield,
  value: string
) => boolean;
declare const BlzGetUnitWeaponBooleanField: (
  whichUnit: unit,
  whichField: unitweaponbooleanfield,
  index: number
) => boolean;
declare const BlzGetUnitWeaponIntegerField: (
  whichUnit: unit,
  whichField: unitweaponintegerfield,
  index: number
) => number;
declare const BlzGetUnitWeaponRealField: (
  whichUnit: unit,
  whichField: unitweaponrealfield,
  index: number
) => number;
declare const BlzGetUnitWeaponStringField: (
  whichUnit: unit,
  whichField: unitweaponstringfield,
  index: number
) => string;
declare const BlzSetUnitWeaponBooleanField: (
  whichUnit: unit,
  whichField: unitweaponbooleanfield,
  index: number,
  value: boolean
) => boolean;
declare const BlzSetUnitWeaponIntegerField: (
  whichUnit: unit,
  whichField: unitweaponintegerfield,
  index: number,
  value: number
) => boolean;
declare const BlzSetUnitWeaponRealField: (
  whichUnit: unit,
  whichField: unitweaponrealfield,
  index: number,
  value: number
) => boolean;
declare const BlzSetUnitWeaponStringField: (
  whichUnit: unit,
  whichField: unitweaponstringfield,
  index: number,
  value: string
) => boolean;
declare const BlzGetUnitSkin: (whichUnit: unit) => number;
declare const BlzGetItemSkin: (whichItem: item) => number;
declare const BlzSetUnitSkin: (whichUnit: unit, skinId: number) => void;
declare const BlzSetItemSkin: (whichItem: item, skinId: number) => void;
declare const BlzCreateItemWithSkin: (
  itemid: number,
  x: number,
  y: number,
  skinId: number
) => item;
declare const BlzCreateUnitWithSkin: (
  id: player,
  unitid: number,
  x: number,
  y: number,
  face: number,
  skinId: number
) => unit;
declare const BlzCreateDestructableWithSkin: (
  objectid: number,
  x: number,
  y: number,
  face: number,
  scale: number,
  variation: number,
  skinId: number
) => destructable;
declare const BlzCreateDestructableZWithSkin: (
  objectid: number,
  x: number,
  y: number,
  z: number,
  face: number,
  scale: number,
  variation: number,
  skinId: number
) => destructable;
declare const BlzCreateDeadDestructableWithSkin: (
  objectid: number,
  x: number,
  y: number,
  face: number,
  scale: number,
  variation: number,
  skinId: number
) => destructable;
declare const BlzCreateDeadDestructableZWithSkin: (
  objectid: number,
  x: number,
  y: number,
  z: number,
  face: number,
  scale: number,
  variation: number,
  skinId: number
) => destructable;
declare const BlzGetPlayerTownHallCount: (whichPlayer: player) => number;
declare const bj_PI: number;
declare const bj_E: number;
declare const bj_CELLWIDTH: number;
declare const bj_CLIFFHEIGHT: number;
declare const bj_UNIT_FACING: number;
declare const bj_RADTODEG: number;
declare const bj_DEGTORAD: number;
declare const bj_TEXT_DELAY_QUEST: number;
declare const bj_TEXT_DELAY_QUESTUPDATE: number;
declare const bj_TEXT_DELAY_QUESTDONE: number;
declare const bj_TEXT_DELAY_QUESTFAILED: number;
declare const bj_TEXT_DELAY_QUESTREQUIREMENT: number;
declare const bj_TEXT_DELAY_MISSIONFAILED: number;
declare const bj_TEXT_DELAY_ALWAYSHINT: number;
declare const bj_TEXT_DELAY_HINT: number;
declare const bj_TEXT_DELAY_SECRET: number;
declare const bj_TEXT_DELAY_UNITACQUIRED: number;
declare const bj_TEXT_DELAY_UNITAVAILABLE: number;
declare const bj_TEXT_DELAY_ITEMACQUIRED: number;
declare const bj_TEXT_DELAY_WARNING: number;
declare const bj_QUEUE_DELAY_QUEST: number;
declare const bj_QUEUE_DELAY_HINT: number;
declare const bj_QUEUE_DELAY_SECRET: number;
declare const bj_HANDICAP_EASY: number;
declare const bj_HANDICAP_NORMAL: number;
declare const bj_HANDICAPDAMAGE_EASY: number;
declare const bj_HANDICAPDAMAGE_NORMAL: number;
declare const bj_HANDICAPREVIVE_NOTHARD: number;
declare const bj_GAME_STARTED_THRESHOLD: number;
declare const bj_WAIT_FOR_COND_MIN_INTERVAL: number;
declare const bj_POLLED_WAIT_INTERVAL: number;
declare const bj_POLLED_WAIT_SKIP_THRESHOLD: number;
declare const bj_MAX_INVENTORY: number;
declare const bj_MAX_PLAYERS: number;
declare const bj_PLAYER_NEUTRAL_VICTIM: number;
declare const bj_PLAYER_NEUTRAL_EXTRA: number;
declare const bj_MAX_PLAYER_SLOTS: number;
declare const bj_MAX_SKELETONS: number;
declare const bj_MAX_STOCK_ITEM_SLOTS: number;
declare const bj_MAX_STOCK_UNIT_SLOTS: number;
declare const bj_MAX_ITEM_LEVEL: number;
declare const bj_MAX_CHECKPOINTS: number;
declare const bj_TOD_DAWN: number;
declare const bj_TOD_DUSK: number;
declare const bj_MELEE_STARTING_TOD: number;
declare const bj_MELEE_STARTING_GOLD_V0: number;
declare const bj_MELEE_STARTING_GOLD_V1: number;
declare const bj_MELEE_STARTING_LUMBER_V0: number;
declare const bj_MELEE_STARTING_LUMBER_V1: number;
declare const bj_MELEE_STARTING_HERO_TOKENS: number;
declare const bj_MELEE_HERO_LIMIT: number;
declare const bj_MELEE_HERO_TYPE_LIMIT: number;
declare const bj_MELEE_MINE_SEARCH_RADIUS: number;
declare const bj_MELEE_CLEAR_UNITS_RADIUS: number;
declare const bj_MELEE_CRIPPLE_TIMEOUT: number;
declare const bj_MELEE_CRIPPLE_MSG_DURATION: number;
declare const bj_MELEE_MAX_TWINKED_HEROES_V0: number;
declare const bj_MELEE_MAX_TWINKED_HEROES_V1: number;
declare const bj_CREEP_ITEM_DELAY: number;
declare const bj_STOCK_RESTOCK_INITIAL_DELAY: number;
declare const bj_STOCK_RESTOCK_INTERVAL: number;
declare const bj_STOCK_MAX_ITERATIONS: number;
declare const bj_MAX_DEST_IN_REGION_EVENTS: number;
declare const bj_CAMERA_MIN_FARZ: number;
declare const bj_CAMERA_DEFAULT_DISTANCE: number;
declare const bj_CAMERA_DEFAULT_FARZ: number;
declare const bj_CAMERA_DEFAULT_AOA: number;
declare const bj_CAMERA_DEFAULT_FOV: number;
declare const bj_CAMERA_DEFAULT_ROLL: number;
declare const bj_CAMERA_DEFAULT_ROTATION: number;
declare const bj_RESCUE_PING_TIME: number;
declare const bj_NOTHING_SOUND_DURATION: number;
declare const bj_TRANSMISSION_PING_TIME: number;
declare const bj_TRANSMISSION_IND_RED: number;
declare const bj_TRANSMISSION_IND_BLUE: number;
declare const bj_TRANSMISSION_IND_GREEN: number;
declare const bj_TRANSMISSION_IND_ALPHA: number;
declare const bj_TRANSMISSION_PORT_HANGTIME: number;
declare const bj_CINEMODE_INTERFACEFADE: number;
declare const bj_CINEMODE_GAMESPEED: gamespeed;
declare const bj_CINEMODE_VOLUME_UNITMOVEMENT: number;
declare const bj_CINEMODE_VOLUME_UNITSOUNDS: number;
declare const bj_CINEMODE_VOLUME_COMBAT: number;
declare const bj_CINEMODE_VOLUME_SPELLS: number;
declare const bj_CINEMODE_VOLUME_UI: number;
declare const bj_CINEMODE_VOLUME_MUSIC: number;
declare const bj_CINEMODE_VOLUME_AMBIENTSOUNDS: number;
declare const bj_CINEMODE_VOLUME_FIRE: number;
declare const bj_SPEECH_VOLUME_UNITMOVEMENT: number;
declare const bj_SPEECH_VOLUME_UNITSOUNDS: number;
declare const bj_SPEECH_VOLUME_COMBAT: number;
declare const bj_SPEECH_VOLUME_SPELLS: number;
declare const bj_SPEECH_VOLUME_UI: number;
declare const bj_SPEECH_VOLUME_MUSIC: number;
declare const bj_SPEECH_VOLUME_AMBIENTSOUNDS: number;
declare const bj_SPEECH_VOLUME_FIRE: number;
declare const bj_SMARTPAN_TRESHOLD_PAN: number;
declare const bj_SMARTPAN_TRESHOLD_SNAP: number;
declare const bj_MAX_QUEUED_TRIGGERS: number;
declare const bj_QUEUED_TRIGGER_TIMEOUT: number;
declare const bj_CAMPAIGN_INDEX_T: number;
declare const bj_CAMPAIGN_INDEX_H: number;
declare const bj_CAMPAIGN_INDEX_U: number;
declare const bj_CAMPAIGN_INDEX_O: number;
declare const bj_CAMPAIGN_INDEX_N: number;
declare const bj_CAMPAIGN_INDEX_XN: number;
declare const bj_CAMPAIGN_INDEX_XH: number;
declare const bj_CAMPAIGN_INDEX_XU: number;
declare const bj_CAMPAIGN_INDEX_XO: number;
declare const bj_CAMPAIGN_OFFSET_T: number;
declare const bj_CAMPAIGN_OFFSET_H: number;
declare const bj_CAMPAIGN_OFFSET_U: number;
declare const bj_CAMPAIGN_OFFSET_O: number;
declare const bj_CAMPAIGN_OFFSET_N: number;
declare const bj_CAMPAIGN_OFFSET_XN: number;
declare const bj_CAMPAIGN_OFFSET_XH: number;
declare const bj_CAMPAIGN_OFFSET_XU: number;
declare const bj_CAMPAIGN_OFFSET_XO: number;
declare const bj_MISSION_INDEX_T00: number;
declare const bj_MISSION_INDEX_T01: number;
declare const bj_MISSION_INDEX_T02: number;
declare const bj_MISSION_INDEX_T03: number;
declare const bj_MISSION_INDEX_T04: number;
declare const bj_MISSION_INDEX_H00: number;
declare const bj_MISSION_INDEX_H01: number;
declare const bj_MISSION_INDEX_H02: number;
declare const bj_MISSION_INDEX_H03: number;
declare const bj_MISSION_INDEX_H04: number;
declare const bj_MISSION_INDEX_H05: number;
declare const bj_MISSION_INDEX_H06: number;
declare const bj_MISSION_INDEX_H07: number;
declare const bj_MISSION_INDEX_H08: number;
declare const bj_MISSION_INDEX_H09: number;
declare const bj_MISSION_INDEX_H10: number;
declare const bj_MISSION_INDEX_H11: number;
declare const bj_MISSION_INDEX_U00: number;
declare const bj_MISSION_INDEX_U01: number;
declare const bj_MISSION_INDEX_U02: number;
declare const bj_MISSION_INDEX_U03: number;
declare const bj_MISSION_INDEX_U05: number;
declare const bj_MISSION_INDEX_U07: number;
declare const bj_MISSION_INDEX_U08: number;
declare const bj_MISSION_INDEX_U09: number;
declare const bj_MISSION_INDEX_U10: number;
declare const bj_MISSION_INDEX_U11: number;
declare const bj_MISSION_INDEX_O00: number;
declare const bj_MISSION_INDEX_O01: number;
declare const bj_MISSION_INDEX_O02: number;
declare const bj_MISSION_INDEX_O03: number;
declare const bj_MISSION_INDEX_O04: number;
declare const bj_MISSION_INDEX_O05: number;
declare const bj_MISSION_INDEX_O06: number;
declare const bj_MISSION_INDEX_O07: number;
declare const bj_MISSION_INDEX_O08: number;
declare const bj_MISSION_INDEX_O09: number;
declare const bj_MISSION_INDEX_O10: number;
declare const bj_MISSION_INDEX_N00: number;
declare const bj_MISSION_INDEX_N01: number;
declare const bj_MISSION_INDEX_N02: number;
declare const bj_MISSION_INDEX_N03: number;
declare const bj_MISSION_INDEX_N04: number;
declare const bj_MISSION_INDEX_N05: number;
declare const bj_MISSION_INDEX_N06: number;
declare const bj_MISSION_INDEX_N07: number;
declare const bj_MISSION_INDEX_N08: number;
declare const bj_MISSION_INDEX_N09: number;
declare const bj_MISSION_INDEX_XN00: number;
declare const bj_MISSION_INDEX_XN01: number;
declare const bj_MISSION_INDEX_XN02: number;
declare const bj_MISSION_INDEX_XN03: number;
declare const bj_MISSION_INDEX_XN04: number;
declare const bj_MISSION_INDEX_XN05: number;
declare const bj_MISSION_INDEX_XN06: number;
declare const bj_MISSION_INDEX_XN07: number;
declare const bj_MISSION_INDEX_XN08: number;
declare const bj_MISSION_INDEX_XN09: number;
declare const bj_MISSION_INDEX_XN10: number;
declare const bj_MISSION_INDEX_XH00: number;
declare const bj_MISSION_INDEX_XH01: number;
declare const bj_MISSION_INDEX_XH02: number;
declare const bj_MISSION_INDEX_XH03: number;
declare const bj_MISSION_INDEX_XH04: number;
declare const bj_MISSION_INDEX_XH05: number;
declare const bj_MISSION_INDEX_XH06: number;
declare const bj_MISSION_INDEX_XH07: number;
declare const bj_MISSION_INDEX_XH08: number;
declare const bj_MISSION_INDEX_XH09: number;
declare const bj_MISSION_INDEX_XU00: number;
declare const bj_MISSION_INDEX_XU01: number;
declare const bj_MISSION_INDEX_XU02: number;
declare const bj_MISSION_INDEX_XU03: number;
declare const bj_MISSION_INDEX_XU04: number;
declare const bj_MISSION_INDEX_XU05: number;
declare const bj_MISSION_INDEX_XU06: number;
declare const bj_MISSION_INDEX_XU07: number;
declare const bj_MISSION_INDEX_XU08: number;
declare const bj_MISSION_INDEX_XU09: number;
declare const bj_MISSION_INDEX_XU10: number;
declare const bj_MISSION_INDEX_XU11: number;
declare const bj_MISSION_INDEX_XU12: number;
declare const bj_MISSION_INDEX_XU13: number;
declare const bj_MISSION_INDEX_XO00: number;
declare const bj_MISSION_INDEX_XO01: number;
declare const bj_MISSION_INDEX_XO02: number;
declare const bj_MISSION_INDEX_XO03: number;
declare const bj_CINEMATICINDEX_TOP: number;
declare const bj_CINEMATICINDEX_HOP: number;
declare const bj_CINEMATICINDEX_HED: number;
declare const bj_CINEMATICINDEX_OOP: number;
declare const bj_CINEMATICINDEX_OED: number;
declare const bj_CINEMATICINDEX_UOP: number;
declare const bj_CINEMATICINDEX_UED: number;
declare const bj_CINEMATICINDEX_NOP: number;
declare const bj_CINEMATICINDEX_NED: number;
declare const bj_CINEMATICINDEX_XOP: number;
declare const bj_CINEMATICINDEX_XED: number;
declare const bj_ALLIANCE_UNALLIED: number;
declare const bj_ALLIANCE_UNALLIED_VISION: number;
declare const bj_ALLIANCE_ALLIED: number;
declare const bj_ALLIANCE_ALLIED_VISION: number;
declare const bj_ALLIANCE_ALLIED_UNITS: number;
declare const bj_ALLIANCE_ALLIED_ADVUNITS: number;
declare const bj_ALLIANCE_NEUTRAL: number;
declare const bj_ALLIANCE_NEUTRAL_VISION: number;
declare const bj_KEYEVENTTYPE_DEPRESS: number;
declare const bj_KEYEVENTTYPE_RELEASE: number;
declare const bj_KEYEVENTKEY_LEFT: number;
declare const bj_KEYEVENTKEY_RIGHT: number;
declare const bj_KEYEVENTKEY_DOWN: number;
declare const bj_KEYEVENTKEY_UP: number;
declare const bj_MOUSEEVENTTYPE_DOWN: number;
declare const bj_MOUSEEVENTTYPE_UP: number;
declare const bj_MOUSEEVENTTYPE_MOVE: number;
declare const bj_TIMETYPE_ADD: number;
declare const bj_TIMETYPE_SET: number;
declare const bj_TIMETYPE_SUB: number;
declare const bj_CAMERABOUNDS_ADJUST_ADD: number;
declare const bj_CAMERABOUNDS_ADJUST_SUB: number;
declare const bj_QUESTTYPE_REQ_DISCOVERED: number;
declare const bj_QUESTTYPE_REQ_UNDISCOVERED: number;
declare const bj_QUESTTYPE_OPT_DISCOVERED: number;
declare const bj_QUESTTYPE_OPT_UNDISCOVERED: number;
declare const bj_QUESTMESSAGE_DISCOVERED: number;
declare const bj_QUESTMESSAGE_UPDATED: number;
declare const bj_QUESTMESSAGE_COMPLETED: number;
declare const bj_QUESTMESSAGE_FAILED: number;
declare const bj_QUESTMESSAGE_REQUIREMENT: number;
declare const bj_QUESTMESSAGE_MISSIONFAILED: number;
declare const bj_QUESTMESSAGE_ALWAYSHINT: number;
declare const bj_QUESTMESSAGE_HINT: number;
declare const bj_QUESTMESSAGE_SECRET: number;
declare const bj_QUESTMESSAGE_UNITACQUIRED: number;
declare const bj_QUESTMESSAGE_UNITAVAILABLE: number;
declare const bj_QUESTMESSAGE_ITEMACQUIRED: number;
declare const bj_QUESTMESSAGE_WARNING: number;
declare const bj_SORTTYPE_SORTBYVALUE: number;
declare const bj_SORTTYPE_SORTBYPLAYER: number;
declare const bj_SORTTYPE_SORTBYLABEL: number;
declare const bj_CINEFADETYPE_FADEIN: number;
declare const bj_CINEFADETYPE_FADEOUT: number;
declare const bj_CINEFADETYPE_FADEOUTIN: number;
declare const bj_REMOVEBUFFS_POSITIVE: number;
declare const bj_REMOVEBUFFS_NEGATIVE: number;
declare const bj_REMOVEBUFFS_ALL: number;
declare const bj_REMOVEBUFFS_NONTLIFE: number;
declare const bj_BUFF_POLARITY_POSITIVE: number;
declare const bj_BUFF_POLARITY_NEGATIVE: number;
declare const bj_BUFF_POLARITY_EITHER: number;
declare const bj_BUFF_RESIST_MAGIC: number;
declare const bj_BUFF_RESIST_PHYSICAL: number;
declare const bj_BUFF_RESIST_EITHER: number;
declare const bj_BUFF_RESIST_BOTH: number;
declare const bj_HEROSTAT_STR: number;
declare const bj_HEROSTAT_AGI: number;
declare const bj_HEROSTAT_INT: number;
declare const bj_MODIFYMETHOD_ADD: number;
declare const bj_MODIFYMETHOD_SUB: number;
declare const bj_MODIFYMETHOD_SET: number;
declare const bj_UNIT_STATE_METHOD_ABSOLUTE: number;
declare const bj_UNIT_STATE_METHOD_RELATIVE: number;
declare const bj_UNIT_STATE_METHOD_DEFAULTS: number;
declare const bj_UNIT_STATE_METHOD_MAXIMUM: number;
declare const bj_GATEOPERATION_CLOSE: number;
declare const bj_GATEOPERATION_OPEN: number;
declare const bj_GATEOPERATION_DESTROY: number;
declare const bj_GAMECACHE_BOOLEAN: number;
declare const bj_GAMECACHE_INTEGER: number;
declare const bj_GAMECACHE_REAL: number;
declare const bj_GAMECACHE_UNIT: number;
declare const bj_GAMECACHE_STRING: number;
declare const bj_HASHTABLE_BOOLEAN: number;
declare const bj_HASHTABLE_INTEGER: number;
declare const bj_HASHTABLE_REAL: number;
declare const bj_HASHTABLE_STRING: number;
declare const bj_HASHTABLE_HANDLE: number;
declare const bj_ITEM_STATUS_HIDDEN: number;
declare const bj_ITEM_STATUS_OWNED: number;
declare const bj_ITEM_STATUS_INVULNERABLE: number;
declare const bj_ITEM_STATUS_POWERUP: number;
declare const bj_ITEM_STATUS_SELLABLE: number;
declare const bj_ITEM_STATUS_PAWNABLE: number;
declare const bj_ITEMCODE_STATUS_POWERUP: number;
declare const bj_ITEMCODE_STATUS_SELLABLE: number;
declare const bj_ITEMCODE_STATUS_PAWNABLE: number;
declare const bj_MINIMAPPINGSTYLE_SIMPLE: number;
declare const bj_MINIMAPPINGSTYLE_FLASHY: number;
declare const bj_MINIMAPPINGSTYLE_ATTACK: number;
declare const bj_CAMPPINGSTYLE_PRIMARY: number;
declare const bj_CAMPPINGSTYLE_PRIMARY_GREEN: number;
declare const bj_CAMPPINGSTYLE_PRIMARY_RED: number;
declare const bj_CAMPPINGSTYLE_BONUS: number;
declare const bj_CAMPPINGSTYLE_TURNIN: number;
declare const bj_CAMPPINGSTYLE_BOSS: number;
declare const bj_CAMPPINGSTYLE_CONTROL_ALLY: number;
declare const bj_CAMPPINGSTYLE_CONTROL_NEUTRAL: number;
declare const bj_CAMPPINGSTYLE_CONTROL_ENEMY: number;
declare const bj_CORPSE_MAX_DEATH_TIME: number;
declare const bj_CORPSETYPE_FLESH: number;
declare const bj_CORPSETYPE_BONE: number;
declare const bj_ELEVATOR_BLOCKER_CODE: number;
declare const bj_ELEVATOR_CODE01: number;
declare const bj_ELEVATOR_CODE02: number;
declare const bj_ELEVATOR_WALL_TYPE_ALL: number;
declare const bj_ELEVATOR_WALL_TYPE_EAST: number;
declare const bj_ELEVATOR_WALL_TYPE_NORTH: number;
declare const bj_ELEVATOR_WALL_TYPE_SOUTH: number;
declare const bj_ELEVATOR_WALL_TYPE_WEST: number;
declare const bj_FORCE_ALL_PLAYERS: force;
declare const bj_FORCE_PLAYER: force[];
declare const bj_MELEE_MAX_TWINKED_HEROES: number;
declare const bj_mapInitialPlayableArea: rect;
declare const bj_mapInitialCameraBounds: rect;
declare const bj_forLoopAIndex: number;
declare const bj_forLoopBIndex: number;
declare const bj_forLoopAIndexEnd: number;
declare const bj_forLoopBIndexEnd: number;
declare const bj_slotControlReady: boolean;
declare const bj_slotControlUsed: boolean[];
declare const bj_slotControl: mapcontrol[];
declare const bj_gameStartedTimer: timer;
declare const bj_gameStarted: boolean;
declare const bj_volumeGroupsTimer: timer;
declare const bj_isSinglePlayer: boolean;
declare const bj_dncSoundsDay: trigger;
declare const bj_dncSoundsNight: trigger;
declare const bj_dayAmbientSound: sound;
declare const bj_nightAmbientSound: sound;
declare const bj_dncSoundsDawn: trigger;
declare const bj_dncSoundsDusk: trigger;
declare const bj_dawnSound: sound;
declare const bj_duskSound: sound;
declare const bj_useDawnDuskSounds: boolean;
declare const bj_dncIsDaytime: boolean;
declare const bj_rescueSound: sound;
declare const bj_questDiscoveredSound: sound;
declare const bj_questUpdatedSound: sound;
declare const bj_questCompletedSound: sound;
declare const bj_questFailedSound: sound;
declare const bj_questHintSound: sound;
declare const bj_questSecretSound: sound;
declare const bj_questItemAcquiredSound: sound;
declare const bj_questWarningSound: sound;
declare const bj_victoryDialogSound: sound;
declare const bj_defeatDialogSound: sound;
declare const bj_stockItemPurchased: trigger;
declare const bj_stockUpdateTimer: timer;
declare const bj_stockAllowedPermanent: boolean[];
declare const bj_stockAllowedCharged: boolean[];
declare const bj_stockAllowedArtifact: boolean[];
declare const bj_stockPickedItemLevel: number;
declare const bj_stockPickedItemType: itemtype;
declare const bj_meleeVisibilityTrained: trigger;
declare const bj_meleeVisibilityIsDay: boolean;
declare const bj_meleeGrantHeroItems: boolean;
declare const bj_meleeNearestMineToLoc: location;
declare const bj_meleeNearestMine: unit;
declare const bj_meleeNearestMineDist: number;
declare const bj_meleeGameOver: boolean;
declare const bj_meleeDefeated: boolean[];
declare const bj_meleeVictoried: boolean[];
declare const bj_ghoul: unit[];
declare const bj_crippledTimer: timer[];
declare const bj_crippledTimerWindows: timerdialog[];
declare const bj_playerIsCrippled: boolean[];
declare const bj_playerIsExposed: boolean[];
declare const bj_finishSoonAllExposed: boolean;
declare const bj_finishSoonTimerDialog: timerdialog;
declare const bj_meleeTwinkedHeroes: number[];
declare const bj_rescueUnitBehavior: trigger;
declare const bj_rescueChangeColorUnit: boolean;
declare const bj_rescueChangeColorBldg: boolean;
declare const bj_cineSceneEndingTimer: timer;
declare const bj_cineSceneLastSound: sound;
declare const bj_cineSceneBeingSkipped: trigger;
declare const bj_cineModePriorSpeed: gamespeed;
declare const bj_cineModePriorFogSetting: boolean;
declare const bj_cineModePriorMaskSetting: boolean;
declare const bj_cineModeAlreadyIn: boolean;
declare const bj_cineModePriorDawnDusk: boolean;
declare const bj_cineModeSavedSeed: number;
declare const bj_cineFadeFinishTimer: timer;
declare const bj_cineFadeContinueTimer: timer;
declare const bj_cineFadeContinueRed: number;
declare const bj_cineFadeContinueGreen: number;
declare const bj_cineFadeContinueBlue: number;
declare const bj_cineFadeContinueTrans: number;
declare const bj_cineFadeContinueDuration: number;
declare const bj_cineFadeContinueTex: string;
declare const bj_queuedExecTotal: number;
declare const bj_queuedExecTriggers: trigger[];
declare const bj_queuedExecUseConds: boolean[];
declare const bj_queuedExecTimeoutTimer: timer;
declare const bj_queuedExecTimeout: trigger;
declare const bj_destInRegionDiesCount: number;
declare const bj_destInRegionDiesTrig: trigger;
declare const bj_groupCountUnits: number;
declare const bj_forceCountPlayers: number;
declare const bj_groupEnumTypeId: number;
declare const bj_groupEnumOwningPlayer: player;
declare const bj_groupAddGroupDest: group;
declare const bj_groupRemoveGroupDest: group;
declare const bj_groupRandomConsidered: number;
declare const bj_groupRandomCurrentPick: unit;
declare const bj_groupLastCreatedDest: group;
declare const bj_randomSubGroupGroup: group;
declare const bj_randomSubGroupWant: number;
declare const bj_randomSubGroupTotal: number;
declare const bj_randomSubGroupChance: number;
declare const bj_destRandomConsidered: number;
declare const bj_destRandomCurrentPick: destructable;
declare const bj_elevatorWallBlocker: destructable;
declare const bj_elevatorNeighbor: destructable;
declare const bj_itemRandomConsidered: number;
declare const bj_itemRandomCurrentPick: item;
declare const bj_forceRandomConsidered: number;
declare const bj_forceRandomCurrentPick: player;
declare const bj_makeUnitRescuableUnit: unit;
declare const bj_makeUnitRescuableFlag: boolean;
declare const bj_pauseAllUnitsFlag: boolean;
declare const bj_enumDestructableCenter: location;
declare const bj_enumDestructableRadius: number;
declare const bj_setPlayerTargetColor: playercolor;
declare const bj_isUnitGroupDeadResult: boolean;
declare const bj_isUnitGroupEmptyResult: boolean;
declare const bj_isUnitGroupInRectResult: boolean;
declare const bj_isUnitGroupInRectRect: rect;
declare const bj_changeLevelShowScores: boolean;
declare const bj_changeLevelMapName: string;
declare const bj_suspendDecayFleshGroup: group;
declare const bj_suspendDecayBoneGroup: group;
declare const bj_delayedSuspendDecayTimer: timer;
declare const bj_delayedSuspendDecayTrig: trigger;
declare const bj_livingPlayerUnitsTypeId: number;
declare const bj_lastDyingWidget: widget;
declare const bj_randDistCount: number;
declare const bj_randDistID: number[];
declare const bj_randDistChance: number[];
declare const bj_lastCreatedUnit: unit;
declare const bj_lastCreatedItem: item;
declare const bj_lastRemovedItem: item;
declare const bj_lastHauntedGoldMine: unit;
declare const bj_lastCreatedDestructable: destructable;
declare const bj_lastCreatedGroup: group;
declare const bj_lastCreatedFogModifier: fogmodifier;
declare const bj_lastCreatedEffect: effect;
declare const bj_lastCreatedWeatherEffect: weathereffect;
declare const bj_lastCreatedTerrainDeformation: terraindeformation;
declare const bj_lastCreatedQuest: quest;
declare const bj_lastCreatedQuestItem: questitem;
declare const bj_lastCreatedDefeatCondition: defeatcondition;
declare const bj_lastStartedTimer: timer;
declare const bj_lastCreatedTimerDialog: timerdialog;
declare const bj_lastCreatedLeaderboard: leaderboard;
declare const bj_lastCreatedMultiboard: multiboard;
declare const bj_lastPlayedSound: sound;
declare const bj_lastPlayedMusic: string;
declare const bj_lastTransmissionDuration: number;
declare const bj_lastCreatedGameCache: gamecache;
declare const bj_lastCreatedHashtable: hashtable;
declare const bj_lastLoadedUnit: unit;
declare const bj_lastCreatedButton: button;
declare const bj_lastReplacedUnit: unit;
declare const bj_lastCreatedTextTag: texttag;
declare const bj_lastCreatedLightning: lightning;
declare const bj_lastCreatedImage: image;
declare const bj_lastCreatedUbersplat: ubersplat;
declare const bj_lastCreatedMinimapIcon: minimapicon;
declare const bj_lastCreatedCommandButtonEffect: commandbuttoneffect;
declare const filterIssueHauntOrderAtLocBJ: () => boolean;
declare const filterEnumDestructablesInCircleBJ: () => boolean;
declare const filterGetUnitsInRectOfPlayer: () => boolean;
declare const filterGetUnitsOfTypeIdAll: () => boolean;
declare const filterGetUnitsOfPlayerAndTypeId: () => boolean;
declare const filterMeleeTrainedUnitIsHeroBJ: () => boolean;
declare const filterLivingPlayerUnitsOfTypeId: () => boolean;
declare const bj_wantDestroyGroup: boolean;
declare const bj_lastInstObjFuncSuccessful: boolean;
declare const BJDebugMsg: (msg: string) => void;
declare const RMinBJ: (a: number, b: number) => number;
declare const RMaxBJ: (a: number, b: number) => number;
declare const RAbsBJ: (a: number) => number;
declare const RSignBJ: (a: number) => number;
declare const IMinBJ: (a: number, b: number) => number;
declare const IMaxBJ: (a: number, b: number) => number;
declare const IAbsBJ: (a: number) => number;
declare const ISignBJ: (a: number) => number;
declare const SinBJ: (degrees: number) => number;
declare const CosBJ: (degrees: number) => number;
declare const TanBJ: (degrees: number) => number;
declare const AsinBJ: (degrees: number) => number;
declare const AcosBJ: (degrees: number) => number;
declare const AtanBJ: (degrees: number) => number;
declare const Atan2BJ: (y: number, x: number) => number;
declare const AngleBetweenPoints: (locA: location, locB: location) => number;
declare const DistanceBetweenPoints: (locA: location, locB: location) => number;
declare const PolarProjectionBJ: (
  source: location,
  dist: number,
  angle: number
) => location;
declare const GetRandomDirectionDeg: () => number;
declare const GetRandomPercentageBJ: () => number;
declare const GetRandomLocInRect: (whichRect: rect) => location;
declare const ModuloInteger: (dividend: number, divisor: number) => number;
declare const ModuloReal: (dividend: number, divisor: number) => number;
declare const OffsetLocation: (
  loc: location,
  dx: number,
  dy: number
) => location;
declare const OffsetRectBJ: (r: rect, dx: number, dy: number) => rect;
declare const RectFromCenterSizeBJ: (
  center: location,
  width: number,
  height: number
) => rect;
declare const RectContainsCoords: (r: rect, x: number, y: number) => boolean;
declare const RectContainsLoc: (r: rect, loc: location) => boolean;
declare const RectContainsUnit: (r: rect, whichUnit: unit) => boolean;
declare const RectContainsItem: (whichItem: item, r: rect) => boolean;
declare const ConditionalTriggerExecute: (trig: trigger) => void;
declare const TriggerExecuteBJ: (
  trig: trigger,
  checkConditions: boolean
) => boolean;
declare const PostTriggerExecuteBJ: (
  trig: trigger,
  checkConditions: boolean
) => boolean;
declare const QueuedTriggerCheck: () => void;
declare const QueuedTriggerGetIndex: (trig: trigger) => number;
declare const QueuedTriggerRemoveByIndex: (trigIndex: number) => boolean;
declare const QueuedTriggerAttemptExec: () => boolean;
declare const QueuedTriggerAddBJ: (
  trig: trigger,
  checkConditions: boolean
) => boolean;
declare const QueuedTriggerRemoveBJ: (trig: trigger) => void;
declare const QueuedTriggerDoneBJ: () => void;
declare const QueuedTriggerClearBJ: () => void;
declare const QueuedTriggerClearInactiveBJ: () => void;
declare const QueuedTriggerCountBJ: () => number;
declare const IsTriggerQueueEmptyBJ: () => boolean;
declare const IsTriggerQueuedBJ: (trig: trigger) => boolean;
declare const GetForLoopIndexA: () => number;
declare const SetForLoopIndexA: (newIndex: number) => void;
declare const GetForLoopIndexB: () => number;
declare const SetForLoopIndexB: (newIndex: number) => void;
declare const PolledWait: (duration: number) => void;
declare const IntegerTertiaryOp: (
  flag: boolean,
  valueA: number,
  valueB: number
) => number;
declare const DoNothing: () => void;
declare const CommentString: (commentString: string) => void;
declare const StringIdentity: (theString: string) => string;
declare const GetBooleanAnd: (valueA: boolean, valueB: boolean) => boolean;
declare const GetBooleanOr: (valueA: boolean, valueB: boolean) => boolean;
declare const PercentToInt: (percentage: number, max: number) => number;
declare const PercentTo255: (percentage: number) => number;
declare const GetTimeOfDay: () => number;
declare const SetTimeOfDay: (whatTime: number) => void;
declare const SetTimeOfDayScalePercentBJ: (scalePercent: number) => void;
declare const GetTimeOfDayScalePercentBJ: () => number;
declare const PlaySound: (soundName: string) => void;
declare const CompareLocationsBJ: (A: location, B: location) => boolean;
declare const CompareRectsBJ: (A: rect, B: rect) => boolean;
declare const GetRectFromCircleBJ: (center: location, radius: number) => rect;
declare const GetCurrentCameraSetup: () => camerasetup;
declare const CameraSetupApplyForPlayer: (
  doPan: boolean,
  whichSetup: camerasetup,
  whichPlayer: player,
  duration: number
) => void;
declare const CameraSetupApplyForPlayerSmooth: (
  doPan: boolean,
  whichSetup: camerasetup,
  whichPlayer: player,
  forcedDuration: number,
  easeInDuration: number,
  easeOutDuration: number,
  smoothFactor: number
) => void;
declare const CameraSetupGetFieldSwap: (
  whichField: camerafield,
  whichSetup: camerasetup
) => number;
declare const SetCameraFieldForPlayer: (
  whichPlayer: player,
  whichField: camerafield,
  value: number,
  duration: number
) => void;
declare const SetCameraTargetControllerNoZForPlayer: (
  whichPlayer: player,
  whichUnit: unit,
  xoffset: number,
  yoffset: number,
  inheritOrientation: boolean
) => void;
declare const SetCameraPositionForPlayer: (
  whichPlayer: player,
  x: number,
  y: number
) => void;
declare const SetCameraPositionLocForPlayer: (
  whichPlayer: player,
  loc: location
) => void;
declare const RotateCameraAroundLocBJ: (
  degrees: number,
  loc: location,
  whichPlayer: player,
  duration: number
) => void;
declare const PanCameraToForPlayer: (
  whichPlayer: player,
  x: number,
  y: number
) => void;
declare const PanCameraToLocForPlayer: (
  whichPlayer: player,
  loc: location
) => void;
declare const PanCameraToTimedForPlayer: (
  whichPlayer: player,
  x: number,
  y: number,
  duration: number
) => void;
declare const PanCameraToTimedLocForPlayer: (
  whichPlayer: player,
  loc: location,
  duration: number
) => void;
declare const PanCameraToTimedLocWithZForPlayer: (
  whichPlayer: player,
  loc: location,
  zOffset: number,
  duration: number
) => void;
declare const SmartCameraPanBJ: (
  whichPlayer: player,
  loc: location,
  duration: number
) => void;
declare const SetCinematicCameraForPlayer: (
  whichPlayer: player,
  cameraModelFile: string
) => void;
declare const ResetToGameCameraForPlayer: (
  whichPlayer: player,
  duration: number
) => void;
declare const CameraSetSourceNoiseForPlayer: (
  whichPlayer: player,
  magnitude: number,
  velocity: number
) => void;
declare const CameraSetTargetNoiseForPlayer: (
  whichPlayer: player,
  magnitude: number,
  velocity: number
) => void;
declare const CameraSetEQNoiseForPlayer: (
  whichPlayer: player,
  magnitude: number
) => void;
declare const CameraClearNoiseForPlayer: (whichPlayer: player) => void;
declare const GetCurrentCameraBoundsMapRectBJ: () => rect;
declare const GetCameraBoundsMapRect: () => rect;
declare const GetPlayableMapRect: () => rect;
declare const GetEntireMapRect: () => rect;
declare const SetCameraBoundsToRect: (r: rect) => void;
declare const SetCameraBoundsToRectForPlayerBJ: (
  whichPlayer: player,
  r: rect
) => void;
declare const AdjustCameraBoundsBJ: (
  adjustMethod: number,
  dxWest: number,
  dxEast: number,
  dyNorth: number,
  dySouth: number
) => void;
declare const AdjustCameraBoundsForPlayerBJ: (
  adjustMethod: number,
  whichPlayer: player,
  dxWest: number,
  dxEast: number,
  dyNorth: number,
  dySouth: number
) => void;
declare const SetCameraQuickPositionForPlayer: (
  whichPlayer: player,
  x: number,
  y: number
) => void;
declare const SetCameraQuickPositionLocForPlayer: (
  whichPlayer: player,
  loc: location
) => void;
declare const SetCameraQuickPositionLoc: (loc: location) => void;
declare const StopCameraForPlayerBJ: (whichPlayer: player) => void;
declare const SetCameraOrientControllerForPlayerBJ: (
  whichPlayer: player,
  whichUnit: unit,
  xoffset: number,
  yoffset: number
) => void;
declare const CameraSetSmoothingFactorBJ: (factor: number) => void;
declare const CameraResetSmoothingFactorBJ: () => void;
declare const DisplayTextToForce: (toForce: force, message: string) => void;
declare const DisplayTimedTextToForce: (
  toForce: force,
  duration: number,
  message: string
) => void;
declare const ClearTextMessagesBJ: (toForce: force) => void;
declare const SubStringBJ: (
  source: string,
  start: number,
  end: number
) => string;
declare const GetHandleIdBJ: (h: number) => number;
declare const StringHashBJ: (s: string) => number;
declare const TriggerRegisterTimerEventPeriodic: (
  trig: trigger,
  timeout: number
) => event;
declare const TriggerRegisterTimerEventSingle: (
  trig: trigger,
  timeout: number
) => event;
declare const TriggerRegisterTimerExpireEventBJ: (
  trig: trigger,
  t: timer
) => event;
declare const TriggerRegisterPlayerUnitEventSimple: (
  trig: trigger,
  whichPlayer: player,
  whichEvent: playerunitevent
) => event;
declare const TriggerRegisterAnyUnitEventBJ: (
  trig: trigger,
  whichEvent: playerunitevent
) => void;
declare const TriggerRegisterPlayerSelectionEventBJ: (
  trig: trigger,
  whichPlayer: player,
  selected: boolean
) => event;
declare const TriggerRegisterPlayerKeyEventBJ: (
  trig: trigger,
  whichPlayer: player,
  keType: number,
  keKey: number
) => event;
declare const TriggerRegisterPlayerMouseEventBJ: (
  trig: trigger,
  whichPlayer: player,
  meType: number
) => event;
declare const TriggerRegisterPlayerEventVictory: (
  trig: trigger,
  whichPlayer: player
) => event;
declare const TriggerRegisterPlayerEventDefeat: (
  trig: trigger,
  whichPlayer: player
) => event;
declare const TriggerRegisterPlayerEventLeave: (
  trig: trigger,
  whichPlayer: player
) => event;
declare const TriggerRegisterPlayerEventAllianceChanged: (
  trig: trigger,
  whichPlayer: player
) => event;
declare const TriggerRegisterPlayerEventEndCinematic: (
  trig: trigger,
  whichPlayer: player
) => event;
declare const TriggerRegisterGameStateEventTimeOfDay: (
  trig: trigger,
  opcode: limitop,
  limitval: number
) => event;
declare const TriggerRegisterEnterRegionSimple: (
  trig: trigger,
  whichRegion: region
) => event;
declare const TriggerRegisterLeaveRegionSimple: (
  trig: trigger,
  whichRegion: region
) => event;
declare const TriggerRegisterEnterRectSimple: (trig: trigger, r: rect) => event;
declare const TriggerRegisterLeaveRectSimple: (trig: trigger, r: rect) => event;
declare const TriggerRegisterDistanceBetweenUnits: (
  trig: trigger,
  whichUnit: unit,
  condition: () => boolean,
  range: number
) => event;
declare const TriggerRegisterUnitInRangeSimple: (
  trig: trigger,
  range: number,
  whichUnit: unit
) => event;
declare const TriggerRegisterUnitLifeEvent: (
  trig: trigger,
  whichUnit: unit,
  opcode: limitop,
  limitval: number
) => event;
declare const TriggerRegisterUnitManaEvent: (
  trig: trigger,
  whichUnit: unit,
  opcode: limitop,
  limitval: number
) => event;
declare const TriggerRegisterDialogEventBJ: (
  trig: trigger,
  whichDialog: dialog
) => event;
declare const TriggerRegisterShowSkillEventBJ: (trig: trigger) => event;
declare const TriggerRegisterBuildSubmenuEventBJ: (trig: trigger) => event;
declare const TriggerRegisterBuildCommandEventBJ: (
  trig: trigger,
  unitId: number
) => event;
declare const TriggerRegisterTrainCommandEventBJ: (
  trig: trigger,
  unitId: number
) => event;
declare const TriggerRegisterUpgradeCommandEventBJ: (
  trig: trigger,
  techId: number
) => event;
declare const TriggerRegisterCommonCommandEventBJ: (
  trig: trigger,
  order: string
) => event;
declare const TriggerRegisterGameLoadedEventBJ: (trig: trigger) => event;
declare const TriggerRegisterGameSavedEventBJ: (trig: trigger) => event;
declare const RegisterDestDeathInRegionEnum: () => void;
declare const TriggerRegisterDestDeathInRegionEvent: (
  trig: trigger,
  r: rect
) => void;
declare const AddWeatherEffectSaveLast: (
  where: rect,
  effectID: number
) => weathereffect;
declare const GetLastCreatedWeatherEffect: () => weathereffect;
declare const RemoveWeatherEffectBJ: (
  whichWeatherEffect: weathereffect
) => void;
declare const TerrainDeformationCraterBJ: (
  duration: number,
  permanent: boolean,
  where: location,
  radius: number,
  depth: number
) => terraindeformation;
declare const TerrainDeformationRippleBJ: (
  duration: number,
  limitNeg: boolean,
  where: location,
  startRadius: number,
  endRadius: number,
  depth: number,
  wavePeriod: number,
  waveWidth: number
) => terraindeformation;
declare const TerrainDeformationWaveBJ: (
  duration: number,
  source: location,
  target: location,
  radius: number,
  depth: number,
  trailDelay: number
) => terraindeformation;
declare const TerrainDeformationRandomBJ: (
  duration: number,
  where: location,
  radius: number,
  minDelta: number,
  maxDelta: number,
  updateInterval: number
) => terraindeformation;
declare const TerrainDeformationStopBJ: (
  deformation: terraindeformation,
  duration: number
) => void;
declare const GetLastCreatedTerrainDeformation: () => terraindeformation;
declare const AddLightningLoc: (
  codeName: string,
  where1: location,
  where2: location
) => lightning;
declare const DestroyLightningBJ: (whichBolt: lightning) => boolean;
declare const MoveLightningLoc: (
  whichBolt: lightning,
  where1: location,
  where2: location
) => boolean;
declare const GetLightningColorABJ: (whichBolt: lightning) => number;
declare const GetLightningColorRBJ: (whichBolt: lightning) => number;
declare const GetLightningColorGBJ: (whichBolt: lightning) => number;
declare const GetLightningColorBBJ: (whichBolt: lightning) => number;
declare const SetLightningColorBJ: (
  whichBolt: lightning,
  r: number,
  g: number,
  b: number,
  a: number
) => boolean;
declare const GetLastCreatedLightningBJ: () => lightning;
declare const GetAbilityEffectBJ: (
  abilcode: number,
  t: effecttype,
  index: number
) => string;
declare const GetAbilitySoundBJ: (abilcode: number, t: soundtype) => string;
declare const GetTerrainCliffLevelBJ: (where: location) => number;
declare const GetTerrainTypeBJ: (where: location) => number;
declare const GetTerrainVarianceBJ: (where: location) => number;
declare const SetTerrainTypeBJ: (
  where: location,
  terrainType: number,
  variation: number,
  area: number,
  shape: number
) => void;
declare const IsTerrainPathableBJ: (where: location, t: pathingtype) => boolean;
declare const SetTerrainPathableBJ: (
  where: location,
  t: pathingtype,
  flag: boolean
) => void;
declare const SetWaterBaseColorBJ: (
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const CreateFogModifierRectSimple: (
  whichPlayer: player,
  whichFogState: fogstate,
  r: rect,
  afterUnits: boolean
) => fogmodifier;
declare const CreateFogModifierRadiusLocSimple: (
  whichPlayer: player,
  whichFogState: fogstate,
  center: location,
  radius: number,
  afterUnits: boolean
) => fogmodifier;
declare const CreateFogModifierRectBJ: (
  enabled: boolean,
  whichPlayer: player,
  whichFogState: fogstate,
  r: rect
) => fogmodifier;
declare const CreateFogModifierRadiusLocBJ: (
  enabled: boolean,
  whichPlayer: player,
  whichFogState: fogstate,
  center: location,
  radius: number
) => fogmodifier;
declare const GetLastCreatedFogModifier: () => fogmodifier;
declare const FogEnableOn: () => void;
declare const FogEnableOff: () => void;
declare const FogMaskEnableOn: () => void;
declare const FogMaskEnableOff: () => void;
declare const UseTimeOfDayBJ: (flag: boolean) => void;
declare const SetTerrainFogExBJ: (
  style: number,
  zstart: number,
  zend: number,
  density: number,
  red: number,
  green: number,
  blue: number
) => void;
declare const ResetTerrainFogBJ: () => void;
declare const SetDoodadAnimationBJ: (
  animName: string,
  doodadID: number,
  radius: number,
  center: location
) => void;
declare const SetDoodadAnimationRectBJ: (
  animName: string,
  doodadID: number,
  r: rect
) => void;
declare const AddUnitAnimationPropertiesBJ: (
  add: boolean,
  animProperties: string,
  whichUnit: unit
) => void;
declare const CreateImageBJ: (
  file: string,
  size: number,
  where: location,
  zOffset: number,
  imageType: number
) => image;
declare const ShowImageBJ: (flag: boolean, whichImage: image) => void;
declare const SetImagePositionBJ: (
  whichImage: image,
  where: location,
  zOffset: number
) => void;
declare const SetImageColorBJ: (
  whichImage: image,
  red: number,
  green: number,
  blue: number,
  alpha: number
) => void;
declare const GetLastCreatedImage: () => image;
declare const CreateUbersplatBJ: (
  where: location,
  name: string,
  red: number,
  green: number,
  blue: number,
  alpha: number,
  forcePaused: boolean,
  noBirthTime: boolean
) => ubersplat;
declare const ShowUbersplatBJ: (flag: boolean, whichSplat: ubersplat) => void;
declare const GetLastCreatedUbersplat: () => ubersplat;
declare const GetLastCreatedMinimapIcon: () => minimapicon;
declare const CreateMinimapIconOnUnitBJ: (
  whichUnit: unit,
  red: number,
  green: number,
  blue: number,
  pingPath: string,
  fogVisibility: fogstate
) => minimapicon;
declare const CreateMinimapIconAtLocBJ: (
  where: location,
  red: number,
  green: number,
  blue: number,
  pingPath: string,
  fogVisibility: fogstate
) => minimapicon;
declare const CreateMinimapIconBJ: (
  x: number,
  y: number,
  red: number,
  green: number,
  blue: number,
  pingPath: string,
  fogVisibility: fogstate
) => minimapicon;
declare const CampaignMinimapIconUnitBJ: (
  whichUnit: unit,
  style: number
) => void;
declare const CampaignMinimapIconLocBJ: (
  where: location,
  style: number
) => void;
declare const PlaySoundBJ: (soundHandle: sound) => void;
declare const StopSoundBJ: (soundHandle: sound, fadeOut: boolean) => void;
declare const SetSoundVolumeBJ: (
  soundHandle: sound,
  volumePercent: number
) => void;
declare const SetSoundOffsetBJ: (newOffset: number, soundHandle: sound) => void;
declare const SetSoundDistanceCutoffBJ: (
  soundHandle: sound,
  cutoff: number
) => void;
declare const SetSoundPitchBJ: (soundHandle: sound, pitch: number) => void;
declare const SetSoundPositionLocBJ: (
  soundHandle: sound,
  loc: location,
  z: number
) => void;
declare const AttachSoundToUnitBJ: (
  soundHandle: sound,
  whichUnit: unit
) => void;
declare const SetSoundConeAnglesBJ: (
  soundHandle: sound,
  inside: number,
  outside: number,
  outsideVolumePercent: number
) => void;
declare const KillSoundWhenDoneBJ: (soundHandle: sound) => void;
declare const PlaySoundAtPointBJ: (
  soundHandle: sound,
  volumePercent: number,
  loc: location,
  z: number
) => void;
declare const PlaySoundOnUnitBJ: (
  soundHandle: sound,
  volumePercent: number,
  whichUnit: unit
) => void;
declare const PlaySoundFromOffsetBJ: (
  soundHandle: sound,
  volumePercent: number,
  startingOffset: number
) => void;
declare const PlayMusicBJ: (musicFileName: string) => void;
declare const PlayMusicExBJ: (
  musicFileName: string,
  startingOffset: number,
  fadeInTime: number
) => void;
declare const SetMusicOffsetBJ: (newOffset: number) => void;
declare const PlayThematicMusicBJ: (musicName: string) => void;
declare const PlayThematicMusicExBJ: (
  musicName: string,
  startingOffset: number
) => void;
declare const SetThematicMusicOffsetBJ: (newOffset: number) => void;
declare const EndThematicMusicBJ: () => void;
declare const StopMusicBJ: (fadeOut: boolean) => void;
declare const ResumeMusicBJ: () => void;
declare const SetMusicVolumeBJ: (volumePercent: number) => void;
declare const SetThematicMusicVolumeBJ: (volumePercent: number) => void;
declare const GetSoundDurationBJ: (soundHandle: sound) => number;
declare const GetSoundFileDurationBJ: (musicFileName: string) => number;
declare const GetLastPlayedSound: () => sound;
declare const GetLastPlayedMusic: () => string;
declare const VolumeGroupSetVolumeBJ: (
  vgroup: volumegroup,
  percent: number
) => void;
declare const SetCineModeVolumeGroupsImmediateBJ: () => void;
declare const SetCineModeVolumeGroupsBJ: () => void;
declare const SetSpeechVolumeGroupsImmediateBJ: () => void;
declare const SetSpeechVolumeGroupsBJ: () => void;
declare const VolumeGroupResetImmediateBJ: () => void;
declare const VolumeGroupResetBJ: () => void;
declare const GetSoundIsPlayingBJ: (soundHandle: sound) => boolean;
declare const WaitForSoundBJ: (soundHandle: sound, offset: number) => void;
declare const SetMapMusicIndexedBJ: (musicName: string, index: number) => void;
declare const SetMapMusicRandomBJ: (musicName: string) => void;
declare const ClearMapMusicBJ: () => void;
declare const SetStackedSoundBJ: (
  add: boolean,
  soundHandle: sound,
  r: rect
) => void;
declare const StartSoundForPlayerBJ: (
  whichPlayer: player,
  soundHandle: sound
) => void;
declare const VolumeGroupSetVolumeForPlayerBJ: (
  whichPlayer: player,
  vgroup: volumegroup,
  scale: number
) => void;
declare const EnableDawnDusk: (flag: boolean) => void;
declare const IsDawnDuskEnabled: () => boolean;
declare const SetAmbientDaySound: (inLabel: string) => void;
declare const SetAmbientNightSound: (inLabel: string) => void;
declare const AddSpecialEffectLocBJ: (
  where: location,
  modelName: string
) => effect;
declare const AddSpecialEffectTargetUnitBJ: (
  attachPointName: string,
  targetWidget: widget,
  modelName: string
) => effect;
declare const DestroyEffectBJ: (whichEffect: effect) => void;
declare const GetLastCreatedEffectBJ: () => effect;
declare const CreateCommandButtonEffectBJ: (
  abilityId: number,
  order: string
) => commandbuttoneffect;
declare const CreateTrainCommandButtonEffectBJ: (
  unitId: number
) => commandbuttoneffect;
declare const CreateUpgradeCommandButtonEffectBJ: (
  techId: number
) => commandbuttoneffect;
declare const CreateCommonCommandButtonEffectBJ: (
  order: string
) => commandbuttoneffect;
declare const CreateLearnCommandButtonEffectBJ: (
  abilityId: number
) => commandbuttoneffect;
declare const CreateBuildCommandButtonEffectBJ: (
  unitId: number
) => commandbuttoneffect;
declare const GetLastCreatedCommandButtonEffectBJ: () => commandbuttoneffect;
declare const GetItemLoc: (whichItem: item) => location;
declare const GetItemLifeBJ: (whichWidget: widget) => number;
declare const SetItemLifeBJ: (whichWidget: widget, life: number) => void;
declare const AddHeroXPSwapped: (
  xpToAdd: number,
  whichHero: unit,
  showEyeCandy: boolean
) => void;
declare const SetHeroLevelBJ: (
  whichHero: unit,
  newLevel: number,
  showEyeCandy: boolean
) => void;
declare const DecUnitAbilityLevelSwapped: (
  abilcode: number,
  whichUnit: unit
) => number;
declare const IncUnitAbilityLevelSwapped: (
  abilcode: number,
  whichUnit: unit
) => number;
declare const SetUnitAbilityLevelSwapped: (
  abilcode: number,
  whichUnit: unit,
  level: number
) => number;
declare const GetUnitAbilityLevelSwapped: (
  abilcode: number,
  whichUnit: unit
) => number;
declare const UnitHasBuffBJ: (whichUnit: unit, buffcode: number) => boolean;
declare const UnitRemoveBuffBJ: (buffcode: number, whichUnit: unit) => boolean;
declare const UnitAddItemSwapped: (whichItem: item, whichHero: unit) => boolean;
declare const UnitAddItemByIdSwapped: (itemId: number, whichHero: unit) => item;
declare const UnitRemoveItemSwapped: (whichItem: item, whichHero: unit) => void;
declare const UnitRemoveItemFromSlotSwapped: (
  itemSlot: number,
  whichHero: unit
) => item;
declare const CreateItemLoc: (itemId: number, loc: location) => item;
declare const GetLastCreatedItem: () => item;
declare const GetLastRemovedItem: () => item;
declare const SetItemPositionLoc: (whichItem: item, loc: location) => void;
declare const GetLearnedSkillBJ: () => number;
declare const SuspendHeroXPBJ: (flag: boolean, whichHero: unit) => void;
declare const SetPlayerHandicapDamageBJ: (
  whichPlayer: player,
  handicapPercent: number
) => void;
declare const GetPlayerHandicapDamageBJ: (whichPlayer: player) => number;
declare const SetPlayerHandicapReviveTimeBJ: (
  whichPlayer: player,
  handicapPercent: number
) => void;
declare const GetPlayerHandicapReviveTimeBJ: (whichPlayer: player) => number;
declare const SetPlayerHandicapXPBJ: (
  whichPlayer: player,
  handicapPercent: number
) => void;
declare const GetPlayerHandicapXPBJ: (whichPlayer: player) => number;
declare const SetPlayerHandicapBJ: (
  whichPlayer: player,
  handicapPercent: number
) => void;
declare const GetPlayerHandicapBJ: (whichPlayer: player) => number;
declare const GetHeroStatBJ: (
  whichStat: number,
  whichHero: unit,
  includeBonuses: boolean
) => number;
declare const SetHeroStat: (
  whichHero: unit,
  whichStat: number,
  value: number
) => void;
declare const ModifyHeroStat: (
  whichStat: number,
  whichHero: unit,
  modifyMethod: number,
  value: number
) => void;
declare const ModifyHeroSkillPoints: (
  whichHero: unit,
  modifyMethod: number,
  value: number
) => boolean;
declare const UnitDropItemPointBJ: (
  whichUnit: unit,
  whichItem: item,
  x: number,
  y: number
) => boolean;
declare const UnitDropItemPointLoc: (
  whichUnit: unit,
  whichItem: item,
  loc: location
) => boolean;
declare const UnitDropItemSlotBJ: (
  whichUnit: unit,
  whichItem: item,
  slot: number
) => boolean;
declare const UnitDropItemTargetBJ: (
  whichUnit: unit,
  whichItem: item,
  target: widget
) => boolean;
declare const UnitUseItemDestructable: (
  whichUnit: unit,
  whichItem: item,
  target: widget
) => boolean;
declare const UnitUseItemPointLoc: (
  whichUnit: unit,
  whichItem: item,
  loc: location
) => boolean;
declare const UnitItemInSlotBJ: (whichUnit: unit, itemSlot: number) => item;
declare const GetInventoryIndexOfItemTypeBJ: (
  whichUnit: unit,
  itemId: number
) => number;
declare const GetItemOfTypeFromUnitBJ: (
  whichUnit: unit,
  itemId: number
) => item;
declare const UnitHasItemOfTypeBJ: (whichUnit: unit, itemId: number) => boolean;
declare const UnitInventoryCount: (whichUnit: unit) => number;
declare const UnitInventorySizeBJ: (whichUnit: unit) => number;
declare const SetItemInvulnerableBJ: (whichItem: item, flag: boolean) => void;
declare const SetItemDropOnDeathBJ: (whichItem: item, flag: boolean) => void;
declare const SetItemDroppableBJ: (whichItem: item, flag: boolean) => void;
declare const SetItemPlayerBJ: (
  whichItem: item,
  whichPlayer: player,
  changeColor: boolean
) => void;
declare const SetItemVisibleBJ: (show: boolean, whichItem: item) => void;
declare const IsItemHiddenBJ: (whichItem: item) => boolean;
declare const ChooseRandomItemBJ: (level: number) => number;
declare const ChooseRandomItemExBJ: (
  level: number,
  whichType: itemtype
) => number;
declare const ChooseRandomNPBuildingBJ: () => number;
declare const ChooseRandomCreepBJ: (level: number) => number;
declare const EnumItemsInRectBJ: (r: rect, actionFunc: () => void) => void;
declare const RandomItemInRectBJEnum: () => void;
declare const RandomItemInRectBJ: (r: rect, filter: () => boolean) => item;
declare const RandomItemInRectSimpleBJ: (r: rect) => item;
declare const CheckItemStatus: (whichItem: item, status: number) => boolean;
declare const CheckItemcodeStatus: (itemId: number, status: number) => boolean;
declare const UnitId2OrderIdBJ: (unitId: number) => number;
declare const String2UnitIdBJ: (unitIdString: string) => number;
declare const UnitId2StringBJ: (unitId: number) => string;
declare const String2OrderIdBJ: (orderIdString: string) => number;
declare const OrderId2StringBJ: (orderId: number) => string;
declare const GetIssuedOrderIdBJ: () => number;
declare const GetKillingUnitBJ: () => unit;
declare const CreateUnitAtLocSaveLast: (
  id: player,
  unitid: number,
  loc: location,
  face: number
) => unit;
declare const GetLastCreatedUnit: () => unit;
declare const CreateNUnitsAtLoc: (
  count: number,
  unitId: number,
  whichPlayer: player,
  loc: location,
  face: number
) => group;
declare const CreateNUnitsAtLocFacingLocBJ: (
  count: number,
  unitId: number,
  whichPlayer: player,
  loc: location,
  lookAt: location
) => group;
declare const GetLastCreatedGroupEnum: () => void;
declare const GetLastCreatedGroup: () => group;
declare const CreateCorpseLocBJ: (
  unitid: number,
  whichPlayer: player,
  loc: location
) => unit;
declare const UnitSuspendDecayBJ: (suspend: boolean, whichUnit: unit) => void;
declare const DelayedSuspendDecayStopAnimEnum: () => void;
declare const DelayedSuspendDecayBoneEnum: () => void;
declare const DelayedSuspendDecayFleshEnum: () => void;
declare const DelayedSuspendDecay: () => void;
declare const DelayedSuspendDecayCreate: () => void;
declare const CreatePermanentCorpseLocBJ: (
  style: number,
  unitid: number,
  whichPlayer: player,
  loc: location,
  facing: number
) => unit;
declare const GetUnitStateSwap: (
  whichState: unitstate,
  whichUnit: unit
) => number;
declare const GetUnitStatePercent: (
  whichUnit: unit,
  whichState: unitstate,
  whichMaxState: unitstate
) => number;
declare const GetUnitLifePercent: (whichUnit: unit) => number;
declare const GetUnitManaPercent: (whichUnit: unit) => number;
declare const SelectUnitSingle: (whichUnit: unit) => void;
declare const SelectGroupBJEnum: () => void;
declare const SelectGroupBJ: (g: group) => void;
declare const SelectUnitAdd: (whichUnit: unit) => void;
declare const SelectUnitRemove: (whichUnit: unit) => void;
declare const ClearSelectionForPlayer: (whichPlayer: player) => void;
declare const SelectUnitForPlayerSingle: (
  whichUnit: unit,
  whichPlayer: player
) => void;
declare const SelectGroupForPlayerBJ: (g: group, whichPlayer: player) => void;
declare const SelectUnitAddForPlayer: (
  whichUnit: unit,
  whichPlayer: player
) => void;
declare const SelectUnitRemoveForPlayer: (
  whichUnit: unit,
  whichPlayer: player
) => void;
declare const SetUnitLifeBJ: (whichUnit: unit, newValue: number) => void;
declare const SetUnitManaBJ: (whichUnit: unit, newValue: number) => void;
declare const SetUnitLifePercentBJ: (whichUnit: unit, percent: number) => void;
declare const SetUnitManaPercentBJ: (whichUnit: unit, percent: number) => void;
declare const IsUnitDeadBJ: (whichUnit: unit) => boolean;
declare const IsUnitAliveBJ: (whichUnit: unit) => boolean;
declare const IsUnitGroupDeadBJEnum: () => void;
declare const IsUnitGroupDeadBJ: (g: group) => boolean;
declare const IsUnitGroupEmptyBJEnum: () => void;
declare const IsUnitGroupEmptyBJ: (g: group) => boolean;
declare const IsUnitGroupInRectBJEnum: () => void;
declare const IsUnitGroupInRectBJ: (g: group, r: rect) => boolean;
declare const IsUnitHiddenBJ: (whichUnit: unit) => boolean;
declare const ShowUnitHide: (whichUnit: unit) => void;
declare const ShowUnitShow: (whichUnit: unit) => void;
declare const IssueHauntOrderAtLocBJFilter: () => boolean;
declare const IssueHauntOrderAtLocBJ: (
  whichPeon: unit,
  loc: location
) => boolean;
declare const IssueBuildOrderByIdLocBJ: (
  whichPeon: unit,
  unitId: number,
  loc: location
) => boolean;
declare const IssueTrainOrderByIdBJ: (
  whichUnit: unit,
  unitId: number
) => boolean;
declare const GroupTrainOrderByIdBJ: (g: group, unitId: number) => boolean;
declare const IssueUpgradeOrderByIdBJ: (
  whichUnit: unit,
  techId: number
) => boolean;
declare const GetAttackedUnitBJ: () => unit;
declare const SetUnitFlyHeightBJ: (
  whichUnit: unit,
  newHeight: number,
  rate: number
) => void;
declare const SetUnitTurnSpeedBJ: (whichUnit: unit, turnSpeed: number) => void;
declare const SetUnitPropWindowBJ: (
  whichUnit: unit,
  propWindow: number
) => void;
declare const GetUnitPropWindowBJ: (whichUnit: unit) => number;
declare const GetUnitDefaultPropWindowBJ: (whichUnit: unit) => number;
declare const SetUnitBlendTimeBJ: (whichUnit: unit, blendTime: number) => void;
declare const SetUnitAcquireRangeBJ: (
  whichUnit: unit,
  acquireRange: number
) => void;
declare const UnitSetCanSleepBJ: (whichUnit: unit, canSleep: boolean) => void;
declare const UnitCanSleepBJ: (whichUnit: unit) => boolean;
declare const UnitWakeUpBJ: (whichUnit: unit) => void;
declare const UnitIsSleepingBJ: (whichUnit: unit) => boolean;
declare const WakePlayerUnitsEnum: () => void;
declare const WakePlayerUnits: (whichPlayer: player) => void;
declare const EnableCreepSleepBJ: (enable: boolean) => void;
declare const UnitGenerateAlarms: (
  whichUnit: unit,
  generate: boolean
) => boolean;
declare const DoesUnitGenerateAlarms: (whichUnit: unit) => boolean;
declare const PauseAllUnitsBJEnum: () => void;
declare const PauseAllUnitsBJ: (pause: boolean) => void;
declare const PauseUnitBJ: (pause: boolean, whichUnit: unit) => void;
declare const IsUnitPausedBJ: (whichUnit: unit) => boolean;
declare const UnitPauseTimedLifeBJ: (flag: boolean, whichUnit: unit) => void;
declare const UnitApplyTimedLifeBJ: (
  duration: number,
  buffId: number,
  whichUnit: unit
) => void;
declare const UnitShareVisionBJ: (
  share: boolean,
  whichUnit: unit,
  whichPlayer: player
) => void;
declare const UnitRemoveBuffsBJ: (buffType: number, whichUnit: unit) => void;
declare const UnitRemoveBuffsExBJ: (
  polarity: number,
  resist: number,
  whichUnit: unit,
  bTLife: boolean,
  bAura: boolean
) => void;
declare const UnitCountBuffsExBJ: (
  polarity: number,
  resist: number,
  whichUnit: unit,
  bTLife: boolean,
  bAura: boolean
) => number;
declare const UnitRemoveAbilityBJ: (
  abilityId: number,
  whichUnit: unit
) => boolean;
declare const UnitAddAbilityBJ: (abilityId: number, whichUnit: unit) => boolean;
declare const UnitRemoveTypeBJ: (
  whichType: unittype,
  whichUnit: unit
) => boolean;
declare const UnitAddTypeBJ: (whichType: unittype, whichUnit: unit) => boolean;
declare const UnitMakeAbilityPermanentBJ: (
  permanent: boolean,
  abilityId: number,
  whichUnit: unit
) => boolean;
declare const SetUnitExplodedBJ: (whichUnit: unit, exploded: boolean) => void;
declare const ExplodeUnitBJ: (whichUnit: unit) => void;
declare const GetTransportUnitBJ: () => unit;
declare const GetLoadedUnitBJ: () => unit;
declare const IsUnitInTransportBJ: (
  whichUnit: unit,
  whichTransport: unit
) => boolean;
declare const IsUnitLoadedBJ: (whichUnit: unit) => boolean;
declare const IsUnitIllusionBJ: (whichUnit: unit) => boolean;
declare const ReplaceUnitBJ: (
  whichUnit: unit,
  newUnitId: number,
  unitStateMethod: number
) => unit;
declare const GetLastReplacedUnitBJ: () => unit;
declare const SetUnitPositionLocFacingBJ: (
  whichUnit: unit,
  loc: location,
  facing: number
) => void;
declare const SetUnitPositionLocFacingLocBJ: (
  whichUnit: unit,
  loc: location,
  lookAt: location
) => void;
declare const AddItemToStockBJ: (
  itemId: number,
  whichUnit: unit,
  currentStock: number,
  stockMax: number
) => void;
declare const AddUnitToStockBJ: (
  unitId: number,
  whichUnit: unit,
  currentStock: number,
  stockMax: number
) => void;
declare const RemoveItemFromStockBJ: (itemId: number, whichUnit: unit) => void;
declare const RemoveUnitFromStockBJ: (unitId: number, whichUnit: unit) => void;
declare const SetUnitUseFoodBJ: (enable: boolean, whichUnit: unit) => void;
declare const UnitDamagePointLoc: (
  whichUnit: unit,
  delay: number,
  radius: number,
  loc: location,
  amount: number,
  whichAttack: attacktype,
  whichDamage: damagetype
) => boolean;
declare const UnitDamageTargetBJ: (
  whichUnit: unit,
  target: unit,
  amount: number,
  whichAttack: attacktype,
  whichDamage: damagetype
) => boolean;
declare const CreateDestructableLoc: (
  objectid: number,
  loc: location,
  facing: number,
  scale: number,
  variation: number
) => destructable;
declare const CreateDeadDestructableLocBJ: (
  objectid: number,
  loc: location,
  facing: number,
  scale: number,
  variation: number
) => destructable;
declare const GetLastCreatedDestructable: () => destructable;
declare const ShowDestructableBJ: (flag: boolean, d: destructable) => void;
declare const SetDestructableInvulnerableBJ: (
  d: destructable,
  flag: boolean
) => void;
declare const IsDestructableInvulnerableBJ: (d: destructable) => boolean;
declare const GetDestructableLoc: (whichDestructable: destructable) => location;
declare const EnumDestructablesInRectAll: (
  r: rect,
  actionFunc: () => void
) => void;
declare const EnumDestructablesInCircleBJFilter: () => boolean;
declare const IsDestructableDeadBJ: (d: destructable) => boolean;
declare const IsDestructableAliveBJ: (d: destructable) => boolean;
declare const RandomDestructableInRectBJEnum: () => void;
declare const RandomDestructableInRectBJ: (
  r: rect,
  filter: () => boolean
) => destructable;
declare const RandomDestructableInRectSimpleBJ: (r: rect) => destructable;
declare const EnumDestructablesInCircleBJ: (
  radius: number,
  loc: location,
  actionFunc: () => void
) => void;
declare const SetDestructableLifePercentBJ: (
  d: destructable,
  percent: number
) => void;
declare const SetDestructableMaxLifeBJ: (d: destructable, max: number) => void;
declare const ModifyGateBJ: (gateOperation: number, d: destructable) => void;
declare const GetElevatorHeight: (d: destructable) => number;
declare const ChangeElevatorHeight: (
  d: destructable,
  newHeight: number
) => void;
declare const NudgeUnitsInRectEnum: () => void;
declare const NudgeItemsInRectEnum: () => void;
declare const NudgeObjectsInRect: (nudgeArea: rect) => void;
declare const NearbyElevatorExistsEnum: () => void;
declare const NearbyElevatorExists: (x: number, y: number) => boolean;
declare const FindElevatorWallBlockerEnum: () => void;
declare const ChangeElevatorWallBlocker: (
  x: number,
  y: number,
  facing: number,
  open: boolean
) => void;
declare const ChangeElevatorWalls: (
  open: boolean,
  walls: number,
  d: destructable
) => void;
declare const WaygateActivateBJ: (activate: boolean, waygate: unit) => void;
declare const WaygateIsActiveBJ: (waygate: unit) => boolean;
declare const WaygateSetDestinationLocBJ: (
  waygate: unit,
  loc: location
) => void;
declare const WaygateGetDestinationLocBJ: (waygate: unit) => location;
declare const UnitSetUsesAltIconBJ: (flag: boolean, whichUnit: unit) => void;
declare const ForceUIKeyBJ: (whichPlayer: player, key: string) => void;
declare const ForceUICancelBJ: (whichPlayer: player) => void;
declare const ForGroupBJ: (whichGroup: group, callback: () => void) => void;
declare const GroupAddUnitSimple: (whichUnit: unit, whichGroup: group) => void;
declare const GroupRemoveUnitSimple: (
  whichUnit: unit,
  whichGroup: group
) => void;
declare const GroupAddGroupEnum: () => void;
declare const GroupAddGroup: (sourceGroup: group, destGroup: group) => void;
declare const GroupRemoveGroupEnum: () => void;
declare const GroupRemoveGroup: (sourceGroup: group, destGroup: group) => void;
declare const ForceAddPlayerSimple: (
  whichPlayer: player,
  whichForce: force
) => void;
declare const ForceRemovePlayerSimple: (
  whichPlayer: player,
  whichForce: force
) => void;
declare const GroupPickRandomUnitEnum: () => void;
declare const GroupPickRandomUnit: (whichGroup: group) => unit;
declare const ForcePickRandomPlayerEnum: () => void;
declare const ForcePickRandomPlayer: (whichForce: force) => player;
declare const EnumUnitsSelected: (
  whichPlayer: player,
  enumFilter: () => boolean,
  enumAction: () => void
) => void;
declare const GetUnitsInRectMatching: (r: rect, filter: () => boolean) => group;
declare const GetUnitsInRectAll: (r: rect) => group;
declare const GetUnitsInRectOfPlayerFilter: () => boolean;
declare const GetUnitsInRectOfPlayer: (r: rect, whichPlayer: player) => group;
declare const GetUnitsInRangeOfLocMatching: (
  radius: number,
  whichLocation: location,
  filter: () => boolean
) => group;
declare const GetUnitsInRangeOfLocAll: (
  radius: number,
  whichLocation: location
) => group;
declare const GetUnitsOfTypeIdAllFilter: () => boolean;
declare const GetUnitsOfTypeIdAll: (unitid: number) => group;
declare const GetUnitsOfPlayerMatching: (
  whichPlayer: player,
  filter: () => boolean
) => group;
declare const GetUnitsOfPlayerAll: (whichPlayer: player) => group;
declare const GetUnitsOfPlayerAndTypeIdFilter: () => boolean;
declare const GetUnitsOfPlayerAndTypeId: (
  whichPlayer: player,
  unitid: number
) => group;
declare const GetUnitsSelectedAll: (whichPlayer: player) => group;
declare const GetForceOfPlayer: (whichPlayer: player) => force;
declare const GetPlayersAll: () => force;
declare const GetPlayersByMapControl: (whichControl: mapcontrol) => force;
declare const GetPlayersAllies: (whichPlayer: player) => force;
declare const GetPlayersEnemies: (whichPlayer: player) => force;
declare const GetPlayersMatching: (filter: () => boolean) => force;
declare const CountUnitsInGroupEnum: () => void;
declare const CountUnitsInGroup: (g: group) => number;
declare const CountPlayersInForceEnum: () => void;
declare const CountPlayersInForceBJ: (f: force) => number;
declare const GetRandomSubGroupEnum: () => void;
declare const GetRandomSubGroup: (count: number, sourceGroup: group) => group;
declare const LivingPlayerUnitsOfTypeIdFilter: () => boolean;
declare const CountLivingPlayerUnitsOfTypeId: (
  unitId: number,
  whichPlayer: player
) => number;
declare const ResetUnitAnimation: (whichUnit: unit) => void;
declare const SetUnitTimeScalePercent: (
  whichUnit: unit,
  percentScale: number
) => void;
declare const SetUnitScalePercent: (
  whichUnit: unit,
  percentScaleX: number,
  percentScaleY: number,
  percentScaleZ: number
) => void;
declare const SetUnitVertexColorBJ: (
  whichUnit: unit,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const UnitAddIndicatorBJ: (
  whichUnit: unit,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const DestructableAddIndicatorBJ: (
  whichDestructable: destructable,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const ItemAddIndicatorBJ: (
  whichItem: item,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const SetUnitFacingToFaceLocTimed: (
  whichUnit: unit,
  target: location,
  duration: number
) => void;
declare const SetUnitFacingToFaceUnitTimed: (
  whichUnit: unit,
  target: unit,
  duration: number
) => void;
declare const QueueUnitAnimationBJ: (
  whichUnit: unit,
  whichAnimation: string
) => void;
declare const SetDestructableAnimationBJ: (
  d: destructable,
  whichAnimation: string
) => void;
declare const QueueDestructableAnimationBJ: (
  d: destructable,
  whichAnimation: string
) => void;
declare const SetDestAnimationSpeedPercent: (
  d: destructable,
  percentScale: number
) => void;
declare const DialogDisplayBJ: (
  flag: boolean,
  whichDialog: dialog,
  whichPlayer: player
) => void;
declare const DialogSetMessageBJ: (
  whichDialog: dialog,
  message: string
) => void;
declare const DialogAddButtonBJ: (
  whichDialog: dialog,
  buttonText: string
) => button;
declare const DialogAddButtonWithHotkeyBJ: (
  whichDialog: dialog,
  buttonText: string,
  hotkey: number
) => button;
declare const DialogClearBJ: (whichDialog: dialog) => void;
declare const GetLastCreatedButtonBJ: () => button;
declare const GetClickedButtonBJ: () => button;
declare const GetClickedDialogBJ: () => dialog;
declare const SetPlayerAllianceBJ: (
  sourcePlayer: player,
  whichAllianceSetting: alliancetype,
  value: boolean,
  otherPlayer: player
) => void;
declare const SetPlayerAllianceStateAllyBJ: (
  sourcePlayer: player,
  otherPlayer: player,
  flag: boolean
) => void;
declare const SetPlayerAllianceStateVisionBJ: (
  sourcePlayer: player,
  otherPlayer: player,
  flag: boolean
) => void;
declare const SetPlayerAllianceStateControlBJ: (
  sourcePlayer: player,
  otherPlayer: player,
  flag: boolean
) => void;
declare const SetPlayerAllianceStateFullControlBJ: (
  sourcePlayer: player,
  otherPlayer: player,
  flag: boolean
) => void;
declare const SetPlayerAllianceStateBJ: (
  sourcePlayer: player,
  otherPlayer: player,
  allianceState: number
) => void;
declare const SetForceAllianceStateBJ: (
  sourceForce: force,
  targetForce: force,
  allianceState: number
) => void;
declare const PlayersAreCoAllied: (playerA: player, playerB: player) => boolean;
declare const ShareEverythingWithTeamAI: (whichPlayer: player) => void;
declare const ShareEverythingWithTeam: (whichPlayer: player) => void;
declare const ConfigureNeutralVictim: () => void;
declare const MakeUnitsPassiveForPlayerEnum: () => void;
declare const MakeUnitsPassiveForPlayer: (whichPlayer: player) => void;
declare const MakeUnitsPassiveForTeam: (whichPlayer: player) => void;
declare const AllowVictoryDefeat: (gameResult: playergameresult) => boolean;
declare const EndGameBJ: () => void;
declare const MeleeVictoryDialogBJ: (
  whichPlayer: player,
  leftGame: boolean
) => void;
declare const MeleeDefeatDialogBJ: (
  whichPlayer: player,
  leftGame: boolean
) => void;
declare const GameOverDialogBJ: (
  whichPlayer: player,
  leftGame: boolean
) => void;
declare const RemovePlayerPreserveUnitsBJ: (
  whichPlayer: player,
  gameResult: playergameresult,
  leftGame: boolean
) => void;
declare const CustomVictoryOkBJ: () => void;
declare const CustomVictoryQuitBJ: () => void;
declare const CustomVictoryDialogBJ: (whichPlayer: player) => void;
declare const CustomVictorySkipBJ: (whichPlayer: player) => void;
declare const CustomVictoryBJ: (
  whichPlayer: player,
  showDialog: boolean,
  showScores: boolean
) => void;
declare const CustomDefeatRestartBJ: () => void;
declare const CustomDefeatReduceDifficultyBJ: () => void;
declare const CustomDefeatLoadBJ: () => void;
declare const CustomDefeatQuitBJ: () => void;
declare const CustomDefeatDialogBJ: (
  whichPlayer: player,
  message: string
) => void;
declare const CustomDefeatBJ: (whichPlayer: player, message: string) => void;
declare const SetNextLevelBJ: (nextLevel: string) => void;
declare const SetPlayerOnScoreScreenBJ: (
  flag: boolean,
  whichPlayer: player
) => void;
declare const CreateQuestBJ: (
  questType: number,
  title: string,
  description: string,
  iconPath: string
) => quest;
declare const DestroyQuestBJ: (whichQuest: quest) => void;
declare const QuestSetEnabledBJ: (enabled: boolean, whichQuest: quest) => void;
declare const QuestSetTitleBJ: (whichQuest: quest, title: string) => void;
declare const QuestSetDescriptionBJ: (
  whichQuest: quest,
  description: string
) => void;
declare const QuestSetCompletedBJ: (
  whichQuest: quest,
  completed: boolean
) => void;
declare const QuestSetFailedBJ: (whichQuest: quest, failed: boolean) => void;
declare const QuestSetDiscoveredBJ: (
  whichQuest: quest,
  discovered: boolean
) => void;
declare const GetLastCreatedQuestBJ: () => quest;
declare const CreateQuestItemBJ: (
  whichQuest: quest,
  description: string
) => questitem;
declare const QuestItemSetDescriptionBJ: (
  whichQuestItem: questitem,
  description: string
) => void;
declare const QuestItemSetCompletedBJ: (
  whichQuestItem: questitem,
  completed: boolean
) => void;
declare const GetLastCreatedQuestItemBJ: () => questitem;
declare const CreateDefeatConditionBJ: (description: string) => defeatcondition;
declare const DestroyDefeatConditionBJ: (
  whichCondition: defeatcondition
) => void;
declare const DefeatConditionSetDescriptionBJ: (
  whichCondition: defeatcondition,
  description: string
) => void;
declare const GetLastCreatedDefeatConditionBJ: () => defeatcondition;
declare const FlashQuestDialogButtonBJ: () => void;
declare const QuestMessageBJ: (
  f: force,
  messageType: number,
  message: string
) => void;
declare const StartTimerBJ: (
  t: timer,
  periodic: boolean,
  timeout: number
) => timer;
declare const CreateTimerBJ: (periodic: boolean, timeout: number) => timer;
declare const DestroyTimerBJ: (whichTimer: timer) => void;
declare const PauseTimerBJ: (pause: boolean, whichTimer: timer) => void;
declare const GetLastCreatedTimerBJ: () => timer;
declare const CreateTimerDialogBJ: (t: timer, title: string) => timerdialog;
declare const DestroyTimerDialogBJ: (td: timerdialog) => void;
declare const TimerDialogSetTitleBJ: (td: timerdialog, title: string) => void;
declare const TimerDialogSetTitleColorBJ: (
  td: timerdialog,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const TimerDialogSetTimeColorBJ: (
  td: timerdialog,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const TimerDialogSetSpeedBJ: (
  td: timerdialog,
  speedMultFactor: number
) => void;
declare const TimerDialogDisplayForPlayerBJ: (
  show: boolean,
  td: timerdialog,
  whichPlayer: player
) => void;
declare const TimerDialogDisplayBJ: (show: boolean, td: timerdialog) => void;
declare const GetLastCreatedTimerDialogBJ: () => timerdialog;
declare const LeaderboardResizeBJ: (lb: leaderboard) => void;
declare const LeaderboardSetPlayerItemValueBJ: (
  whichPlayer: player,
  lb: leaderboard,
  val: number
) => void;
declare const LeaderboardSetPlayerItemLabelBJ: (
  whichPlayer: player,
  lb: leaderboard,
  val: string
) => void;
declare const LeaderboardSetPlayerItemStyleBJ: (
  whichPlayer: player,
  lb: leaderboard,
  showLabel: boolean,
  showValue: boolean,
  showIcon: boolean
) => void;
declare const LeaderboardSetPlayerItemLabelColorBJ: (
  whichPlayer: player,
  lb: leaderboard,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const LeaderboardSetPlayerItemValueColorBJ: (
  whichPlayer: player,
  lb: leaderboard,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const LeaderboardSetLabelColorBJ: (
  lb: leaderboard,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const LeaderboardSetValueColorBJ: (
  lb: leaderboard,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const LeaderboardSetLabelBJ: (lb: leaderboard, label: string) => void;
declare const LeaderboardSetStyleBJ: (
  lb: leaderboard,
  showLabel: boolean,
  showNames: boolean,
  showValues: boolean,
  showIcons: boolean
) => void;
declare const LeaderboardGetItemCountBJ: (lb: leaderboard) => number;
declare const LeaderboardHasPlayerItemBJ: (
  lb: leaderboard,
  whichPlayer: player
) => boolean;
declare const ForceSetLeaderboardBJ: (lb: leaderboard, toForce: force) => void;
declare const CreateLeaderboardBJ: (
  toForce: force,
  label: string
) => leaderboard;
declare const DestroyLeaderboardBJ: (lb: leaderboard) => void;
declare const LeaderboardDisplayBJ: (show: boolean, lb: leaderboard) => void;
declare const LeaderboardAddItemBJ: (
  whichPlayer: player,
  lb: leaderboard,
  label: string,
  value: number
) => void;
declare const LeaderboardRemovePlayerItemBJ: (
  whichPlayer: player,
  lb: leaderboard
) => void;
declare const LeaderboardSortItemsBJ: (
  lb: leaderboard,
  sortType: number,
  ascending: boolean
) => void;
declare const LeaderboardSortItemsByPlayerBJ: (
  lb: leaderboard,
  ascending: boolean
) => void;
declare const LeaderboardSortItemsByLabelBJ: (
  lb: leaderboard,
  ascending: boolean
) => void;
declare const LeaderboardGetPlayerIndexBJ: (
  whichPlayer: player,
  lb: leaderboard
) => number;
declare const LeaderboardGetIndexedPlayerBJ: (
  position: number,
  lb: leaderboard
) => player;
declare const PlayerGetLeaderboardBJ: (whichPlayer: player) => leaderboard;
declare const GetLastCreatedLeaderboard: () => leaderboard;
declare const CreateMultiboardBJ: (
  cols: number,
  rows: number,
  title: string
) => multiboard;
declare const DestroyMultiboardBJ: (mb: multiboard) => void;
declare const GetLastCreatedMultiboard: () => multiboard;
declare const MultiboardDisplayBJ: (show: boolean, mb: multiboard) => void;
declare const MultiboardMinimizeBJ: (minimize: boolean, mb: multiboard) => void;
declare const MultiboardSetTitleTextColorBJ: (
  mb: multiboard,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const MultiboardAllowDisplayBJ: (flag: boolean) => void;
declare const MultiboardSetItemStyleBJ: (
  mb: multiboard,
  col: number,
  row: number,
  showValue: boolean,
  showIcon: boolean
) => void;
declare const MultiboardSetItemValueBJ: (
  mb: multiboard,
  col: number,
  row: number,
  val: string
) => void;
declare const MultiboardSetItemColorBJ: (
  mb: multiboard,
  col: number,
  row: number,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const MultiboardSetItemWidthBJ: (
  mb: multiboard,
  col: number,
  row: number,
  width: number
) => void;
declare const MultiboardSetItemIconBJ: (
  mb: multiboard,
  col: number,
  row: number,
  iconFileName: string
) => void;
declare const TextTagSize2Height: (size: number) => number;
declare const TextTagSpeed2Velocity: (speed: number) => number;
declare const SetTextTagColorBJ: (
  tt: texttag,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => void;
declare const SetTextTagVelocityBJ: (
  tt: texttag,
  speed: number,
  angle: number
) => void;
declare const SetTextTagTextBJ: (tt: texttag, s: string, size: number) => void;
declare const SetTextTagPosBJ: (
  tt: texttag,
  loc: location,
  zOffset: number
) => void;
declare const SetTextTagPosUnitBJ: (
  tt: texttag,
  whichUnit: unit,
  zOffset: number
) => void;
declare const SetTextTagSuspendedBJ: (tt: texttag, flag: boolean) => void;
declare const SetTextTagPermanentBJ: (tt: texttag, flag: boolean) => void;
declare const SetTextTagAgeBJ: (tt: texttag, age: number) => void;
declare const SetTextTagLifespanBJ: (tt: texttag, lifespan: number) => void;
declare const SetTextTagFadepointBJ: (tt: texttag, fadepoint: number) => void;
declare const CreateTextTagLocBJ: (
  s: string,
  loc: location,
  zOffset: number,
  size: number,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => texttag;
declare const CreateTextTagUnitBJ: (
  s: string,
  whichUnit: unit,
  zOffset: number,
  size: number,
  red: number,
  green: number,
  blue: number,
  transparency: number
) => texttag;
declare const DestroyTextTagBJ: (tt: texttag) => void;
declare const ShowTextTagForceBJ: (
  show: boolean,
  tt: texttag,
  whichForce: force
) => void;
declare const GetLastCreatedTextTag: () => texttag;
declare const PauseGameOn: () => void;
declare const PauseGameOff: () => void;
declare const SetUserControlForceOn: (whichForce: force) => void;
declare const SetUserControlForceOff: (whichForce: force) => void;
declare const ShowInterfaceForceOn: (
  whichForce: force,
  fadeDuration: number
) => void;
declare const ShowInterfaceForceOff: (
  whichForce: force,
  fadeDuration: number
) => void;
declare const PingMinimapForForce: (
  whichForce: force,
  x: number,
  y: number,
  duration: number
) => void;
declare const PingMinimapLocForForce: (
  whichForce: force,
  loc: location,
  duration: number
) => void;
declare const PingMinimapForPlayer: (
  whichPlayer: player,
  x: number,
  y: number,
  duration: number
) => void;
declare const PingMinimapLocForPlayer: (
  whichPlayer: player,
  loc: location,
  duration: number
) => void;
declare const PingMinimapForForceEx: (
  whichForce: force,
  x: number,
  y: number,
  duration: number,
  style: number,
  red: number,
  green: number,
  blue: number
) => void;
declare const PingMinimapLocForForceEx: (
  whichForce: force,
  loc: location,
  duration: number,
  style: number,
  red: number,
  green: number,
  blue: number
) => void;
declare const EnableWorldFogBoundaryBJ: (enable: boolean, f: force) => void;
declare const EnableOcclusionBJ: (enable: boolean, f: force) => void;
declare const CancelCineSceneBJ: () => void;
declare const TryInitCinematicBehaviorBJ: () => void;
declare const SetCinematicSceneBJ: (
  soundHandle: sound,
  portraitUnitId: number,
  color: playercolor,
  speakerTitle: string,
  text: string,
  sceneDuration: number,
  voiceoverDuration: number
) => void;
declare const GetTransmissionDuration: (
  soundHandle: sound,
  timeType: number,
  timeVal: number
) => number;
declare const WaitTransmissionDuration: (
  soundHandle: sound,
  timeType: number,
  timeVal: number
) => void;
declare const DoTransmissionBasicsXYBJ: (
  unitId: number,
  color: playercolor,
  x: number,
  y: number,
  soundHandle: sound,
  unitName: string,
  message: string,
  duration: number
) => void;
declare const TransmissionFromUnitWithNameBJ: (
  toForce: force,
  whichUnit: unit,
  unitName: string,
  soundHandle: sound,
  message: string,
  timeType: number,
  timeVal: number,
  wait: boolean
) => void;
declare const PlayDialogueFromSpeakerEx: (
  toForce: force,
  speaker: unit,
  speakerType: number,
  soundHandle: sound,
  timeType: number,
  timeVal: number,
  wait: boolean
) => boolean;
declare const PlayDialogueFromSpeakerTypeEx: (
  toForce: force,
  fromPlayer: player,
  speakerType: number,
  loc: location,
  soundHandle: sound,
  timeType: number,
  timeVal: number,
  wait: boolean
) => boolean;
declare const TransmissionFromUnitTypeWithNameBJ: (
  toForce: force,
  fromPlayer: player,
  unitId: number,
  unitName: string,
  loc: location,
  soundHandle: sound,
  message: string,
  timeType: number,
  timeVal: number,
  wait: boolean
) => void;
declare const GetLastTransmissionDurationBJ: () => number;
declare const ForceCinematicSubtitlesBJ: (flag: boolean) => void;
declare const CinematicModeExBJ: (
  cineMode: boolean,
  forForce: force,
  interfaceFadeTime: number
) => void;
declare const CinematicModeBJ: (cineMode: boolean, forForce: force) => void;
declare const DisplayCineFilterBJ: (flag: boolean) => void;
declare const CinematicFadeCommonBJ: (
  red: number,
  green: number,
  blue: number,
  duration: number,
  tex: string,
  startTrans: number,
  endTrans: number
) => void;
declare const FinishCinematicFadeBJ: () => void;
declare const FinishCinematicFadeAfterBJ: (duration: number) => void;
declare const ContinueCinematicFadeBJ: () => void;
declare const ContinueCinematicFadeAfterBJ: (
  duration: number,
  red: number,
  green: number,
  blue: number,
  trans: number,
  tex: string
) => void;
declare const AbortCinematicFadeBJ: () => void;
declare const CinematicFadeBJ: (
  fadetype: number,
  duration: number,
  tex: string,
  red: number,
  green: number,
  blue: number,
  trans: number
) => void;
declare const CinematicFilterGenericBJ: (
  duration: number,
  bmode: blendmode,
  tex: string,
  red0: number,
  green0: number,
  blue0: number,
  trans0: number,
  red1: number,
  green1: number,
  blue1: number,
  trans1: number
) => void;
declare const RescueUnitBJ: (
  whichUnit: unit,
  rescuer: player,
  changeColor: boolean
) => void;
declare const TriggerActionUnitRescuedBJ: () => void;
declare const TryInitRescuableTriggersBJ: () => void;
declare const SetRescueUnitColorChangeBJ: (changeColor: boolean) => void;
declare const SetRescueBuildingColorChangeBJ: (changeColor: boolean) => void;
declare const MakeUnitRescuableToForceBJEnum: () => void;
declare const MakeUnitRescuableToForceBJ: (
  whichUnit: unit,
  isRescuable: boolean,
  whichForce: force
) => void;
declare const InitRescuableBehaviorBJ: () => void;
declare const SetPlayerTechResearchedSwap: (
  techid: number,
  levels: number,
  whichPlayer: player
) => void;
declare const SetPlayerTechMaxAllowedSwap: (
  techid: number,
  maximum: number,
  whichPlayer: player
) => void;
declare const SetPlayerMaxHeroesAllowed: (
  maximum: number,
  whichPlayer: player
) => void;
declare const GetPlayerTechCountSimple: (
  techid: number,
  whichPlayer: player
) => number;
declare const GetPlayerTechMaxAllowedSwap: (
  techid: number,
  whichPlayer: player
) => number;
declare const SetPlayerAbilityAvailableBJ: (
  avail: boolean,
  abilid: number,
  whichPlayer: player
) => void;
declare const SetCampaignMenuRaceBJ: (campaignNumber: number) => void;
declare const SetMissionAvailableBJ: (
  available: boolean,
  missionIndex: number
) => void;
declare const SetCampaignAvailableBJ: (
  available: boolean,
  campaignNumber: number
) => void;
declare const SetCinematicAvailableBJ: (
  available: boolean,
  cinematicIndex: number
) => void;
declare const InitGameCacheBJ: (campaignFile: string) => gamecache;
declare const SaveGameCacheBJ: (cache: gamecache) => boolean;
declare const GetLastCreatedGameCacheBJ: () => gamecache;
declare const InitHashtableBJ: () => hashtable;
declare const GetLastCreatedHashtableBJ: () => hashtable;
declare const StoreRealBJ: (
  value: number,
  key: string,
  missionKey: string,
  cache: gamecache
) => void;
declare const StoreIntegerBJ: (
  value: number,
  key: string,
  missionKey: string,
  cache: gamecache
) => void;
declare const StoreBooleanBJ: (
  value: boolean,
  key: string,
  missionKey: string,
  cache: gamecache
) => void;
declare const StoreStringBJ: (
  value: string,
  key: string,
  missionKey: string,
  cache: gamecache
) => boolean;
declare const StoreUnitBJ: (
  whichUnit: unit,
  key: string,
  missionKey: string,
  cache: gamecache
) => boolean;
declare const SaveRealBJ: (
  value: number,
  key: number,
  missionKey: number,
  table: hashtable
) => void;
declare const SaveIntegerBJ: (
  value: number,
  key: number,
  missionKey: number,
  table: hashtable
) => void;
declare const SaveBooleanBJ: (
  value: boolean,
  key: number,
  missionKey: number,
  table: hashtable
) => void;
declare const SaveStringBJ: (
  value: string,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SavePlayerHandleBJ: (
  whichPlayer: player,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveWidgetHandleBJ: (
  whichWidget: widget,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveDestructableHandleBJ: (
  whichDestructable: destructable,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveItemHandleBJ: (
  whichItem: item,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveUnitHandleBJ: (
  whichUnit: unit,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveAbilityHandleBJ: (
  whichAbility: ability,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveTimerHandleBJ: (
  whichTimer: timer,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveTriggerHandleBJ: (
  whichTrigger: trigger,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveTriggerConditionHandleBJ: (
  whichTriggercondition: () => boolean,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveTriggerActionHandleBJ: (
  whichTriggeraction: () => void,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveTriggerEventHandleBJ: (
  whichEvent: event,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveForceHandleBJ: (
  whichForce: force,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveGroupHandleBJ: (
  whichGroup: group,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveLocationHandleBJ: (
  whichLocation: location,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveRectHandleBJ: (
  whichRect: rect,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveBooleanExprHandleBJ: (
  whichBoolexpr: () => boolean,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveSoundHandleBJ: (
  whichSound: sound,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveEffectHandleBJ: (
  whichEffect: effect,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveUnitPoolHandleBJ: (
  whichUnitpool: unitpool,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveItemPoolHandleBJ: (
  whichItempool: itempool,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveQuestHandleBJ: (
  whichQuest: quest,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveQuestItemHandleBJ: (
  whichQuestitem: questitem,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveDefeatConditionHandleBJ: (
  whichDefeatcondition: defeatcondition,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveTimerDialogHandleBJ: (
  whichTimerdialog: timerdialog,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveLeaderboardHandleBJ: (
  whichLeaderboard: leaderboard,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveMultiboardHandleBJ: (
  whichMultiboard: multiboard,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveMultiboardItemHandleBJ: (
  whichMultiboarditem: multiboarditem,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveTrackableHandleBJ: (
  whichTrackable: trackable,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveDialogHandleBJ: (
  whichDialog: dialog,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveButtonHandleBJ: (
  whichButton: button,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveTextTagHandleBJ: (
  whichTexttag: texttag,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveLightningHandleBJ: (
  whichLightning: lightning,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveImageHandleBJ: (
  whichImage: image,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveUbersplatHandleBJ: (
  whichUbersplat: ubersplat,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveRegionHandleBJ: (
  whichRegion: region,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveFogStateHandleBJ: (
  whichFogState: fogstate,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveFogModifierHandleBJ: (
  whichFogModifier: fogmodifier,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveAgentHandleBJ: (
  whichAgent: agent,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const SaveHashtableHandleBJ: (
  whichHashtable: hashtable,
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const GetStoredRealBJ: (
  key: string,
  missionKey: string,
  cache: gamecache
) => number;
declare const GetStoredIntegerBJ: (
  key: string,
  missionKey: string,
  cache: gamecache
) => number;
declare const GetStoredBooleanBJ: (
  key: string,
  missionKey: string,
  cache: gamecache
) => boolean;
declare const GetStoredStringBJ: (
  key: string,
  missionKey: string,
  cache: gamecache
) => string;
declare const LoadRealBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => number;
declare const LoadIntegerBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => number;
declare const LoadBooleanBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const LoadStringBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => string;
declare const LoadPlayerHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => player;
declare const LoadWidgetHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => widget;
declare const LoadDestructableHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => destructable;
declare const LoadItemHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => item;
declare const LoadUnitHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => unit;
declare const LoadAbilityHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => ability;
declare const LoadTimerHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => timer;
declare const LoadTriggerHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => trigger;
declare const LoadTriggerConditionHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => triggercondition;
declare const LoadTriggerActionHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => triggeraction;
declare const LoadTriggerEventHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => event;
declare const LoadForceHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => force;
declare const LoadGroupHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => group;
declare const LoadLocationHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => location;
declare const LoadRectHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => rect;
declare const LoadBooleanExprHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => boolexpr;
declare const LoadSoundHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => sound;
declare const LoadEffectHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => effect;
declare const LoadUnitPoolHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => unitpool;
declare const LoadItemPoolHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => itempool;
declare const LoadQuestHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => quest;
declare const LoadQuestItemHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => questitem;
declare const LoadDefeatConditionHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => defeatcondition;
declare const LoadTimerDialogHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => timerdialog;
declare const LoadLeaderboardHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => leaderboard;
declare const LoadMultiboardHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => multiboard;
declare const LoadMultiboardItemHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => multiboarditem;
declare const LoadTrackableHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => trackable;
declare const LoadDialogHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => dialog;
declare const LoadButtonHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => button;
declare const LoadTextTagHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => texttag;
declare const LoadLightningHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => lightning;
declare const LoadImageHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => image;
declare const LoadUbersplatHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => ubersplat;
declare const LoadRegionHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => region;
declare const LoadFogStateHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => fogstate;
declare const LoadFogModifierHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => fogmodifier;
declare const LoadHashtableHandleBJ: (
  key: number,
  missionKey: number,
  table: hashtable
) => hashtable;
declare const RestoreUnitLocFacingAngleBJ: (
  key: string,
  missionKey: string,
  cache: gamecache,
  forWhichPlayer: player,
  loc: location,
  facing: number
) => unit;
declare const RestoreUnitLocFacingPointBJ: (
  key: string,
  missionKey: string,
  cache: gamecache,
  forWhichPlayer: player,
  loc: location,
  lookAt: location
) => unit;
declare const GetLastRestoredUnitBJ: () => unit;
declare const FlushGameCacheBJ: (cache: gamecache) => void;
declare const FlushStoredMissionBJ: (
  missionKey: string,
  cache: gamecache
) => void;
declare const FlushParentHashtableBJ: (table: hashtable) => void;
declare const FlushChildHashtableBJ: (
  missionKey: number,
  table: hashtable
) => void;
declare const HaveStoredValue: (
  key: string,
  valueType: number,
  missionKey: string,
  cache: gamecache
) => boolean;
declare const HaveSavedValue: (
  key: number,
  valueType: number,
  missionKey: number,
  table: hashtable
) => boolean;
declare const ShowCustomCampaignButton: (
  show: boolean,
  whichButton: number
) => void;
declare const IsCustomCampaignButtonVisibile: (whichButton: number) => boolean;
declare const SaveGameCheckPointBJ: (
  mapSaveName: string,
  doCheckpointHint: boolean
) => void;
declare const LoadGameBJ: (
  loadFileName: string,
  doScoreScreen: boolean
) => void;
declare const SaveAndChangeLevelBJ: (
  saveFileName: string,
  newLevel: string,
  doScoreScreen: boolean
) => void;
declare const SaveAndLoadGameBJ: (
  saveFileName: string,
  loadFileName: string,
  doScoreScreen: boolean
) => void;
declare const RenameSaveDirectoryBJ: (
  sourceDirName: string,
  destDirName: string
) => boolean;
declare const RemoveSaveDirectoryBJ: (sourceDirName: string) => boolean;
declare const CopySaveGameBJ: (
  sourceSaveName: string,
  destSaveName: string
) => boolean;
declare const GetPlayerStartLocationX: (whichPlayer: player) => number;
declare const GetPlayerStartLocationY: (whichPlayer: player) => number;
declare const GetPlayerStartLocationLoc: (whichPlayer: player) => location;
declare const GetRectCenter: (whichRect: rect) => location;
declare const IsPlayerSlotState: (
  whichPlayer: player,
  whichState: playerslotstate
) => boolean;
declare const GetFadeFromSeconds: (seconds: number) => number;
declare const GetFadeFromSecondsAsReal: (seconds: number) => number;
declare const AdjustPlayerStateSimpleBJ: (
  whichPlayer: player,
  whichPlayerState: playerstate,
  delta: number
) => void;
declare const AdjustPlayerStateBJ: (
  delta: number,
  whichPlayer: player,
  whichPlayerState: playerstate
) => void;
declare const SetPlayerStateBJ: (
  whichPlayer: player,
  whichPlayerState: playerstate,
  value: number
) => void;
declare const SetPlayerFlagBJ: (
  whichPlayerFlag: playerstate,
  flag: boolean,
  whichPlayer: player
) => void;
declare const SetPlayerTaxRateBJ: (
  rate: number,
  whichResource: playerstate,
  sourcePlayer: player,
  otherPlayer: player
) => void;
declare const GetPlayerTaxRateBJ: (
  whichResource: playerstate,
  sourcePlayer: player,
  otherPlayer: player
) => number;
declare const IsPlayerFlagSetBJ: (
  whichPlayerFlag: playerstate,
  whichPlayer: player
) => boolean;
declare const AddResourceAmountBJ: (delta: number, whichUnit: unit) => void;
declare const GetConvertedPlayerId: (whichPlayer: player) => number;
declare const ConvertedPlayer: (convertedPlayerId: number) => player;
declare const GetRectWidthBJ: (r: rect) => number;
declare const GetRectHeightBJ: (r: rect) => number;
declare const BlightGoldMineForPlayerBJ: (
  goldMine: unit,
  whichPlayer: player
) => unit;
declare const BlightGoldMineForPlayer: (
  goldMine: unit,
  whichPlayer: player
) => unit;
declare const GetLastHauntedGoldMine: () => unit;
declare const IsPointBlightedBJ: (where: location) => boolean;
declare const SetPlayerColorBJEnum: () => void;
declare const SetPlayerColorBJ: (
  whichPlayer: player,
  color: playercolor,
  changeExisting: boolean
) => void;
declare const SetPlayerUnitAvailableBJ: (
  unitId: number,
  allowed: boolean,
  whichPlayer: player
) => void;
declare const LockGameSpeedBJ: () => void;
declare const UnlockGameSpeedBJ: () => void;
declare const IssueTargetOrderBJ: (
  whichUnit: unit,
  order: string,
  targetWidget: widget
) => boolean;
declare const IssuePointOrderLocBJ: (
  whichUnit: unit,
  order: string,
  whichLocation: location
) => boolean;
declare const IssueTargetDestructableOrder: (
  whichUnit: unit,
  order: string,
  targetWidget: widget
) => boolean;
declare const IssueTargetItemOrder: (
  whichUnit: unit,
  order: string,
  targetWidget: widget
) => boolean;
declare const IssueImmediateOrderBJ: (
  whichUnit: unit,
  order: string
) => boolean;
declare const GroupTargetOrderBJ: (
  whichGroup: group,
  order: string,
  targetWidget: widget
) => boolean;
declare const GroupPointOrderLocBJ: (
  whichGroup: group,
  order: string,
  whichLocation: location
) => boolean;
declare const GroupImmediateOrderBJ: (
  whichGroup: group,
  order: string
) => boolean;
declare const GroupTargetDestructableOrder: (
  whichGroup: group,
  order: string,
  targetWidget: widget
) => boolean;
declare const GroupTargetItemOrder: (
  whichGroup: group,
  order: string,
  targetWidget: widget
) => boolean;
declare const GetDyingDestructable: () => destructable;
declare const SetUnitRallyPoint: (whichUnit: unit, targPos: location) => void;
declare const SetUnitRallyUnit: (whichUnit: unit, targUnit: unit) => void;
declare const SetUnitRallyDestructable: (
  whichUnit: unit,
  targDest: destructable
) => void;
declare const SaveDyingWidget: () => void;
declare const SetBlightRectBJ: (
  addBlight: boolean,
  whichPlayer: player,
  r: rect
) => void;
declare const SetBlightRadiusLocBJ: (
  addBlight: boolean,
  whichPlayer: player,
  loc: location,
  radius: number
) => void;
declare const GetAbilityName: (abilcode: number) => string;
declare const MeleeStartingVisibility: () => void;
declare const MeleeStartingResources: () => void;
declare const ReducePlayerTechMaxAllowed: (
  whichPlayer: player,
  techId: number,
  limit: number
) => void;
declare const MeleeStartingHeroLimit: () => void;
declare const MeleeTrainedUnitIsHeroBJFilter: () => boolean;
declare const MeleeGrantItemsToHero: (whichUnit: unit) => void;
declare const MeleeGrantItemsToTrainedHero: () => void;
declare const MeleeGrantItemsToHiredHero: () => void;
declare const MeleeGrantHeroItems: () => void;
declare const MeleeClearExcessUnit: () => void;
declare const MeleeClearNearbyUnits: (
  x: number,
  y: number,
  range: number
) => void;
declare const MeleeClearExcessUnits: () => void;
declare const MeleeEnumFindNearestMine: () => void;
declare const MeleeFindNearestMine: (src: location, range: number) => unit;
declare const MeleeRandomHeroLoc: (
  p: player,
  id1: number,
  id2: number,
  id3: number,
  id4: number,
  loc: location
) => unit;
declare const MeleeGetProjectedLoc: (
  src: location,
  targ: location,
  distance: number,
  deltaAngle: number
) => location;
declare const MeleeGetNearestValueWithin: (
  val: number,
  minVal: number,
  maxVal: number
) => number;
declare const MeleeGetLocWithinRect: (src: location, r: rect) => location;
declare const MeleeStartingUnitsHuman: (
  whichPlayer: player,
  startLoc: location,
  doHeroes: boolean,
  doCamera: boolean,
  doPreload: boolean
) => void;
declare const MeleeStartingUnitsOrc: (
  whichPlayer: player,
  startLoc: location,
  doHeroes: boolean,
  doCamera: boolean,
  doPreload: boolean
) => void;
declare const MeleeStartingUnitsUndead: (
  whichPlayer: player,
  startLoc: location,
  doHeroes: boolean,
  doCamera: boolean,
  doPreload: boolean
) => void;
declare const MeleeStartingUnitsNightElf: (
  whichPlayer: player,
  startLoc: location,
  doHeroes: boolean,
  doCamera: boolean,
  doPreload: boolean
) => void;
declare const MeleeStartingUnitsUnknownRace: (
  whichPlayer: player,
  startLoc: location,
  doHeroes: boolean,
  doCamera: boolean,
  doPreload: boolean
) => void;
declare const MeleeStartingUnits: () => void;
declare const MeleeStartingUnitsForPlayer: (
  whichRace: race,
  whichPlayer: player,
  loc: location,
  doHeroes: boolean
) => void;
declare const PickMeleeAI: (
  num: player,
  s1: string,
  s2: string,
  s3: string
) => void;
declare const MeleeStartingAI: () => void;
declare const LockGuardPosition: (targ: unit) => void;
declare const MeleePlayerIsOpponent: (
  playerIndex: number,
  opponentIndex: number
) => boolean;
declare const MeleeGetAllyStructureCount: (whichPlayer: player) => number;
declare const MeleeGetAllyCount: (whichPlayer: player) => number;
declare const MeleeGetAllyKeyStructureCount: (whichPlayer: player) => number;
declare const MeleeDoDrawEnum: () => void;
declare const MeleeDoVictoryEnum: () => void;
declare const MeleeDoDefeat: (whichPlayer: player) => void;
declare const MeleeDoDefeatEnum: () => void;
declare const MeleeDoLeave: (whichPlayer: player) => void;
declare const MeleeRemoveObservers: () => void;
declare const MeleeCheckForVictors: () => force;
declare const MeleeCheckForLosersAndVictors: () => void;
declare const MeleeGetCrippledWarningMessage: (whichPlayer: player) => string;
declare const MeleeGetCrippledTimerMessage: (whichPlayer: player) => string;
declare const MeleeGetCrippledRevealedMessage: (whichPlayer: player) => string;
declare const MeleeExposePlayer: (whichPlayer: player, expose: boolean) => void;
declare const MeleeExposeAllPlayers: () => void;
declare const MeleeCrippledPlayerTimeout: () => void;
declare const MeleePlayerIsCrippled: (whichPlayer: player) => boolean;
declare const MeleeCheckForCrippledPlayers: () => void;
declare const MeleeCheckLostUnit: (lostUnit: unit) => void;
declare const MeleeCheckAddedUnit: (addedUnit: unit) => void;
declare const MeleeTriggerActionConstructCancel: () => void;
declare const MeleeTriggerActionUnitDeath: () => void;
declare const MeleeTriggerActionUnitConstructionStart: () => void;
declare const MeleeTriggerActionPlayerDefeated: () => void;
declare const MeleeTriggerActionPlayerLeft: () => void;
declare const MeleeTriggerActionAllianceChange: () => void;
declare const MeleeTriggerTournamentFinishSoon: () => void;
declare const MeleeWasUserPlayer: (whichPlayer: player) => boolean;
declare const MeleeTournamentFinishNowRuleA: (multiplier: number) => void;
declare const MeleeTriggerTournamentFinishNow: () => void;
declare const MeleeInitVictoryDefeat: () => void;
declare const CheckInitPlayerSlotAvailability: () => void;
declare const SetPlayerSlotAvailable: (
  whichPlayer: player,
  control: mapcontrol
) => void;
declare const TeamInitPlayerSlots: (teamCount: number) => void;
declare const MeleeInitPlayerSlots: () => void;
declare const FFAInitPlayerSlots: () => void;
declare const OneOnOneInitPlayerSlots: () => void;
declare const InitGenericPlayerSlots: () => void;
declare const SetDNCSoundsDawn: () => void;
declare const SetDNCSoundsDusk: () => void;
declare const SetDNCSoundsDay: () => void;
declare const SetDNCSoundsNight: () => void;
declare const InitDNCSounds: () => void;
declare const InitBlizzardGlobals: () => void;
declare const InitQueuedTriggers: () => void;
declare const InitMapRects: () => void;
declare const InitSummonableCaps: () => void;
declare const UpdateStockAvailability: (whichItem: item) => void;
declare const UpdateEachStockBuildingEnum: () => void;
declare const UpdateEachStockBuilding: (
  iType: itemtype,
  iLevel: number
) => void;
declare const PerformStockUpdates: () => void;
declare const StartStockUpdates: () => void;
declare const RemovePurchasedItem: () => void;
declare const InitNeutralBuildings: () => void;
declare const MarkGameStarted: () => void;
declare const DetectGameStarted: () => void;
declare const InitBlizzard: () => void;
declare const RandomDistReset: () => void;
declare const RandomDistAddItem: (inID: number, inChance: number) => void;
declare const RandomDistChoose: () => number;
declare const UnitDropItem: (inUnit: unit, inItemID: number) => item;
declare const WidgetDropItem: (inWidget: widget, inItemID: number) => item;
declare const BlzIsLastInstanceObjectFunctionSuccessful: () => boolean;
declare const BlzSetAbilityBooleanFieldBJ: (
  whichAbility: ability,
  whichField: abilitybooleanfield,
  value: boolean
) => void;
declare const BlzSetAbilityIntegerFieldBJ: (
  whichAbility: ability,
  whichField: abilityintegerfield,
  value: number
) => void;
declare const BlzSetAbilityRealFieldBJ: (
  whichAbility: ability,
  whichField: abilityrealfield,
  value: number
) => void;
declare const BlzSetAbilityStringFieldBJ: (
  whichAbility: ability,
  whichField: abilitystringfield,
  value: string
) => void;
declare const BlzSetAbilityBooleanLevelFieldBJ: (
  whichAbility: ability,
  whichField: abilitybooleanlevelfield,
  level: number,
  value: boolean
) => void;
declare const BlzSetAbilityIntegerLevelFieldBJ: (
  whichAbility: ability,
  whichField: abilityintegerlevelfield,
  level: number,
  value: number
) => void;
declare const BlzSetAbilityRealLevelFieldBJ: (
  whichAbility: ability,
  whichField: abilityreallevelfield,
  level: number,
  value: number
) => void;
declare const BlzSetAbilityStringLevelFieldBJ: (
  whichAbility: ability,
  whichField: abilitystringlevelfield,
  level: number,
  value: string
) => void;
declare const BlzSetAbilityBooleanLevelArrayFieldBJ: (
  whichAbility: ability,
  whichField: abilitybooleanlevelarrayfield,
  level: number,
  index: number,
  value: boolean
) => void;
declare const BlzSetAbilityIntegerLevelArrayFieldBJ: (
  whichAbility: ability,
  whichField: abilityintegerlevelarrayfield,
  level: number,
  index: number,
  value: number
) => void;
declare const BlzSetAbilityRealLevelArrayFieldBJ: (
  whichAbility: ability,
  whichField: abilityreallevelarrayfield,
  level: number,
  index: number,
  value: number
) => void;
declare const BlzSetAbilityStringLevelArrayFieldBJ: (
  whichAbility: ability,
  whichField: abilitystringlevelarrayfield,
  level: number,
  index: number,
  value: string
) => void;
declare const BlzAddAbilityBooleanLevelArrayFieldBJ: (
  whichAbility: ability,
  whichField: abilitybooleanlevelarrayfield,
  level: number,
  value: boolean
) => void;
declare const BlzAddAbilityIntegerLevelArrayFieldBJ: (
  whichAbility: ability,
  whichField: abilityintegerlevelarrayfield,
  level: number,
  value: number
) => void;
declare const BlzAddAbilityRealLevelArrayFieldBJ: (
  whichAbility: ability,
  whichField: abilityreallevelarrayfield,
  level: number,
  value: number
) => void;
declare const BlzAddAbilityStringLevelArrayFieldBJ: (
  whichAbility: ability,
  whichField: abilitystringlevelarrayfield,
  level: number,
  value: string
) => void;
declare const BlzRemoveAbilityBooleanLevelArrayFieldBJ: (
  whichAbility: ability,
  whichField: abilitybooleanlevelarrayfield,
  level: number,
  value: boolean
) => void;
declare const BlzRemoveAbilityIntegerLevelArrayFieldBJ: (
  whichAbility: ability,
  whichField: abilityintegerlevelarrayfield,
  level: number,
  value: number
) => void;
declare const BlzRemoveAbilityRealLevelArrayFieldBJ: (
  whichAbility: ability,
  whichField: abilityreallevelarrayfield,
  level: number,
  value: number
) => void;
declare const BlzRemoveAbilityStringLevelArrayFieldBJ: (
  whichAbility: ability,
  whichField: abilitystringlevelarrayfield,
  level: number,
  value: string
) => void;
declare const BlzItemAddAbilityBJ: (whichItem: item, abilCode: number) => void;
declare const BlzItemRemoveAbilityBJ: (
  whichItem: item,
  abilCode: number
) => void;
declare const BlzSetItemBooleanFieldBJ: (
  whichItem: item,
  whichField: itembooleanfield,
  value: boolean
) => void;
declare const BlzSetItemIntegerFieldBJ: (
  whichItem: item,
  whichField: itemintegerfield,
  value: number
) => void;
declare const BlzSetItemRealFieldBJ: (
  whichItem: item,
  whichField: itemrealfield,
  value: number
) => void;
declare const BlzSetItemStringFieldBJ: (
  whichItem: item,
  whichField: itemstringfield,
  value: string
) => void;
declare const BlzSetUnitBooleanFieldBJ: (
  whichUnit: unit,
  whichField: unitbooleanfield,
  value: boolean
) => void;
declare const BlzSetUnitIntegerFieldBJ: (
  whichUnit: unit,
  whichField: unitintegerfield,
  value: number
) => void;
declare const BlzSetUnitRealFieldBJ: (
  whichUnit: unit,
  whichField: unitrealfield,
  value: number
) => void;
declare const BlzSetUnitStringFieldBJ: (
  whichUnit: unit,
  whichField: unitstringfield,
  value: string
) => void;
declare const BlzSetUnitWeaponBooleanFieldBJ: (
  whichUnit: unit,
  whichField: unitweaponbooleanfield,
  index: number,
  value: boolean
) => void;
declare const BlzSetUnitWeaponIntegerFieldBJ: (
  whichUnit: unit,
  whichField: unitweaponintegerfield,
  index: number,
  value: number
) => void;
declare const BlzSetUnitWeaponRealFieldBJ: (
  whichUnit: unit,
  whichField: unitweaponrealfield,
  index: number,
  value: number
) => void;
declare const BlzSetUnitWeaponStringFieldBJ: (
  whichUnit: unit,
  whichField: unitweaponstringfield,
  index: number,
  value: string
) => void;
declare const FourCC: (id: string) => number;
