export interface AppData {
  title: string;
  desc: string;
  icon: string;

  googleLink?: string;
  appleLink?: string;
}

export type ChecklistData = {
  [category: string]: { label: string }[];
};
