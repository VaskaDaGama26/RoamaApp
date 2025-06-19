export interface DishItemData {
  title: string;
  position: [number, number];
  link: string;
  image: string;

  desc?: string;
}

export interface DishProps {
  data: DishItemData[];
}
