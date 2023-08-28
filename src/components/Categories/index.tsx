import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { ItemButton, List, TextButton } from './styles';
import { ICategory } from '../../interfaces';

type CategoriesProps = {
  categories: ICategory[];
  onCategoryPress: (category: ICategory) => void;
};

const Categories = ({ categories, onCategoryPress }: CategoriesProps) => {
  const renderItem = ({ item }: ListRenderItemInfo<ICategory>) => {
    const selected = item.id === '1';

    return (
      <ItemButton
        onPress={() => onCategoryPress(item)}
        selected={selected}
        index={+item.id}
      >
        <TextButton selected={selected}>{item.title}</TextButton>
      </ItemButton>
    );
  };

  return (
    <List
      horizontal={true}
      data={categories}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item: ICategory) => item.id}
    />
  );
};

export default Categories;
