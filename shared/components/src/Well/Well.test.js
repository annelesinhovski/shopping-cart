import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Well } from './Well';

describe('Well', () => {
  test('Renders component com texto', () => {
    render(<Well>Teste</Well>);

    expect(screen.getByText('Teste'));
  });
});
