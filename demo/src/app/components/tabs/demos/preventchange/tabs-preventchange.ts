import {Component} from '@angular/core';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-tabs-preventchange',
  templateUrl: './tabs-preventchange.html'
})
export class NgbdTabsPreventchange {
    public beforeChange($event: NgbTabChangeEvent) {
      if ($event.nextId === 'tab-preventchange2') {
        $event.preventDefault();
      }
    }
}
