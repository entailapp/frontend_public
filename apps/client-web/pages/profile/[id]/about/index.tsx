import {
  AppBar,
  AppPage,
  EventCard,
  ProfileAboutInformation,
  ProfileHeader,
  ProfileSuggestionCard,
} from 'components';
import {Button, Paper, Typography} from '@material-ui/core';

import {LinkIcon} from '@iconicicons/react';
import React from 'react';
import styles from './index.module.scss';

/** A page which shows the user's profile and its relevant information. */
export function ProfileAbout() {
  // const [accounts] = React.useContext(AccountsContext);

  return (
    <div className={styles.profileGrid}>
      <div className="col-span-full row-start-1 w-full">
        <AppBar />
        <ProfileHeader />
      </div>

      <div className="col-start-2 row-start-1 row-end-3 z-10 mt-64 space-y-4">
        <ProfileAboutInformation
          name="Friendly Enny"
          handle="Enny"
          avatarSrc="https://picsum.photos/500"
          verified={true}
          pronouns={['they / them']}
          bio="It's me, Enny! Can I have some Gigabytes? 👾"
        />
        <Paper className="text-center">
          <Button endIcon={<LinkIcon />}>View Booth</Button>
        </Paper>

        <div>
          <Typography>Cons in attendance</Typography>
          <Typography variant="body2" className="text-entail-text-secondary">
            Find out where to meet Friendly Enny in the fur.
          </Typography>
        </div>
        <EventCard
          className="h-48"
          title="Anthrocon"
          location="King of Prussia, PA"
          subheading="Next event: August 12-15 2021"
          image="https://picsum.photos/id/1024/500"
        />
        <EventCard
          className="h-48"
          title="Furrydephia"
          location="King of Prussia, PA"
          subheading="Next event: August 12-15 2021"
          image="https://picsum.photos/id/512/500"
        />
      </div>

      <div className="col-start-4 row-start-2 row-end-3 space-y-4">
        <div>
          <Typography>Users with similar profile tags</Typography>
          <Typography variant="body2" className="text-entail-text-secondary">
            Expand your community and curate your feed
          </Typography>
        </div>
        <ProfileSuggestionCard
          username="PJ"
          profileHandle="DespaBleat0"
          mutualCount={111}
          avatar="https://picsum.photos/id/513/500"
          image="https://picsum.photos/id/514/500"
        />
        <ProfileSuggestionCard
          username="Lloyd Boyo"
          profileHandle="Lloyd_Deer"
          mutualCount={111}
          avatar="https://picsum.photos/id/515/500"
          image="https://picsum.photos/id/516/500"
        />
        <ProfileSuggestionCard
          username="Techie"
          profileHandle="Techiehyena"
          mutualCount={111}
          avatar="https://picsum.photos/id/517/500"
          image="https://picsum.photos/id/518/500"
        />
      </div>

      <AppPage className="w-full col-start-3 col-end-4 row-start-2">
        <Paper className="p-4 h-banner">
          Integer eget ligula dictum, pellentesque risus eget, pellentesque mi.
          Proin sodales suscipit nunc quis convallis. Etiam pellentesque
          condimentum diam vel porta. Nam fermentum risus vitae molestie
          lobortis. Mauris aliquam euismod magna, non tempus metus consectetur
          ac. Fusce quis consectetur dolor, non lacinia sapien. Suspendisse sit
          amet orci non tortor imperdiet fermentum. Duis condimentum ultricies
          dolor. Donec ipsum mauris, viverra sit amet lacus nec, varius porta
          ipsum. Cras libero purus, porta ac augue sed, condimentum rhoncus
          lorem. Nunc eget felis risus.
        </Paper>
      </AppPage>
    </div>
  );
}

export default ProfileAbout;
