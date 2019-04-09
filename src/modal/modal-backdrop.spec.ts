import {TestBed} from '@angular/core/testing';

import {NgfModalBackdrop} from './modal-backdrop';

describe('ngf-modal-backdrop', () => {

  beforeEach(() => { TestBed.configureTestingModule({declarations: [NgfModalBackdrop]}); });

  it('should render backdrop with required CSS classes', () => {
    const fixture = TestBed.createComponent(NgfModalBackdrop);

    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveCssClass('modal-backdrop');
  });
});
