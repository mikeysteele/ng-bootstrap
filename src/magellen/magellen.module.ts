import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfMagellen, NgfMagellenWrapper, NgfMagellenTarget } from './magellen';
export { NgfMagellen, NgfMagellenWrapper, NgfMagellenTarget  } from './magellen';
const DIRECTIVES = [NgfMagellen, NgfMagellenWrapper, NgfMagellenTarget];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DIRECTIVES
  ],
  exports: [
    DIRECTIVES
  ]
})
export class NgfMagellenModule { }
