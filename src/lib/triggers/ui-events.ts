import { Action, createTrigger, TriggerOptions } from ".";

interface FrameTriggerOptions extends TriggerOptions<frameeventtype> {
  frame: framehandle;
}
export const onFrameEvent = (
  { event, frame }: FrameTriggerOptions,
  action: Action
) => event && BlzTriggerRegisterFrameEvent(createTrigger(action), frame, event);
