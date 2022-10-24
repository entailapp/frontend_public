import {ProfileAboutInformation} from './profile-about-information';
import React from 'react';
import {render} from '@testing-library/react';

describe('ProfileAboutInformation', () => {
  it('should render successfully', () => {
    const {baseElement} = render(
      <ProfileAboutInformation
        name="Friendly Enny"
        handle="Enny"
        avatarSrc="https://picsum.photos/500"
        verified={true}
        pronouns={['they / them']}
        bio="It's me, Enny! Can I have some Gigabytes? 👾"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
