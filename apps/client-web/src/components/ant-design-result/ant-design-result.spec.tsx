import {AntDesignResult} from './ant-design-result';
import React from 'react';
import {render} from '@testing-library/react';

describe('AntDesignResult', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<AntDesignResult />);
    expect(baseElement).toBeTruthy();
  });
});
