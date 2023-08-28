import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Title, DurationText, ImageRecipe, DurationIcon } from './styles';
import { styles } from './styles';

import barbecure from '../../assets/imgs/greekbarbecue.png';

type RecipeCardProps = {
  title: string;
  image: any;
  rating: any;
  duration: string;
  style: any;
};

const Card = ({ title, image, duration, style }: RecipeCardProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <ImageRecipe source={barbecure} />
      <Title numberOfLines={1}>{title}</Title>
      <View>
        <DurationIcon name="timer" />
        <DurationText>{duration}</DurationText>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
