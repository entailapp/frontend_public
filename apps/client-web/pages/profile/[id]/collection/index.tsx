import {AppBar, FolderCard, ProfileHeader} from 'components';
import {
  Avatar,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from '@material-ui/core';

import React from 'react';
import styles from './index.module.scss';

interface InternalImage {
  src: string;
  width: number;
  height: number;
}

/**
 * A page which shows the user's media collections.
 */
export function ProfileCollections() {
  // const [accounts] = React.useContext(AccountsContext);

  const folders: InternalImage[] = [
    {
      src: 'https://picsum.photos/1661/1225',
      width: 1661,
      height: 1225,
    },
    {
      src: 'https://picsum.photos/1719/862',
      width: 1719,
      height: 862,
    },
    {
      src: 'https://picsum.photos/1239/1400',
      width: 1239,
      height: 1400,
    },
    {
      src: 'https://picsum.photos/1758/1073',
      width: 1758,
      height: 1073,
    },
    {
      src: 'https://picsum.photos/1501/1425',
      width: 1501,
      height: 1425,
    },
    {
      src: 'https://picsum.photos/1398/1451',
      width: 1398,
      height: 1451,
    },
    {
      src: 'https://picsum.photos/924/1404',
      width: 924,
      height: 1404,
    },
    {
      src: 'https://picsum.photos/1019/1004',
      width: 1019,
      height: 1004,
    },
    {
      src: 'https://picsum.photos/1514/1129',
      width: 1514,
      height: 1129,
    },
    {
      src: 'https://picsum.photos/1006/1709',
      width: 1006,
      height: 1709,
    },
    {
      src: 'https://picsum.photos/1530/1688',
      width: 1530,
      height: 1688,
    },
  ];

  // using the same images as the folders for simplicity
  const items: InternalImage[] = folders;

  return (
    <div className={styles.profileGrid}>
      <div className="row-start-1 col-span-full w-full">
        <AppBar />
        <ProfileHeader />
      </div>

      <div className="row-start-1 col-start-2 relative">
        <Avatar className="absolute bottom-4 w-36 h-36" variant="rounded" />
      </div>

      <Typography className="row-start-2 col-start-2 py-8" variant="h3">
        Folders
      </Typography>

      <div className="row-start-3 col-span-full py-2 overflow-x-auto">
        <Grid container spacing={2} wrap="nowrap">
          {folders.map(item => {
            const {src, width, height} = item;

            return (
              <Grid item key={src} className="first:pl-24 last:pr-24">
                <FolderCard
                  className="h-48"
                  image={src}
                  title="gryphons"
                  itemCount={10}
                  style={{aspectRatio: `${width} / ${height}`}}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>

      <div className="row-start-4 col-start-2">
        <div className="flex justify-center py-8 space-x-16">
          <Typography variant="h3">Featured</Typography>
          <Typography variant="h3">All</Typography>
          <Typography variant="h3">Unpublished</Typography>
        </div>

        <ImageList gap={20}>
          {items.map(item => (
            <ImageListItem key={item.src} style={{width: 'auto'}}>
              <img className="h-full rounded-lg" src={item.src} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

export default ProfileCollections;
