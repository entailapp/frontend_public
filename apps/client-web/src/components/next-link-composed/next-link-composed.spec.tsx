import Link from './next-link-composed';
import React from 'react';
import {render} from '@testing-library/react';

describe('Link', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Link href="https://httpbin.org/" />);
    expect(baseElement).toBeTruthy();
  });
});
