import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfOffCanvas, NgfOffCanvasWrapper, NgfOffCanvasContent, NgfOffCanvasToggle, NgfOffCanvasBackdrop } from './off-canvas';
export { NgfOffCanvas, NgfOffCanvasWrapper, NgfOffCanvasContent, NgfOffCanvasToggle } from './off-canvas';
const DIRECTIVES = [NgfOffCanvas, NgfOffCanvasWrapper, NgfOffCanvasContent, NgfOffCanvasToggle]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...DIRECTIVES,
    NgfOffCanvasBackdrop
  ],
  exports: [
    ...DIRECTIVES
  ],
  entryComponents: [NgfOffCanvasBackdrop]
})
export class NgfOffCanvasModule { }
