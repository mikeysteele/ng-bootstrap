import {NgbCalloutConfig} from './callout-config';

describe('ngb-callout-config', () => {
  it('should have sensible default values', () => {
    const config = new NgbCalloutConfig();

    expect(config.closeable).toBe(true);
    expect(config.type).toBe('warning');
  });
});
