import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('App', () => {
  it('should work as expected', () => {
    render(<Search placeholder="test" />);
    const input = screen.getByPlaceholderText('test');
    expect(input).toBeInTheDocument();
  });
});
