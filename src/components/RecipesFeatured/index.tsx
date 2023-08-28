import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { IRecipe } from '../../interfaces';
import RecipeCard from '../RecipeCard';
import { RecipeList } from './styles';

type RecipesProps = {
  recipesData: IRecipe[];
  onRecipePress: (recipe: IRecipe) => void;
};

const RecipesFeatured = ({ recipesData, onRecipePress }: RecipesProps) => {
  const renderItem = ({ item }: ListRenderItemInfo<IRecipe>) => {
    return (
      <RecipeCard
        recipeItem={item}
        style=""
        onPress={() => onRecipePress(item)}
      />
    );
  };

  return (
    <RecipeList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={recipesData}
      keyExtractor={(item: IRecipe) => item.id}
      renderItem={renderItem}
    />
  );
};

export default RecipesFeatured;
