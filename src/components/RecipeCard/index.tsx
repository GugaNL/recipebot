import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Content,
  Title,
  DurationText,
  ImageRecipe,
  ContentFooter,
  DurationIcon,
  ContentSmall,
  ContainerRating,
  IconStar,
} from './styles';
import { styles } from './styles';
import { IRecipe } from '../../interfaces';
import { BASE_URL } from '../../utils/constants';
import emptyImage from '../../assets/imgs/no-image.png';

type RecipeCardProps = {
  recipeItem: IRecipe;
  style: any;
  onPress: (recipe: IRecipe) => void;
};

const RecipeCard = ({ recipeItem, style }: RecipeCardProps) => {
  const arrayRating = [1, 2, 3, 4, 5];

  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Content>
        <ContentSmall>
          <Title numberOfLines={1}>{recipeItem.title}</Title>
        </ContentSmall>

        <ImageRecipe
          source={{
            uri:
              (recipeItem.image?.path &&
                `${BASE_URL}${recipeItem.image?.path}`) ||
              emptyImage,
          }}
          resizeMode="cover"
        />
      </Content>

      <ContentFooter>
        <ContainerRating>
          {arrayRating &&
            arrayRating.length &&
            arrayRating.map((item, index) => {
              if (Math.round(recipeItem.rating) >= item) {
                return <IconStar name="star" key={index} />;
              }

              return <IconStar name="star-o" key={index} />;
            })}
        </ContainerRating>

        {recipeItem.duration && (
          <Content>
            <DurationIcon name="timer" />
            <DurationText>{recipeItem.duration}</DurationText>
          </Content>
        )}
      </ContentFooter>
    </TouchableOpacity>
  );
};

export default RecipeCard;
