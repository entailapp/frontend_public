import {ProfileSuggestionCard} from './profile-suggestion-card';
import React from 'react';
import {render} from '@testing-library/react';

describe('ProfileSuggestionCard', () => {
  it('should render successfully', () => {
    const {baseElement} = render(
      <ProfileSuggestionCard
        username="Lloyd Boyo"
        profileHandle="Lloyd_Deer"
        mutualCount={111}
        avatar="https://picsum.photos/id/515/500"
        image="https://picsum.photos/id/516/500"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
