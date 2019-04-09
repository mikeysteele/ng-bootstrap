import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdSortableHeader, NgbdTableSortable } from './table-sortable';

@NgModule({
  imports: [BrowserModule, CommonModule, NgfModule],
  declarations: [NgbdTableSortable, NgbdSortableHeader],
  exports: [NgbdTableSortable],
  bootstrap: [NgbdTableSortable]
})
export class NgbdTableSortableModule {}
