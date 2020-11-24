import {UserModel} from './user.model';

export interface Response {
  paginas: number;
  registros: number;
  resultados: UserModel[];

}
