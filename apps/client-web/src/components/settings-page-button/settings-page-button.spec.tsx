import {SettingsPageButton} from './settings-page-button';
import React from 'react';
import {render} from '@testing-library/react';

describe('SettingsPageButton', () => {
  it('should render successfully', () => {
    const {baseElement} = render(
      <SettingsPageButton title="Button" href="#" />
    );
    expect(baseElement).toBeTruthy();
  });
});
