import {FolderCard} from './folder-card';
import React from 'react';
import {render} from '@testing-library/react';

describe('FolderCard', () => {
  it('should render successfully', () => {
    const {baseElement} = render(
      <FolderCard title="Folder Name" itemCount={4} />
    );
    expect(baseElement).toBeTruthy();
  });
});
