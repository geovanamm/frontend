import {UserModel} from './user.model';

export class Response {
  paginas: number;
  registros: number;
  resultados: UserModel[];
}
