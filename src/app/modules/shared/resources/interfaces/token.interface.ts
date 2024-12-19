import { UserToken } from 'src/app/modules/shared/resources/interfaces/user-token.interface';

export interface Token {
  token: string;
  refreshToken: string;
  user: UserToken;
}
