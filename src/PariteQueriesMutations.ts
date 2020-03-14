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
        players {
          id
          user {
            id
          }
        }
        lobby {
          id
          title
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

export const PARITE_GAME = gql`
  query PariteGame($pariteGameId: ID!) {
    pariteGame(pariteGameId: $pariteGameId) {
      id
      title
      cards {
        id
        color
        faceUp
        value
        player {
          id
          ready
        }
        pariteGame {
          id
          title
        }
      }
      players {
        id
        ready
        user {
          id
          name
        }
        pariteGame {
          id
          title
        }
        cards {
          id
          color
          faceUp
          value
          player {
            id
            ready
          }
          pariteGame {
            id
            title
          }
        }
      }
    }
  }
`;

export const JOIN_PARITE_GAME = gql`
  mutation JoinPariteGame($userId: ID!, $pariteGameId: ID!) {
    joinPariteGame(input: {userId: $userId, pariteGameId: $pariteGameId}) {
      pariteGame {
        id
        title
        players {
          id
          ready
          user {
            id
            name
          }
          pariteGame {
            id
            title
          }
          cards {
            id
            color
            faceUp
            value
            player {
              id
              ready
            }
            pariteGame {
              id
              title
            }
          }
        }
      }
    }
  }
`;

export const CONTROLLER_PLAYER = gql`
  query PariteGame($pariteGameId: ID!) {
    pariteGame(pariteGameId: $pariteGameId) {
      id
      cards {
        id
        color
        faceUp
        value
        player {
          id
          ready
        }
        pariteGame {
          id
          title
        }
      }
      players {
        id
        ready
        user {
          id
          name
        }
        cards {
          id
          color
          faceUp
          value
          player {
            id
            ready
          }
          pariteGame {
            id
            title
          }
        }
      }
    }
  }
`;

export const PLAYER_DRAW = gql`
  mutation PlayerDraw($playerId: ID!, $pariteGameId: ID!) {
    playerDraw(input: {playerId: $playerId, pariteGameId: $pariteGameId}) {
      pariteGame {
        id
        cards {
          id
          color
          faceUp
          value
          player {
            id
            ready
          }
          pariteGame {
            id
            title
          }
        }
        players {
          id
          ready
          user {
            id
            name
          }
          pariteGame {
            id
            title
          }
          cards {
            id
            color
            faceUp
            value
            player {
              id
              ready
            }
            pariteGame {
              id
              title
            }
          }
        }
      }
    }
  }
`;
