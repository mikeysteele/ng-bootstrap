import {$, $$, ElementFinder, by} from 'protractor';

export class DropdownPage {
  getDropdown(dropDownSelector = '') { return $(`${dropDownSelector}[ngfDropdown]`); }

  getDropdownMenu(dropDownMenuSelector = 'div') { return $(`${dropDownMenuSelector}[ngbdropdownmenu]`); }

  getDropdownToggle(toggleSelector = 'button') { return $(`${toggleSelector}[ngfDropdownToggle]`); }

  getDropdownMenuParent(dropdownMenu: ElementFinder) { return dropdownMenu.element(by.xpath('..')); }

  getBodyContainers() { return $$('body > div.dropdown,body > div.dropup'); }

  async open(dropdown: ElementFinder) {
    await dropdown.$(`button[ngfDropdownToggle]`).click();
    expect(await this.isOpened(dropdown)).toBeTruthy(`Dropdown should have been opened`);
  }

  async close(dropdown: ElementFinder) {
    await dropdown.$(`button[ngfDropdownToggle]`).click();
    expect(await this.isOpened(dropdown)).toBeFalsy(`Dropdown should have been closed`);
  }

  async isOpened(dropdown: ElementFinder) {
    const classNames = await dropdown.getAttribute('class');
    return classNames.includes('show');
  }
}
