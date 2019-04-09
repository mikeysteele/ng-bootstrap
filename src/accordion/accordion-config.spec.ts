import {NgbAccordionConfig} from './accordion-config';

describe('ngb-accordion-config', () => {
  it('should have sensible default values', () => {
    const config = new NgbAccordionConfig();

    expect(config.multiExpand).toBe(false);
    expect(config.type).toBeUndefined();
  });
});
