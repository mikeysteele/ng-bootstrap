import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfOffCanvas, NgfOffCanvasWrapper, NgfOffCanvasContent, NgfOffCanvasToggle } from './off-canvas';
export { NgfOffCanvas, NgfOffCanvasWrapper, NgfOffCanvasContent, NgfOffCanvasToggle } from './off-canvas';
const DIRECTIVES = [NgfOffCanvas, NgfOffCanvasWrapper, NgfOffCanvasContent, NgfOffCanvasToggle]
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
export class NgfOffCanvasModule { }
