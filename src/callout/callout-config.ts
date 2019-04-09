import {Injectable} from '@angular/core';

/**
 * A configuration service for the [NgfCallout](#/components/callout/api#NgfCallout) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all callouts used in the application.
 */
@Injectable({providedIn: 'root'})
export class NgfCalloutConfig {
  closeable = true;
  type = '';
}
