import * as moment from 'moment';

export interface UserState {
  name: string;
  id: string;
  email: string;
  token: string;
  tokenExpirationDate: moment.Moment | null;
  isAdmin: boolean;
}
