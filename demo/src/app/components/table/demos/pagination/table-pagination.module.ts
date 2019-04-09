import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTablePagination } from './table-pagination';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, NgfModule],
  declarations: [NgbdTablePagination],
  exports: [NgbdTablePagination],
  bootstrap: [NgbdTablePagination]
})
export class NgbdTablePaginationModule {}
