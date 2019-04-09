import {NgfProgressbarConfig} from './progressbar-config';

describe('ngf-progressbar-config', () => {
  it('should have sensible default values', () => {
    const config = new NgfProgressbarConfig();

    expect(config.max).toBe(100);
    expect(config.striped).toBe(false);
    expect(config.animated).toBe(false);
    expect(config.type).toBeUndefined();
    expect(config.showValue).toBe(false);
  });
});
