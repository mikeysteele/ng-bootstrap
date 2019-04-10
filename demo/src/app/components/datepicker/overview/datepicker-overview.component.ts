import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NgfdDemoList } from '../../shared';
import { NgbdOverview } from '../../shared/overview';

@Component({
  selector: 'ngbd-datepicker-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './datepicker-overview.component.html',
  host: {
    '[class.overview]': 'true'
  }
})

export class NgbdDatepickerOverviewComponent {

  snippets = {
    basic: `
<!-- 1. inline datepicker -->
<ngf-datepicker #d></ngf-datepicker>

<!-- 2. datepicker in the popup -->
<input type="text" ngfDatepicker #d="ngfDatepicker"/>
`,
    popup: `
<input type="text" ngfDatepicker #d="ngfDatepicker"/>
<button (click)="d.toggle()">Toggle</button>
`,
    form: `
<input type="text" ngfDatepicker [(ngModel)]="date"/>
`,
    selection: `
<!-- inline -->
<ngf-datepicker (select)="onDateSelect($event)"></ngf-datepicker>

<!-- in the popup -->
<input type="text" ngfDatepicker (dateSelect)="onDateSelect($event)"/>
`,
    navigation: `
<ngf-datepicker #d [startDate]="{year: 1789, month: 7}"></ngf-datepicker>
<button (click)="d.navigateTo({year: 2048, month: 1})">Goto JAN 2048</button>
`,
    dateStruct: `
const date: NgfDateStruct = { year: 1789, month: 7, day: 14 }; // July, 14 1789
`,
date: `
const date: NgfDate = new NgfDate(1789, 7, 14);                // July, 14 1789

date.before({ year: 1789, month: 7, day: 14 });                // compare to a structure
date.equals(NgfDate.from({ year: 1789, month: 7, day: 14 }));  // or to another date object
`,
    nativeAdapter: `
// native adapter is bundled with library
providers: [{provide: NgfDateAdapter, useClass: NgfDateNativeAdapter}]

// or another native adapter that works with UTC dates
providers: [{provide: NgfDateAdapter, useClass: NgfDateNativeUTCAdapter}]
`,
    adapter: `
@Injectable()
export abstract class NgfDateAdapter<D> {
  abstract fromModel(value: D): NgfDateStruct; // from your model -> internal model
  abstract toModel(date: NgfDateStruct): D; // from internal model -> your mode
}

// create your own if necessary
providers: [{provide: NgfDateAdapter, useClass: YourOwnDateAdapter}]
`,
    formatter: `
@Injectable()
export abstract class NgfDateParserFormatter {
  abstract parse(value: string): NgfDateStruct; // from input -> internal model
  abstract format(date: NgfDateStruct): string; // from internal model -> string
}

// create your own if necessary
providers: [{provide: NgfDateParserFormatter, useClass: YourOwnParserFormatter}]
`,
    dayTemplate: `
<ng-template #t let-date>
	{{ date.day }}
</ng-template>

<ngfDatepicker [dayTemplate]=“t”/>
`,
    todayHTML: `
<div class="ngb-dp-day ngb-dp-today">
  <!-- day cell content omitted -->
</div>
`,
    todayTemplate: `
<ng-template #t let-today="today">
  <span *ngIf="today">...</span>
</ng-template>

<ngfDatepicker [dayTemplate]=“t”/>
`,
    footerTemplate: `
<ng-template #t>
  <button (click)="model = today">Today</button>
</ng-template>

<ngfDatepicker [footerTemplate]=“t”/>
`,
  disablingTS: `
// disable the 13th of each month
const isDisabled = (date: NgfDate, current: {month: number}) => date.day === 13;
`,
  disablingHTML: `
<ngf-datepicker [minDate]="{year: 2010, month: 1, day: 1}"
                [maxDate]="{year: 2048, month: 12, day: 31}"
                [markDisabled]="isDisabled">
</ngf-datepicker>
`,
  i18n: `
@Injectable()
export abstract class NgfDatepickerI18n {
  abstract getWeekdayShortName(weekday: number): string;
  abstract getMonthShortName(month: number): string;
  abstract getMonthFullName(month: number): string;
  abstract getDayAriaLabel(date: NgfDateStruct): string;
}

// provide your own if necessary
providers: [{provide: NgfDatepickerI18n, useClass: YourOwnDatepickerI18n}]
`
  };

  sections: NgbdOverview = {};

  constructor(demoList: NgfdDemoList) {
    this.sections = demoList.getOverviewSections('datepicker');
  }
}
