import { gql } from '@apollo/client';

export const LOAD_ROCKETS = gql`
  query {
    rockets {
      id
      name
      description
      country
    }
  }
`;
