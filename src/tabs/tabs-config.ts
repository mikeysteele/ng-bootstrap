import {Injectable} from '@angular/core';

/**
 * A configuration service for the [`NgfTabs`](#/components/tabs/api#NgfTabs) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tabss used in the application.
 */
@Injectable({providedIn: 'root'})
export class NgfTabsConfig {
  justify: 'start' | 'center' | 'end' | 'fill' | 'justified';
  orientation: 'horizontal' | 'vertical' = 'horizontal';
}
