import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { IRecipe } from '../../interfaces';

export const RecipeList = styled(FlatList as typeof FlatList<IRecipe>)`
  margin-left: -20px;
  margin-right: -20px;
`;
