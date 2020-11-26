import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {Response} from '../response.model';
import {catchError, map} from 'rxjs/operators';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
//Classe que acessa o servidor para solicitação de dados
export class UserService {
  baseUrl = 'http://dev.labtime.ufg.br/selecao_2020/user';

  constructor(private  http: HttpClient, private snackBar: MatSnackBar) {
  }

  list(page: number = 1): Observable<Response> {
    let url= this.baseUrl + "?page=" + page;
    return this.http.get<Response>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e,"Não foi possivel carregar os dados da página "+ page))
    );
  }

  errorHandler(e: any, msg: string): Observable<any> {
    this.showMessage(msg, true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
}
