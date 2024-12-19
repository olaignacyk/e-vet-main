import { Role } from 'src/app/modules/shared/resources/enums/role.enum';

export interface UserToken {
  email: string;
  exp: number;
  iat: number;
  jti: string;
  nbf: number;
  role: Role[];
  sub: string;
  userId: string;
}
