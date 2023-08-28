export interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

export interface ICategory {
  id: string;
  title: string;
}

export interface IRecipe {
  id: string;
  title: string;
  category?: ICategory;
  image?: string;
  rating: number;
  duration?: string;
  ingredients?: string;
  prepare?: string;
}
