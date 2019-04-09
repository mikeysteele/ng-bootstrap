import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTypeaheadTemplate } from './typeahead-template';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdTypeaheadTemplate],
  exports: [NgbdTypeaheadTemplate],
  bootstrap: [NgbdTypeaheadTemplate]
})
export class NgbdTypeaheadTemplateModule {}
