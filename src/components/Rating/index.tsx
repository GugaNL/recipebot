import React from 'react';
import { Container, IconStar } from './styles';

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  const arrayRating = [1, 2, 3, 4, 5];

  return (
    <Container>
      {arrayRating &&
        arrayRating.length &&
        arrayRating.map((item, index) => {
          if (Math.round(rating) >= item) {
            return <IconStar name="star" key={index} />;
          }

          return <IconStar name="star-o" key={index} />;
        })}
    </Container>
  );
};

export default Rating;
