import { BASIC_COLORS, coloredText } from "../utils/colors";
import { onFrameEvent } from "../triggers/ui-events";
import { createConsoleUi } from "./ui";

let uiBackdrop: framehandle;
let uiButton: framehandle;
let visibility = false;

export const toggleVisibility = () => {
  visibility = !visibility;
  BlzFrameSetVisible(uiBackdrop, visibility);
};

export enum LogLevel {
  INFO,
  WARNING,
  ERROR,
}

export const log = (text: string, logLevel: LogLevel = LogLevel.INFO) => {
  const prefix =
    logLevel === LogLevel.INFO
      ? ""
      : logLevel === LogLevel.WARNING
      ? `${coloredText(BASIC_COLORS.ORANGE, "Warning!")} `
      : `${coloredText(BASIC_COLORS.RED, "Error!")} `;
  BlzFrameAddText(uiBackdrop, `${prefix}${text}`);
};

export const initializeConsole = () => {
  const [button, frame] = createConsoleUi();
  uiBackdrop = frame;
  uiButton = button;
  BlzFrameSetVisible(uiBackdrop, visibility);

  onFrameEvent(
    {
      event: FRAMEEVENT_CONTROL_CLICK,
      frame: uiButton,
    },
    toggleVisibility
  );
};
