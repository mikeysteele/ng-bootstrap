import {padNumber, toInteger, isNumber} from '../util/util';
import {NgfDateStruct} from './ngb-date-struct';
import {Injectable} from '@angular/core';

export function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY() {
  return new NgfDateISOParserFormatter();
}

/**
 * An abstract service for parsing and formatting dates for the
 * [`NgfInputDatepicker`](#/components/datepicker/api#NgfInputDatepicker) directive.
 * Converts between the internal `NgfDateStruct` model presentation and a `string` that is displayed in the
 * input element.
 *
 * When user types something in the input this service attempts to parse it into a `NgfDateStruct` object.
 * And vice versa, when users selects a date in the calendar with the mouse, it must be displayed as a `string`
 * in the input.
 *
 * Default implementation uses the ISO 8601 format, but you can provide another implementation via DI
 * to use an alternative string format or a custom parsing logic.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 */
@Injectable({providedIn: 'root', useFactory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY})
export abstract class NgfDateParserFormatter {
  /**
   * Parses the given `string` to an `NgfDateStruct`.
   *
   * Implementations should try their best to provide a result, even
   * partial. They must return `null` if the value can't be parsed.
   */
  abstract parse(value: string): NgfDateStruct;

  /**
   * Formats the given `NgfDateStruct` to a `string`.
   *
   * Implementations should return an empty string if the given date is `null`,
   * and try their best to provide a partial result if the given date is incomplete or invalid.
   */
  abstract format(date: NgfDateStruct): string;
}

@Injectable()
export class NgfDateISOParserFormatter extends NgfDateParserFormatter {
  parse(value: string): NgfDateStruct {
    if (value) {
      const dateParts = value.trim().split('-');
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return {year: toInteger(dateParts[0]), month: null, day: null};
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return {year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null};
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return {year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: toInteger(dateParts[2])};
      }
    }
    return null;
  }

  format(date: NgfDateStruct): string {
    return date ?
        `${date.year}-${isNumber(date.month) ? padNumber(date.month) : ''}-${isNumber(date.day) ? padNumber(date.day) : ''}` :
        '';
  }
}
