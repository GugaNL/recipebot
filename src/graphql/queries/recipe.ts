import { gql } from '@apollo/client';

export const GET_RECIPES = gql`
  query GET_RECIPES {
    recipes {
      id
      title
      duration
      rating
      category {
        id
        title
      }
      image {
        filename
        path
      }
    }
  }
`;
