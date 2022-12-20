import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Dropdown from './Dropdown';

describe('Dropdown component', () => {
  it('Check dropdown state', async () => {
    const list = [{ id: 1, label: 'Test', active: true }];
    render(<Dropdown title="Test" list={list} />);
    const dropdownBtn = screen.getByRole('button');
    fireEvent.click(dropdownBtn);
    expect(screen.getByTestId('list')).toHaveStyle('visibility: visible');
    fireEvent.click(dropdownBtn);
    expect(screen.getByTestId('list')).toHaveStyle('visibility: hidden');
  });
});
