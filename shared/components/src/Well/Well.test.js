import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Well } from './Well';

describe('Well', () => {
  test('Renders component com texto', () => {
    render(<Well>Teste</Well>);

    expect(screen.getByText('Teste'));
  });

  test('Renders component align center', () => {
    render(<Well align="center">Teste</Well>);

    const well = screen.getByText('Teste');

    expect(well).toHaveStyle('align-items: center');
  });
});
