import {Injectable} from '@angular/core';

/**
 * A configuration service for the [NgfAccordion](#/components/accordion/api#NgfAccordion) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all accordions used in the application.
 */
@Injectable({providedIn: 'root'})
export class NgfAccordionConfig {
  multiExpand = true;
  allowAllClosed = false;

  type: string;
}
