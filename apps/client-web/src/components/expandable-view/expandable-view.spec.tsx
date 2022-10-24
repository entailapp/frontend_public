import {ExpandableView} from './expandable-view';
import React from 'react';
import {render} from '@testing-library/react';

describe('ExpandableView', () => {
  it('should render successfully', () => {
    const {baseElement} = render(
      <ExpandableView
        header={open => <h1>Header!</h1>}
        body={open => <p>Body!</p>}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
