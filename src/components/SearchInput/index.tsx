import React, { useState, useEffect, ChangeEvent, SetStateAction } from 'react';
import { Container, Icon, Input } from './styles';
import { theme } from '../../styles/theme';
import { GestureResponderEvent, Pressable } from 'react-native';
import { IRecipe } from '../../interfaces';

type SearchInputProps = {
  pressable?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  totalRecipes?: IRecipe[];
  setFilteredRecipes?: React.Dispatch<React.SetStateAction<IRecipe[]>>;
};

const SearchInput = ({
  pressable,
  onPress,
  totalRecipes,
  setFilteredRecipes,
  ...props
}: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm && searchTerm.length > 2) {
      const filteredItems = totalRecipes?.filter(item =>
        item?.title.includes(searchTerm),
      );
      setFilteredRecipes(filteredItems);
    }
  }, [searchTerm]);

  const renderInput = () => (
    <Container>
      <Icon name="search" />
      <Input
        autoFocus
        editable={!pressable}
        placeholder="Digite alguma receita"
        placeholderTextColor={theme.colors.lightGray}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
    </Container>
  );

  if (pressable) {
    return <Pressable onPress={onPress}>{renderInput()}</Pressable>;
  }

  return renderInput();
};

export default SearchInput;
