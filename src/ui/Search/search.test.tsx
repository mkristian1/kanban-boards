import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Search Component', () => {
  it('Check label props and render', () => {
    render(<Search placeholder="test" />);
    const input = screen.getByPlaceholderText('test');
    expect(input).toBeInTheDocument();
  });
});
