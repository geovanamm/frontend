import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../service/user.service';
import {Response} from '../response.model';
import {MatPaginator} from '@angular/material/paginator';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit, OnInit {
  response: Response;
  displayedColumns = ['id', 'nome', 'apelido', 'nascimento',
    'sexo', 'email', 'estado', 'cidade', 'situacaoCurso','acessosCurso',  'inicioCurso', 'codigo'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) {
    this.response = new Response();
  }

  ngOnInit(): void {
    this.userService.list().subscribe(response => {
      this.response = response;
    });
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadPage())
      )
      .subscribe();
  }

  loadPage() {
    this.userService.list(this.paginator.pageIndex + 1).subscribe(response => {
      this.response = response;
    });
  }
}
