import {gql} from 'apollo-boost';

export const LOBBY = gql`
  {
    lobby {
      id
      title
      users {
        id
        name
      }
      pariteGames {
        id
        title
        cards {
          id
          faceUp
          color
          value
        }
        players {
          id
          ready
          user {
            name
          }
        }
      }
    }
  }
`;
