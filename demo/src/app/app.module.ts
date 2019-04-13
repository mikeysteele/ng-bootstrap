import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgfModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {NgbdAccordionModule} from './components/accordion/accordion.module';
import {NgbdCalloutModule} from './components/callout/callout.module';
import {NgbdButtonsModule} from './components/buttons/buttons.module';
import {NgbdCarouselModule} from './components/carousel/carousel.module';
import {NgbdCollapseModule} from './components/collapse/collapse.module';
import {NgbdDatepickerModule} from './components/datepicker/datepicker.module';
import {NgbdDropdownModule} from './components/dropdown/dropdown.module';
import {NgfdModalModule} from './components/modal/modal.module';
import {NgbdPaginationModule} from './components/pagination/pagination.module';
import {NgbdPopoverModule} from './components/popover/popover.module';
import {NgbdProgressbarModule} from './components/progressbar/progressbar.module';
import {NgbdRatingModule} from './components/rating/rating.module';
import {NgbdTableModule} from './components/table/table.module';
import {NgbdTabsModule} from './components/tabs/tabs.module';
import {NgbdTimepickerModule} from './components/timepicker/timepicker.module';
import {NgbdTooltipModule} from './components/tooltip/tooltip.module';
import {NgbdTypeaheadModule} from './components/typeahead/typeahead.module';
import {DefaultComponent} from './default';
import {GettingStarted} from './getting-started';
import {NgfdSharedModule} from './shared';
import {NgbdOffCanvasModule} from './components/off-canvas/off-canvas.module';

const DEMOS = [
  NgbdAccordionModule,
  NgbdCalloutModule,
  NgbdButtonsModule,
  NgbdCarouselModule,
  NgbdCollapseModule,
  NgbdDatepickerModule,
  NgbdDropdownModule,
  NgfdModalModule,
  NgbdPaginationModule,
  NgbdPopoverModule,
  NgbdProgressbarModule,
  NgbdRatingModule,
  NgbdTableModule,
  NgbdTabsModule,
  NgbdTimepickerModule,
  NgbdTooltipModule,
  NgbdTypeaheadModule,
  NgbdOffCanvasModule
];

@NgModule({
  declarations: [AppComponent, DefaultComponent, GettingStarted],
  imports: [BrowserModule, routing, NgfModule, NgfdSharedModule, ...DEMOS],
  bootstrap: [AppComponent]
})
export class NgbdModule {}
