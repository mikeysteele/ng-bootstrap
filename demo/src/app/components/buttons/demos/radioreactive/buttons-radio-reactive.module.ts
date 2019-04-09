import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdButtonsRadioreactive } from './buttons-radioreactive';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, NgfModule],
  declarations: [NgbdButtonsRadioreactive],
  exports: [NgbdButtonsRadioreactive],
  bootstrap: [NgbdButtonsRadioreactive]
})
export class NgbdButtonsRadioReactiveModule {}
