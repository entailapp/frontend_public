import {FolderChip} from './folder-chip';
import React from 'react';
import {render} from '@testing-library/react';

describe('FolderChip', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<FolderChip />);
    expect(baseElement).toBeTruthy();
  });
});
