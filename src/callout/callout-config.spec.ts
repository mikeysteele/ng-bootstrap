import {NgfCalloutConfig} from './callout-config';

describe('ngf-callout-config', () => {
  it('should have sensible default values', () => {
    const config = new NgfCalloutConfig();

    expect(config.closeable).toBe(true);
    expect(config.type).toBe('warning');
  });
});
