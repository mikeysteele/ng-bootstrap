import {Component} from '@angular/core';
import {NgfTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-tabs-preventchange',
  templateUrl: './tabs-preventchange.html'
})
export class NgbdTabsPreventchange {
    public beforeChange($event: NgfTabChangeEvent) {
      if ($event.nextId === 'tab-preventchange2') {
        $event.preventDefault();
      }
    }
}
