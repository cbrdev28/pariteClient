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

export const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    createUser(input: {name: $name}) {
      user {
        id
        name
        lobby {
          id
          users {
            id
            name
          }
        }
      }
    }
  }
`;
