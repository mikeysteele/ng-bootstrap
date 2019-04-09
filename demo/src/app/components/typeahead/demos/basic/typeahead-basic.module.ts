import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTypeaheadBasic } from './typeahead-basic';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdTypeaheadBasic],
  exports: [NgbdTypeaheadBasic],
  bootstrap: [NgbdTypeaheadBasic]
})
export class NgbdTypeaheadBasicModule {}
