export interface PlaceItemData {
  title: string;
  position: [number, number];
  link: string;
  image: string;
  video: string;

  desc?: string;
  author?: string;
}

export interface PlacesProps {
  data: PlaceItemData[];
}
