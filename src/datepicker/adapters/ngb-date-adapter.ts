import {Injectable} from '@angular/core';
import {NgfDateStruct} from '../ngb-date-struct';
import {isInteger} from '../../util/util';

export function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
  return new NgfDateStructAdapter();
}

/**
 * An abstract service that does the conversion between the internal datepicker `NgfDateStruct` model and
 * any provided user date model `D`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding datepicker to a form control,
 * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
 *
 * The default datepicker implementation assumes we use `NgfDateStruct` as a user model.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details
 * and the [custom adapter demo](#/components/datepicker/examples#adapter) for an example.
 */
@Injectable({providedIn: 'root', useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY})
export abstract class NgfDateAdapter<D> {
  /**
   * Converts a user-model date of type `D` to an `NgfDateStruct` for internal use.
   */
  abstract fromModel(value: D): NgfDateStruct;

  /**
   * Converts an internal `NgfDateStruct` date to a user-model date of type `D`.
   */
  abstract toModel(date: NgfDateStruct): D;
}

@Injectable()
export class NgfDateStructAdapter extends NgfDateAdapter<NgfDateStruct> {
  /**
   * Converts a NgfDateStruct value into NgfDateStruct value
   */
  fromModel(date: NgfDateStruct): NgfDateStruct {
    return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
        {year: date.year, month: date.month, day: date.day} :
        null;
  }

  /**
   * Converts a NgfDateStruct value into NgfDateStruct value
   */
  toModel(date: NgfDateStruct): NgfDateStruct {
    return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
        {year: date.year, month: date.month, day: date.day} :
        null;
  }
}
