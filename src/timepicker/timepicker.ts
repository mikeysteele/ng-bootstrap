import {
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {isInteger, isNumber, padNumber, toInteger} from '../util/util';
import {NgfTime} from './ngf-time';
import {NgfTimepickerConfig} from './timepicker-config';
import {NgfTimeAdapter} from './ngf-time-adapter';

const NGB_TIMEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgfTimepicker),
  multi: true
};

/**
 * A directive that helps with wth picking hours, minutes and seconds.
 */
@Component({
  selector: 'ngf-timepicker',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./timepicker.scss'],
  template: `
    <fieldset [disabled]="disabled" [class.disabled]="disabled">
      <div class="ngb-tp">
        <div class="ngb-tp-input-container ngb-tp-hour">
          <button *ngIf="spinners" type="button" (click)="changeHour(hourStep)"
            class="clear button" [class.small]="isSmallSize" [class.large]="isLargeSize" [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron"></span>
            <span class="show-for-sr" i18n="@@ngb.timepicker.increment-hours">Increment hours</span>
          </button>
          <input type="text" class="ngb-tp-input" [class.small]="isSmallSize" [class.large]="isLargeSize"
            maxlength="2" placeholder="HH" i18n-placeholder="@@ngb.timepicker.HH"
            [value]="formatHour(model?.hour)" (change)="updateHour($event.target.value)"
            [readonly]="readonlyInputs" [disabled]="disabled" aria-label="Hours" i18n-aria-label="@@ngb.timepicker.hours"
            (keydown.ArrowUp)="changeHour(hourStep)" (keydown.ArrowDown)="changeHour(-hourStep)">
          <button *ngIf="spinners" type="button" (click)="changeHour(-hourStep)"
            class="clear button" [class.small]="isSmallSize" [class.large]="isLargeSize" [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron bottom"></span>
            <span class="show-for-sr" i18n="@@ngb.timepicker.decrement-hours">Decrement hours</span>
          </button>
        </div>
        <div class="ngb-tp-spacer">:</div>
        <div class="ngb-tp-input-container ngb-tp-minute">
          <button *ngIf="spinners" type="button" (click)="changeMinute(minuteStep)"
            class="clear button" [class.small]="isSmallSize" [class.large]="isLargeSize" [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron"></span>
            <span class="show-for-sr" i18n="@@ngb.timepicker.increment-minutes">Increment minutes</span>
          </button>
          <input type="text" class="ngb-tp-input " [class.small]="isSmallSize" [class.large]="isLargeSize"
            maxlength="2" placeholder="MM" i18n-placeholder="@@ngb.timepicker.MM"
            [value]="formatMinSec(model?.minute)" (change)="updateMinute($event.target.value)"
            [readonly]="readonlyInputs" [disabled]="disabled" aria-label="Minutes" i18n-aria-label="@@ngb.timepicker.minutes"
            (keydown.ArrowUp)="changeMinute(minuteStep)" (keydown.ArrowDown)="changeMinute(-minuteStep)">
          <button *ngIf="spinners" type="button" (click)="changeMinute(-minuteStep)"
            class="clear button" [class.small]="isSmallSize" [class.large]="isLargeSize"  [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron bottom"></span>
            <span class="show-for-sr"  i18n="@@ngb.timepicker.decrement-minutes">Decrement minutes</span>
          </button>
        </div>
        <div *ngIf="seconds" class="ngb-tp-spacer">:</div>
        <div *ngIf="seconds" class="ngb-tp-input-container ngb-tp-second">
          <button *ngIf="spinners" type="button" (click)="changeSecond(secondStep)"
            class="clear button" [class.small]="isSmallSize" [class.large]="isLargeSize" [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron"></span>
            <span class="show-for-sr" i18n="@@ngb.timepicker.increment-seconds">Increment seconds</span>
          </button>
          <input type="text" class="ngb-tp-input " [class.small]="isSmallSize" [class.large]="isLargeSize"
            maxlength="2" placeholder="SS" i18n-placeholder="@@ngb.timepicker.SS"
            [value]="formatMinSec(model?.second)" (change)="updateSecond($event.target.value)"
            [readonly]="readonlyInputs" [disabled]="disabled" aria-label="Seconds" i18n-aria-label="@@ngb.timepicker.seconds"
            (keydown.ArrowUp)="changeSecond(secondStep)" (keydown.ArrowDown)="changeSecond(-secondStep)">
          <button *ngIf="spinners" type="button" (click)="changeSecond(-secondStep)"
            class="clear button" [class.small]="isSmallSize" [class.large]="isLargeSize"  [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron bottom"></span>
            <span class="show-for-sr" i18n="@@ngb.timepicker.decrement-seconds">Decrement seconds</span>
          </button>
        </div>
        <div *ngIf="meridian" class="ngb-tp-spacer"></div>
        <div *ngIf="meridian" class="ngb-tp-meridian">
          <button type="button" class="btn hollow primary" [class.small]="isSmallSize" [class.large]="isLargeSize"
            [disabled]="disabled" [class.disabled]="disabled"
                  (click)="toggleMeridian()">
            <ng-container *ngIf="model?.hour >= 12; else am" i18n="@@ngb.timepicker.PM">PM</ng-container>
            <ng-template #am i18n="@@ngb.timepicker.AM">AM</ng-template>
          </button>
        </div>
      </div>
    </fieldset>
  `,
  providers: [NGB_TIMEPICKER_VALUE_ACCESSOR]
})
export class NgfTimepicker implements ControlValueAccessor,
    OnChanges {
  disabled: boolean;
  model: NgfTime;

  private _hourStep: number;
  private _minuteStep: number;
  private _secondStep: number;

  /**
   * Whether to display 12H or 24H mode.
   */
  @Input() meridian: boolean;

  /**
   * If `true`, the spinners above and below inputs are visible.
   */
  @Input() spinners: boolean;

  /**
   * If `true`, it is possible to select seconds.
   */
  @Input() seconds: boolean;

  /**
   * The number of hours to add/subtract when clicking hour spinners.
   */
  @Input()
  set hourStep(step: number) {
    this._hourStep = isInteger(step) ? step : this._config.hourStep;
  }

  get hourStep(): number { return this._hourStep; }

  /**
   * The number of minutes to add/subtract when clicking minute spinners.
   */
  @Input()
  set minuteStep(step: number) {
    this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
  }

  get minuteStep(): number { return this._minuteStep; }

  /**
   * The number of seconds to add/subtract when clicking second spinners.
   */
  @Input()
  set secondStep(step: number) {
    this._secondStep = isInteger(step) ? step : this._config.secondStep;
  }

  get secondStep(): number { return this._secondStep; }

  /**
   * If `true`, the timepicker is readonly and can't be changed.
   */
  @Input() readonlyInputs: boolean;

  /**
   * The size of inputs and buttons.
   */
  @Input() size: 'tiny' | 'small' | 'medium' | 'large';

  constructor(
      private readonly _config: NgfTimepickerConfig, private _ngfTimeAdapter: NgfTimeAdapter<any>,
      private _cd: ChangeDetectorRef) {
    this.meridian = _config.meridian;
    this.spinners = _config.spinners;
    this.seconds = _config.seconds;
    this.hourStep = _config.hourStep;
    this.minuteStep = _config.minuteStep;
    this.secondStep = _config.secondStep;
    this.disabled = _config.disabled;
    this.readonlyInputs = _config.readonlyInputs;
    this.size = _config.size;
  }

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value) {
    const structValue = this._ngfTimeAdapter.fromModel(value);
    this.model = structValue ? new NgfTime(structValue.hour, structValue.minute, structValue.second) : new NgfTime();
    if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
      this.model.second = 0;
    }
    this._cd.markForCheck();
  }

  registerOnChange(fn: (value: any) => any): void { this.onChange = fn; }

  registerOnTouched(fn: () => any): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean) { this.disabled = isDisabled; }

  changeHour(step: number) {
    this.model.changeHour(step);
    this.propagateModelChange();
  }

  changeMinute(step: number) {
    this.model.changeMinute(step);
    this.propagateModelChange();
  }

  changeSecond(step: number) {
    this.model.changeSecond(step);
    this.propagateModelChange();
  }

  updateHour(newVal: string) {
    const isPM = this.model.hour >= 12;
    const enteredHour = toInteger(newVal);
    if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
      this.model.updateHour(enteredHour + 12);
    } else {
      this.model.updateHour(enteredHour);
    }
    this.propagateModelChange();
  }

  updateMinute(newVal: string) {
    this.model.updateMinute(toInteger(newVal));
    this.propagateModelChange();
  }

  updateSecond(newVal: string) {
    this.model.updateSecond(toInteger(newVal));
    this.propagateModelChange();
  }

  toggleMeridian() {
    if (this.meridian) {
      this.changeHour(12);
    }
  }

  formatHour(value: number) {
    if (isNumber(value)) {
      if (this.meridian) {
        return padNumber(value % 12 === 0 ? 12 : value % 12);
      } else {
        return padNumber(value % 24);
      }
    } else {
      return padNumber(NaN);
    }
  }

  formatMinSec(value: number) { return padNumber(value); }

  get isSmallSize(): boolean { return this.size === 'small'; }

  get isLargeSize(): boolean { return this.size === 'large'; }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
      this.model.second = 0;
      this.propagateModelChange(false);
    }
  }

  private propagateModelChange(touched = true) {
    if (touched) {
      this.onTouched();
    }
    if (this.model.isValid(this.seconds)) {
      this.onChange(
          this._ngfTimeAdapter.toModel({hour: this.model.hour, minute: this.model.minute, second: this.model.second}));
    } else {
      this.onChange(this._ngfTimeAdapter.toModel(null));
    }
  }
}
