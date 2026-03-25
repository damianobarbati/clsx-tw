import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import cx from '#root/index.js';

describe('clsxtw utility', () => {
  it('should merge basic strings and resolve tailwind conflicts', () => {
    const result = cx('p-4 p-12 bg-red-500');
    assert.strictEqual(result, 'p-12 bg-red-500');
  });

  it('should handle conditional logic correctly', () => {
    const isVisible = true;
    const isRed = false;
    const result = cx('block', isVisible && 'opacity-100', isRed && 'bg-red-500');
    assert.strictEqual(result, 'block opacity-100');
  });
});
