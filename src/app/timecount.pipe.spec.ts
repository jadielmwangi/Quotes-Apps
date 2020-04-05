import {TimeCountPipe } from './timecount.pipe';

describe('TimecountPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeCountPipe();
    expect(pipe).toBeTruthy();
  });
});
