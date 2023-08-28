import React, { useContext, useEffect, useState } from 'react';
import { Container, Title } from './styles';
import SearchInput from '../../components/SearchInput';
//Context
import { RecipeContext } from '../../context';

const Search = () => {
  const { totalRecipes } = useContext(RecipeContext);
  const [filteredRecipes, setFilteredRecipes] = useState(totalRecipes);

  console.log('totalRecipes context: ', totalRecipes);
  console.log('filteredRecipes: ', filteredRecipes);

  return (
    <Container>
      <SearchInput
        onPress={() => {}}
        totalRecipes={totalRecipes}
        setFilteredRecipes={setFilteredRecipes}
      />
      {/* <Title>Search screen</Title> */}
    </Container>
  );
};

export default Search;
