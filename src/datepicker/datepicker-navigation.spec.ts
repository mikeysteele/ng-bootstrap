import {TestBed, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {createGenericTestComponent} from '../test/common';
import {getMonthSelect, getYearSelect, getNavigationLinks} from '../test/datepicker/common';

import {Component} from '@angular/core';

import {NgfDatepickerModule} from './datepicker.module';
import {NavigationEvent} from './datepicker-view-model';
import {NgfDatepickerNavigation} from './datepicker-navigation';
import {NgfDate} from './ngb-date';
import {NgfDatepickerNavigationSelect} from './datepicker-navigation-select';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

function changeSelect(element: HTMLSelectElement, value: string) {
  element.value = value;
  const evt = document.createEvent('HTMLEvents');
  evt.initEvent('change', true, true);
  element.dispatchEvent(evt);
}

describe('ngf-datepicker-navigation', () => {

  beforeEach(() => {
    TestBed.overrideModule(
        NgfDatepickerModule, {set: {exports: [NgfDatepickerNavigation, NgfDatepickerNavigationSelect]}});
    TestBed.configureTestingModule({declarations: [TestComponent], imports: [NgfDatepickerModule]});
  });

  it('should toggle navigation select component', () => {
    const fixture = createTestComponent(`<ngf-datepicker-navigation [showSelect]="showSelect" [date]="date"
          [selectBoxes]="selectBoxes"></ngf-datepicker-navigation>`);

    expect(fixture.debugElement.query(By.directive(NgfDatepickerNavigationSelect))).not.toBeNull();
    expect(getMonthSelect(fixture.nativeElement).value).toBe('8');
    expect(getYearSelect(fixture.nativeElement).value).toBe('2016');

    fixture.componentInstance.showSelect = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.directive(NgfDatepickerNavigationSelect))).toBeNull();
  });

  it('should send date selection event', () => {
    const fixture = createTestComponent(`<ngf-datepicker-navigation [showSelect]="true" [date]="date"
          [selectBoxes]="selectBoxes" (select)="onSelect($event)"></ngf-datepicker-navigation>`);

    const monthSelect = getMonthSelect(fixture.nativeElement);
    const yearSelect = getYearSelect(fixture.nativeElement);
    spyOn(fixture.componentInstance, 'onSelect');

    changeSelect(monthSelect, '2');
    expect(fixture.componentInstance.onSelect).toHaveBeenCalledWith(new NgfDate(2016, 2, 1));

    changeSelect(yearSelect, '2020');
    expect(fixture.componentInstance.onSelect).toHaveBeenCalledWith(new NgfDate(2020, 8, 1));
  });

  it('should make prev navigation button disabled', () => {
    const fixture =
        createTestComponent(`<ngf-datepicker-navigation [prevDisabled]="prevDisabled"></ngf-datepicker-navigation>`);

    const links = getNavigationLinks(fixture.nativeElement);
    expect(links[0].hasAttribute('disabled')).toBeFalsy();

    fixture.componentInstance.prevDisabled = true;
    fixture.detectChanges();
    expect(links[0].hasAttribute('disabled')).toBeTruthy();
  });

  it('should make next navigation button disabled', () => {
    const fixture =
        createTestComponent(`<ngf-datepicker-navigation [nextDisabled]="nextDisabled"></ngf-datepicker-navigation>`);

    const links = getNavigationLinks(fixture.nativeElement);
    expect(links[1].hasAttribute('disabled')).toBeFalsy();

    fixture.componentInstance.nextDisabled = true;
    fixture.detectChanges();
    expect(links[1].hasAttribute('disabled')).toBeTruthy();
  });

  it('should make year and month select boxes disabled', () => {
    const fixture = createTestComponent(`<ngf-datepicker-navigation [disabled]="true"
      [showSelect]="true" [selectBoxes]="selectBoxes"></ngf-datepicker-navigation>`);

    expect(getYearSelect(fixture.nativeElement).disabled).toBeTruthy();
    expect(getMonthSelect(fixture.nativeElement).disabled).toBeTruthy();
  });

  it('should send navigation events', () => {
    const fixture =
        createTestComponent(`<ngf-datepicker-navigation (navigate)="onNavigate($event)"></ngf-datepicker-navigation>`);

    const links = getNavigationLinks(fixture.nativeElement);
    spyOn(fixture.componentInstance, 'onNavigate');

    // prev
    links[0].click();
    expect(fixture.componentInstance.onNavigate).toHaveBeenCalledWith(NavigationEvent.PREV);

    // next
    links[1].click();
    expect(fixture.componentInstance.onNavigate).toHaveBeenCalledWith(NavigationEvent.NEXT);
  });

  it('should have buttons of type button', () => {
    const fixture = createTestComponent(`<ngf-datepicker-navigation></ngf-datepicker-navigation>`);

    const links = getNavigationLinks(fixture.nativeElement);
    links.forEach((link) => { expect(link.getAttribute('type')).toBe('button'); });
  });

  it('should have correct titles and aria attributes on buttons', () => {
    const fixture = createTestComponent(`<ngf-datepicker-navigation></ngf-datepicker-navigation>`);

    const links = getNavigationLinks(fixture.nativeElement);
    expect(links[0].getAttribute('aria-label')).toBe('Previous month');
    expect(links[1].getAttribute('aria-label')).toBe('Next month');
    expect(links[0].getAttribute('title')).toBe('Previous month');
    expect(links[1].getAttribute('title')).toBe('Next month');
  });

});

@Component({selector: 'test-cmp', template: ''})
class TestComponent {
  date = new NgfDate(2016, 8, 1);
  prevDisabled = false;
  nextDisabled = false;
  showSelect = true;
  selectBoxes = {months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], years: [2015, 2016, 2017, 2018, 2019, 2020]};

  onNavigate = () => {};
  onSelect = () => {};
}
