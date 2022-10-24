import {AnnouncementCard} from './announcement-card';
import React from 'react';
import {render} from '@testing-library/react';

describe('AnnouncementCard', () => {
  it('should render successfully', () => {
    const {baseElement} = render(
      <AnnouncementCard
        title="HMHF Registrations and Room Bookings Open Soon"
        tags={['convention', 'booking', 'hmhf']}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
