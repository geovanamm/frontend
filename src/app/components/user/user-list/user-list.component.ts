import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../service/user.service';
import {Response} from '../response.model';
import {MatPaginator} from '@angular/material/paginator';
import {tap} from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';


import {UserModel} from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;


  response: Response;

  //Colunas para ser apresentada no cabeçalho da tabela
  displayedColumns = ['id', 'nome',  'situacaoCurso'];

  expandedElement: UserModel | null;


  constructor(private userService: UserService) {
    this.response = new Response();
  }
//solicita os dados da primeira pagina para exibição
  ngOnInit(): void {
    this.loadPage();
  }
//solicita os dados da nova pagina para exibição
  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadPage(this.paginator.pageIndex + 1))
      )
      .subscribe();
  }
//faz a solicitação de pagina para exibição
  loadPage(page: number = 1) {
    this.userService.list(page).subscribe(response => {
      this.response = response;
    });
  }
}
