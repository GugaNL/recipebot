import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    categories {
      id
      title
    }
  }
`;

export const GET_CATEGORY = gql`
  query GET_CATEGORY($id: ID!) {
    category(id: $id) {
      id
      title
    }
  }
`;
