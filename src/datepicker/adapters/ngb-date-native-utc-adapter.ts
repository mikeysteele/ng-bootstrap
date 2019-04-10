import {Injectable} from '@angular/core';
import {NgfDateStruct} from '../ngb-date-struct';
import {NgfDateNativeAdapter} from './ngb-date-native-adapter';

/**
 * Same as [`NgfDateNativeAdapter`](#/components/datepicker/api#NgfDateNativeAdapter), but with UTC dates.
 *
 * @since 3.2.0
 */
@Injectable()
export class NgfDateNativeUTCAdapter extends NgfDateNativeAdapter {
  protected _fromNativeDate(date: Date): NgfDateStruct {
    return {year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate()};
  }

  protected _toNativeDate(date: NgfDateStruct): Date {
    const jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day));
    // avoid 30 -> 1930 conversion
    jsDate.setUTCFullYear(date.year);
    return jsDate;
  }
}
