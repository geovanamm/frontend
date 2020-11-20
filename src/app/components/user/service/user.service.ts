import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel} from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://dev.labtime.ufg.br/selecao_2020/user";
  constructor(private  http: HttpClient) { }

  list():Observable<UserModel[]> {
  return this.http.get<UserModel[]>(this.baseUrl
);
}
}
