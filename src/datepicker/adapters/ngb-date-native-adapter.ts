import {Injectable} from '@angular/core';
import {NgfDateAdapter} from './ngb-date-adapter';
import {NgfDateStruct} from '../ngb-date-struct';
import {isInteger} from '../../util/util';

/**
 * [`NgfDateAdapter`](#/components/datepicker/api#NgfDateAdapter) implementation that uses
 * native javascript dates as a user date model.
 */
@Injectable()
export class NgfDateNativeAdapter extends NgfDateAdapter<Date> {
  /**
   * Converts a native `Date` to a `NgfDateStruct`.
   */
  fromModel(date: Date): NgfDateStruct {
    return (date instanceof Date && !isNaN(date.getTime())) ? this._fromNativeDate(date) : null;
  }

  /**
   * Converts a `NgfDateStruct` to a native `Date`.
   */
  toModel(date: NgfDateStruct): Date {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) :
                                                                                          null;
  }

  protected _fromNativeDate(date: Date): NgfDateStruct {
    return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
  }

  protected _toNativeDate(date: NgfDateStruct): Date {
    const jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // avoid 30 -> 1930 conversion
    jsDate.setFullYear(date.year);
    return jsDate;
  }
}
