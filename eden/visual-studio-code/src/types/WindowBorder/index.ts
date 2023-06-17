const windowBorderKeys = [
  "window.activeBorder",
  "window.inactiveBorder"
] as const;

export type WindowBorder = Partial<{ [K in typeof windowBorderKeys[number]]: string }>;
