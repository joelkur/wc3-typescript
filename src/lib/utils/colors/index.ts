export const rgbToColorHex = (red: number, green: number, blue: number) => {
  const validRgb = (decimal: number) => {
    if (decimal < 0) return 0;
    if (decimal > 255) return 255;
    return decimal;
  };
  const hex = (decimal: number) => {
    const hexed = validRgb(decimal).toString(16);
    if (hexed.length < 2) return `0${hexed}`;
    return hexed;
  };
  return `${hex(red)}${hex(green)}${hex(blue)}`;
};

export const coloredText = (color: string, text: string) =>
  `|cff${color}${text}|r`;

export const BASIC_COLORS = {
  BLACK: rgbToColorHex(0, 0, 0),
  WHITE: rgbToColorHex(255, 255, 255),
  RED: rgbToColorHex(255, 0, 0),
  LIME: rgbToColorHex(0, 255, 0),
  BLUE: rgbToColorHex(0, 0, 255),
  YELLOW: rgbToColorHex(255, 255, 0),
  CYAN: rgbToColorHex(0, 255, 255),
  MAGENTA: rgbToColorHex(255, 0, 255),
  SILVER: rgbToColorHex(192, 192, 192),
  GRAY: rgbToColorHex(128, 128, 128),
  MAROON: rgbToColorHex(128, 0, 0),
  OLIVE: rgbToColorHex(128, 128, 0),
  GREEN: rgbToColorHex(0, 128, 0),
  PURPLE: rgbToColorHex(128, 0, 128),
  TEAL: rgbToColorHex(0, 128, 128),
  NAVY: rgbToColorHex(0, 0, 128),
  ORANGE: rgbToColorHex(255, 140, 0),
  GOLD: rgbToColorHex(255, 215, 0),
};
