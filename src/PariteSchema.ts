// Match the model data from GraphQL

export interface LobbyData {
  id: number;
  title: string;
  users: [UserData];
  pariteGames: [PariteGameData];
}

export interface UserData {
  id: number;
  name: string;
}

export interface PariteGameData {
  id: number;
  title: string;
  cards: CardData;
}

export interface CardData {
  id: number;
  faceUp: boolean;
  color: string;
  value: number;
}

export interface PlayerData {
  id: number;
  ready: boolean;
  user: UserData;
}
