import { createContext } from 'react';
import { IRecipe } from '../interfaces';

type PropsRecipeContext = {
  totalRecipes: IRecipe[];
  setTotalRecipes?: React.Dispatch<React.SetStateAction<any>>;
};

const DefaultValue = {
  totalRecipes: [],
  setTotalRecipes: () => {},
};

export const RecipeContext = createContext<PropsRecipeContext>(DefaultValue);
