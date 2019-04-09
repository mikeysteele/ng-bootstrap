import {NgfPaginationConfig} from './pagination-config';

describe('ngf-pagination-config', () => {
  it('should have sensible default values', () => {
    const config = new NgfPaginationConfig();

    expect(config.disabled).toBe(false);
    expect(config.boundaryLinks).toBe(false);
    expect(config.directionLinks).toBe(true);
    expect(config.ellipses).toBe(true);
    expect(config.maxSize).toBe(0);
    expect(config.pageSize).toBe(10);
    expect(config.rotate).toBe(false);
    expect(config.size).toBeUndefined();
  });
});
