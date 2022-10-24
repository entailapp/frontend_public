import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';

import PronounChip from '../pronoun-chip/pronoun-chip';
import React from 'react';

export interface ProfileAboutInformationProps {
  name?: string;
  handle: string;
  avatarSrc?: string;
  verified?: boolean;
  pronouns?: string[];
  bio?: string;
}

/** The component shown on the user profile's about page. */
export function ProfileAboutInformation(props: ProfileAboutInformationProps) {
  const {name, handle, avatarSrc, verified, pronouns = [], bio} = props;

  return (
    <Card className="w-64 rounded-xl">
      <CardMedia className="h-64" image={avatarSrc} />
      <CardContent>
        <div className="flex items-center">
          <Typography className="font-bold text-2xl" component="div">
            {name}
          </Typography>
          {verified && (
            <svg
              className="ml-1"
              width="17"
              height="17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.078 6.465L7.15 12.079 4 8.969l.509-.502 2.603 2.57L11.534 6l.544.465z"
                fill="#EFF1F3"
              />
              <path
                d="M16.5 8.5a8 8 0 11-16 0 8 8 0 0116 0z"
                stroke="#D5A725"
              />
            </svg>
          )}
        </div>
        <div className="flex items-center">
          <Typography className="text-entail-yellow-text" component="div">
            @{handle}
          </Typography>
          {pronouns.map(pronoun => (
            <PronounChip className="ml-1" key={pronoun} label={pronoun} />
          ))}
        </div>
        <Typography className="mt-5" component="p">
          {bio}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProfileAboutInformation;
