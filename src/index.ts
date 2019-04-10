import {NgModule, ModuleWithProviders} from '@angular/core';

import {NgfAccordionModule} from './accordion/accordion.module';
import {NgfCalloutModule} from './callout/callout.module';
import {NgfButtonsModule} from './buttons/buttons.module';
import {NgbCarouselModule} from './carousel/carousel.module';
import {NgfCollapseModule} from './collapse/collapse.module';
import {NgfDatepickerModule} from './datepicker/datepicker.module';
import {NgfDropdownModule} from './dropdown/dropdown.module';
import {NgfModalModule} from './modal/modal.module';
import {NgfPaginationModule} from './pagination/pagination.module';
import {NgbPopoverModule} from './popover/popover.module';
import {NgfProgressbarModule} from './progressbar/progressbar.module';
import {NgbRatingModule} from './rating/rating.module';
import {NgfTabsModule} from './tabs/tabs.module';
import {NgfTimepickerModule} from './timepicker/timepicker.module';
import {NgbTooltipModule} from './tooltip/tooltip.module';
import {NgbTypeaheadModule} from './typeahead/typeahead.module';

export {
  NgfAccordionModule,
  NgfPanelChangeEvent,
  NgfAccordionConfig,
  NgfAccordion,
  NgfPanel,
  NgfPanelTitle,
  NgfPanelContent,
  NgfPanelHeader,
  NgfPanelHeaderContext,
  NgfPanelToggle
} from './accordion/accordion.module';
export {NgfCalloutModule, NgfCalloutConfig, NgfCallout} from './callout/callout.module';
export {NgfButtonsModule, NgfButtonLabel, NgfCheckbox, NgbRadio, NgfRadioGroup} from './buttons/buttons.module';
export {NgbCarouselModule, NgbCarouselConfig, NgbCarousel, NgbSlide} from './carousel/carousel.module';
export {NgfCollapseModule, NgfCollapse} from './collapse/collapse.module';
export {
  NgfCalendar,
  NgfPeriod,
  NgfCalendarGregorian,
  NgfCalendarIslamicCivil,
  NgfCalendarIslamicUmalqura,
  NgfCalendarHebrew,
  NgfCalendarPersian,
  NgfDatepickerModule,
  NgfDatepickerI18n,
  NgfDatepickerI18nHebrew,
  NgfDatepickerConfig,
  NgfDateStruct,
  NgfDate,
  NgfDateParserFormatter,
  NgfDateAdapter,
  NgfDateNativeAdapter,
  NgfDateNativeUTCAdapter,
  NgfDatepicker,
  NgfInputDatepicker
} from './datepicker/datepicker.module';
export {
  NgfDropdownModule,
  NgfDropdownAnchor,
  NgfDropdownConfig,
  NgfDropdownItem,
  NgfDropdownMenu,
  NgfDropdownToggle,
  NgfDropdown
} from './dropdown/dropdown.module';
export {
  NgfModalModule,
  NgfModal,
  NgfModalConfig,
  NgfModalOptions,
  NgfActiveModal,
  NgfModalRef,
  ModalDismissReasons
} from './modal/modal.module';
export {
  NgfPaginationModule,
  NgfPaginationConfig,
  NgfPagination,
  NgfPaginationEllipsis,
  NgfPaginationFirst,
  NgfPaginationLast,
  NgfPaginationNext,
  NgfPaginationNumber,
  NgfPaginationPrevious
} from './pagination/pagination.module';
export {NgbPopoverModule, NgbPopoverConfig, NgbPopover} from './popover/popover.module';
export {NgfProgressbarModule, NgfProgressbarConfig, NgfProgressbar} from './progressbar/progressbar.module';
export {NgbRatingModule, NgbRatingConfig, NgbRating} from './rating/rating.module';
export {
  NgfTabsModule,
  NgfTabChangeEvent,
  NgfTabsConfig,
  NgfTabs,
  NgfTab,
  NgfTabContent,
  NgfTabTitle
} from './tabs/tabs.module';
export {
  NgfTimepickerModule,
  NgfTimepickerConfig,
  NgfTimeStruct,
  NgfTimepicker,
  NgfTimeAdapter
} from './timepicker/timepicker.module';
export {NgbTooltipModule, NgbTooltipConfig, NgbTooltip} from './tooltip/tooltip.module';
export {
  NgbHighlight,
  NgbTypeaheadModule,
  NgbTypeaheadConfig,
  NgbTypeaheadSelectItemEvent,
  NgbTypeahead
} from './typeahead/typeahead.module';

export {Placement} from './util/positioning';

const NGF_MODULES = [
  NgfAccordionModule, NgfCalloutModule, NgfButtonsModule, NgbCarouselModule, NgfCollapseModule, NgfDatepickerModule,
  NgfDropdownModule, NgfModalModule, NgfPaginationModule, NgbPopoverModule, NgfProgressbarModule, NgbRatingModule,
  NgfTabsModule, NgfTimepickerModule, NgbTooltipModule, NgbTypeaheadModule
];

@NgModule({imports: NGF_MODULES, exports: NGF_MODULES})
export class NgfModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgfModule}; }
}
