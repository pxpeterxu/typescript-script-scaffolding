import { exampleFunc } from './example';

describe(exampleFunc, () => {
  it('returns 1', () => {
    expect(exampleFunc()).toBe(1);
  });
});
