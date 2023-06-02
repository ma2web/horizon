import { gql } from '@apollo/client';

export const LOAD_LOUNCHPADS = gql`
  query {
    launchpads {
      id
      wikipedia
      name
      status
    }
  }
`;
