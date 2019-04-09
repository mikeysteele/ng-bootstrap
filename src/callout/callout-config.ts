import {Injectable} from '@angular/core';

/**
 * A configuration service for the [NgbCallout](#/components/callout/api#NgbCallout) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all callouts used in the application.
 */
@Injectable({providedIn: 'root'})
export class NgbCalloutConfig {
  closeable = true;
  type = '';
}
