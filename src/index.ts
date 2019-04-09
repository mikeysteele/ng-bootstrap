import {NgModule, ModuleWithProviders} from '@angular/core';

import {NgfAccordionModule} from './accordion/accordion.module';
import {NgfCalloutModule} from './callout/callout.module';
import {NgbButtonsModule} from './buttons/buttons.module';
import {NgbCarouselModule} from './carousel/carousel.module';
import {NgbCollapseModule} from './collapse/collapse.module';
import {NgbDatepickerModule} from './datepicker/datepicker.module';
import {NgfDropdownModule} from './dropdown/dropdown.module';
import {NgfModalModule} from './modal/modal.module';
import {NgfPaginationModule} from './pagination/pagination.module';
import {NgbPopoverModule} from './popover/popover.module';
import {NgfProgressbarModule} from './progressbar/progressbar.module';
import {NgbRatingModule} from './rating/rating.module';
import {NgfTabsModule} from './tabs/tabs.module';
import {NgbTimepickerModule} from './timepicker/timepicker.module';
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
export {NgbButtonsModule, NgbButtonLabel, NgbCheckBox, NgbRadio, NgbRadioGroup} from './buttons/buttons.module';
export {NgbCarouselModule, NgbCarouselConfig, NgbCarousel, NgbSlide} from './carousel/carousel.module';
export {NgbCollapseModule, NgbCollapse} from './collapse/collapse.module';
export {
  NgbCalendar,
  NgbPeriod,
  NgbCalendarGregorian,
  NgbCalendarIslamicCivil,
  NgbCalendarIslamicUmalqura,
  NgbCalendarHebrew,
  NgbCalendarPersian,
  NgbDatepickerModule,
  NgbDatepickerI18n,
  NgbDatepickerI18nHebrew,
  NgbDatepickerConfig,
  NgbDateStruct,
  NgbDate,
  NgbDateParserFormatter,
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDateNativeUTCAdapter,
  NgbDatepicker,
  NgbInputDatepicker
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
  NgbTabChangeEvent,
  NgfTabsConfig,
  NgfTabs,
  NgfTab,
  NgbTabContent,
  NgbTabTitle
} from './tabs/tabs.module';
export {
  NgbTimepickerModule,
  NgbTimepickerConfig,
  NgbTimeStruct,
  NgbTimepicker,
  NgbTimeAdapter
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
  NgfAccordionModule, NgfCalloutModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule,
  NgfDropdownModule, NgfModalModule, NgfPaginationModule, NgbPopoverModule, NgfProgressbarModule, NgbRatingModule,
  NgfTabsModule, NgbTimepickerModule, NgbTooltipModule, NgbTypeaheadModule
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
