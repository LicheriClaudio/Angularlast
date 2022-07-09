export interface Iauth {
  accessToken: string;
  user: {
    email: string;
    firstname: string;
    lastname: string;
    id: number;
  };
}
