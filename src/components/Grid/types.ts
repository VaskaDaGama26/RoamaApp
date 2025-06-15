export interface GridItemData {
  id: number;
  label: string;

  icon?: string;
  iconHeight?: string;
  text?: string;
  badgeText?: string;

  pattern?: string;
  color?: string;
  bg?: string;

  height?: string;
  direction?: 'default' | 'responsive';
  colSpan?: string;
}

export interface GridProps {
  data: GridItemData[];
}
