import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {NgfDate} from './ngb-date';
import {NgfDatepickerI18n} from './datepicker-i18n';

@Component({
  selector: '[ngfDatepickerDayView]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./datepicker-day-view.scss'],
  host: {
    'class': 'primary',
    '[class.bg-primary]': 'selected',
    '[class.text-white]': 'selected',
    '[class.text-muted]': 'isMuted()',
    '[class.outside]': 'isMuted()',
    '[class.active]': 'focused'
  },
  template: `{{ i18n.getDayNumerals(date) }}`
})
export class NgfDatepickerDayView {
  @Input() currentMonth: number;
  @Input() date: NgfDate;
  @Input() disabled: boolean;
  @Input() focused: boolean;
  @Input() selected: boolean;

  constructor(public i18n: NgfDatepickerI18n) {}

  isMuted() { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); }
}
