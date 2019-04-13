import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfMagellen, NgfMagellenWrapper, NgfMagellenTarget, NgfMagellenAnchor } from './magellen';
export { NgfMagellen, NgfMagellenWrapper, NgfMagellenTarget, NgfMagellenAnchor   } from './magellen';
const DIRECTIVES = [NgfMagellen, NgfMagellenWrapper, NgfMagellenTarget, NgfMagellenAnchor ];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...DIRECTIVES
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class NgfMagellenModule { }
