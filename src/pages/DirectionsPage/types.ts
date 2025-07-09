export type DirectionItemType = {
  label: string;
  hint: string;
  transport: string;
  path: {
    title: string;
    text: string;
  }[];
  coordinates: [number, number][];
};
