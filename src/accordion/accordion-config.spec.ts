import {NgfAccordionConfig} from './accordion-config';

describe('ngf-accordion-config', () => {
  it('should have sensible default values', () => {
    const config = new NgfAccordionConfig();

    expect(config.multiExpand).toBe(false);
    expect(config.type).toBeUndefined();
  });
});
