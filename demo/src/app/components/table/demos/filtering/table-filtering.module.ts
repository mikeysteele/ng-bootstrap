import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTableFiltering } from './table-filtering';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgfModule
  ],
  declarations: [NgbdTableFiltering],
  exports: [NgbdTableFiltering],
  bootstrap: [NgbdTableFiltering]
})
export class NgbdTableFilteringModule {}
