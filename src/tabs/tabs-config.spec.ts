import {NgfTabsConfig} from './tabs-config';

describe('ngf-tabs-config', () => {
  it('should have sensible default values', () => {
    const config = new NgfTabsConfig();

    expect(config.type).toBe('tabs');
    expect(config.justify).toBe('start');
  });
});
