import {PronounChip} from './pronoun-chip';
import React from 'react';
import {render} from '@testing-library/react';

describe('PronounChip', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<PronounChip />);
    expect(baseElement).toBeTruthy();
  });
});
