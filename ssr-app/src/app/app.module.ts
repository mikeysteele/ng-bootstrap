import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionComponent } from './components/accordion.component';
import { CalloutComponent } from './components/callout.component';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons.component';
import { CarouselComponent } from './components/carousel.component';
import { CollapseComponent } from './components/collapse.component';
import { DatepickerComponent } from './components/datepicker.component';
import { DropdownComponent } from './components/dropdown.component';
import { ModalComponent } from './components/modal.component';
import { PaginationComponent } from './components/pagination.component';
import { PopoverComponent } from './components/popover.component';
import { ProgressComponent } from './components/progress.component';
import { RatingComponent } from './components/rating.component';
import { TabsComponent } from './components/tabs.component';
import { TimepickerComponent } from './components/timepicker.component';
import { TooltipComponent } from './components/tooltip.component';
import { TypeaheadComponent } from './components/typeahead.component';

@NgModule({
  declarations: [
    AccordionComponent,
    CalloutComponent,
    AppComponent,
    ButtonsComponent,
    CarouselComponent,
    CollapseComponent,
    DatepickerComponent,
    DropdownComponent,
    ModalComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressComponent,
    RatingComponent,
    TabsComponent,
    TimepickerComponent,
    TooltipComponent,
    TypeaheadComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
