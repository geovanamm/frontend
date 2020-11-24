import { Injectable } from '@angular/core';
import {MatPaginatorIntl} from '@angular/material/paginator';

@Injectable()
export class CustomPaginator extends MatPaginatorIntl {
  constructor() {
    super();
    this.nextPageLabel = ' Próxima página';
    this.previousPageLabel = ' Página anterior ';
    this.firstPageLabel = ' Primeira página ';
    this.lastPageLabel = ' Ultima página ';
    this.itemsPerPageLabel = ' Itens por página: ';

  }
}
