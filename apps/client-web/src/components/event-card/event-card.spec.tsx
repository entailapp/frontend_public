import {EventCard} from './event-card';
import React from 'react';
import {render} from '@testing-library/react';

describe('EventCard', () => {
  it('should render successfully', () => {
    const {baseElement} = render(
      <EventCard
        title="Furrydephia"
        location="King of Prussia, PA"
        subheading="Next event: August 12-15 2021"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
