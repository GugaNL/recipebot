import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Title } from './styles';
import { IRecipe, ScreenNavigationProp } from '../../interfaces';
import SearchInput from '../../components/SearchInput';
import Categories from '../../components/Categories';
//import RecipeCard from '../../components/RecipeCard';
import Card from '../../components/Card';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../graphql/queries/category';
import { GET_RECIPES } from '../../graphql/queries/recipe';
import RecipesFeatured from '../../components/RecipesFeatured';
//Context
import { RecipeContext } from '../../context';

const Home = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const {
    loading: loadingCategory,
    error: errorCategory,
    data: dataCategories,
  } = useQuery(GET_CATEGORIES);
  const { categories = [] } = dataCategories || {};

  const {
    loading: loadingRecipe,
    error: errorRecipe,
    data: dataRecipes,
  } = useQuery(GET_RECIPES);
  const { recipes = [] } = dataRecipes || {};

  const [totalRecipes, setTotalRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    if (recipes && recipes.length > 0) {
      setTotalRecipes(recipes);
    }
  }, [recipes]);

  //console.log('totalRecipes: ', totalRecipes);

  return (
    <RecipeContext.Provider value={{ totalRecipes, setTotalRecipes }}>
      <Container>
        <SearchInput pressable onPress={() => navigate('Search')} />
        <Title>Receitas em destaque</Title>

        {recipes && recipes.length > 0 && (
          <RecipesFeatured recipesData={recipes} onRecipePress={() => {}} />
        )}

        {categories && categories.length > 0 && (
          <Categories categories={categories} onCategoryPress={() => {}} />
        )}

        {recipes && recipes.length > 0 && (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -20 }}
            data={[1, 2, 3]}
            keyExtractor={item => String(item)}
            renderItem={() => (
              <Card
                title="Churrasco grego"
                image=""
                rating={3}
                duration="20min"
                style=""
              />
            )}
          />
        )}
      </Container>
    </RecipeContext.Provider>
  );
};

export default Home;
