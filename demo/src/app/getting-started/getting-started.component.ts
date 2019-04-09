import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-getting-started',
  templateUrl: './getting-started.component.html'
})
export class GettingStarted {

  codeInstall = `npm install --save @ng-bootstrap/ng-bootstrap`;

  codeRoot = `
import {NgfModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  ...
  imports: [NgfModule, ...],
  ...
})
export class YourAppModule {
}`;

  codeOther = `
import {NgfPaginationModule, NgfCalloutModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  ...
  imports: [NgfPaginationModule, NgfCalloutModule, ...],
  ...
})
export class YourAppModule {
}`;

  codeSystem = `
map: {
  '@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
}`;
}
