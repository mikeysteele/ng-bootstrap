import {Injectable} from '@angular/core';
import {NgfTimeStruct} from './ngf-time-struct';
import {isInteger} from '../util/util';

export function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
  return new NgfTimeStructAdapter();
}

/**
 * An abstract service that does the conversion between the internal timepicker `NgfTimeStruct` model and
 * any provided user time model `T`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding timepicker to a form control,
 * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
 *
 * The default timepicker implementation assumes we use `NgfTimeStruct` as a user model.
 *
 * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
 *
 * @since 2.2.0
 */
@Injectable({providedIn: 'root', useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY})
export abstract class NgfTimeAdapter<T> {
  /**
   * Converts a user-model time of type `T` to an `NgfTimeStruct` for internal use.
   */
  abstract fromModel(value: T): NgfTimeStruct;

  /**
   * Converts an internal `NgfTimeStruct` time to a user-model time of type `T`.
   */
  abstract toModel(time: NgfTimeStruct): T;
}

@Injectable()
export class NgfTimeStructAdapter extends NgfTimeAdapter<NgfTimeStruct> {
  /**
   * Converts a NgfTimeStruct value into NgfTimeStruct value
   */
  fromModel(time: NgfTimeStruct): NgfTimeStruct {
    return (time && isInteger(time.hour) && isInteger(time.minute)) ?
        {hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null} :
        null;
  }

  /**
   * Converts a NgfTimeStruct value into NgfTimeStruct value
   */
  toModel(time: NgfTimeStruct): NgfTimeStruct {
    return (time && isInteger(time.hour) && isInteger(time.minute)) ?
        {hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null} :
        null;
  }
}
