const getOriginFrame = () => BlzGetOriginFrame(ORIGIN_FRAME_GAME_UI, 0);

export const createConsoleUi = () => {
  BlzLoadTOCFile("war3mapImported\\MyDebugConsole.toc");
  const button = BlzCreateFrame("ScriptDialogButton", getOriginFrame(), 0, 0);
  BlzFrameSetAbsPoint(button, FRAMEPOINT_TOPLEFT, 0.7383, 0.57513);
  BlzFrameSetAbsPoint(button, FRAMEPOINT_BOTTOMRIGHT, 0.79969, 0.5381);
  BlzFrameSetText(button, "Console");

  const frame = BlzCreateFrame("MyDebugConsole", getOriginFrame(), 0, 0);
  BlzFrameSetAbsPoint(frame, FRAMEPOINT_TOPLEFT, 0.5119, 0.5372);
  BlzFrameSetAbsPoint(frame, FRAMEPOINT_BOTTOMRIGHT, 0.7959, 0.1913);
  BlzFrameSetSize(frame, 0.25, 0.25);

  return [button, frame];
};
