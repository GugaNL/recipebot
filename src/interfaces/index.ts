export interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

export interface ICategory {
  id: string;
  title: string;
}

interface IImage {
  filename: string;
  path: string;
}

export interface IRecipe {
  id: string;
  title: string;
  category?: ICategory;
  image?: IImage;
  rating: number;
  duration?: string;
  ingredients?: string;
  prepare?: string;
}
