import {UserModel} from './user.model';

//Classe que modela os dados recebidos do servidor
export class Response {
  paginas: number;
  registros: number;
  resultados: UserModel[];
}
