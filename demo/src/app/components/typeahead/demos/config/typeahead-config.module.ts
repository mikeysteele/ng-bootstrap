import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTypeaheadConfig } from './typeahead-config';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdTypeaheadConfig],
  exports: [NgbdTypeaheadConfig],
  bootstrap: [NgbdTypeaheadConfig]
})
export class NgbdTypeaheadConfigModule {}
